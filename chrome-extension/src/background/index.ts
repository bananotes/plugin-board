import 'webextension-polyfill';
import { exampleThemeStorage } from '@extension/storage';

exampleThemeStorage.get().then(theme => {
  console.log('theme', theme);
});

console.log('background loaded');
console.log("Edit 'chrome-extension/src/background/index.ts' and save to reload.");

// background script
chrome.runtime.onMessage.addListener(function (message, sender, senderResponse) {
  if (message.type === 'request') {
    console.log('message', message);
    fetch(message.url, {
      method: message.method,
      headers: {
        Authorization: `Basic ${btoa('api:xxxxxx')}`,
        'Content-Type': 'application/json',
      },
      ...(message.method !== 'GET' && message.method !== 'HEAD' && { body: JSON.stringify(message.data) }),
    })
      .then(res => {
        console.log('res', res);
        return res.json();
      })
      .then(res => {
        senderResponse(res);
      })
      .catch(err => {
        console.error(err);
      });
  }
  return true;
});
