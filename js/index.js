// Your code goes here
let navbar = document.querySelector('.main-navigation');
let busPic = document.getElementById('bus-img');
let btns = document.querySelectorAll('.btn');
let firstArticlePic = document.querySelector('.img-content');
let footer = document.querySelector('.footer');
let contentSections = document.querySelectorAll('.content-section');
let logo = document.querySelector('.logo-heading');

navbar.addEventListener('click', evt => { evt.target.style.display = 'none' });
busPic.addEventListener('mouseover', evt => { evt.target.style.border = '2px solid red' });
btns.forEach(btn => {
    btn.addEventListener('dblclick', evt => { 
        evt.target.style.backgroundColor = 'limegreen';
        evt.target.style.color = 'black';
     });
});
firstArticlePic.addEventListener('click', evt => { navbar.style.display = 'block' });
footer.addEventListener('mouseover', evt => { evt.target.style.background = 'purple' });
contentSections.forEach(section =>{
    section.addEventListener('click', evt => { 
        evt.target.style.background = 'orange';
        evt.target.style.color = 'white';
     });
});
logo.addEventListener('click', evt => { evt.target.style.color = 'limegreen' });

