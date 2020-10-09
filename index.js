/* eslint-disable */

import Datepicker from 'datepicker';

let $input = document.querySelector('#dp');

window.dp = new Datepicker($input, {
    inline: true,
    range: true ,
    toggleSelected: false,
    timepicker: true,
    multipleDates: false,
    buttons: ['today', 'clear'],
    multipleDatesSeparator: ',        ',
    maxDate: new Date(2020, 9, 20, 10, 30), //TODO NEXT обработка мин макс значений для таймпикера
    minDate: new Date(2020, 9, 5, 15, 45),
});

if (module.hot) {
    module.hot.accept();
}
