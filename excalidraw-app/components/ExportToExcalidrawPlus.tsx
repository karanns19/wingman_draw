import { serializeAsJSON } from "../../packages/excalidraw/data/json";
import { loadFirebaseStorage, saveFilesToFirebase } from "../data/firebase";
import type {
  FileId,
  NonDeletedExcalidrawElement,
} from "../../packages/excalidraw/element/types";
import type {
  AppState,
  BinaryFileData,
  BinaryFiles,
} from "../../packages/excalidraw/types";
import { nanoid } from "nanoid";
import {
  encryptData,
  generateEncryptionKey,
} from "../../packages/excalidraw/data/encryption";
import { isInitializedImageElement } from "../../packages/excalidraw/element/typeChecks";
import { FILE_UPLOAD_MAX_BYTES } from "../app_constants";
import { encodeFilesForUpload } from "../data/FileManager";
import { MIME_TYPES } from "../../packages/excalidraw/constants";

export const exportToExcalidrawPlus = async (
  elements: readonly NonDeletedExcalidrawElement[],
  appState: Partial<AppState>,
  files: BinaryFiles,
  name: string,
) => {
  const firebase = await loadFirebaseStorage();

  const id = `${nanoid(12)}`;

  const encryptionKey = (await generateEncryptionKey())!;
  const encryptedData = await encryptData(
    encryptionKey,
    serializeAsJSON(elements, appState, files, "database"),
  );

  const blob = new Blob(
    [encryptedData.iv, new Uint8Array(encryptedData.encryptedBuffer)],
    {
      type: MIME_TYPES.binary,
    },
  );

  await firebase
    .storage()
    .ref(`/migrations/scenes/${id}`)
    .put(blob, {
      customMetadata: {
        data: JSON.stringify({ version: 2, name }),
        created: Date.now().toString(),
      },
    });

  const filesMap = new Map<FileId, BinaryFileData>();
  for (const element of elements) {
    if (isInitializedImageElement(element) && files[element.fileId]) {
      filesMap.set(element.fileId, files[element.fileId]);
    }
  }

  if (filesMap.size) {
    const filesToUpload = await encodeFilesForUpload({
      files: filesMap,
      encryptionKey,
      maxBytes: FILE_UPLOAD_MAX_BYTES,
    });

    await saveFilesToFirebase({
      prefix: `/migrations/files/scenes/${id}`,
      files: filesToUpload,
    });
  }

  window.open(
    `${
      import.meta.env.VITE_APP_PLUS_APP
    }/import?excalidraw=${id},${encryptionKey}`,
  );
};
