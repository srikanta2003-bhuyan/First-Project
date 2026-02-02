// Smooth scrolling
document.querySelectorAll('nav a').forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Dark/light theme toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  themeBtn.innerHTML = document.body.classList.contains('dark') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', ()=> navLinks.classList.toggle('active'));

// Dynamic role animation
const roles = ["Web Developer","Data Analyst","AI & ML Enthusiast"];
let roleIndex = 0;
const roleSpan = document.querySelector(".dynamic-role");
function typeRole(){
  let role = roles[roleIndex];
  let i = 0;
  roleSpan.textContent = "";
  const typing = setInterval(()=>{
    roleSpan.textContent += role[i];
    i++;
    if(i===role.length){
      clearInterval(typing);
      setTimeout(()=>{
        roleIndex = (roleIndex+1)%roles.length;
        typeRole();
      },1500);
    }
  },150);
}
typeRole();
