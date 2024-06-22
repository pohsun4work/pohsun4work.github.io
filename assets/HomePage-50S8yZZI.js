import{d as x,o as c,c as i,a as e,u as h,t as v,h as A,g as p,f as d,F as y,r as k,_ as $,i as L,l as B,m as F,j as P,k as j,q as I,s as S,x as D,y as U,z as H,A as C,p as M,b as N,B as W,R as Y}from"./index-ClVDzDPP.js";import{W as z,_ as X}from"./WhiteBox-D5LG6sus.js";import{I as q}from"./Inquiry-C3AxoH3O.js";import"./subtitleIcon_lg-BIHoQ05f.js";const O="/assets/Packaging-CAu5NAnD.jpg",V="/assets/bigImg-DbOEKq46.jpg",R="/assets/officeSupplies-PX8YmHnv.jpg",Z="/assets/paper-D-dYM2uw.jpg",J="/assets/subtitleIcon-C4vHdTjA.svg",K={class:"row h-16 sm:h-24"},G=["src"],Q=["data-content"],E=x({__name:"SubTitle",props:{text_cn:{default:"輸入標題"},text_eng:{default:"The title"},position:{default:"left"}},setup(a){return(t,n)=>(c(),i("div",K,[e("div",{class:A(["col-12 sm:col-6 grid children:grid-area-[1/1/2/2] items-center",{"sm:mx-auto":t.position==="center","sm:ml-auto":t.position==="right"}])},[e("img",{src:h(J),class:"w-16 sm:w-24 aspect-square select-none"},null,8,G),e("div",{"data-content":t.text_eng,class:"h-50% translate-y-2 flex flex-wrap items-end ml-9 sm:ml-13 text-5 sm:text-6 tracking-3 font-bold before:content-empty before:w-full before:h-2px before:order-last before:bg-black after:content-[attr(data-content)] after:text-3.5 after:sm:text-4.5 after:tracking-0 after:font-light"},v(t.text_cn),9,Q)],2)]))}}),tt={class:"flex justify-center"},et={class:"row flex-justify-around breakPoint"},st={class:"col-12 sm:col-5 pt-30px sm:pt-60px"},ot={class:"text-[18px] tracking-4px font-400"},nt={class:"h-210px cardStyle rd-10px flex"},at={class:"w-40% bg-primary rd-tl-10px rd-bl-10px"},lt={class:"pt-12px color-white tracking-4px text-[15px]"},rt={class:"pb-4"},ct={class:"w-60% bg-#EAEAEA rd-tr-10px rd-br-10px"},it=["src"],pt=x({__name:"Services",setup(a){const t=p([{title:"包裝印刷",content:["紙盒","紙袋","紙箱","各式包裝"],img:O},{title:"紙類印刷",content:["菜單","書籍","DM","貼紙","信封"],img:Z},{title:"事務用品印刷",content:["名片","吊牌","聯單","電腦報表"],img:R},{title:"大圖輸出",content:["海報","帆布","廣告"],img:V}]);return(n,s)=>(c(),i("div",null,[d(E,{text_cn:"服務項目",text_eng:"Service Items",class:"mx-20px pr-35px sm:px-12%"}),e("div",tt,[e("div",et,[(c(!0),i(y,null,k(t.value,o=>(c(),i("div",st,[e("p",ot,v(o.title),1),e("div",nt,[e("div",at,[e("ul",lt,[(c(!0),i(y,null,k(o.content,r=>(c(),i("li",rt,v(r),1))),256))])]),e("div",ct,[e("img",{src:o.img,alt:"title",class:"w-100% h-100% rd-tr-10px rd-br-10px"},null,8,it)])])]))),256))])])]))}}),dt=$(pt,[["__scopeId","data-v-eb28b619"]]),ut={class:"position-relative"},mt={href:"line://ti/p/~0975268459",target:"_blank"},ft=["src"],_t={href:"mailto:10304jacky@gmail.com"},gt=["src"],xt=x({__name:"Connect",setup(a){const t=p(null);let n;const s=()=>{t.value.classList.remove("mystyle2"),t.value.classList.add("mystyle"),clearTimeout(n),n=setTimeout(()=>{t.value.classList.remove("mystyle"),t.value.classList.add("mystyle2")},600)};return document.addEventListener("scroll",s),L(()=>{document.removeEventListener("scroll",s)}),(o,r)=>(c(),i("div",{class:"hidden sm:block h-140px w-70px position-fixed position-top-40% position-right-0 z-9999",ref_key:"ConnectDiv",ref:t},[e("div",ut,[e("a",mt,[e("img",{class:"position-absolute top-0 right-0 w-65px pointer",src:h(B)},null,8,ft)]),e("a",_t,[e("img",{class:"position-absolute top-75px right-0 w-65px pointer",src:h(F)},null,8,gt)])])],512))}}),ht=$(xt,[["__scopeId","data-v-efed3217"]]);function vt(...a){let t,n,s,o;typeof a[2]=="function"?[t,n,s,o]=a:(t=window,[n,s,o]=a);let r,u;o!==void 0&&({lazy:u,...r}=o);let m=null;const l=f=>{u!==void 0?(m!==null&&clearTimeout(m),m=setTimeout(()=>s(f),u*1e3)):s(f)};return t.addEventListener(n,l,r),()=>t.removeEventListener(n,l)}const wt=a=>vt("scroll",()=>a({scrollX:window.scrollX,scrollY:window.scrollY}),{lazy:.02}),yt=a=>{let t=0,n=0,s=a;for(;s!==null&&s.tagName!=="HTML";)t+=s.offsetLeft||0,n+=s.offsetTop||0,s=s.offsetParent;return{x:t,y:n}},bt=x({__name:"SlideFrom",props:{slided:{type:Boolean},from:{},duration:{default:".3s"},delay:{default:"0s"},timeFn:{default:"linear"},behavior:{default:"normal"}},setup(a){P(l=>({"386d8ce8":r.value,"312cf070":u.value,"29a35012":m.value}));const t=a,n=j(),s=p("0"),o=p("0"),r=p(0),u=I(()=>`${s.value}, ${o.value}`),m=I(()=>`${t.duration} ${t.delay} ${t.timeFn} ${t.behavior}`);return n.default&&n.default().forEach(l=>{l.props?!("class"in l.props)||l.props.class===""?l.props={...l.props,class:"sf-main"}:l.props.class+=" sf-main":l.props={class:"sf-main"}}),S(()=>{if(!t.slided){t.from.includes("t")&&(o.value="-100%"),t.from.includes("b")&&(o.value="100%"),t.from.includes("l")&&(s.value="-100%"),t.from.includes("r")&&(s.value="100%"),r.value=0;return}s.value="0",o.value="0",r.value=1}),(l,f)=>D(l.$slots,"default")}}),kt="/assets/featurePeople-BBo1vo0P.png",$t="/assets/feature1-BXphcfT-.png",It="/assets/feature2-UvXAJllg.png",Lt="/assets/feature3-uHfoNWYi.png",T=a=>(M("data-v-ff0eca78"),a=a(),N(),a),St=T(()=>e("span",{class:"text-stroke-3 sm:text-stroke-8 text-stroke-#FFC24B grid-area-[1/1/2/2] sm:translate-x-15%"},"綠采",-1)),Ct=T(()=>e("span",{class:"text-stroke-3 sm:text-stroke-8 text-stroke-#FFC24B grid-area-[2/2/3/3] self-end sm:translate-x--15%"},"印刷",-1)),Et=["src"],Tt={class:"flex flex-col items-center sm:w-50% m-0 sm:not-first:mt--25 sm:even-of-type:ml-auto pt-9 pb-15 px-20% sm:px-10% bg-#EAEAEA even-of-type:bg-primary even-of-type:color-white"},At=["src"],Bt={class:"mt-4 text-5 sm:text-6.75 tracking-2 sm:tracking-3 font-bold"},Ft={class:"text-3.5 sm:text-4 lh-5 text-justify"},Pt=x({__name:"FeaturesIntro",setup(a){const t=p([{title:"提供完整服務",explanation:"我們綠采擁有一條龍服務，從洽談設計到打樣量產，經營者皆會親力親為，而且彩盒、紙袋起訂量最低 300 個起就可以做，在節省你我的預算之時，還能用多年的經驗確保製作過程萬無一失。",image:$t},{title:"直送到家",explanation:"我們綠采在全台各地，包含高山的茶農果農們、外島的商家們，無論是要為你上山還是下海，我們都在所不惜!然而最重要的運費部份，我們擁有自己的陸路運輸，也有長期配合的海運，能為你節省許多不必要的麻煩與支出。",image:It},{title:"多元合作",explanation:"我們綠采合作過的產業及品牌非常多元，小從文創攤販、個人工作室，大至電商賣家、建設公司、購物平台、生技公司，甚至是國際精品品牌，各行各業皆有與我們合作成功的案例。",image:Lt}]),n=p(),s=p(),o=p(),r=p(),u=p([]);S(()=>u.value=Array.from({length:t.value.length}).map(()=>!1));const m=(l,f,_)=>yt(l).y+l.offsetHeight*f-scrollY<=innerHeight*_;return U(()=>{const l=()=>{const g=n.value,b=[s.value,o.value];m(g,.1,.75)?b.forEach(w=>w.classList.add("scanned")):b.forEach(w=>w.classList.remove("scanned"))},f=()=>{const g=r.value,b=[0,.3,.62];u.value=b.map(w=>m(g,w,.95))},_=wt(()=>{l(),f()});L(_)}),(l,f)=>(c(),i("section",null,[e("div",{ref_key:"scanTrigger",ref:n,class:"mb-30 h-[min(30vh,60vw)] sm:h-[min(60vh,30vw)] grid text-nowrap text-center text-[max(10vw,2.5rem)] select-none relative"},[St,e("span",{ref_key:"scanItem1",ref:s,class:"scan grid-area-[1/1/2/2] sm:translate-x-15%"},"綠采",512),Ct,e("span",{ref_key:"scanItem2",ref:o,class:"scan grid-area-[2/2/3/3] self-end sm:translate-x--15%"},"印刷",512),e("img",{src:h(kt),alt:"two people",class:"absolute h-full left-50% right-50% translate-x--50%"},null,8,Et)],512),e("div",{class:"flex flex-col",ref_key:"slideTrigger",ref:r},[(c(!0),i(y,null,k(t.value,(_,g)=>(c(),H(bt,{key:g,slided:u.value[g],from:g%2===0?"l":"r",duration:"0.8s"},{default:C(()=>[e("figure",Tt,[e("img",{src:_.image,alt:"",class:"w-full"},null,8,At),e("figcaption",Bt,v(_.title),1),e("p",Ft,v(_.explanation),1)])]),_:2},1032,["slided","from"]))),128))],512)]))}}),jt=$(Pt,[["__scopeId","data-v-ff0eca78"]]),Dt="data:image/svg+xml,%3csvg%20width='33'%20height='8'%20viewBox='0%200%2033%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M32.3536%204.35356C32.5488%204.15829%2032.5488%203.84171%2032.3536%203.64645L29.1716%200.464469C28.9763%200.269206%2028.6597%200.269206%2028.4645%200.464469C28.2692%200.659731%2028.2692%200.976313%2028.4645%201.17158L31.2929%204L28.4645%206.82843C28.2692%207.02369%2028.2692%207.34027%2028.4645%207.53554C28.6597%207.7308%2028.9763%207.7308%2029.1716%207.53554L32.3536%204.35356ZM-4.37114e-08%204.5L32%204.5L32%203.5L4.37114e-08%203.5L-4.37114e-08%204.5Z'%20fill='black'/%3e%3c/svg%3e",Ut={class:"px-5% sm:px-20% flex flex-col gap-8"},Ht={class:"row spacing-2 spacing-y-10"},Mt=["src","alt"],Nt={class:"mt-4 flex flex-col gap-3 text-3.5 sm:text-4.5"},Wt={class:"color-#1C1C1C"},Yt=["src"],zt=x({__name:"WorkIntro",setup(a){const t=[{product:"精品咖啡豆禮盒",imageUrl:"/work1.png"},{product:"手提紙袋",imageUrl:"/work2.png"},{product:"保健食品膠囊禮盒",imageUrl:"/work3.png"},{product:"浴巾禮盒",imageUrl:"/work4.png"},{product:"茶葉禮盒",imageUrl:"/work1.png"}];return(n,s)=>(c(),i("section",Ut,[d(E,{position:"center",class:"pr-35px sm:mb-8",text_cn:"實例作品",text_eng:"Service Items"}),e("article",Ht,[(c(),i(y,null,k(t,(o,r)=>e("figure",{key:r,class:"col-6 sm:col-4 m-0 flex flex-col"},[e("img",{src:o.imageUrl,alt:o.product,class:"w-full object-contain aspect-3/2 rounded-t-5px boxShadow rounded-5px"},null,8,Mt),e("div",Nt,[e("span",Wt,v(o.product),1)])])),64))]),d(h(Y),{to:"/workIntro",class:"self-end text-3.5 sm:text-4.5 linkreset tracking-1.5 hover:text-primary hoverImg"},{default:C(()=>[e("img",{src:h(Dt)},null,8,Yt),W(" 更多作品")]),_:1})]))}}),Xt=$(zt,[["__scopeId","data-v-8b782ac8"]]),Zt=x({__name:"HomePage",setup(a){return(t,n)=>(c(),i(y,null,[d(ht),d(z),d(X),d(dt,{class:"my-20"}),d(jt,{class:"my-20"}),d(Xt,{class:"my-20"}),d(q,{"show-img":!0})],64))}});export{Zt as default};