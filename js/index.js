/* ===== Show Nav Bar ===== */
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            // change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header__toggle','navbar')

/* ===== LINK ACTIVE ===== */
const linkColor = document.querySelectorAll('.nav__link');

function colorLink () {
    linkColor.forEach(e => e.classList.remove('active'));
    this.classList.add('active');
}

linkColor.forEach(e => e.addEventListener('click', colorLink));