import{t as C,a as L}from"../chunks/bKOFs-99.js";import{i as de}from"../chunks/BZ4upMgk.js";import{as as ve,T as G,w as U,V as re,e as J,a9 as he,ag as pe,a0 as Q,ab as M,X as _e,a1 as me,i as ge,a7 as se,ai as we,aj as Z,$ as F,a2 as R,a3 as xe,at as q,ak as ne,aa as ie,al as ye,au as be,q as ke,s as $,av as Ee,aw as Ae,a6 as Te,ax as Me,ay as Ne,az as Ie,aA as Se,Z as He,aB as Re,h as Ce,aC as Le,an as Oe,I as le,J as W,O as w,M as E,N as y,g as x,y as V,aq as S,aD as K,c as H,H as P,u as qe,K as X,ae as oe}from"../chunks/GjaxKlU4.js";import{s as I,d as De}from"../chunks/CMkyyaqg.js";import{p as D}from"../chunks/DTAkcPDF.js";import{o as We}from"../chunks/_u7wdTLS.js";import{p as Y}from"../chunks/Cs5MyKa4.js";function ze(a,e,t,s=!0){s&&t();for(var r of e)a.addEventListener(r,t);ve(()=>{for(var i of e)a.removeEventListener(i,t)})}function Be(a){var e=re,t=J;G(null),U(null);try{return a()}finally{G(e),U(t)}}function Qe(a,e){return e}function Fe(a,e,t,s){for(var r=[],i=e.length,o=0;o<i;o++)Ae(e[o].e,r,!0);var d=i>0&&r.length===0&&t!==null;if(d){var v=t.parentNode;Te(v),v.append(t),s.clear(),N(a,e[0].prev,e[i-1].next)}Me(r,()=>{for(var c=0;c<i;c++){var h=e[c];d||(s.delete(h.k),N(a,h.prev,h.next)),Ne(h.e,!d)}})}function Ve(a,e,t,s,r,i=null){var o=a,d={flags:e,items:new Map,first:null};{var v=a;o=M?Q(_e(v)):v.appendChild(he())}M&&me();var c=null,h=!1;pe(()=>{var n=t(),p=ge(n)?n:n==null?[]:se(n),l=p.length;if(h&&l===0)return;h=l===0;let u=!1;if(M){var _=o.data===we;_!==(l===0)&&(o=Z(),Q(o),F(!1),u=!0)}if(M){for(var g=null,b,f=0;f<l;f++){if(R.nodeType===8&&R.data===xe){o=R,u=!0,F(!1);break}var m=p[f],A=s(m,f);b=ue(R,d,g,null,m,A,f,r,e),d.items.set(A,b),g=b}l>0&&Q(Z())}if(!M){var T=re;Ye(p,d,o,r,e,(T.f&q)!==0,s)}i!==null&&(l===0?c?ne(c):c=ie(()=>i(o)):c!==null&&ye(c,()=>{c=null})),u&&F(!0)}),M&&(o=R)}function Ye(a,e,t,s,r,i,o,d){var v=a.length,c=e.items,h=e.first,n=h,p,l=null,u=[],_=[],g,b,f,m;for(m=0;m<v;m+=1){if(g=a[m],b=o(g,m),f=c.get(b),f===void 0){var A=n?n.e.nodes_start:t;l=ue(A,e,l,l===null?e.first:l.next,g,b,m,s,r),c.set(b,l),u=[],_=[],n=l.next;continue}if(je(f,g,m),(f.e.f&q)!==0&&ne(f.e),f!==n){if(p!==void 0&&p.has(f)){if(u.length<_.length){var T=_[0],k;l=T.prev;var O=u[0],z=u[u.length-1];for(k=0;k<u.length;k+=1)ee(u[k],T,t);for(k=0;k<_.length;k+=1)p.delete(_[k]);N(e,O.prev,z.next),N(e,l,O),N(e,z,T),n=T,l=z,m-=1,u=[],_=[]}else p.delete(f),ee(f,n,t),N(e,f.prev,f.next),N(e,f,l===null?e.first:l.next),N(e,l,f),l=f;continue}for(u=[],_=[];n!==null&&n.k!==b;)(i||(n.e.f&q)===0)&&(p??(p=new Set)).add(n),_.push(n),n=n.next;if(n===null)continue;f=n}u.push(f),l=f,n=f.next}if(n!==null||p!==void 0){for(var B=p===void 0?[]:se(p);n!==null;)(i||(n.e.f&q)===0)&&B.push(n),n=n.next;var ce=B.length;if(ce>0){var fe=v===0?t:null;Fe(e,B,fe,c)}}J.first=e.first&&e.first.e,J.last=l&&l.e}function je(a,e,t,s){be(a.v,e),a.i=t}function ue(a,e,t,s,r,i,o,d,v,c){var h=(v&Ie)!==0,n=(v&Se)===0,p=h?n?ke(r):$(r):r,l=(v&Ee)===0?o:$(o),u={i:l,v:p,k:i,a:null,e:null,prev:t,next:s};try{return u.e=ie(()=>d(a,p,l),M),u.e.prev=t&&t.e,u.e.next=s&&s.e,t===null?e.first=u:(t.next=u,t.e.next=u.e),s!==null&&(s.prev=u,s.e.prev=u.e),u}finally{}}function ee(a,e,t){for(var s=a.next?a.next.e.nodes_start:t,r=e?e.e.nodes_start:t,i=a.e.nodes_start;i!==s;){var o=He(i);r.before(i),i=o}}function N(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function j(a,e,t,s){var r=a.__attributes??(a.__attributes={});M&&(r[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||r[e]!==(r[e]=t)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[Re]=t),t==null?a.removeAttribute(e):typeof t!="string"&&Je(a).includes(e)?a[e]=t:a.setAttribute(e,t))}var te=new Map;function Je(a){var e=te.get(a.nodeName);if(e)return e;te.set(a.nodeName,e=[]);for(var t,s=a,r=Element.prototype;r!==s;){t=Le(s);for(var i in t)t[i].set&&e.push(i);s=Ce(s)}return e}function Ke(a,e,t,s=t){e.addEventListener("input",()=>{s(e[a])}),Oe(()=>{var r=t();if(e[a]!==r)if(r==null){var i=e[a];s(i)}else e[a]=r+""})}function ae(a,e){ze(window,["resize"],()=>Be(()=>e(window[a])))}const Pe=!0,Xe=!1,mt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Pe,ssr:Xe},Symbol.toStringTag,{value:"Module"}));var Ge=C('<shh class="svelte-1oy1h6v"> </shh> ',1);function Ue(a,e){function t(h,n){h=Math.ceil(h/64)*64,n=Math.ceil(n/64)*64;var l=function u(_,g){return g?u(g,_%g):_};return l=l(h,n),[h/l,n/l]}let s=V(()=>t(e.innerWidth,e.innerHeight)),r=V(()=>x(s).join("/")),i=V(()=>e.innerWidth/e.innerHeight==x(s)[0]/x(s)[1]?"":"~");var o=Ge(),d=le(o),v=E(d,!0);y(d);var c=w(d,1,!0);W(()=>{I(v,x(i)),I(c,x(r))}),L(a,o)}var Ze=C(`<pre class="svelte-uud3jk">aspect-ratio: <!> <shh class="svelte-uud3jk">px</shh> <shh class="svelte-uud3jk">px</shh>
</pre>`);function $e(a){let e=S(54321),t=S(54321);var s=Ze(),r=w(E(s));Ue(r,{get innerHeight(){return x(e)},get innerWidth(){return x(t)}});var i=w(r),o=w(i,2);K(2),y(s),W(()=>{I(i,`
          width: ${x(t)??""}`),I(o,`
          height: ${x(e)??""}`)}),ae("innerHeight",d=>H(e,D(d))),ae("innerWidth",d=>H(t,D(d))),L(a,s)}let et=[["short","(min-aspect-ratio: 4/3) and (max-height: 640px)"],["giant","(min-width: 3350px)"],["mobile","(max-width: 835px)"],["reader","(max-aspect-ratio: 1) and (max-height:1920px)"],["desktop","screen"]];function tt(a){const e=([r,i])=>window.matchMedia(i).matches,t=()=>a.find(e),s=()=>(global.found=t()||["waiting","for usable rules"],global.form=global.found[0],document.documentElement.setAttribute("form",global.form),window.blur(),global.form);(global.requery=s)(),window.addEventListener("resize",s)}const at=(a,e,t)=>e(t()[0]),rt=(a,e)=>e("up"),st=(a,e)=>e("down");var nt=C('<li class="svelte-1u4cr5p"><div><button up="" class="svelte-1u4cr5p">▲</button><button down="" class="svelte-1u4cr5p">▼</button></div> <div><span class="svelte-1u4cr5p"> </span></div><p class="svelte-1u4cr5p"><span contenteditable="" class="svelte-1u4cr5p"></span></p></li>');function it(a,e){P(e,!0);let t=Y(e,"items",15),s=Y(e,"focused",15),r=Y(e,"item",15),i=S(null),o=S(null),d=S(null);qe(()=>{H(o,r()==global.found),H(d,D(matchMedia(r()[1]).matches)),H(i,s()==r()[0])});const v=A=>{let T={up:-1,down:1}[A],k=t().indexOf(r()),O=k+T;t().splice(k,0,t().splice(O,1)[0]),t(t()),global.requery()},c=global.requery,h=global.requery;var n=nt();n.__mousedown=[at,s,r];var p=E(n),l=E(p);l.__click=[rt,v];var u=w(l);u.__click=[st,v],y(p);var _=w(p,2),g=E(_),b=E(g,!0);y(g),y(_);var f=w(_),m=E(f);m.__keydown=c,m.__keyup=h,y(f),y(n),W(()=>{j(n,"targeted",x(i)),j(g,"active",x(o)),I(b,r()[0]),j(m,"applicable",x(d))}),Ke("textContent",m,()=>r()[1],A=>r(r()[1]=A,!0)),L(a,n),X()}De(["mousedown","click","keydown","keyup"]);var lt=C('<ul class="svelte-4f2k8c"></ul>');function ot(a,e){P(e,!0);let t=S(null),s=oe("global");s.mediaQueries=et;let r=s.mediaQueries;We(()=>tt(s.mediaQueries));var i=lt();Ve(i,21,()=>r,Qe,(o,d,v)=>{it(o,{get items(){return r},set items(c){r=c},get focused(){return x(t)},set focused(c){H(t,D(c))},get item(){return r[v]},set item(c){r[v]=c}})}),y(i),L(a,i),X()}var ut=C(`<pre>
<shh>/**************************************//*

No more copy-pasting @media rules!
Dynamic media queries in ~139 chars of js!

With nested CSS selectors, it's ergonomic: 
Just replace your "@media" rules with 
[form] selectors and you're done! 

But wait there's more! Because we .find() 
our matches, we're guaranteed no overlap!
Boom! We've SPOT'ed media query success!

*//**************************************/

</shh>
</pre> <pre>Lo! <h1 class="svelte-1asilhk"> </h1> layout</pre> <pre>


because, &lt;html form=<span active="true" class="svelte-1asilhk"> </span>&gt;


because,  <!>

because, <em class="svelte-1asilhk">mediaQueries</em> = <shh>// [[form, rule],...]</shh>

<!>


and because, <shh>//~139 characters</shh>


onresize = ()=>
<code lang="js" class="svelte-1asilhk">  <x l="1">document</x>.<x l="2">documentElement</x>
  .<x l="2">setAttribute</x>( <x l="2">'form'</x>,
     <em class="svelte-1asilhk">mediaQueries</em>.find( <shh>(</shh>[form, rule]<shh>)</shh>=>
       matchMedia( rule ).matches
     )[0] <shh>//form</shh>
);</code>

</pre>`,1);function gt(a,e){P(e,!1);const t=oe("global");de();var s=ut(),r=w(le(s),2),i=w(E(r)),o=E(i,!0);y(i),K(),y(r);var d=w(r,2),v=w(E(d)),c=E(v);y(v);var h=w(v,2);$e(h);var n=w(h,6);ot(n,{}),K(5),y(d),W(()=>{I(o,t.form),I(c,`"${t.form??""}"`)}),L(a,s),X()}export{gt as component,mt as universal};
