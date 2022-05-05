const botaoMobile = document.getElementById('botao-mobile');

const botaoCampany = document.getElementById('botton-campany');

const botaoFeatures = document.getElementById('botton-features');

function onclik() {
  if (onclik)
  menu1.classList.add('menuAtivo')
}

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active')
  const active = nav.classList.contains('active');
  event.currenTarget.add('aria-expanded', active);
}

function toggleMenuFeatures(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const menu1 = document.getElementById('menu1');
  menu1.classList.toggle('active')
  const active = menu1.classList.contains('active');
  event.currenTarget.add('aria-expanded', active);
  if (active) {
  }
}

function toggleMenuCampany(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const menu2 = document.getElementById('menu2');
  menu2.classList.toggle('active')
  const active = menu2.classList.contains('active');
  event.currenTarget.setAttribute('aria-expanded', active);
}

botaoMobile.addEventListener('click', toggleMenu);
botaoMobile.addEventListener('touchstart', toggleMenu);

botaoFeatures.addEventListener('click', toggleMenuFeatures);
botaoFeatures.addEventListener('touchstart', toggleMenuFeatures);

botaoCampany.addEventListener('click', toggleMenuCampany);
botaoCampany.addEventListener('touchstart', toggleMenuCampany);