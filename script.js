'use strict';

const booksList = document.querySelector('.books');
const books = document.querySelectorAll('.book');
const adv = document.querySelector('.adv');
const body = document.querySelector('body');

const titleBook = document.querySelectorAll('a');

const listChapters = document.querySelectorAll('ul');
const chapters = document.querySelectorAll('li');

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

adv.remove();

booksList.append(books[1]);
booksList.append(books[0]);
booksList.append(books[4]);
booksList.append(books[3]);
booksList.append(books[5]);
booksList.append(books[2]);

titleBook[4].textContent = 'Книга 3. this и Прототипы Объектов';

listChapters[0].append(chapters[0]);
listChapters[0].append(chapters[1]);
listChapters[0].append(chapters[3]);
listChapters[0].append(chapters[6]);
listChapters[0].append(chapters[8]);
listChapters[0].append(chapters[4]);
listChapters[0].append(chapters[5]);
listChapters[0].append(chapters[7]);
listChapters[0].append(chapters[9]);
listChapters[0].append(chapters[2]);
listChapters[0].append(chapters[10]);

listChapters[5].append(chapters[46]);
listChapters[5].append(chapters[47]);
listChapters[5].append(chapters[55]);
listChapters[5].append(chapters[49]);
listChapters[5].append(chapters[50]);
listChapters[5].append(chapters[48]);
listChapters[5].append(chapters[52]);
listChapters[5].append(chapters[53]);
listChapters[5].append(chapters[51]);
listChapters[5].append(chapters[54]);
listChapters[5].append(chapters[56]);

const cloneChapters = chapters[1].cloneNode(true);

cloneChapters.textContent = 'Глава 8: За пределами ES6';

listChapters[2].append(cloneChapters);
chapters[26].before(cloneChapters);



console.log(chapters);