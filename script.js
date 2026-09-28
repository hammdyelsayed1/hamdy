const arrow = '<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11"/></svg>';
const serviceItems = [
  ['Google Ads','إعلانات بحث مدفوعة توصل رسالتك للناس وهي بتدور.','assets/logos/googleads.svg'],
  ['TikTok Ads','محتوى وإعلانات مناسبة لطبيعة TikTok السريعة.','assets/logos/tiktok.svg'],
  ['Meta Ads','حملات على Facebook وInstagram بفكرة واضحة.','assets/logos/meta.svg'],
  ['Facebook Ads','استهداف وإعلانات مصممة لجمهور Facebook.','assets/logos/facebook.svg'],
  ['Instagram Ads','كرياتيف بصري يلفت النظر ويخدم الرسالة.','assets/logos/instagram.svg'],
  ['Media Buying','اختيار القنوات وتوزيع الميزانية بعقلية أداء.','assets/icons/media-buying.svg'],
  ['Campaign Management','متابعة منظمة من أول الإطلاق لحد التحسين.','assets/icons/campaign-management.svg'],
  ['Analytics & Performance','قراءة الأرقام وفهم اللي بيحصل بوضوح.','assets/icons/analytics.svg'],
  ['Lead Generation','تجربة تساعد المهتم يتحول لفرصة تواصل.','assets/icons/lead-generation.svg'],
  ['Website Development','مواقع سريعة ومرنة تمثل مشروعك صح.','assets/icons/web-development.svg'],
  ['Landing Pages','صفحات مركزة تسهّل الخطوة اللي بعدها.','assets/icons/landing-seo.svg'],
  ['SEO','أساس تقني يساعد ظهورك يكون أوضح.','assets/icons/landing-seo.svg'],
  ['Social Media Design','تصميمات تدي للمحتوى شكل ثابت ومميز.','assets/icons/social-design.svg']
];
function renderServices(){
  const grid=document.getElementById('serviceGrid');
  grid.innerHTML=serviceItems.map((item,index)=>`<article class="service-card reveal" tabindex="0"><span class="service-no">${String(index+1).padStart(2,'0')}</span><span class="service-icon"><img src="${item[2]}" alt="" loading="lazy"></span><h3>${item[0]}</h3><p>${item[1]}</p><span class="card-arrow">${arrow}</span></article>`).join('');
  observeReveals();
}
function observeReveals(){
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal:not(.visible)').forEach(el=>io.observe(el));
}
renderServices();
observeReveals();
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
menuButton.addEventListener('click',()=>{nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',nav.classList.contains('open'));});
document.querySelectorAll('.main-nav a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));
if(matchMedia('(pointer:fine)').matches){
  const dot=document.querySelector('.cursor-dot'),ring=document.querySelector('.cursor-ring');
  document.addEventListener('mousemove',event=>{dot.style.left=event.clientX+'px';dot.style.top=event.clientY+'px';ring.style.left=event.clientX+'px';ring.style.top=event.clientY+'px';});
  document.querySelectorAll('a,button,.service-card').forEach(el=>{el.addEventListener('mouseenter',()=>ring.classList.add('hover'));el.addEventListener('mouseleave',()=>ring.classList.remove('hover'));});
}
const tilt=document.querySelector('[data-tilt]');
if(tilt&&matchMedia('(pointer:fine)').matches){
  tilt.addEventListener('mousemove',event=>{const rect=tilt.getBoundingClientRect(),x=(event.clientX-rect.left)/rect.width-.5,y=(event.clientY-rect.top)/rect.height-.5;tilt.style.transform=`perspective(900px) rotateY(${x*5}deg) rotateX(${-y*5}deg)`;});
  tilt.addEventListener('mouseleave',()=>tilt.style.transform='');
}
const faqQuestions=document.querySelectorAll('.faq-question');
faqQuestions.forEach(question=>{
  question.addEventListener('click',()=>{
    const expanded=question.getAttribute('aria-expanded')==='true';
    const answer=question.nextElementSibling;
    question.setAttribute('aria-expanded',String(!expanded));
    answer.hidden=expanded;
  });
});

