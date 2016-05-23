'use strict';

 var QBase = {
    question:  [
        {
            q:'Что такое JavaScript',
                answer: [
                    {text:'Приложение'},
                    {text:'Название языка'},
                    {text:'Язык програмирования'}
                        ]
        },
        {
            q:'Какое значение по-умолчанию для стиля position',
                answer: [
                    {text:'Inline'},
                    {text:'Static'},
                    {text:'Absolute'}
                ]
        }
    ]
};

localStorage.setItem('QBase',JSON.stringify(QBase));

var QBase = localStorage.getItem('QBase');
QBase = JSON.parse(QBase);

