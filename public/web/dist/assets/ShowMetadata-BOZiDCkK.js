import{d as u,o as r,c as o,b as e,f as m,t as s,g as d,e as a,F as h,L as g,m as w,i as _,h as k}from"./main-CBJljsce.js";import{a as f}from"./useFetchData-B2ITb3da.js";import{u as v}from"./useClipboard-BbpwP2Q6.js";import{_ as x}from"./DashboardTabNav.vue_vue_type_script_setup_true_lang-Cn6XvrkK.js";const $={key:0},M=["href"],C=e("svg",{class:"inline-block w-5 h-5 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"})],-1),O={class:"text-sm text-gray-500 dark:text-gray-400 mb-4"},N=e("hr",{class:"w-1/4 my-4 mx-auto border-gray-200 dark:border-gray-600"},null,-1),B=u({__name:"BurnButtonForm",props:{metadata:{},details:{}},setup(c){return(t,i)=>t.details.is_destroyed?d("",!0):(r(),o("div",$,[e("a",{href:t.metadata.burn_url,class:"block w-full px-4 py-2 mb-4 text-center text-base bg-yellow-400 rounded-md text-gray-800 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"},[C,m(" "+s(t.$t("web.COMMON.burn_this_secret")),1)],8,M),e("p",O," * "+s(t.$t("web.COMMON.burn_this_secret_hint"))+". ",1),N]))}}),W={class:"mb-4"},I={class:"text-base text-gray-600 dark:text-gray-400 mb-2"},F={class:"relative"},S=["value"],A=["title"],L={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:"20",height:"20"},V=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"},null,-1),T=[V],j={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:"20",height:"20"},z=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1),D=[z],H={key:0,class:"mt-2 font-bold text-gray-800 dark:text-gray-200"},Q=u({__name:"SecretLink",props:{metadata:{},details:{}},setup(c){const t=c,{isCopied:i,copyToClipboard:n}=v(),p=()=>{n(t.metadata.share_url)};return(l,b)=>(r(),o("div",W,[e("p",I,s(l.$t("web.private.pretext")),1),e("div",F,[e("input",{id:"secreturi",class:"w-full pr-10 px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",value:l.metadata.share_url,readonly:""},null,8,S),e("button",{onClick:p,title:a(i)?"Copied!":"Copy to clipboard",class:"absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200","aria-label":"Copy to clipboard"},[a(i)?(r(),o("svg",j,D)):(r(),o("svg",L,T))],8,A)]),l.details.has_passphrase?(r(),o("p",H,s(l.$t("web.private.requires_passphrase")),1)):d("",!0)]))}}),E={key:0,class:"mb-4"},K={key:0},q={class:"mb-2 italic text-gray-600 dark:text-gray-400"},R=["value","rows"],U={class:"text-sm text-gray-500 dark:text-gray-400"},Y={key:1},G=["value"],J={key:2},P={key:1,class:"mb-4"},X={class:"mb-2 text-gray-600 dark:text-gray-400"},Z=e("input",{class:"w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",value:"*******************",disabled:""},null,-1),ee=u({__name:"MetadataDisplayCase",props:{metadata:{},details:{}},setup(c){return(t,i)=>t.details.show_secret?(r(),o("div",E,[t.details.can_decrypt?(r(),o("div",K,[e("p",q,s(t.$t("web.COMMON.secret"))+" ("+s(t.metadata.secret_shortkey)+"): ",1),e("textarea",{class:"w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white font-mono text-base leading-[1.2] tracking-wider resize-none",readonly:"",value:t.details.secret_value,rows:t.details.display_lines},null,8,R),e("span",U,"("+s(t.$t("web.private.only_see_once"))+")",1)])):(r(),o("div",Y,[e("input",{id:"displayedsecret",class:"w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",value:t.$t("web.private.this_msg_is_encrypted"),readonly:""},null,8,G)])),t.details.is_truncated?(r(),o("div",J,[e("strong",null,s(t.$t("web.COMMON.warning")),1),m(" "+s(t.$t("web.COMMON.secret_was_truncated")),1)])):d("",!0)])):(r(),o("div",P,[e("p",X,s(t.$t("web.COMMON.secret"))+" ("+s(t.metadata.secret_shortkey)+"): ",1),Z]))}}),te={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},ae=e("h3",{class:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2"},"F.A.Q.",-1),se=g('<h4 class="font-semibold mt-4 mb-2">Why can&#39;t I see my passphrase?</h4><p class="mb-4"> We can&#39;t show it to you because we don&#39;t know what it is. When you create a secret with a passphrase, we immediately hash it with <a href="https://en.wikipedia.org/wiki/Bcrypt" class="text-brand-500 hover:underline">bcrypt</a>. Since we don&#39;t store the passphrase, we have no way to show it to you. That also means when you include a passphrase, we have no way to decrypt your secret. </p><h4 class="font-semibold mt-4 mb-2">Why can&#39;t I see the secret value?</h4><p class="mb-4"> We display the value for you so that you can verify it but we do that once so that if someone gets this private page (in your browser history or if you accidentally send the private link instead of the secret one), they won&#39;t see the secret value. </p>',4),re=g('<h4 class="font-semibold mt-4 mb-2">What happens when I burn a secret?</h4><p class="mb-4"> Burning a secret will delete it before it has been read. If you send someone a secret link and burn the secret before they view it, they will not be able to read it. In fact, it will look to them like the secret never existed at all. </p><h4 class="font-semibold mt-4 mb-2">Why can I only see the secret value once?</h4><p class="mb-4"> We display the value for you so that you can verify it but we do that once so that if someone gets this private page (in your browser history or if you accidentally send the private link instead of the secret one), they won&#39;t see the secret value. </p><h4 class="font-semibold mt-4 mb-2">How long will the secret be available?</h4>',5),oe={class:"mb-4"},ne={key:1,class:"text-sm text-gray-600 dark:text-gray-400"},ie=e("h3",{class:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2"},"F.A.Q.",-1),de=e("h4",{class:"font-semibold mt-4 mb-2"},"What if I forgot to copy the shared link?",-1),le=e("p",{class:"mb-4"},"You need to create a new secret. We can't retrieve it for you.",-1),ce=e("h4",{class:"font-semibold mt-4 mb-2"},"How long will the secret be available?",-1),he={class:"mb-4"},ue=e("h4",{class:"font-semibold mt-4 mb-2"},"What happens when I burn a secret?",-1),ye=e("p",{class:"mb-4"}," Burning a secret will delete it before it has been read. If you send someone a secret link and burn the secret before they view it, they will not be able to read it. In fact, it will look to them like the secret never existed at all. ",-1),_e=u({__name:"MetadataFAQ",props:{metadata:{},details:{}},setup(c){return(t,i)=>t.details.show_secret?(r(),o("div",te,[ae,t.details.has_passphrase?(r(),o(h,{key:0},[se],64)):d("",!0),re,e("p",oe," The secret link will be available for "+s(t.metadata.expiration_stamp)+" or until it's viewed. ",1)])):(r(),o("div",ne,[ie,t.details.show_secret_link?d("",!0):(r(),o(h,{key:0},[de,le],64)),ce,e("p",he," The secret link will be available for "+s(t.metadata.expiration_stamp)+" or until it's viewed. ",1),ue,ye]))}}),pe={key:0},be={key:1},me={key:2},ge={key:1,class:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4"},we={class:"text-gray-600 dark:text-gray-400 mb-4"},ke={class:"text-sm text-gray-500 dark:text-gray-400"},fe={class:"text-sm text-gray-500 dark:text-gray-400"},ve={class:"text-sm text-gray-500 dark:text-gray-400"},xe=e("a",{href:"/",class:"block w-2/3 mx-auto px-4 py-2 mb-4 text-center rounded-md border-2 text-base font-medium bg-gray-200 text-gray-800 border-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-800 hover:bg-gray-100 hover:border-grey-200 dark:hover:bg-gray-600 dark:hover:border-gray-600"},"Create another secret",-1),Be=u({__name:"ShowMetadata",props:{metadataKey:{}},setup(c){const t=c,{record:i,details:n,isLoading:p,error:l,fetchData:b}=f({url:`/api/v2/private/${t.metadataKey}`});return w(b),(y,$e)=>(r(),o("div",null,[_(x),a(p)?(r(),o("div",pe,"Loading...")):a(l)?(r(),o("div",be,"Error: "+s(a(l)),1)):a(i)&&a(n)?(r(),o("div",me,[a(n).show_secret_link?(r(),k(Q,{key:0,metadata:a(i),details:a(n)},null,8,["metadata","details"])):d("",!0),a(n).show_recipients?(r(),o("h3",ge,s(y.$t("web.COMMON.sent_to"))+" "+s(a(i).recipients),1)):d("",!0),_(ee,{metadata:a(i),details:a(n)},null,8,["metadata","details"]),e("p",we,[a(n).is_received?(r(),o(h,{key:0},[e("em",null,s(y.$t("web.COMMON.received"))+" "+s(a(n).received_date)+". ",1),e("span",ke,"("+s(a(n).received_date_utc)+")",1)],64)):a(n).is_burned?(r(),o(h,{key:1},[e("em",null,s(y.$t("web.COMMON.burned"))+" "+s(a(n).burned_date)+". ",1),e("span",fe,"("+s(a(n).burned_date_utc)+")",1)],64)):a(n).is_destroyed?d("",!0):(r(),o(h,{key:2},[e("strong",null,s(y.$t("web.COMMON.expires_in"))+" "+s(a(i).expiration_stamp)+". ",1),e("span",ve,"("+s(a(i).created_date_utc)+")",1)],64))]),_(B,{metadata:a(i),details:a(n)},null,8,["metadata","details"]),xe,_(_e,{metadata:a(i),details:a(n)},null,8,["metadata","details"])])):d("",!0)]))}});export{Be as default};
