(()=>{const fine=matchMedia('(pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches,$=s=>document.querySelector(s),lang=()=>document.documentElement.lang;
const S={en:{hi:"Hi, I'm IBTISAMÉ. Welcome!",ann:"Hey, I'm reading!",ang:"Not now, I'm shooting!"},bn:{hi:"আমি IBTISAMÉ। স্বাগতম!",ann:"আরে, পড়ছি তো!",ang:"এখন না, ছবি তুলছি!"},ar:{hi:"أنا IBTISAMÉ. أهلًا بك!",ann:"أنا أقرأ الآن!",ang:"ليس الآن، أصوّر!"}};
const st='stroke="#1E7A4F" stroke-width="3"',I={about:`<path d="M12 6h18l8 8v28H12z" fill="#fff" ${st}/>`,projects:`<rect x="6" y="20" width="36" height="20" rx="3" fill="#fff" ${st}/><path d="M6 20a18 12 0 0136 0" fill="#DCEEDF" ${st}/>`,gallery:`<rect x="6" y="10" width="36" height="28" rx="3" fill="#fff" ${st}/><circle cx="24" cy="24" r="7" fill="#1E7A4F"/>`,skills:`<rect x="6" y="18" width="36" height="22" rx="3" fill="#fff" ${st}/><path d="M17 18v-6h14v6" fill="none" ${st}/>`,contact:`<rect x="6" y="12" width="36" height="26" rx="3" fill="#fff" ${st}/><path d="M6 14l18 14 18-14" fill="none" ${st}/>`};
const m=document.createElement('div');m.id='ib';m.tabIndex=0;m.setAttribute('role','button');m.setAttribute('aria-label','IBTISAMÉ');m.dataset.a='walk';
m.innerHTML=`<div class="bub" hidden></div><svg viewBox="0 0 80 96" width="72" height="86" aria-hidden="true"><g class="bd"><path d="M22 96c0-16 8-26 18-26s18 10 18 26z" fill="#1E7A4F"/><circle class="fc" cx="40" cy="38" r="26" fill="#F3CBA4"/><path d="M14 36c-2-20 14-28 28-26 14 0 26 10 24 26-6-8-14-12-26-12S20 28 14 36z" fill="#2A1A12"/><g fill="#fff"><circle cx="30" cy="40" r="6"/><circle cx="50" cy="40" r="6"/></g><g class="pp" fill="#10241A"><circle cx="30" cy="40" r="3"/><circle cx="50" cy="40" r="3"/></g><path class="br" d="M23 31l14 5M57 31l-14 5" stroke="#2A1A12" stroke-width="2.6" stroke-linecap="round"/><path class="mo" d="M29 52q11 11 22 0" stroke="#10241A" stroke-width="2.6" fill="none" stroke-linecap="round"/><g class="tea"><rect x="52" y="64" width="13" height="11" rx="2" fill="#fff" stroke="#10241A" stroke-width="1.5"/><path d="M65 67h3a3 3 0 010 6h-3" fill="none" stroke="#10241A" stroke-width="1.5"/><path class="sm" d="M56 60q2-3 0-6M61 60q2-3 0-6" stroke="#9aa" fill="none"/></g><g class="bk"><path d="M22 66h18v14H22zM40 66h18v14H40z" fill="#fff" stroke="#1E7A4F" stroke-width="2"/></g><g class="cm"><rect x="46" y="62" width="26" height="17" rx="3" fill="#10241A"/><circle cx="59" cy="70" r="5" fill="#DCEEDF" stroke="#fff" stroke-width="1.5"/><circle class="fl" cx="59" cy="70" r="14" fill="#fff"/></g></g></svg>`;
document.body.append(m);
const pp=m.querySelector('.pp'),bd=m.querySelector('.bd'),bub=m.querySelector('.bub'),mo=m.querySelector('.mo'),br=m.querySelector('.br'),fc=m.querySelector('.fc');
let x=innerWidth-100,y=innerHeight-120,tx=x,ty=y,hold=0,t,sc=null,act='walk',last=0,i=0;
if(!fine)m.classList.add('fx');
const look=(cx,cy)=>{if(act=='bk')return;const r=m.getBoundingClientRect(),dx=cx-(r.left+r.width/2),dy=cy-(r.top+r.height*.45),d=Math.hypot(dx,dy)||1,k=Math.min(2.6,d/40);pp.style.transform=`translate(${dx/d*k}px,${dy/d*k}px)`};
const apply=()=>{m.dataset.a=act;pp.style.transform=act=='bk'?'translate(0,2.6px)':''};
const say=s=>{bub.textContent=s;bub.hidden=false;clearTimeout(t);t=setTimeout(()=>bub.hidden=true,2400)};
const mood=(k,ms)=>{const sad=k!='ok';mo.setAttribute('d',sad?'M30 57q10-7 20 0':'M29 52q11 11 22 0');br.style.display=sad?'block':'none';fc.setAttribute('fill',k=='ang'?'#EE9E86':'#F3CBA4');if(sad)setTimeout(()=>mood('ok'),ms)};
addEventListener('pointermove',e=>{look(e.clientX,e.clientY);last=Date.now();if(fine&&!hold){if(act!='walk'){act='walk';apply()}tx=Math.min(innerWidth-80,Math.max(4,e.clientX+36));ty=Math.min(innerHeight-92,Math.max(4,e.clientY+28))}});
addEventListener('touchstart',e=>look(e.touches[0].clientX,e.touches[0].clientY),{passive:true});
m.addEventListener('pointerenter',()=>hold=1);m.addEventListener('pointerleave',()=>hold=0);
if(fine){const tick=()=>{const o=x;x+=(tx-x)*.09;y+=(ty-y)*.09;m.style.transform=`translate(${x}px,${y}px)`;bd.style.transform=`rotate(${Math.max(-12,Math.min(12,(x-o)*1.8))}deg)`;requestAnimationFrame(tick)};tick()}
const seq=['tea','bk','cm','walk'];
setInterval(()=>{if(sc||(fine&&Date.now()-last<3000))return;act=seq[i++%4];apply();if(act=='walk'&&fine){tx=40+Math.random()*(innerWidth-160);ty=innerHeight*.45+Math.random()*(innerHeight*.45-100)}},6500);
let sh;addEventListener('scroll',()=>{m.classList.add('hop');clearTimeout(sh);sh=setTimeout(()=>m.classList.remove('hop'),350)},{passive:true});
const poke=()=>{if(sc)return;const s=S[lang()]||S.en;
 if(act=='bk'){say(s.ann);mood('ann',1400)}
 else if(act=='cm'){say(s.ang);mood('ang',1700);if(fine){tx=x<innerWidth/2?innerWidth-110:30;ty=Math.max(60,y-40)}else m.classList.toggle('lf')}
 else say(s.hi)};
m.addEventListener('click',poke);m.addEventListener('keydown',e=>{if(e.key=='Enter')poke()});
const vec=pn=>{const r=m.getBoundingClientRect(),b=pn.getBoundingClientRect();return`translate(${r.left+r.width/2-(b.left+b.width/2)}px,${r.top+r.height/2-(b.top+b.height/2)}px) scale(.08)`};
const bounce=()=>{m.classList.add('hop');setTimeout(()=>m.classList.remove('hop'),450)};
const open=id=>{if(sc)return;const sec=$('#'+id),a=$('#nav a[href="#'+id+'"]');
 sc=document.createElement('div');sc.className='scn';sc.innerHTML=`<div class="pn" role="dialog" aria-modal="true"><button class="x" aria-label="Close">×</button><svg viewBox="0 0 48 48" width="44" height="44" aria-hidden="true">${I[id]}</svg><h2>${a.textContent}</h2><div></div></div>`;
 sc.querySelector('.pn>div').append(...[...sec.children].filter(c=>c.tagName!='H2').map(c=>c.cloneNode(true)));
 document.body.append(sc);const pn=sc.firstChild;
 pn.animate([{transform:vec(pn),opacity:0},{transform:'none',opacity:1}],{duration:560,easing:'cubic-bezier(.2,.9,.3,1.15)'});bounce();
 sc.onclick=e=>{if(e.target==sc||e.target.closest('.x'))close()}};
const close=()=>{if(!sc)return;const s=sc,pn=s.firstChild;sc=null;bounce();pn.animate([{transform:'none',opacity:1},{transform:vec(pn),opacity:0}],{duration:380,easing:'ease-in',fill:'forwards'}).finished.then(()=>s.remove())};
document.addEventListener('click',e=>{const a=e.target.closest('#nav a');if(a){e.preventDefault();open(a.hash.slice(1))}});
addEventListener('keydown',e=>{if(e.key=='Escape')close()});
})();
