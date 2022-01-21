function f(day) {
    let week =[
        'Воскресенье'
        ,'Понедельник'
        ,'Вторник'
        ,'Среда'
        ,'Четверг'
        ,'Пятница'
        ,'Суббота'
    ];
    if (typeof day === 'number'&& day <=7) {
        console.log(week[day-1]);
    }
    else if (typeof day !== 'number'){
        throw new Error('Error: parameter type is not a Number!');
    }
    else {
        throw new Error('Error: parameter should be in the range of 1 to 7');
    }
}
f(4);