const menuBtn=document.querySelector('.menu'),navList=document.querySelector('.nav ul');
menuBtn?.addEventListener('click',()=>{const o=navList.classList.toggle('open');menuBtn.setAttribute('aria-expanded',o);menuBtn.textContent=o?'Close':'Menu';});
navList?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navList.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');if(menuBtn)menuBtn.textContent='Menu';}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in')}}),{threshold:.08});
document.querySelectorAll('.reveal,.flow .st,.step').forEach(el=>io.observe(el));
window.agmMailto=function(f){const d=new FormData(f);const b=[...d].map(([k,v])=>k+': '+v).join('\r\n');return 'mailto:hello@aceglobalmedia.com?subject='+encodeURIComponent('Business Overview Request')+'&body='+encodeURIComponent(b)};
const f=document.querySelector('#contact-form');
f?.addEventListener('submit',e=>{e.preventDefault();window.location.href=window.agmMailto(f)});
