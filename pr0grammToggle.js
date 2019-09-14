// ==UserScript==
// @name         pr0ramm new/top toggle
// @version      1.0
// @description  Wechselt zwischen neu und beliebt
// @include		/^https?://pr0gramm.com/.*$/
// ==/UserScript==


(function() {
    'use strict';

    let parentNode = document.getElementById('head-menu');
    let button = document.createElement('a');
    button.setAttribute('id', 'toggleButtonNewTop');
    button.setAttribute('class', 'head-tab active');
    button.textContent = 'toggle';

    if(parentNode){
        parentNode.appendChild(button);

        document.getElementById('toggleButtonNewTop').addEventListener('click', buttonClickEvent, false);
    }
})();

function buttonClickEvent(event){
    let url = window.location.href;
    let key = url.match(/https?:\/\/pr0gramm.com\/(top|new)\/*/)[1];

    switch(key){
        case 'new':
            url = url.replace(key, 'top');
            break;
        case 'top':
            url = url.replace(key, 'new');
            break;
        default:
            break;
    }

    window.location = url;
}
