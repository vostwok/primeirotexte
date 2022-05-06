const botaoMobile = document.getElementById('botao-mobile');

const botaoCampany = document.getElementById('botton-campany');

const botaoFeatures = document.getElementById('botton-features');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  const menu1 = document.getElementById('menu1');
  const menu2 = document.getElementById('menu2');
  nav.classList.toggle('active')
  if (nav.classList.contains('active')) {
    
  } else {
    menu1.classList.remove('active')
    menu2.classList.remove('active')
  }
}

function toggleMenuFeatures(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const menu1 = document.getElementById('menu1');
  const menu2 = document.getElementById('menu2');
  menu1.classList.toggle('active')
  document.body.classList.toggle('menu-feature-ativo')
  if (document.body.classList.contains('menu-feature-ativo')) {
    document.body.classList.remove('menu-campany-ativo')
    menu2.classList.remove('active')
  }

}

function toggleMenuCampany(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const menu2 = document.getElementById('menu2');
  const menu1 = document.getElementById('menu1');
  menu2.classList.toggle('active')
  document.body.classList.toggle('menu-campany-ativo')
  if (document.body.classList.contains('menu-campany-ativo')) {
    document.body.classList.remove('menu-feature-ativo')
    menu1.classList.remove('active')
}
}

botaoMobile.addEventListener('click', toggleMenu);
botaoMobile.addEventListener('touchstart', toggleMenu);

botaoFeatures.addEventListener('click', toggleMenuFeatures);
botaoFeatures.addEventListener('touchstart', toggleMenuFeatures);

botaoCampany.addEventListener('click', toggleMenuCampany);
botaoCampany.addEventListener('touchstart', toggleMenuCampany);