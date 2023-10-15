'use strict'

{
  const open = document.getElementById('open');
  const humberMenu = document.querySelector('.humber-menu');
  const close = document.getElementById('close');

  close.addEventListener('click', () =>{
    humberMenu.classList.add('show');
    close.classList.add('hide');
  });

  open.addEventListener('click', () =>{
    humberMenu.classList.remove('show');
    close.classList.remove('hide');
  });
}