$(function () {
    var html= $('#page').html();
    var title = [
        {
            title: 'Малютін Олександр Сергійович'
        },
        {
            vipusknik:'Випускник ХНАДУ'
        }
        ];
    var thumbnail = [
        {
            thumbnail: '1.jpg'
        }
    ];
    var  question = [
        {
            question: 'Чому я хочу пізнати Frontend '
        }
    ];
    var  answer = [
        {
            answer:'Давно мріяв вивчати'
        },
        {
            answer:'За цим зараз майбутнє'
        },
        {
            answer:'За це готові гарно платити'
        }
    ];
    var number = [
        {
            number:'Мій контактний телефон'
        }
    ];
    var number2 = [
        {
            number2:'380666394478'
        }
    ];
    var profile = [
        {
            profile:'Мій профіль в ВК'
        }
    ];
    var link = [
        {
            link:'https://vk.com/id26400593'
        }
    ];
    var feedback = [
        {
            feedback:'Мій федбек'
        }
    ];
    var content = tmpl(html,{
        data:title,
        dataImage: thumbnail,
        dataP: question,
        dataLi: answer,
        dataPhone: number,
        dataNumber: number2,
        dataProfile: profile,
        dataLink: link,
        dataFeedback: feedback
    });
    $('body').append(content)
});
