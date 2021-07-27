const sections = ['Tours','Prices','Contact us']
const nav = document.getElementById('nav__bar');
const mobileMenu = document.getElementById('menu');
const footer = document.getElementById('footerli');

const create_nav = (sections)=> {
    for (let section of sections){
        const liElement = document.createElement('li');
        const liaa = document.createElement('li')
        const afooter = document.createElement('a');
        const aElement = document.createElement('a');
        aElement.innerHTML = section;
        afooter.innerHTML = section;
        afooter.setAttribute('class', afooter.innerHTML)
        aElement.setAttribute('class', aElement.innerHTML);
        aElement.style.setProperty('cursor', 'pointer');
        afooter.style.setProperty('cursor', 'pointer');
        liaa.appendChild(afooter)
        liElement.appendChild(aElement);
        nav.appendChild(liElement);
        footer.appendChild(liaa)
    };
};

/* build the nav*/
create_nav(sections);

/* Create a toggle event in navigation */
mobileMenu.addEventListener('click', ()=> {
    nav.classList.toggle('active');
});

