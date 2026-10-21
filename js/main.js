const T={
en:{role:"A Muslim tech enthusiast. Student, builder and hobby photographer.",bio:"I study Islamic Studies at Dhaka Central University and build small web tools for learners, from exam systems to ID card generators. I take photos for the joy of it.",
edu:["Honours, Islamic Studies, Dhaka Central University (2025–26 session)","HSC 2024, Humanities, GPA 5.00","Dakhil 2022, Science, GPA 5.00"],
sk:["Web apps","Google Apps Script","Canva design","Data entry and research","MS Office","Educational content"],
n_about:"About",n_projects:"Projects",n_gallery:"Gallery",n_skills:"Skills",n_contact:"Contact",all:"All",copy:"Copy email",phone:"Copy phone number",done:"Copied",live:"Open",code:"Source",none:"Photos will appear here after you add them to the photos folder."},
bn:{role:"একজন মুসলিম টেক উৎসাহী। শিক্ষার্থী, নির্মাতা ও শখের ফটোগ্রাফার।",bio:"আমি ঢাকা সেন্ট্রাল ইউনিভার্সিটিতে ইসলামিক স্টাডিজ পড়ি আর শিক্ষার্থীদের জন্য ছোট ছোট ওয়েব টুল বানাই, পরীক্ষা ব্যবস্থা থেকে আইডি কার্ড জেনারেটর পর্যন্ত। শখে ছবি তুলি।",
edu:["অনার্স, ইসলামিক স্টাডিজ, ঢাকা সেন্ট্রাল ইউনিভার্সিটি (২০২৫–২৬ সেশন)","এইচএসসি ২০২৪, মানবিক, জিপিএ ৫.০০","দাখিল ২০২২, বিজ্ঞান, জিপিএ ৫.০০"],
sk:["ওয়েব অ্যাপ","গুগল অ্যাপস স্ক্রিপ্ট","ক্যানভা ডিজাইন","ডেটা এন্ট্রি ও গবেষণা","এমএস অফিস","শিক্ষামূলক কনটেন্ট"],
n_about:"পরিচিতি",n_projects:"প্রজেক্ট",n_gallery:"গ্যালারি",n_skills:"দক্ষতা",n_contact:"যোগাযোগ",all:"সব",copy:"ইমেইল কপি করুন",phone:"ফোন নম্বর কপি করুন",done:"কপি হয়েছে",live:"খুলুন",code:"সোর্স",none:"photos ফোল্ডারে ছবি দিলে এখানে দেখা যাবে।"},
ar:{role:"مسلم شغوف بالتقنية. طالب وصانع ومصوّر هاوٍ.",bio:"أدرس الدراسات الإسلامية في جامعة داكا المركزية، وأبني أدوات ويب صغيرة للمتعلمين، من أنظمة الاختبارات إلى مولّد بطاقات الهوية. وألتقط الصور حبًّا بها.",
edu:["البكالوريوس، الدراسات الإسلامية، جامعة داكا المركزية (دفعة 2025–26)","الثانوية العامة 2024، الإنسانيات، معدل 5.00","الدخيل 2022، العلوم، معدل 5.00"],
sk:["تطبيقات الويب","Google Apps Script","تصميم كانفا","إدخال البيانات والبحث","مايكروسوفت أوفيس","محتوى تعليمي"],
n_about:"نبذة",n_projects:"المشاريع",n_gallery:"المعرض",n_skills:"المهارات",n_contact:"تواصل",all:"الكل",copy:"نسخ البريد",phone:"نسخ رقم الهاتف",done:"تم النسخ",live:"فتح",code:"المصدر",none:"ستظهر الصور هنا بعد إضافتها إلى مجلد photos."}};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let L='en',P=[],G=[],cat='all';
try{L=localStorage.getItem('l')||'en'}catch(e){}
const j=u=>fetch(u).then(r=>r.json()).catch(()=>[]);
function render(){const t=T[L];
 document.documentElement.lang=L;document.documentElement.dir=L=='ar'?'rtl':'ltr';
 $$('[data-i]').forEach(e=>e.textContent=t[e.dataset.i]);
 $$('.lb button').forEach(b=>b.classList.toggle('on',b.dataset.l==L));
 $('#bio').textContent=t.bio;$('#edu').innerHTML=t.edu.map(x=>`<li>${x}</li>`).join('');
 $('#sk').innerHTML=t.sk.map(x=>`<li>${x}</li>`).join('');
 $('#pg').innerHTML=P.map(p=>`<article class="card">${p.cover?`<img src="${p.cover}" alt="" loading="lazy">`:''}<h3>${p.title}</h3><p>${(p.desc||{})[L]||(p.desc||{}).en||''}</p>${p.live?`<a href="${p.live}" target="_blank" rel="noopener">${t.live}</a>`:''}${p.github?`<a href="${p.github}" target="_blank" rel="noopener">${t.code}</a>`:''}</article>`).join('');
 const cs=['all',...new Set(G.map(g=>g.cat))];
 $('#chips').innerHTML=G.length?cs.map(c=>`<button data-c="${c}" class="${c==cat?'on':''}">${c=='all'?t.all:c}</button>`).join(''):'';
 const shown=G.filter(g=>cat=='all'||g.cat==cat);
 $('#gal').innerHTML=shown.length?shown.map(g=>`<img src="${g.src}" alt="${g.cat}" loading="lazy">`).join(''):`<p class="empty">${t.none}</p>`;
}
document.addEventListener('click',e=>{const b=e.target.closest('button'),i=e.target;
 if(b&&b.dataset.l){L=b.dataset.l;try{localStorage.setItem('l',L)}catch(x){}render()}
 else if(b&&b.dataset.c){cat=b.dataset.c;render()}
 else if(b&&b.dataset.copy){navigator.clipboard.writeText(b.dataset.copy).then(()=>{const o=b.textContent;b.textContent=T[L].done;setTimeout(()=>b.textContent=o,1400)})}
 else if(i.matches('#gal img')){const d=document.createElement('div');d.className='lbx';d.innerHTML=`<img src="${i.src}" alt="">`;d.onclick=()=>d.remove();document.body.append(d)}
});
addEventListener('pointermove',e=>{document.body.style.setProperty('--x',e.clientX+'px');document.body.style.setProperty('--y',e.clientY+'px')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$('#nav a').forEach(a=>a.classList.toggle('on',a.hash=='#'+e.target.id))}),{rootMargin:'-40% 0px -55% 0px'});
$$('section').forEach(s=>io.observe(s));
Promise.all([j('data/projects.json'),j('data/photos.json')]).then(([p,g])=>{P=p;G=g;render()});render();
