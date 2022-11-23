const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: adding event handler
window.addEventListener('beforeinstallprompt', (event) => {

    // Store events
    window.deferredPrompt = event;

    // remove class
    butInstall.classList.toggle('hidden', false);
  });

// TODO: click handler
butInstall.addEventListener('click', async () => {
  
    const promptEvent = window.deferredPrompt;
  
    if (!promptEvent) {
     return;
    }
  
    // Show prompt
    promptEvent.prompt();
    
  
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);
  });

// TODO: at appinstalled event
window.addEventListener('appinstalled', (event) => {
    // Clear prompt
    window.deferredPrompt = null;
  });;
