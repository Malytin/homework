$(function () {
    var $body = $('div');
    var $main = $('form');
    var $first = $('#firstname');
    var $last = $('#lastname');
    var $address =$('#address');
    var $submit =$('input[type="submit"]');
    $first.hover(function () {
        var $textFirst = $('.first');
        $textFirst
            .css({
                display: 'block'
            })
            .animate({
                opacity:"1"
            },2000);
        var $textLast = $('.second');
        $textLast
            .css({
                display: 'none'
            })
            .animate({
                opacity:"1"
            },2000);
        var $textAddress = $('.third');
        $textAddress
            .css({
                display: 'none'
            })
            .animate({
                opacity:"1"
            },2000);
    });
    $last.hover(function () {
        var $textLast = $('.second');
        $textLast
            .css({
                display: 'block'
            })
            .animate({
                opacity:"1"
            },2000);
        var $textFirst = $('.first');
        $textFirst
            .css({
                display: 'none'
            })
            .animate({
                opacity:"1"
            },2000);
        var $textAddress = $('.third');
        $textAddress
            .css({
                display: 'none'
            })
            .animate({
                opacity:"1"
            },2000);
    });
    $address.hover(function () {
        var $textAddress = $('.third');
        $textAddress
            .css({
                display: 'block'
            })
            .animate({
                opacity:"1"
            },2000);
        var $textFirst = $('.first');
        $textFirst
            .css({
                display: 'none'
            })
            .animate({
                opacity:"1"
            },2000);
        var $textLast = $('.second');
        $textLast
            .css({
                display: 'none'
            })
            .animate({
                opacity:"1"
            },2000);
    });
    $submit.on('click',function (e) {
        var $showAll = $('.second,.first,.third');
        e.preventDefault();
        $showAll
            .css({
                display: 'block'
            })
            .animate({
                opacity:"1"
            },2000);
    });
    $body.hover(function () {
        var $noneAll = $('.second,.first,.third');
        $noneAll
            .css({
                display: 'none'
            })
            .animate({
                opacity:"1"
            },2000);
    })
});