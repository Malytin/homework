'use strict'


var MyTimer  = {

    body:document.body,
    main:'',
    timer:'',
    startButton:'',
    resetButton:'',
    stopButton:'',

    time:0,
    proceedTimerID:'',
    startTimerID:'',
    startTime:0,
    currTime:0,
    prevTime:0,


    Proceed: function () {
        MyTimer.proceedTimerID = setInterval(function () {
            var t = MyTimer.prevTime - MyTimer.startTime + MyTimer.currTime;
            var ms = t % 1000;
            t = (t/1000) >>0;
            var s = t % 60;
            t = (t/60) >>0;
            var m = t % 60;
            t = (t/60) >>0;
            var h = t % 24;
            t = (t/24) >>0;
            MyTimer.timer.innerHTML = '' + (( h / 10 ) >> 0 ) + ( h % 10 ) + ':' + ( ( m/10 ) >> 0 ) + ( m%10 ) + ':' + ( (s/10) >> 0 ) + (s%10) + '.' + ((ms/100)>>0) + ((ms% 100) >>0);
        },13)
    },
    StartFunction: function () {
      var t = new Date();
      MyTimer.startTime = Date.parse(t) + t.getMilliseconds();
      MyTimer.currTime =MyTimer.startTime;
      MyTimer.startTimerID = setInterval(function() {
          var t = new Date();
          MyTimer.currTime = Date.parse(t) + t.getMilliseconds();
      },6);
      MyTimer.stopButton.style.display= 'block';
      MyTimer.startButton.style.display= 'none';
    },
    StopFunction: function () {
        clearInterval(MyTimer.startTimerID);
        var t = new Date();
        MyTimer.currTime = Date.parse(t) + t.getMilliseconds();
        MyTimer.prevTime = MyTimer.prevTime + MyTimer.currTime - MyTimer.startTime;
        MyTimer.currTime = 0;
        MyTimer.startTime = 0;
        MyTimer.stopButton.style.display= 'none';
        MyTimer.startButton.style.display= 'block';
    },
    ResetFunction: function () {
        clearInterval(MyTimer.startTimerID);
        var t = new Date();
        MyTimer.prevTime = Date.parse(t) + t.getMilliseconds();
        MyTimer.currTime = 0;
        MyTimer.startTime = 0;
        MyTimer.prevTime = 0;
        MyTimer.prevTime = MyTimer.prevTime - MyTimer.currTime;
        MyTimer.stopButton.style.display= 'none';
        MyTimer.startButton.style.display= 'block';

    },

    MainCreate: function () {
        MyTimer.main=document.createElement('div');
        MyTimer.main.classList.add('main');
        MyTimer.body.appendChild(MyTimer.main);
    },
    TimerCreate:function () {
        MyTimer.timer=document.createElement('form');
        MyTimer.timer.classList.add('timer');
        MyTimer.main.appendChild(MyTimer.timer);
    },
    StartButtonCreate: function () {
        MyTimer.startButton=document.createElement('input');
        MyTimer.startButton.classList.add('startButton');
        MyTimer.startButton.setAttribute('type','submit');
        MyTimer.startButton.setAttribute('value', 'start');
        MyTimer.main.appendChild(MyTimer.startButton);
        MyTimer.startButton.setAttribute('onclick', 'MyTimer.StartFunction()');

    },

    ResetButtonCreate: function () {
        MyTimer.resetButton=document.createElement('input');
        MyTimer.resetButton.classList.add('resetButton');
        MyTimer.resetButton.setAttribute('type','submit');
        MyTimer.resetButton.setAttribute('value', 'reset');
        MyTimer.main.appendChild(MyTimer.resetButton);
        MyTimer.resetButton.setAttribute('onclick', 'MyTimer.ResetFunction()');
    },
    StopButtonCreate: function () {
        MyTimer.stopButton=document.createElement('input');
        MyTimer.stopButton.classList.add('stopButton');
        MyTimer.stopButton.setAttribute('type','submit');
        MyTimer.stopButton.setAttribute('value', 'stop');
        MyTimer.main.appendChild(MyTimer.stopButton);
        MyTimer.stopButton.setAttribute('onclick', 'MyTimer.StopFunction()');
    },

    Create: function () {
        MyTimer.MainCreate();
        MyTimer.TimerCreate();
        MyTimer.StartButtonCreate();
        MyTimer.ResetButtonCreate();
        MyTimer.StopButtonCreate();
        MyTimer.Proceed();
    }
}
