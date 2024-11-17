/*Дата и время. Математические ф-ции. Работа со строками. Регулярные выражения.*/

/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.*/

{
    let string = 'aaa@bbb@ccc';
    console.log(string.replace(/@/g, '!'));
}

/*2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025.*/

{
    let date = '2025-12-31';
    let dateNew = date.split('-');
    console.log(dateNew[2] + '/' + dateNew[1] + '/' + dateNew[0]);
}

/*3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice).*/

{
    let str = '«Я учу javascript!»';

    console.log(str.substr(2, 4));
    console.log(str.substr(6, 11));

    console.log(str.substring(2, 6));
    console.log(str.substring(7, 17));

    console.log(str.slice(2, 6));
    console.log(str.slice(7, 17));
}

/*4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/

{
    let arr = [4, 2, 5, 19, 13, 0, 10];
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 3);
    }
    console.log(Math.sqrt(sum));
}

/*5. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.*/

{
    let a = 3;
    let b = 5;
    let c = a - b;

    console.log(Math.abs(c));
}

/*6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).*/


{
    function dateHours(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    let date = new Date();
    let dateNow = dateHours(date.getDate() + '.' + dateHours(date.getMonth() + 1) + '.' + date.getFullYear());
    let numbers = dateHours(date.getHours()) + ':' + dateHours(date.getMinutes()) + ':' + dateHours(date.getSeconds());

    console.log(numbers + ' ' + dateNow);

}

/*7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.*/

{
    let str = 'aa aba abba abbba abca abea';
    let regexp = /a(b+)a/g;

    console.log(str.match(regexp));
}

/*8. Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер телефона>). Функция должна возвращать true или false. Используйте регулярные выражения.*/

{
    function checkPhone(phone) {
        let reg = /^\+?(?:375|8) ?0?\(?(?:29|33|44|25)\)? ?[2-9]{3}-? ?[0-9]{2}[- ]?[0-9]{2}$/gi;

        return reg.test(phone);

    }
    console.log(checkPhone('+375 33 123-45-67'));
    console.log(checkPhone('8 (029) 123 45 67'));
    console.log(checkPhone('1234567')); //почему-то показывает постоянно false
}

/*9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов.
Функция должна возвращать true или false. Используйте регулярные выражения.*/

{
    let email_1 = "name@gmail.com",
        email_2 = "na me@gmail.com",
        email_3 = "name@gma@il.com",
        email_4 = "name@gmail..com",
        email_5 = "na@gmail.com",
        email_6 = "sergey@yandex.ru",
        email_7 = "sergey1987@yandex.ru";

    function checkEmail(email) {
        let status = false;

        // весь адрес не должен содержать русские буквы

        let arrCyr = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
        let checkCyr = true; 
        for(let i = 0; i < email.length; i++) {
            if (arrCyr.includes(email[i])) {
                checkCyr = false;
                break;
            }
        }
        status = checkCyr;
        
        /* весь адрес не должен содержать спецсимволы, кроме одной «собачки», знака подчеркивания, дефиса и точки*/

        let arrSpecExcl = ['~', '!', '*', '#', '$', '%', '^', '&', '(', ')', '+', '=', '/', '\\', '[', ']', '{', '}', '|', ',', '<', '>', '?', ' ', '?', "'", '"'];
        let checkSpecExcl = true; 
        for(let i = 0; i < email.length; i++) {
            if (arrSpecExcl.includes(email[i])) {
                checkSpecExcl = false;
                break;
            }
        }
        status = checkSpecExcl;

        // имя эл. почты (до знака @) должно быть длиной более 2 символов

        let emailArr = email.split('@');
        let name = emailArr[0];
        let domain = emailArr[1];

        if (name.length <= 2) status = false;

        // имя может содержать только буквы, цифры, знак подч и точку

        for(let i = 0; i < name.length; i++) {
            if (name[i] == '@' || name[i] == '.' || email[i] == ' ') {
                status = false;
            }

        }

        /* после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов*/

        let domainArr = domain.split('.');
        domain = String(domainArr[1]);

        if (domain < 2 || domain > 11) {
            status = false;
        }

        return status;
    }

    console.log(checkEmail(email_1));
    console.log(checkEmail(email_2));
    console.log(checkEmail(email_3));
    console.log(checkEmail(email_4));
    console.log(checkEmail(email_5));
    console.log(checkEmail(email_6));
    console.log(checkEmail(email_7));
}

/*10. Напишите ф-цию, которая из полного адреса с параметрами и без, например: https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес доменного имени (https://tech.onliner.by), остальную часть адреса без параметров (/2018/04/26/smart-do-200/), параметры (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе может и не быть каких-либо составляющих. Ф-ция должна возвращать массив.*/
{
    function parceUrl(url) {
        let reg = /^(https?:\/\/[^\/]+)(\/[^?#]*)?(\?[^#]*)?(#.*)?$/;

        let matches = url.match(reg);

        return [matches[1] || '', matches[2] || '', matches[3] ? matches[3].substring(1) : '', matches[4] || ''];
    }

    console.log(parceUrl('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'));
}