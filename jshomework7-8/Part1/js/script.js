$(function (){
    var $menu = $('.menu');
    var $left = $('.menu li:nth-child(1)');
    var $center = $('.menu li:nth-child(2)');
    var $right = $('.menu li:nth-child(3)');
    var $border = $('.submenu li,.submenu_center li,.submenu_right li');
    var $nonShadow = $('.submenu p,.submenu_center p,.submenu_right p');
    $nonShadow.on('click', function () {
        var $item = $('.submenu li,.submenu_center li,.submenu_right li');
        $item
            .css({
                border: 'none',
                height: '28px'
            })
    });
    $border.on('click', function () {
        $(this)
            .css({
                height: '26px',
                border: '1px solid #4eabda'
            })
    });

    $left.on('click',function () {
        var $fuck = $('.submenu');
        $fuck
            .css({
                display: 'block',
                zindex: '2'
            });
        var $fuckCenter = $('.submenu_center');
        $fuckCenter
            .css({
                display: 'none'
            });
        var $fuckRight = $('.submenu_right');
        $fuckRight
            .css({
                display: 'none'
            });
    });
    $center.on('click',function () {
        var $fuckCenter = $('.submenu_center');
        $fuckCenter
            .css({
                display: 'block'
            });
        var $fuck = $('.submenu');
        $fuck
            .css({
                display:'none'
            });
        var $fuckRight = $('.submenu_right');
        $fuckRight
            .css({
                display: 'none'
            });
    });
    $right.on('click',function () {
        var $fuckRight = $('.submenu_right');
        $fuckRight
            .css({
                display: 'block'
            });
        var $fuck = $('.submenu');
        $fuck
            .css({
                display:'none'
            });
        var $fuckCenter = $('.submenu_center');
        $fuckCenter
            .css({
                display: 'none'
            });
    });
});
