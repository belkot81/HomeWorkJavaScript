//Перепишите `if..else` с использованием нескольких операторов `?`

var message,login;
login = 'Pitter';

login === 'Pitter' ? message = 'Hi!'
    : login === 'Owner' ? message = 'Hello'
    :  login === '' ? message = 'unknown'
        : message = 'Некорректный ввод данных!'

console.log (message);