const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
});

butInstall.addEventListener('click', async () => {
    if(!window.deferredPrompt){return;}
    window.deferredPrompt.prompt();
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;

    butInstall.style.display = "none";
});
