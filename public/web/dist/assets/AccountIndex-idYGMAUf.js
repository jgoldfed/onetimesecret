import{d as U,k as O,o as a,c as r,b as e,e as b,u as t,I as v,f as w,t as s,i as u,F as ee,y as te,n as se,r as c,z as D,A as oe,B as ae,C as re,D as ne,j as F,w as A,E as K,G as ie,H as le}from"./main-B2mfUPR_.js";const de={key:0,class:"bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-6 mb-6"},ce={class:"flex items-center justify-between"},ue={class:"text-2xl font-bold text-gray-900 dark:text-white flex items-center"},me=e("a",{href:"/account/billing_portal",class:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brandcomp-500 hover:bg-brandcomp-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandcomp-500 transition-colors duration-150"}," Manage Subscription ",-1),pe={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},ge={class:"space-y-4"},ye=e("h3",{class:"text-lg font-semibold text-gray-700 dark:text-gray-300"},"Customer Information",-1),he={class:"text-sm text-gray-600 dark:text-gray-400 space-y-2"},be={key:0},_e={key:1},xe={key:0,class:"space-y-4"},fe=e("h3",{class:"text-lg font-semibold text-gray-700 dark:text-gray-300"},"Default Payment Method",-1),we={class:"flex items-center text-sm text-gray-600 dark:text-gray-400"},ve={class:"space-y-6"},ke=e("h3",{class:"text-lg font-semibold text-gray-700 dark:text-gray-300"},"Subscriptions",-1),Ce={class:"flex justify-between items-center mb-4"},Pe={class:"text-sm font-medium text-gray-700 dark:text-gray-300"},$e={class:"text-sm text-gray-600 dark:text-gray-400"},Se={key:0},Ae=U({__name:"AccountBillingSection",props:{stripeCustomer:{default:null},stripeSubscriptions:{default:()=>[]}},setup(g){const d=g,p=n=>new Date(n*1e3).toLocaleDateString(),_=O(()=>{var n,y;return(y=(n=d.stripeCustomer)==null?void 0:n.invoice_settings)==null?void 0:y.default_payment_method}),m=O(()=>d.stripeSubscriptions.map(n=>{var y,x,i,C,P,k;return{id:n.id,status:n.status,amount:((x=(y=n.items.data[0])==null?void 0:y.price)==null?void 0:x.unit_amount)??0,quantity:((i=n.items.data[0])==null?void 0:i.quantity)??1,interval:((k=(P=(C=n.items.data[0])==null?void 0:C.price)==null?void 0:P.recurring)==null?void 0:k.interval)??"month",currentPeriodEnd:n.current_period_end}}));return(n,y)=>{var x;return d.stripeSubscriptions.length>0&&d.stripeCustomer?(a(),r("div",de,[e("header",ce,[e("h2",ue,[b(t(v),{icon:"mdi:credit-card-outline",class:"w-6 h-6 mr-2 text-brandcomp-500"}),w(" Subscription ")]),me]),e("section",pe,[e("div",ge,[ye,e("ul",he,[e("li",null,"Customer since: "+s(p(d.stripeCustomer.created)),1),d.stripeCustomer.email?(a(),r("li",be,"Email: "+s(d.stripeCustomer.email),1)):u("",!0),d.stripeCustomer.balance!==0?(a(),r("li",_e," Account balance: $"+s((d.stripeCustomer.balance/100).toFixed(2)),1)):u("",!0)])]),(x=_.value)!=null&&x.card?(a(),r("div",xe,[fe,e("div",we,[b(t(v),{icon:"mdi:credit-card",class:"w-8 h-8 mr-2 text-gray-400"}),w(" "+s(_.value.card.brand)+" ending in "+s(_.value.card.last4),1)])])):u("",!0)]),e("section",ve,[ke,(a(!0),r(ee,null,te(m.value,i=>(a(),r("div",{key:i.id,class:"bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"},[e("div",Ce,[e("span",{class:se(["px-2 py-1 text-xs font-semibold rounded-full",i.status==="active"?"bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100":"bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"])},s(i.status.charAt(0).toUpperCase()+i.status.slice(1)),3),e("span",Pe," $"+s((i.amount*i.quantity/100).toFixed(2))+" / "+s(i.interval),1)]),e("div",$e,[i.quantity>1?(a(),r("p",Se," Quantity: "+s(i.quantity)+" x $"+s((i.amount/100).toFixed(2)),1)):u("",!0),e("p",null,"Next billing date: "+s(p(i.currentPeriodEnd)),1)])]))),128))])])):u("",!0)}}}),De=g=>(oe("data-v-ec424320"),g=g(),ae(),g),Me={key:0,class:"mb-4 p-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 rounded-lg shadow-lg"},Ie={class:"font-mono text-lg text-white"},Ve={class:"bg-black bg-opacity-20 p-3 rounded flex items-center overflow-x-auto relative"},Fe={class:"break-all pr-10"},Ke=De(()=>e("p",{class:"text-white text-sm mt-2 font-semibold"}," 🔐 Keep this token secure! It provides full access to your account. ",-1)),Ue=U({__name:"APIKeyCard",props:{token:{default:""},onCopy:{type:Function,default:()=>{}}},setup(g){const d=g,p=c(!1),_=()=>{navigator.clipboard.writeText(d.token).then(()=>{p.value=!0,setTimeout(()=>{p.value=!1},2e3),d.onCopy()}).catch(m=>{console.error("Failed to copy text: ",m)})};return(m,n)=>m.token?(a(),r("div",Me,[e("div",Ie,[e("div",Ve,[e("span",Fe,s(m.token),1),e("button",{onClick:D(_,["stop"]),type:"button",class:"absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors duration-200"},[b(t(v),{icon:p.value?"heroicons-outline:check":"heroicons-outline:clipboard-copy",class:"w-6 h-6"},null,8,["icon"])])])]),Ke])):u("",!0)}}),Ne=re(Ue,[["__scopeId","data-v-ec424320"]]);function je(){return window.stripe_customer}function qe(){return window.stripe_subscriptions}const ze={class:"max-w-2xl p-4 mx-auto"},Ee=e("h1",{class:"dark:text-white mb-6 text-3xl font-bold"},"Your Account",-1),Be={class:"dark:text-gray-300 mb-4 text-lg"},Le={class:"dark:bg-gray-800 p-6 mb-6 bg-white rounded-lg shadow"},Te=e("h2",{class:"dark:text-white flex items-center mb-4 text-xl font-semibold"},[e("i",{class:"fas fa-exclamation-triangle mr-2 text-red-500"}),e("span",{class:"flex-1"},"API Key")],-1),Ge={class:"pl-3"},He=["value"],Qe={key:0,class:"mb-4 text-red-500"},Ye={key:1,class:"mb-4 text-green-500"},Je={type:"submit",class:"hover:bg-gray-600 flex items-center justify-center w-full px-4 py-2 text-white bg-gray-500 rounded"},Oe=e("i",{class:"fas fa-trash-alt mr-2"},null,-1),Re=e("p",{class:"dark:text-gray-400 mt-2 text-sm text-gray-500"},null,-1),We={class:"dark:bg-gray-800 p-6 mb-6 bg-white rounded-lg shadow"},Xe=e("h2",{class:"dark:text-white flex items-center mb-4 text-xl font-semibold"},[e("i",{class:"fas fa-lock mr-2"}),w(" Update Password ")],-1),Ze={class:"pl-3"},et=["value"],tt=e("div",{class:"hidden"},[e("label",{for:"username"},"Username"),e("input",{type:"text",id:"username",autocomplete:"username"})],-1),st={class:"relative mb-4"},ot=e("label",{for:"currentPassword",id:"currentPasswordLabel",class:"dark:text-gray-300 block text-sm font-medium text-gray-700"},"Current Password",-1),at={class:"relative"},rt=["type"],nt={class:"relative mb-4"},it=e("label",{for:"newPassword",id:"newPasswordLabel",class:"dark:text-gray-300 block text-sm font-medium text-gray-700"},"New Password",-1),lt={class:"relative"},dt=["type"],ct={class:"relative mb-4"},ut=e("label",{for:"confirmPassword",id:"confirmPasswordlabel",class:"dark:text-gray-300 block text-sm font-medium text-gray-700"},"Confirm",-1),mt={class:"relative"},pt=["type"],gt={key:0,class:"mb-4 text-red-500"},yt={key:1,class:"mb-4 text-green-500"},ht={type:"submit",class:"hover:bg-gray-600 flex items-center justify-center w-full px-4 py-2 text-white bg-gray-500 rounded"},bt=e("i",{class:"fas fa-save mr-2"},null,-1),_t={class:"dark:bg-gray-800 p-6 bg-white rounded-lg shadow"},xt=e("h2",{class:"dark:text-white flex items-center mb-4 text-xl font-semibold"},[e("i",{class:"fas fa-exclamation-triangle mr-2 text-red-500"}),e("span",{class:"flex-1"},"Delete Account")],-1),ft={class:"pl-3"},wt=le('<p class="dark:text-gray-300 mb-4">Please be advised:</p><ul class="dark:text-gray-300 mb-4 list-disc list-inside"><li><span class="font-bold">Secrets will remain active until they expire.</span></li><li>Any secrets you wish to remove, <a href="#" class="underline">burn them before continuing</a>.</li><li>Deleting your account is <span class="italic">permanent and non-reversible.</span></li></ul>',2),vt=e("i",{class:"fas fa-trash-alt mr-2"},null,-1),kt={class:"dark:text-gray-400 mt-2 text-sm text-gray-500"},Ct={class:"dark:text-gray-400 mt-6 text-sm text-gray-600"},Pt={key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},$t=["value"],St={class:"dark:bg-gray-800 p-6 bg-white rounded-lg shadow-lg"},At=e("h3",{class:"dark:text-white mb-4 text-xl font-bold text-gray-900"},"Confirm Account Deletion",-1),Dt=e("p",{class:"dark:text-gray-300 mb-4 text-gray-700"},"Are you sure you want to permanently delete your account? This action cannot be undone.",-1),Mt=e("input",{type:"hidden",name:"tabindex",value:"destroy"},null,-1),It={class:"mb-4"},Vt={key:0,class:"mb-4 text-red-500"},Ft={key:1,class:"mb-4 text-green-500"},Kt={class:"flex justify-end space-x-4"},Ut=["disabled"],Nt={key:0,class:"animate-spin w-5 h-5 mr-3 -ml-1 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},jt=e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),qt=e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),zt=[jt,qt],Et={key:1,xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 mr-2",width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},Bt=e("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"},null,-1),Lt=[Bt],Gt=U({__name:"AccountIndex",setup(g){var Y,J;const d=window.custid,p=window.cust,_=window.customer_since,m=c(window.shrimp),n=c(window.apitoken),y=c(je()),x=c(qe()),i=c((J=(Y=p.plan)==null?void 0:Y.options)==null?void 0:J.name),C=c(p.secrets_created),P=c(_),k=c(""),N=c(""),j=c(""),h=ne({current:!1,new:!1,confirm:!1}),M=f=>{m.value=f},$=c(!1),S=c(""),{isSubmitting:I,error:q,success:z,submitForm:E}=F({url:"/api/v1/account/destroy",successMessage:"Account deleted successfully.",onSuccess:()=>{$.value=!1,window.location.href="/"},handleShrimp:M}),R=()=>{$.value=!0},W=()=>{$.value=!1,S.value=""},{isSubmitting:X,error:B,success:L,submitForm:T}=F({url:"/api/v1/account/apikey",successMessage:"Key generated.",onSuccess:async f=>{var o;n.value=((o=f.record)==null?void 0:o.apikey)||""},handleShrimp:M}),{isSubmitting:Z,error:G,success:H,submitForm:Q}=F({url:"/api/v1/account/change-password",successMessage:"Password updated successfully.",handleShrimp:M}),V=f=>{h[f]=!h[f]};return(f,o)=>(a(),r("div",ze,[Ee,e("p",Be,"Account type: "+s(i.value),1),e("div",Le,[Te,e("div",Ge,[e("form",{onSubmit:o[0]||(o[0]=D((...l)=>t(T)&&t(T)(...l),["prevent"]))},[e("input",{type:"hidden",name:"shrimp",value:m.value},null,8,He),b(Ne,{token:n.value},null,8,["token"]),t(B)?(a(),r("div",Qe,s(t(B)),1)):u("",!0),t(L)?(a(),r("div",Ye,s(t(L)),1)):u("",!0),e("button",Je,[Oe,w(" "+s(t(X)?"Generating...":"Generate Key"),1)]),Re],32)])]),b(Ae,{"stripe-customer":y.value,"stripe-subscriptions":x.value},null,8,["stripe-customer","stripe-subscriptions"]),e("div",We,[Xe,e("div",Ze,[e("form",{onSubmit:o[7]||(o[7]=D((...l)=>t(Q)&&t(Q)(...l),["prevent"]))},[e("input",{type:"hidden",name:"shrimp",value:m.value},null,8,et),tt,e("div",st,[ot,e("div",at,[A(e("input",{type:h.current?"text":"password",name:"currentp",id:"currentPassword","onUpdate:modelValue":o[1]||(o[1]=l=>k.value=l),required:"",tabindex:"1",autocomplete:"current-password","aria-label":"Current Password","aria-labelledby":"currentPasswordLabel",class:"dark:border-gray-600 focus:border-brand-500 focus:ring focus:ring-brand-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white block w-full pr-10 mt-1 border-gray-300 rounded-md shadow-sm"},null,8,rt),[[K,k.value]]),e("button",{type:"button",onClick:o[2]||(o[2]=l=>V("current")),class:"absolute inset-y-0 right-0 flex items-center pr-3"},[b(t(v),{icon:h.current?"heroicons-solid:eye":"heroicons-outline:eye-off",class:"dark:text-gray-100 w-5 h-5 text-gray-400","aria-hidden":"true"},null,8,["icon"])])])]),e("div",nt,[it,e("div",lt,[A(e("input",{type:h.new?"text":"password",name:"newp",id:"newPassword","onUpdate:modelValue":o[3]||(o[3]=l=>N.value=l),required:"",tabindex:"2",autocomplete:"new-password","aria-label":"New Password","aria-labelledby":"newPasswordLabel",class:"dark:border-gray-600 focus:border-brand-500 focus:ring focus:ring-brand-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white block w-full pr-10 mt-1 border-gray-300 rounded-md shadow-sm"},null,8,dt),[[K,N.value]]),e("button",{type:"button",onClick:o[4]||(o[4]=l=>V("new")),class:"hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"},[b(t(v),{icon:h.new?"heroicons-solid:eye":"heroicons-outline:eye-off",class:"dark:text-gray-100 w-5 h-5 text-gray-400","aria-hidden":"true"},null,8,["icon"])])])]),e("div",ct,[ut,e("div",mt,[A(e("input",{type:h.confirm?"text":"password",name:"newp2",id:"confirmPassword","onUpdate:modelValue":o[5]||(o[5]=l=>j.value=l),required:"",tabindex:"3",autocomplete:"confirm-password","aria-label":"New Password","aria-labelledby":"confirmPasswordlabel",class:"dark:border-gray-600 focus:border-brand-500 focus:ring focus:ring-brand-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white block w-full pr-10 mt-1 border-gray-300 rounded-md shadow-sm"},null,8,pt),[[K,j.value]]),e("button",{type:"button",onClick:o[6]||(o[6]=l=>V("confirm")),class:"absolute inset-y-0 right-0 flex items-center pr-3"},[b(t(v),{icon:h.confirm?"heroicons-solid:eye":"heroicons-outline:eye-off",class:"dark:text-gray-100 w-5 h-5 text-gray-400","aria-hidden":"true"},null,8,["icon"])])])]),t(G)?(a(),r("div",gt,s(t(G)),1)):u("",!0),t(H)?(a(),r("div",yt,s(t(H)),1)):u("",!0),e("button",ht,[bt,w(" "+s(t(Z)?"Updating...":"Update Password"),1)])],32)])]),e("div",_t,[xt,e("div",ft,[wt,e("button",{onClick:R,class:"hover:bg-red-700 flex items-center justify-center w-full px-4 py-2 font-bold text-white bg-red-600 rounded"},[vt,w(" Permanently Delete Account ")]),e("p",kt,"Deleting "+s(t(d)),1)])]),e("p",Ct," Created "+s(C.value)+" secrets since "+s(P.value)+". ",1),$.value?(a(),r("div",Pt,[e("form",{onSubmit:o[9]||(o[9]=D((...l)=>t(E)&&t(E)(...l),["prevent"])),class:"w-full max-w-md"},[e("input",{type:"hidden",name:"shrimp",value:m.value},null,8,$t),e("div",St,[At,Dt,Mt,e("div",It,[A(e("input",{"onUpdate:modelValue":o[8]||(o[8]=l=>S.value=l),name:"confirmation",type:"password",class:"focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white w-full px-3 py-2 border border-gray-300 rounded-md",autocomplete:"confirmation",placeholder:"Confirm with your password"},null,512),[[ie,S.value]])]),t(q)?(a(),r("p",Vt,s(t(q)),1)):u("",!0),t(z)?(a(),r("p",Ft,s(t(z)),1)):u("",!0),e("div",Kt,[e("button",{onClick:W,type:"button",class:"hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 px-4 py-2 text-gray-800 bg-gray-200 rounded-md"}," Cancel "),e("button",{type:"submit",disabled:!S.value||t(I),class:"hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-red-700 dark:hover:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center px-4 py-2 text-white bg-red-600 rounded-md"},[t(I)?(a(),r("svg",Nt,zt)):(a(),r("svg",Et,Lt)),w(" "+s(t(I)?"Deleting...":"Delete Account"),1)],8,Ut)])])],32)])):u("",!0)]))}});export{Gt as default};