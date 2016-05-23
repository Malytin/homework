'use strict';
$(function () {
    var $html = $('html');
    var $body = $('body');
    var $answerLabel = $('.answerLabel');
    var html = $('#test').html();
    var tmpl =  $('#test').html();
    tmpl = _.template(tmpl);

    var content = tmpl(html,{
        QBase: QBase
    });


    $('body').append(content);

    for(var i=0;i<QBase.question.length; i++){
        $('.answer_checkbox'+i).addClass('disabled'+i);
        $('.disabled0').on('change',function(){
            if(this.checked){
                $(this).removeClass('disabled0');
                $('.disabled0').attr('disabled','disabled');
            } else {
                $(this).addClass('disabled0');
                $('.disabled0').removeAttr('disabled');
            }
        });
        $('.disabled1').on('change',function(){
            if(this.checked){
                $(this).removeClass('disabled1');
                $('.disabled1').attr('disabled','disabled');
            } else {
                $(this).addClass('disabled1');
                $('.disabled1').removeAttr('disabled');
            }
        });
    }

    var check1;
    var check2;
    var check3;
    $('#chBox_0_2').on('click', function () {
        check1 = true
    });
    $('#chBox_1_1').on('click', function () {
        check2 = true
    });




    $('.answerButton').on('click', function (e) {

        e.preventDefault();
        if (check1 && check2 == true) {
            alert('И это правильный ответ');
            location.reload();
        }   else {
            alert('Это неправильный ответ');
            location.reload();
        }


    });
});
