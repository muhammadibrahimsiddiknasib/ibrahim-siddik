const $$=s=>[...document.querySelectorAll(s)];
document.addEventListener('click',e=>{const b=e.target.closest('button'),i=e.target;
 if(b&&b.dataset.copy){navigator.clipboard.writeText(b.dataset.copy).then(()=>{const o=b.textContent;b.textContent=T[document.documentElement.lang].done;setTimeout(()=>b.textContent=o,1400)})}
 else if(b&&b.dataset.c){$$('#chips button').forEach(x=>x.classList.toggle('on',x==b));$$('#gal img').forEach(g=>g.hidden=b.dataset.c!='all'&&g.dataset.cat!=b.dataset.c)}
 else if(i.matches('#gal img,.card img')){const d=document.createElement('div');d.className='lbx';d.innerHTML=`<img src="${i.dataset.full||i.src}" alt="">`;d.onclick=()=>d.remove();document.body.append(d)}
});
addEventListener('pointermove',e=>{document.body.style.setProperty('--x',e.clientX+'px');document.body.style.setProperty('--y',e.clientY+'px')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$('#nav a').forEach(a=>a.classList.toggle('on',a.hash=='#'+e.target.id))}),{rootMargin:'-40% 0px -55% 0px'});
$$('section').forEach(s=>io.observe(s));
addEventListener('contextmenu',e=>{if(e.target.matches('img'))e.preventDefault()});addEventListener('dragstart',e=>{if(e.target.matches('img'))e.preventDefault()});
