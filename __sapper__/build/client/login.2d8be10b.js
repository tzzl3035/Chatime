import{S as a,i as s,s as t,a as o,e as r,t as c,h as e,d as l,c as n,b as i,f as u,g as f,j as p,m as h,k as v,l as d,o as m,p as g,n as E,r as b}from"./client.51e5c3e7.js";function y(a){let s,t,y,I,D,V,j,x,T,k,w,N,P,U,$,O,A,B,F,H,M,R,S,q,z,C,G,J,K,L;return{c(){s=o(),t=r("div"),y=r("h1"),I=c("登录"),D=o(),V=r("form"),j=r("div"),x=r("div"),T=r("div"),k=c("用户名"),w=o(),N=r("input"),P=o(),U=r("div"),$=r("div"),O=r("div"),A=c("密码"),B=o(),F=r("input"),H=o(),M=r("div"),R=r("button"),S=c("登录"),q=o(),z=r("p"),C=c("没有账户?去"),G=r("a"),J=c("注册"),this.h()},l(a){e("svelte-d24bes",document.head).forEach(l),s=n(a),t=i(a,"DIV",{class:!0});var o=u(t);y=i(o,"H1",{class:!0});var r=u(y);I=f(r,"登录"),r.forEach(l),D=n(o),V=i(o,"FORM",{id:!0,style:!0});var c=u(V);j=i(c,"DIV",{class:!0});var p=u(j);x=i(p,"DIV",{class:!0});var h=u(x);T=i(h,"DIV",{class:!0});var v=u(T);k=f(v,"用户名"),v.forEach(l),w=n(h),N=i(h,"INPUT",{class:!0,autocomplete:!0}),h.forEach(l),p.forEach(l),P=n(c),U=i(c,"DIV",{class:!0});var d=u(U);$=i(d,"DIV",{class:!0});var m=u($);O=i(m,"DIV",{class:!0});var g=u(O);A=f(g,"密码"),g.forEach(l),B=n(m),F=i(m,"INPUT",{class:!0,type:!0}),m.forEach(l),d.forEach(l),H=n(c),M=i(c,"DIV",{class:!0});var E=u(M);R=i(E,"BUTTON",{class:!0,type:!0,style:!0});var b=u(R);S=f(b,"登录"),b.forEach(l),E.forEach(l),c.forEach(l),q=n(o),z=i(o,"P",{class:!0,style:!0});var K=u(z);C=f(K,"没有账户?去"),G=i(K,"A",{href:!0});var L=u(G);J=f(L,"注册"),L.forEach(l),K.forEach(l),o.forEach(l),this.h()},h(){document.title="登录",p(y,"class","svelte-1fr6d36"),p(T,"class","input-group-addon"),p(N,"class","form-control"),p(N,"autocomplete","off"),p(x,"class","input-group"),p(j,"class","form-group"),p(O,"class","input-group-addon"),p(F,"class","form-control"),p(F,"type","password"),p($,"class","input-group"),p(U,"class","form-group top svelte-1fr6d36"),p(R,"class","btn btn-primary btn-block"),p(R,"type","button"),h(R,"outline","none"),p(M,"class","form-group top svelte-1fr6d36"),p(V,"id","form"),h(V,"margin-top","15em"),p(G,"href","/logup"),p(z,"class","text-danger text-center"),h(z,"margin-top","20%"),p(t,"class","all container bigger bg-success svelte-1fr6d36")},m(o,r){v(o,s,r),v(o,t,r),d(t,y),d(y,I),d(t,D),d(t,V),d(V,j),d(j,x),d(x,T),d(T,k),d(x,w),d(x,N),m(N,a[0]),d(V,P),d(V,U),d(U,$),d($,O),d(O,A),d($,B),d($,F),m(F,a[1]),d(V,H),d(V,M),d(M,R),d(R,S),d(t,q),d(t,z),d(z,C),d(z,G),d(G,J),K||(L=[g(N,"input",a[3]),g(F,"input",a[4]),g(R,"click",a[2])],K=!0)},p(a,[s]){1&s&&N.value!==a[0]&&m(N,a[0]),2&s&&F.value!==a[1]&&m(F,a[1])},i:E,o:E,d(a){a&&l(s),a&&l(t),K=!1,b(L)}}}function I(a,s,t){let o,r;return[o,r,async function(){if(null==o||null==r||""==o||""==r)alert("用户名或密码不能为空!");else{let a=await fetch(`login.json?name=${o}&pass=${r}`);(await a.json()).yes?location.pathname=`/home/${o}`:alert("用户名或密码错误!")}},function(){o=this.value,t(0,o)},function(){r=this.value,t(1,r)}]}class D extends a{constructor(a){super(),s(this,a,I,y,t,{})}}export{D as default};