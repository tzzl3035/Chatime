import{S as t,i as s,s as e,a,e as n,h as o,d as l,c,b as i,f as r,j as h,m as u,k as f,n as m,t as p,g as d,l as v,o as y,p as g,q as b,u as E,r as I,v as T,w}from"./client.51e5c3e7.js";function $(t,s,e){const a=t.slice();return a[26]=s[e].k,a[27]=s[e].v,a[28]=s[e]._id,a}function D(t,s,e){const a=t.slice();return a[31]=s[e].data,a[32]=s[e].t,a[33]=s[e].f,a[28]=s[e]._id,a}function V(t){let s,e,o,m,T,w,V,k,x,U,N,B,M,P,z,q,H,F,R,_,S,A,C,G,J,K,L,Q,W,X,Y,Z,tt,st,et,at,nt,ot,lt,ct,it,rt,ht,ut,ft,mt,pt,dt,vt=t[0].name+"",yt=t[0].oMsg,gt=[];for(let s=0;s<yt.length;s+=1)gt[s]=j(D(t,yt,s));let bt=t[0].myMemo,Et=[];for(let s=0;s<bt.length;s+=1)Et[s]=O($(t,bt,s));return{c(){s=n("div"),e=n("h3"),o=p("你好 "),m=p(vt),T=a(),w=n("h5"),V=p("Tip:用户设置请点击用户名,离开时点击睡眠按钮,没新消息时试试刷新"),k=a(),x=n("button"),U=p("睡眠"),N=a(),B=n("button"),M=p("刷新"),P=a(),z=n("button"),q=p("删除按钮开关"),H=a(),F=n("button"),R=p("注销"),_=a(),S=n("div"),A=n("div");for(let t=0;t<gt.length;t+=1)gt[t].c();C=a(),G=n("div");for(let t=0;t<Et.length;t+=1)Et[t].c();J=a(),K=n("div"),L=n("div"),Q=p("内容或备忘录具体值"),W=a(),X=n("div"),Y=n("div"),Z=a(),tt=n("form"),st=n("div"),et=n("div"),at=n("div"),nt=p("发给谁(和)或键值"),ot=a(),lt=n("input"),ct=a(),it=n("div"),rt=n("button"),ht=p("发送消息"),ut=a(),ft=n("button"),mt=p("添加备忘录"),this.h()},l(t){s=i(t,"DIV",{class:!0});var a=r(s);e=i(a,"H3",{class:!0});var n=r(e);o=d(n,"你好 "),m=d(n,vt),n.forEach(l),T=c(a),w=i(a,"H5",{class:!0,style:!0});var h=r(w);V=d(h,"Tip:用户设置请点击用户名,离开时点击睡眠按钮,没新消息时试试刷新"),h.forEach(l),k=c(a),x=i(a,"BUTTON",{class:!0,style:!0});var u=r(x);U=d(u,"睡眠"),u.forEach(l),N=c(a),B=i(a,"BUTTON",{class:!0,style:!0});var f=r(B);M=d(f,"刷新"),f.forEach(l),P=c(a),z=i(a,"BUTTON",{class:!0,style:!0});var p=r(z);q=d(p,"删除按钮开关"),p.forEach(l),H=c(a),F=i(a,"BUTTON",{class:!0,style:!0});var v=r(F);R=d(v,"注销"),v.forEach(l),a.forEach(l),_=c(t),S=i(t,"DIV",{class:!0,style:!0});var y=r(S);A=i(y,"DIV",{class:!0,style:!0});var g=r(A);for(let t=0;t<gt.length;t+=1)gt[t].l(g);g.forEach(l),C=c(y),G=i(y,"DIV",{class:!0,style:!0});var b=r(G);for(let t=0;t<Et.length;t+=1)Et[t].l(b);b.forEach(l),y.forEach(l),J=c(t),K=i(t,"DIV",{style:!0,id:!0,class:!0});var E=r(K);L=i(E,"DIV",{class:!0,style:!0});var I=r(L);Q=d(I,"内容或备忘录具体值"),I.forEach(l),W=c(E),X=i(E,"DIV",{class:!0,style:!0});var $=r(X);Y=i($,"DIV",{class:!0,style:!0,contenteditable:!0,id:!0}),r(Y).forEach(l),$.forEach(l),Z=c(E),tt=i(E,"FORM",{id:!0,style:!0});var D=r(tt);st=i(D,"DIV",{class:!0});var j=r(st);et=i(j,"DIV",{class:!0});var O=r(et);at=i(O,"DIV",{class:!0});var pt=r(at);nt=d(pt,"发给谁(和)或键值"),pt.forEach(l),ot=c(O),lt=i(O,"INPUT",{class:!0,type:!0}),O.forEach(l),j.forEach(l),ct=c(D),it=i(D,"DIV",{class:!0});var dt=r(it);rt=i(dt,"BUTTON",{class:!0,type:!0,style:!0});var yt=r(rt);ht=d(yt,"发送消息"),yt.forEach(l),ut=c(dt),ft=i(dt,"BUTTON",{class:!0,type:!0,style:!0});var bt=r(ft);mt=d(bt,"添加备忘录"),bt.forEach(l),dt.forEach(l),D.forEach(l),E.forEach(l),this.h()},h(){h(e,"class","col-sm-2 text-primary"),h(w,"class","col-sm-2 text-danger"),u(w,"line-height","1.3em"),h(x,"class","btn col-sm-1 btn-primary"),u(x,"outline","none"),h(B,"class","btn col-sm-1 col-sm-offset-1"),u(B,"outline","none"),h(z,"class","btn col-sm-2 col-sm-offset-1 btn-danger"),u(z,"outline","none"),h(F,"class","col-sm-1 btn btn-info col-sm-offset-1"),u(F,"outline","none"),h(s,"class","row"),h(A,"class","col-sm-9 btn-success"),u(A,"overflow","auto"),u(A,"height","100%"),u(A,"border-radius","0.3em"),h(G,"class","col-sm-3 btn-warning"),u(G,"overflow","auto"),u(G,"height","100%"),u(G,"border-radius","0.3em"),h(S,"class","row"),u(S,"height","58%"),h(L,"class","text-info text-center"),u(L,"width","100%"),u(L,"height","9%"),u(L,"line-height","1.3em"),u(L,"font-size","1.5em"),h(Y,"class","col-sm-12 bg-info"),u(Y,"overflow","auto"),u(Y,"height","100%"),u(Y,"border-radius","0.3em"),u(Y,"outline","none"),u(Y,"font-size","1.7em"),u(Y,"line-height","1em"),h(Y,"contenteditable",""),h(Y,"id","vInput"),h(X,"class","row"),u(X,"height","60%"),h(at,"class","input-group-addon"),h(lt,"class","form-control"),h(lt,"type","input"),h(et,"class","input-group col-xs-12"),h(st,"class","form-group row"),h(rt,"class","btn btn-success col-xs-7"),h(rt,"type","button"),u(rt,"outline","none"),h(ft,"class","btn btn-warning col-xs-5"),h(ft,"type","button"),u(ft,"outline","none"),h(it,"class","form-group row"),h(tt,"id","form"),u(tt,"margin-top","1em"),u(K,"height","35%"),u(K,"position","relative"),h(K,"id","oUse"),h(K,"class","svelte-1sv4t20")},m(a,n){f(a,s,n),v(s,e),v(e,o),v(e,m),v(s,T),v(s,w),v(w,V),v(s,k),v(s,x),v(x,U),v(s,N),v(s,B),v(B,M),v(s,P),v(s,z),v(z,q),v(s,H),v(s,F),v(F,R),f(a,_,n),f(a,S,n),v(S,A);for(let t=0;t<gt.length;t+=1)gt[t]&&gt[t].m(A,null);v(S,C),v(S,G);for(let t=0;t<Et.length;t+=1)Et[t]&&Et[t].m(G,null);f(a,J,n),f(a,K,n),v(K,L),v(L,Q),v(K,W),v(K,X),v(X,Y),v(K,Z),v(K,tt),v(tt,st),v(st,et),v(et,at),v(at,nt),v(et,ot),v(et,lt),y(lt,t[1]),v(tt,ct),v(tt,it),v(it,rt),v(rt,ht),v(it,ut),v(it,ft),v(ft,mt),pt||(dt=[g(e,"click",t[21]),g(x,"click",t[22]),g(B,"click",t[23]),g(z,"click",t[24]),g(F,"click",t[7]),g(lt,"input",t[25]),g(rt,"click",t[8]),g(ft,"click",t[9])],pt=!0)},p(t,s){if(1&s[0]&&vt!==(vt=t[0].name+"")&&b(m,vt),98369&s[0]){let e;for(yt=t[0].oMsg,e=0;e<yt.length;e+=1){const a=D(t,yt,e);gt[e]?gt[e].p(a,s):(gt[e]=j(a),gt[e].c(),gt[e].m(A,null))}for(;e<gt.length;e+=1)gt[e].d(1);gt.length=yt.length}if(19521&s[0]){let e;for(bt=t[0].myMemo,e=0;e<bt.length;e+=1){const a=$(t,bt,e);Et[e]?Et[e].p(a,s):(Et[e]=O(a),Et[e].c(),Et[e].m(G,null))}for(;e<Et.length;e+=1)Et[e].d(1);Et.length=bt.length}2&s[0]&&y(lt,t[1])},d(t){t&&l(s),t&&l(_),t&&l(S),E(gt,t),E(Et,t),t&&l(J),t&&l(K),pt=!1,I(dt)}}}function k(t){let s,e,o,m,y,E,I,T,w,$,D=t[0].name+"";return{c(){s=n("div"),e=n("h1"),o=p("正在睡眠状态..."),m=a(),y=n("button"),E=p("进入"),I=p(D),T=p("的首页"),this.h()},l(t){s=i(t,"DIV",{class:!0,style:!0});var a=r(s);e=i(a,"H1",{class:!0,style:!0});var n=r(e);o=d(n,"正在睡眠状态..."),n.forEach(l),m=c(a),y=i(a,"BUTTON",{class:!0,style:!0});var h=r(y);E=d(h,"进入"),I=d(h,D),T=d(h,"的首页"),h.forEach(l),a.forEach(l),this.h()},h(){h(e,"class","text-primary lead text-center"),u(e,"line-height","5em"),u(e,"font-size","3.7em"),h(y,"class","btn btn-success btn-block text-center"),u(y,"outline","none"),u(y,"margin-top","23%"),h(s,"class","bg-info"),u(s,"height","97%"),u(s,"border-radius","1em")},m(a,n){f(a,s,n),v(s,e),v(e,o),v(s,m),v(s,y),v(y,E),v(y,I),v(y,T),w||($=g(y,"click",t[20]),w=!0)},p(t,s){1&s[0]&&D!==(D=t[0].name+"")&&b(I,D)},d(t){t&&l(s),w=!1,$()}}}function x(t){let s,e,o,m,b,E,T,w,$,D,V,k,x,U,j,N,O,B,M,P,z,q,H,F,R,_;return{c(){s=n("form"),e=n("div"),o=n("div"),m=n("div"),b=p("旧密码"),E=a(),T=n("input"),w=a(),$=n("div"),D=n("div"),V=n("div"),k=p("新密码"),x=a(),U=n("input"),j=a(),N=n("div"),O=n("button"),B=p("修改密码"),M=a(),P=n("button"),z=p("删除账户"),q=a(),H=n("button"),F=p("退出设置"),this.h()},l(t){s=i(t,"FORM",{id:!0,style:!0});var a=r(s);e=i(a,"DIV",{class:!0});var n=r(e);o=i(n,"DIV",{class:!0});var h=r(o);m=i(h,"DIV",{class:!0});var u=r(m);b=d(u,"旧密码"),u.forEach(l),E=c(h),T=i(h,"INPUT",{class:!0,autocomplete:!0,type:!0}),h.forEach(l),n.forEach(l),w=c(a),$=i(a,"DIV",{class:!0});var f=r($);D=i(f,"DIV",{class:!0});var p=r(D);V=i(p,"DIV",{class:!0});var v=r(V);k=d(v,"新密码"),v.forEach(l),x=c(p),U=i(p,"INPUT",{class:!0,type:!0}),p.forEach(l),f.forEach(l),j=c(a),N=i(a,"DIV",{class:!0});var y=r(N);O=i(y,"BUTTON",{class:!0,type:!0,style:!0});var g=r(O);B=d(g,"修改密码"),g.forEach(l),y.forEach(l),a.forEach(l),M=c(t),P=i(t,"BUTTON",{class:!0,style:!0});var I=r(P);z=d(I,"删除账户"),I.forEach(l),q=c(t),H=i(t,"BUTTON",{class:!0,style:!0});var R=r(H);F=d(R,"退出设置"),R.forEach(l),this.h()},h(){h(m,"class","input-group-addon"),h(T,"class","form-control"),h(T,"autocomplete","off"),h(T,"type","password"),h(o,"class","input-group"),h(e,"class","form-group"),h(V,"class","input-group-addon"),h(U,"class","form-control"),h(U,"type","password"),h(D,"class","input-group"),h($,"class","form-group top svelte-1sv4t20"),h(O,"class","btn btn-warning btn-block"),h(O,"type","button"),u(O,"outline","none"),h(N,"class","form-group top svelte-1sv4t20"),h(s,"id","form"),u(s,"margin-top","15em"),h(P,"class","btn btn-danger btn-block top svelte-1sv4t20"),u(P,"outline","none"),h(H,"class","btn btn-success btn-block top svelte-1sv4t20"),u(H,"outline","none")},m(a,n){f(a,s,n),v(s,e),v(e,o),v(o,m),v(m,b),v(o,E),v(o,T),y(T,t[3]),v(s,w),v(s,$),v($,D),v(D,V),v(V,k),v(D,x),v(D,U),y(U,t[4]),v(s,j),v(s,N),v(N,O),v(O,B),f(a,M,n),f(a,P,n),v(P,z),f(a,q,n),f(a,H,n),v(H,F),R||(_=[g(T,"input",t[17]),g(U,"input",t[18]),g(O,"click",t[13]),g(P,"click",t[12]),g(H,"click",t[19])],R=!0)},p(t,s){8&s[0]&&T.value!==t[3]&&y(T,t[3]),16&s[0]&&U.value!==t[4]&&y(U,t[4])},d(t){t&&l(s),t&&l(M),t&&l(P),t&&l(q),t&&l(H),R=!1,I(_)}}}function U(t){let s,e,o,m,y,b,E;return{c(){s=n("button"),e=p("删除"),o=a(),m=n("button"),y=p("撤回"),this.h()},l(t){s=i(t,"BUTTON",{class:!0,style:!0});var a=r(s);e=d(a,"删除"),a.forEach(l),o=c(t),m=i(t,"BUTTON",{class:!0,style:!0});var n=r(m);y=d(n,"撤回"),n.forEach(l),this.h()},h(){h(s,"class","col-sm-offset-1 col-sm-1 btn btn-danger"),u(s,"outline","none"),h(m,"class","col-sm-1 btn btn-danger"),u(m,"outline","none")},m(a,n){f(a,s,n),v(s,e),f(a,o,n),f(a,m,n),v(m,y),b||(E=[g(s,"click",(function(){T(t[15](t[28]))&&t[15](t[28]).apply(this,arguments)})),g(m,"click",(function(){T(t[16](t[28]))&&t[16](t[28]).apply(this,arguments)}))],b=!0)},p(s,e){t=s},d(t){t&&l(s),t&&l(o),t&&l(m),b=!1,I(E)}}}function j(t){let s,e,o,m,y,g,E,I,T,w,$=t[33]+"",D=t[32]+"",V=t[31]+"",k=t[6]&&U(t);return{c(){s=n("div"),e=n("div"),o=p($),m=p(" 发送给 "),y=p(D),g=a(),E=n("div"),I=p(V),T=a(),k&&k.c(),w=a(),this.h()},l(t){s=i(t,"DIV",{class:!0,style:!0});var a=r(s);e=i(a,"DIV",{class:!0});var n=r(e);o=d(n,$),m=d(n," 发送给 "),y=d(n,D),n.forEach(l),g=c(a),E=i(a,"DIV",{class:!0});var h=r(E);I=d(h,V),h.forEach(l),T=c(a),k&&k.l(a),w=c(a),a.forEach(l),this.h()},h(){h(e,"class","col-sm-3 test-center"),h(E,"class","col-sm-offset-1 col-sm-5"),h(s,"class","row"),u(s,"line-height","1.3em"),u(s,"font-size","1.1em"),u(s,"border-bottom","3px solid pink")},m(t,a){f(t,s,a),v(s,e),v(e,o),v(e,m),v(e,y),v(s,g),v(s,E),v(E,I),v(s,T),k&&k.m(s,null),v(s,w)},p(t,e){1&e[0]&&$!==($=t[33]+"")&&b(o,$),1&e[0]&&D!==(D=t[32]+"")&&b(y,D),1&e[0]&&V!==(V=t[31]+"")&&b(I,V),t[6]?k?k.p(t,e):(k=U(t),k.c(),k.m(s,w)):k&&(k.d(1),k=null)},d(t){t&&l(s),k&&k.d()}}}function N(t){let s,e,a,o;return{c(){s=n("button"),e=p("删除"),this.h()},l(t){s=i(t,"BUTTON",{class:!0,style:!0});var a=r(s);e=d(a,"删除"),a.forEach(l),this.h()},h(){h(s,"class","btn btn-danger col-sm-offset-1 col-sm-2"),u(s,"outline","none")},m(n,l){f(n,s,l),v(s,e),a||(o=g(s,"click",w((function(){T(t[14](t[28]))&&t[14](t[28]).apply(this,arguments)}))),a=!0)},p(s,e){t=s},d(t){t&&l(s),a=!1,o()}}}function O(t){let s,e,o,m,y,E,w,$,D,V,k=t[26]+"",x=t[27]+"",U=t[6]&&N(t);return{c(){s=n("div"),e=n("div"),o=p(k),m=a(),y=n("div"),E=p(x),w=a(),U&&U.c(),$=a(),this.h()},l(t){s=i(t,"DIV",{class:!0,style:!0});var a=r(s);e=i(a,"DIV",{class:!0});var n=r(e);o=d(n,k),n.forEach(l),m=c(a),y=i(a,"DIV",{class:!0});var h=r(y);E=d(h,x),h.forEach(l),w=c(a),U&&U.l(a),$=c(a),a.forEach(l),this.h()},h(){h(e,"class","col-sm-4 test-center"),h(y,"class","col-sm-5 text-center"),h(s,"class","row"),u(s,"line-height","1.3em"),u(s,"font-size","1.1em"),u(s,"border-bottom","3px solid pink")},m(a,n){f(a,s,n),v(s,e),v(e,o),v(s,m),v(s,y),v(y,E),v(s,w),U&&U.m(s,null),v(s,$),D||(V=[g(e,"click",(function(){T(t[10](t[26]))&&t[10](t[26]).apply(this,arguments)}),{once:!0}),g(y,"click",(function(){T(t[11](t[26],t[27]))&&t[11](t[26],t[27]).apply(this,arguments)}),{once:!0})],D=!0)},p(e,a){t=e,1&a[0]&&k!==(k=t[26]+"")&&b(o,k),1&a[0]&&x!==(x=t[27]+"")&&b(E,x),t[6]?U?U.p(t,a):(U=N(t),U.c(),U.m(s,$)):U&&(U.d(1),U=null)},d(t){t&&l(s),U&&U.d(),D=!1,I(V)}}}function B(t){let s,e,p;function d(t,s){return t[2]?x:t[5]?k:V}document.title=s=t[0].name+"的主页";let v=d(t),y=v(t);return{c(){e=a(),p=n("div"),y.c(),this.h()},l(t){o("svelte-1qxia5t",document.head).forEach(l),e=c(t),p=i(t,"DIV",{class:!0,style:!0,id:!0});var s=r(p);y.l(s),s.forEach(l),this.h()},h(){h(p,"class","container"),u(p,"height","100%"),u(p,"border-radius","1em"),h(p,"id","cont")},m(t,s){f(t,e,s),f(t,p,s),y.m(p,null)},p(t,e){1&e[0]&&s!==(s=t[0].name+"的主页")&&(document.title=s),v===(v=d(t))&&y?y.p(t,e):(y.d(1),y=v(t),y&&(y.c(),y.m(p,null)))},i:m,o:m,d(t){t&&l(e),t&&l(p),y.d()}}}async function M({params:t}){const s=await this.fetch(`home/${t.slug}.json?type=pre`),e=await s.json();if(200===s.status)return e.oMsg.reverse(),{post:e};this.error(s.status,e.message)}function P(t,s,e){let a,n,o,{post:l}=s,c=!1,i=!1,r=!1;function h(t){e(1,a=""===a||void 0===a?`${t}`:`${a}和${t}`)}return t.$$set=t=>{"post"in t&&e(0,l=t.post)},[l,a,c,n,o,i,r,async function(){await fetch(`home/${l.name}.json?type=quit`),location.pathname=""},async function(){""==vInput.innerText||null==a||""==a?alert("内容或接收人不能为空!"):(await fetch(`home/${l.name}.json?type=addMsg&data=${vInput.innerText}&t=${a}`),location.pathname=`home/${l.name}`)},async function(){""==vInput.innerText||null==a||""==a?alert("键值或value值不能为空!"):(await fetch(`home/${l.name}.json?type=addMemo&v=${vInput.innerText}&k=${a}`),location.pathname=`home/${l.name}`)},h,function(t,s){h(t),vInput.innerText=`${vInput.innerText}${s}`},async function(){if(void 0===n||""===n)alert("请填写旧密码后尝试!");else{const t=await fetch(`home/${l.name}.json?type=delUser&pass=${n}`);(await t.json()).yes?location.pathname="/":alert("密码错误或其它原因导致删除失败!")}},async function(){if(void 0===n||""===n||void 0===o||""===o)alert("请填写密码后尝试!");else{const t=await fetch(`home/${l.name}.json?type=setPass&oldPass=${n}&newPass=${o}`);(await t.json()).yes?(await fetch(`home/${l.name}.json?type=quit`),location.pathname="/login"):alert("密码错误或其它原因导致修改失败!")}},async function(t){await fetch(`home/${l.name}.json?type=delMemo&id=${t}`),location.pathname=`home/${l.name}`},async function(t){await fetch(`home/${l.name}.json?type=delMsg&id=${t}`),location.pathname=`home/${l.name}`},async function(t){const s=await fetch(`home/${l.name}.json?type=turnMsg&id=${t}`);(await s.json()).yes?location.pathname=`home/${l.name}`:alert("这不是您的消息或其它原因撤回失败!")},function(){n=this.value,e(3,n)},function(){o=this.value,e(4,o)},()=>e(2,c=!c),()=>history.go(0),()=>e(2,c=!c),()=>e(5,i=!0),()=>history.go(0),()=>e(6,r=!r),function(){a=this.value,e(1,a)}]}class z extends t{constructor(t){super(),s(this,t,P,B,e,{post:0},null,[-1,-1])}}export{z as default,M as preload};
