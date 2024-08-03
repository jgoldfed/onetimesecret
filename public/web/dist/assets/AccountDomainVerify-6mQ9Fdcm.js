import{d as _,r as x,o as w,c as d,b as e,t as u,e as b,f as n,g as m,h as l,u as f,I as k,w as $,v as A,n as D,i as C,j as N,k as T}from"./main-4i32alWm.js";const V={class:"relative inline-block"},I=["aria-label"],E={key:0,class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},S=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"},null,-1),M=[S],B={key:1,class:"w-5 h-5 text-green-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},j=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1),L=[j],z={key:0,class:"absolute z-10 px-2 py-1 text-sm text-white bg-gray-900 rounded-md bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2"},H=_({__name:"CopyButton",props:{text:{default:""},interval:{default:2e3}},setup(s){const t=s,o=x(!1),a=x(!1),i=()=>{navigator.clipboard.writeText(t.text).then(()=>{o.value=!0,a.value=!0,setTimeout(()=>{o.value=!1,a.value=!1},t.interval)})};return w(()=>{}),(p,r)=>(n(),d("div",V,[e("button",{onClick:i,onMouseenter:r[0]||(r[0]=c=>a.value=!0),onMouseleave:r[1]||(r[1]=c=>a.value=!1),class:"text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none","aria-label":o.value?"Copied":"Copy to clipboard"},[o.value?(n(),d("svg",B,L)):(n(),d("svg",E,M))],40,I),a.value?(n(),d("div",z,u(o.value?"Copied!":"Copy to clipboard"),1)):b("",!0)]))}}),R={class:"flex bg-white dark:bg-gray-600 rounded-md"},X={class:"w-16 flex-shrink-0 flex items-center justify-end px-3 py-2 bg-gray-100 dark:bg-gray-700 border-r border-gray-200 dark:border-gray-500",ref:"labelContainerRef"},O={class:"flex-grow flex items-center p-3"},q={class:"flex-grow min-w-0 mr-2"},F={class:"text-gray-800 dark:text-gray-200 block truncate"},U={key:0,class:"text-gray-400"},K={class:"flex-shrink-0"},g=_({__name:"DetailField",props:{label:{},value:{},appendix:{}},setup(s){return(t,o)=>(n(),d("div",R,[e("div",X,[e("span",{class:"text-sm font-medium text-gray-500 dark:text-gray-300",ref:"labelRef"},u(t.label)+":",513)],512),e("div",O,[e("div",q,[e("span",F,[m(u(t.value),1),t.appendix?(n(),d("span",U,u(t.appendix),1)):b("",!0)])]),e("div",K,[l(H,{text:t.value},null,8,["text"])])])]))}}),P={class:"max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"},W={class:"space-y-6 mb-8"},G={class:"bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"},J=e("h3",{class:"font-semibold text-lg mb-2 text-gray-800 dark:text-white"},"1. Create a TXT record",-1),Q=e("p",{class:"mb-2 text-gray-600 dark:text-gray-300"},"Add this hostname to your DNS configuration:",-1),Y={class:"space-y-2"},Z={class:"bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"},ee=e("h3",{class:"font-semibold text-lg mb-2 text-gray-800 dark:text-white"},"2. Create the A record",-1),te={class:"space-y-2"},ae=e("li",{class:"bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"},[e("h3",{class:"font-semibold text-lg mb-2 text-gray-800 dark:text-white"},"3. Wait for propagation"),e("p",{class:"text-gray-600 dark:text-gray-300"},"DNS changes can take as little as 60 seconds -- or up to 24 hours -- to take effect.")],-1),oe={class:"mt-5 flex items-start bg-white dark:bg-gray-800 p-4 rounded-md"},se=e("p",{class:"text-sm text-gray-500 dark:text-gray-400"}," It may take a few minutes for your SSL certificate to take effect once you've pointed your DNS A record. ",-1),re=_({__name:"VerifyDomainDetails",props:{domain:{type:Object,required:!0},cluster:{type:Object,required:!0}},setup(s){const t=()=>{console.info("Verifying DNS TXT record...")};return(o,a)=>{var i,p,r;return n(),d("div",P,[e("ol",W,[e("li",G,[J,Q,e("div",Y,[l(g,{label:"Type",value:"TXT"}),l(g,{label:"Host",value:s.domain.txt_validation_host,appendix:`.${s.domain.base_domain}`},null,8,["value","appendix"]),l(g,{label:"Value",value:s.domain.txt_validation_value},null,8,["value"])])]),e("li",Z,[ee,e("div",te,[l(g,{label:"Type",value:"A"}),l(g,{label:"Host",value:(i=s.domain)!=null&&i.trd?s.domain.trd:"@",appendix:`.${(p=s.domain)==null?void 0:p.base_domain}`},null,8,["value","appendix"]),l(g,{label:"Value",value:(r=s.cluster)==null?void 0:r.cluster_ip},null,8,["value"])])]),ae]),e("button",{onClick:t,class:"w-full sm:w-auto px-6 py-3 text-lg font-semibold text-white bg-brand-500 hover:bg-brand-600 rounded-lg transition duration-300 ease-in-out"}," Verify Domain "),e("div",oe,[l(f(k),{icon:"mdi:information-outline",class:"h-5 w-5 text-brandcomp-700 mr-2 mt-0.5 flex-shrink-0","aria-hidden":"true"}),se])])}}}),ne={class:"mb-4 bg-white dark:bg-gray-800 shadow sm:rounded-lg relative"},le={class:"px-4 py-5 sm:p-4"},de={class:"px-6 py-6"},ie={class:"max-w-xl text-base text-gray-600 dark:text-gray-300"},ce={class:"font-bold bg-white dark:bg-gray-800 px-2 text-brand-600 dark:text-brand-400"},ue=["title"],me=["title"],pe=e("div",{class:"mt-4 text-sm"},[e("a",{href:"#",class:"font-medium text-brandcomp-600 hover:text-brandcomp-500 dark:text-brandcomp-400 dark:hover:text-brandcomp-300"})],-1),he=_({__name:"MoreInfoText",props:{displayDomain:{default:"LINKS.EXAMPLE.COM"},clusterIpAddress:{default:"1.2.3.4"},clusterName:{default:"CLUSTERNAME"}},setup(s){const t=x(!1),o=i=>{i.preventDefault(),t.value=!t.value},a=s;return(i,p)=>(n(),d("div",ne,[e("div",le,[e("button",{onClick:o,class:"flex items-center text-base font- text-brandcomp-800 dark:text-gray-100 hover:text-brandcomp-600 dark:hover:text-brandcomp-400 focus:outline-none"},[l(f(k),{icon:t.value?"heroicons:chevron-down":"heroicons:chevron-right",class:"h-5 w-5 mr-2"},null,8,["icon"]),m(" "+u(t.value?"Hide details":"Expand for more info"),1)]),$(e("div",{class:D(["absolute left-4 right-4 mt-2 bg-gray-50 dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out z-10 border border-gray-200 dark:border-gray-600",{"max-h-0":!t.value,"max-h-[500px]":t.value}])},[e("div",de,[e("div",ie,[e("p",null,[m(" In order to connect your domain, you'll need to have a DNS A record that points "),e("span",ce,u(a.displayDomain),1),m(" at "),e("span",{title:a.clusterName??"",class:"bg-white dark:bg-gray-800 px-2"},u(a.clusterIpAddress),9,ue),m(". If you already have an A record for that address, please change it to point at "),e("span",{title:a.clusterName??"",class:"bg-white dark:bg-gray-800 px-2"},u(a.clusterIpAddress),9,me),m(" and remove any other A, AAAA, or CNAME records for that exact address. ")])]),pe])],2),[[A,t.value]])])]))}}),ge={class:"container mx-auto px-4 py-8"},xe=e("h1",{class:"text-3xl font-bold mb-6 text-gray-900 dark:text-white"},"Add your domain",-1),_e={class:"text-lg mb-6 text-gray-600 dark:text-gray-300"},ye={class:"bg-white dark:bg-gray-800 text-brand-600 dark:text-brand-400"},ve={key:1,class:"text-gray-600 dark:text-gray-400"},fe=_({__name:"AccountDomainVerify",setup(s){const t=T(),o=x(null),a=x(null);console.log("VerifyDomain.ts",t.params.domain);const i=async()=>{var r;const p=t.params.domain;try{const c=await fetch(`/api/v1/account/domains/${p}`);if(!c.ok)throw new Error("Failed to fetch domain information");const h=await c.json();o.value=h.record,h.details&&(a.value=(r=h.details)==null?void 0:r.cluster),console.log("data",h)}catch(c){console.error("Error fetching domain:",c)}};return C(()=>{console.log("AccountDomainVerify component mounted"),console.log("Domain parameter:",t.params.domain),i()}),(p,r)=>{var c,h,y,v;return n(),d("main",ge,[xe,e("p",_e,[m(" Before we can activate links for "),e("span",ye,u((c=o.value)==null?void 0:c.display_domain),1),m(", you'll need to complete these steps. ")]),l(he,{displayDomain:(h=o.value)==null?void 0:h.display_domain,clusterIpAddress:(y=a.value)==null?void 0:y.cluster_ip,clusterName:(v=a.value)==null?void 0:v.cluster_name},null,8,["displayDomain","clusterIpAddress","clusterName"]),o.value&&a.value?(n(),N(re,{key:0,domain:o.value,cluster:a.value},null,8,["domain","cluster"])):(n(),d("p",ve,"Loading domain information..."))])}}});export{fe as default};