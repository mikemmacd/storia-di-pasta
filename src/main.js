import './style.css';
document.querySelector('#year').textContent = new Date().getFullYear();
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectMood(index) {
 tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected', String(i===index)); tab.tabIndex=i===index?0:-1;});
 const night=index===1;
 document.querySelector('.daynight').classList.toggle('night',night);
 document.querySelector('#mood-panel').setAttribute('aria-labelledby',tabs[index].id);
 document.querySelector('#mood-panel').innerHTML=night?'<h2>One more glass.<br><em>One more story.</em></h2><p>As the lights warm up, so does the room. Music, easy conversation, and the idea that a good evening doesn’t need a special occasion.</p><p>Our evening vision: affordable wine by the glass, a choice of open bottles, and the kind of company that makes you forget to check the time.</p>':'<h2>Your lunch break.<br><em>With an Italian accent.</em></h2><p>Simple pasta, finished in a hot pan. A proper lunch that fits into your day, at a price that keeps it an everyday pleasure.</p><p>Drop in, take a breather, and let the pan do the talking. Delivery is part of the plan, too.</p>';
 document.querySelector('#mood-image').src=night?'/images/sala.jpg':'/images/cortile.jpg';
 document.querySelector('#mood-image').alt=night?'The candlelit dining room at Storia di Pasta':'The courtyard at Storia di Pasta';
 document.querySelector('#image-note').textContent=night?'LA SALA / AFTER DARK':'IL CORTILE / THE COURTYARD';
}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>selectMood(i));tab.addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){event.preventDefault();const index=event.key==='Home'?0:event.key==='End'?1:1-i;selectMood(index);tabs[index].focus();}});});
