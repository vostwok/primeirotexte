const botaoMobile = document.getElementById('botao-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active')
  const active = nav.classList.contains('active');
  event.currenTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currenTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currenTarget.setAttribute('aria-label', 'Abrir Menu')
  }
}

botaoMobile.addEventListener('click', toggleMenu);
botaoMobile.addEventListener('touchstart', toggleMenu)