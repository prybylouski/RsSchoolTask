const panel = document.querySelectorAll('.panel');

function panelOpen() {
  if (this.classList.contains('open')) {
    this.classList.remove('open');
  } else {
    panel.forEach((item) => {
      item.classList.remove('open');
    });
    this.classList.add('open');
  }
}

function panelActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panel.forEach((el) => el.addEventListener('click', panelOpen));
panel.forEach((el) => el.addEventListener('transitionend', panelActive));