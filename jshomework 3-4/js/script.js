'use strict'

var QForm = {
    body: document.body,
    questionForm:'',
    header:'',
    question:[],
    questionText:[],
    answerBlock:[],
    answer:'',
    answerCheck:'',
    answerLabel:'',
    answerButton:'',

    FormCreate: function(){
        this.questionForm=document.createElement('form');
        this.questionForm.classList.add('questionForm');
        this.body.appendChild(this.questionForm);
    },
    HeaderCreate: function() {
        this.header=document.createElement('h1');
        this.header.classList.add('header');
        this.header.innerHTML='Тест по программированию';
        this.questionForm.appendChild(this.header);
    },
    QuestionBlockCreate: function(){
        this.questionBlock=document.createElement('ol');
        this.questionBlock.classList.add('questionBlock');
        this.questionForm.appendChild(this.questionBlock);

        for(var i=0;i<QBase.length;i++){
            this.QuestionCreate(i);
        }
    },
    QuestionCreate: function(i) {
        this.question[i]=document.createElement('li');
        this.question[i].classList.add('question');
        this.questionBlock.appendChild(this.question[i]);

        this.questionText[i]=document.createElement('h2');
        this.questionText[i].classList.add('questionText');
        this.questionText[i].innerHTML=QBase[i].q;
        this.question[i].appendChild(this.questionText[i]);

        this.AnswerBlockCreate(i);
    },
    AnswerBlockCreate: function(i){
        this.answerBlock[i]=document.createElement('ol');
        this.answerBlock[i].classList.add('answerBlock');
        this.question[i].appendChild(this.answerBlock[i]);

        for(var j=0;j<QBase[i].a.length;j++){
            this.AnswerCreate(i,j);
        }
    },
    AnswerCreate:function(i,j){
        this.answer=document.createElement('li');
        this.answer.classList.add('answer');
        this.answerBlock[i].appendChild(this.answer);

        this.answerCheck=document.createElement('input');
        this.answerCheck.classList.add('answerCheck');
        this.answerCheck.setAttribute ('id', 'answerCheck'+i+'_'+j);
        this.answerCheck.setAttribute ('type', 'checkbox');
        this.answer.appendChild(this.answerCheck);

        this.answerLabel=document.createElement('label');
        this.answerLabel.classList.add('answerLabel');
        this.answerLabel.setAttribute ('for', 'answerCheck'+i+'_'+j);
        this.answerLabel.innerHTML=QBase[i].a[j];
        this.answer.appendChild(this.answerLabel);
    },
    ButtonCreate: function(){
        this.answerButton=document.createElement('input');
        this.answerButton.classList.add('answerButton');
        this.answerButton.setAttribute('type', 'submit');
        this.answerButton.setAttribute('value','Проверить мои результаты');
        this.questionForm.appendChild(this.answerButton);
    },
    Create: function(){
        this.FormCreate();
        this.HeaderCreate();
        this.QuestionBlockCreate();
        this.ButtonCreate();
    }
}

3
