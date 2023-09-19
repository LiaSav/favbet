'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('.body'),
        popup = body.querySelector('.popup'),
        more = body.querySelector('.more');

    more.addEventListener('click', () => {
        popup.classList.toggle('popup_active');
        body.classList.toggle('body_popup-open');
    });

    body.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay')) {
            popup.classList.remove('popup_active');
            body.classList.remove('body_popup-open');
        }
    });
});