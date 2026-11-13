const i={producer_first_name:"Marta",letter_accept_subject:"Welcome to the atelier",letter_accept_body:`Hi {{brand}},

We read your application and we would like to work with you. Your atelier access is ready: create your password with the link below, it stays valid for 14 days.

{{link}}

See you inside.
{{first_name}}`,letter_reject_subject:"About your application",letter_reject_body:`Hi {{brand}},

Thank you for applying. {{reason}}

Come back anytime.
{{first_name}}`},o=/\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g;function c(t,e){return(t??"").replace(o,(n,a)=>{const r=e[a];return r==null?"":String(r)})}function s(t,e){const n=t??{},a=e==="accept"?"letter_accept_subject":"letter_reject_subject",r=e==="accept"?"letter_accept_body":"letter_reject_body";return{subject:n[a]||i[a],body:n[r]||i[r]}}function u(t){var e;return((e=t==null?void 0:t.producer_first_name)==null?void 0:e.trim())||i.producer_first_name}function l(t,e){const n={brand:e.brand,first_name:e.firstName,reason:e.reason??"",link:e.link??"{{link}}"};return{subject:c(t.subject,n),body:c(t.body,n)}}function f(t){return t.status==="approved"?t.activated_at?"activated":"approved":t.status==="rejected"?"rejected":"pending"}function _(t){return Array.isArray(t)?t.map(e=>typeof e=="string"?e:e&&typeof e=="object"?String(e.url??""):"").filter(e=>/^https?:\/\//i.test(e)):[]}function d(t){if(!t.transcript)return[];const e=t.transcript_lang,n=[{key:"said",label:e?`Transcript (${e})`:"Transcript",text:t.transcript,lang:e}];return t.transcript_fr&&e!=="fr"&&n.push({key:"fr",label:"French",text:t.transcript_fr,lang:"fr"}),t.transcript_en&&e!=="en"&&n.push({key:"en",label:"English",text:t.transcript_en,lang:"en"}),n}async function y(t){const e=t==null?void 0:t.context;if(e&&typeof e.json=="function")try{const n=await e.clone().json();if(n&&typeof n.error=="string")return n.error}catch{}return(t==null?void 0:t.message)||"unknown"}export{f as a,_ as b,l as c,y as i,s as l,u as s,d as v};
