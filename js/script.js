const body = document.querySelector('body');
toggle = body.querySelector('.welcome__mode');

toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')){
        toggle.innerHTML = 'light mode.';
    } else {
        toggle.innerHTML = 'dark mode.';
    }
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
   body.classList.add('dark-mode');
   toggle.innerHTML = 'light mode.';
} else {
    body.classList.remove('dark-mode');
    toggle.innerHTML = 'dark mode.';
}
