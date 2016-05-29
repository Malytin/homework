'use strict';

var QBase = {
	title: 'Какой то тест',
	question: [{
		q: 'Что такое JavaScript?',
		answer: [{ text: 'Приложение', check: false }, { text: 'Язык програмирования', check: true }, { text: 'Название языка', check: false }]
	}, {
		q: 'Какое значение по-умолчанию для стиля position?',
		answer: [{ text: 'Static', check: true }, { text: 'Inline', check: false }, { text: 'Absolute', check: false }]
	}]
};

localStorage.setItem('QBase', JSON.stringify(QBase));

var QBase = localStorage.getItem('QBase');
QBase = JSON.parse(QBase);
