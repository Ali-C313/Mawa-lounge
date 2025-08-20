
function toggleNav(){ document.querySelector('.nav').classList.toggle('open'); }
document.getElementById('year').textContent = new Date().getFullYear();
(function(){
  const days = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'];
  const todayName = days[new Date().getDay()];
  document.querySelectorAll('.hours li').forEach(li=>{
    if(li.firstElementChild && li.firstElementChild.textContent.trim() === todayName){
      li.classList.add('is-today');
    }
  });
})();
