if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>l(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-2fbdcdd1"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_commonjs-dynamic-modules-TDtrdbi3.js",revision:null},{url:"assets/arc-B1MGmHDU.js",revision:null},{url:"assets/array-BKyUJesY.js",revision:null},{url:"assets/blockDiagram-91b80b7a-Cqhpt7UA.js",revision:null},{url:"assets/bug-issue-template-BID_ABWq.js",revision:null},{url:"assets/c4Diagram-b2a90758-CjSqUBqZ.js",revision:null},{url:"assets/channel-lQo1ukRP.js",revision:null},{url:"assets/classDiagram-30eddba6-Rx_7GzR1.js",revision:null},{url:"assets/classDiagram-v2-f2df5561-D4Ogcign.js",revision:null},{url:"assets/clone-D1tcjMyn.js",revision:null},{url:"assets/createText-6b48ae7d-BifHjPKl.js",revision:null},{url:"assets/directory-open-01563666-DWU9wJ6I.js",revision:null},{url:"assets/directory-open-4ed118d0-BNgAhb94.js",revision:null},{url:"assets/edges-d32062c0-COAaIyS_.js",revision:null},{url:"assets/erDiagram-47591fe2-B8N4W7Oz.js",revision:null},{url:"assets/file-open-002ab408-CQ9a1yTP.js",revision:null},{url:"assets/file-open-7c801643-CD3BRLr1.js",revision:null},{url:"assets/file-save-3189631c-x92wctJd.js",revision:null},{url:"assets/file-save-745eba88-D6MGJDcB.js",revision:null},{url:"assets/flowchart-elk-definition-5fe447d6-f4FwEyuB.js",revision:null},{url:"assets/flowDb-4b19a42f-DWaZoPNr.js",revision:null},{url:"assets/flowDiagram-5540d9b9-BcxPqTRC.js",revision:null},{url:"assets/flowDiagram-v2-3b53844e-2jLZ3tA-.js",revision:null},{url:"assets/ganttDiagram-9a3bba1f-IsfS_hJK.js",revision:null},{url:"assets/gitGraphDiagram-96e6b4ee-Btu7yoLt.js",revision:null},{url:"assets/graph-C3owdIXJ.js",revision:null},{url:"assets/image-blob-reduce.esm-xKov1Fz_.js",revision:null},{url:"assets/index-BqX4OMU-.js",revision:null},{url:"assets/index-ChGp7972.js",revision:null},{url:"assets/index-D1jWvZyt.css",revision:null},{url:"assets/index-Dqxe6uxr.js",revision:null},{url:"assets/index-fc10efb0-BCNmAZbi.js",revision:null},{url:"assets/index.esm-5c3RALYl.js",revision:null},{url:"assets/index.esm-CotnT6F3.js",revision:null},{url:"assets/index.esm-CXfcjBDQ.js",revision:null},{url:"assets/index.esm-P3uDcc_w.js",revision:null},{url:"assets/infoDiagram-bcd20f53-DJfDDKjg.js",revision:null},{url:"assets/init-Gi6I4Gst.js",revision:null},{url:"assets/journeyDiagram-4fe6b3dc-BG1ub0cp.js",revision:null},{url:"assets/katex-rPiVaalG.js",revision:null},{url:"assets/layout-M7O5jUd8.js",revision:null},{url:"assets/line-CyLshbsg.js",revision:null},{url:"assets/linear-oceKVmoV.js",revision:null},{url:"assets/mindmap-definition-f354de21-D1gZ78oE.js",revision:null},{url:"assets/ordinal-Cboi1Yqb.js",revision:null},{url:"assets/path-CbwjOpE9.js",revision:null},{url:"assets/pica-7PUwXY1Q.js",revision:null},{url:"assets/pieDiagram-79897490-ByHneyWJ.js",revision:null},{url:"assets/quadrantDiagram-62f64e94-BZa7wcFx.js",revision:null},{url:"assets/random-username.esm-__vdrxyo.js",revision:null},{url:"assets/requirementDiagram-05bf5f74-f4nMxpv5.js",revision:null},{url:"assets/roundRect-0PYZxl1G.js",revision:null},{url:"assets/sankeyDiagram-97764748-DA1-I5fC.js",revision:null},{url:"assets/sequenceDiagram-acc0e65c-CUBTg-cV.js",revision:null},{url:"assets/stateDiagram-0ff1cf1a-Yb-MKvCn.js",revision:null},{url:"assets/stateDiagram-v2-9a9d610d-CsGQYa57.js",revision:null},{url:"assets/styles-3ed67cfa-DpdRrNjQ.js",revision:null},{url:"assets/styles-991ebdfc-C-juaB6q.js",revision:null},{url:"assets/styles-d20c7d72-i0LyZLHf.js",revision:null},{url:"assets/svgDrawCommon-5ccd53ef-k8VUc9lV.js",revision:null},{url:"assets/Tableau10-B-NsZVaP.js",revision:null},{url:"assets/timeline-definition-fea2a41d-BNy8DzuV.js",revision:null},{url:"assets/workbox-window.prod.es5-DFjpnwFp.js",revision:null},{url:"assets/xychartDiagram-ab372869-BLuixdPe.js",revision:null},{url:"fonts/fonts.css",revision:"038060b1921285217d76280f9c209976"},{url:"index.html",revision:"547eab1cfea42ada37de82132602c1fd"},{url:"wingman_icon.png",revision:"c1908bfb18425b54d53cf7da0bb157f4"},{url:"manifest.webmanifest",revision:"b7a2bb8da48b6f172275c991de3312f4"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/\/.+.(ttf|woff2|otf)/,new s.CacheFirst({cacheName:"fonts",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:7776e3})]}),"GET"),s.registerRoute(/fonts.css/,new s.StaleWhileRevalidate({cacheName:"fonts",plugins:[new s.ExpirationPlugin({maxEntries:50})]}),"GET"),s.registerRoute(/locales\/[^/]+.js/,new s.CacheFirst({cacheName:"locales",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET")}));
//# sourceMappingURL=sw.js.map
