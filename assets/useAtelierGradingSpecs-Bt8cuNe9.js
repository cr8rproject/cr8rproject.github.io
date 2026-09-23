import{d as i,r as c,s as d}from"./index--Bvm4jnI.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=i("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]),l=d;let a=null;const n=new Set;async function u(){const{data:r,error:t}=await l.from("atelier_grading_specs").select("*").eq("is_active",!0).order("garment_type, display_order");return t?(console.warn("atelier_grading_specs fetch failed",t),[]):r??[]}function f(){const[r,t]=c.useState(a??[]);return c.useEffect(()=>{const s=e=>t(e);return n.add(s),a?s(a):(a=[],u().then(e=>{a=e,n.forEach(o=>o(e))})),()=>{n.delete(s)}},[]),r}function g(r){const t=f();if(!r)return[];const s=r.toLowerCase();return t.filter(e=>e.garment_type.toLowerCase()===s).sort((e,o)=>e.display_order-o.display_order)}export{_ as F,g as u};
