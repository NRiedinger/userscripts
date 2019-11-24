// ==UserScript==
// @name         pr0ramm new/top toggle
// @version      1.0
// @description  Wechselt zwischen neu und beliebt
// @include		/^https?://pr0gramm.com/.*$/
// ==/UserScript==


(function () {
    'use strict';

    let parentNode = document.getElementById('head-menu');
    let button = document.createElement('a');
    let url = window.location.href;
    let key = url.match(/https?:\/\/pr0gramm.com\/(top|new)\/*/)[1];

    button.setAttribute('id', 'toggleButtonNewTop');
    button.setAttribute('class', 'head-tab active');
    button.setAttribute('style', 'margin-left: 15px;');
    button.textContent = 'toggle';
    if (key === 'new') {
        button.textContent = 'show top';
    }
    else if (key === 'top') {
        button.textContent = 'show new';
    }

    if (parentNode) {
        parentNode.appendChild(button);

        document.getElementById('toggleButtonNewTop').addEventListener('click', buttonClickEvent, false);
    }
})();

function buttonClickEvent(event) {
    let url = window.location.href;
    let key = url.match(/https?:\/\/pr0gramm.com\/(top|new)\/*/)[1];
    let button = document.getElementById('toggleButtonNewTop');

    switch (key) {
        case 'new':
            url = url.replace(key, 'top');
            button.textContent = 'show new';
            break;
        case 'top':
            url = url.replace(key, 'new');
            button.textContent = 'show top';
            break;
        default:
            break;
    }

    window.location = url;
}
