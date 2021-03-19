
window.addEventListener('load', () => {
 const openBtn = document
  .querySelector('.open-btn');
 const closeBtn = document
  .querySelector('.close-btn');
 const navs = document
  .querySelectorAll('.nav');

 openBtn.addEventListener('click',
  () => {
   navs.forEach(nav => nav.classList
    .add('visible'));
  });

 closeBtn.addEventListener('click',
  () => {
   navs.forEach(nav => nav.classList
    .remove('visible'));
  });
})





window.addEventListener('beforeinstallprompt', (event) => {
console.log('👍', 'beforeinstallprompt', event);
// Stash the event so it can be triggered later.
window.deferredPrompt = event;
// Remove the 'hidden' class from the install button container
divInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
console.log('👍', 'butInstall-clicked');
const promptEvent = window.deferredPrompt;
if (!promptEvent) {
// The deferred prompt isn't available.
return;
}
// Show the install prompt.
promptEvent.prompt();
// Log the result
const result = await promptEvent.userChoice;
console.log('👍', 'userChoice', result);
// Reset the deferred prompt variable, since
// prompt() can only be called once.
window.deferredPrompt = null;
// Hide the install button.
divInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
console.log('👍', 'appinstalled', event);
// Clear the deferredPrompt so it can be garbage collected
window.deferredPrompt = null;
});
