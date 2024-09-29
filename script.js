'use strict';
//we used a for loop to target all the buttons..//
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const CloseModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click',
        openModal);

btnCloseModal.addEventListener('click', CloseModal);
overlay.addEventListener('click', CloseModal);

//how to handle key press events. we can also close the buttons by hittimg the escape key on the key board.//
//document.addeventlistener is always listening for events and triggered when specified in the code
//there are 3 types of events for the keyboard.. therr is the keydown,key up, and key press..keyboard events are global events..we need to look at (event object) in order to figure out with key was pressed..to do that, we will give the funtion a parameter..(e)..as the event occurs, javascript calls the function with the eventobject as an argument

Document.addEventListener('keydown', function (e) {
    console.log(e.key);

    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            CloseModal();
        }
    }
});
