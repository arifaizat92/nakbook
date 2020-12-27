$(function () {
    //Calendar: date and time
    $('.ui.calendar')
    .calendar();

    $('#date_calendar')
    .calendar({
    type: 'date'
    });

    $('#time_calendar')
    .calendar({
    type: 'time'
    });

    //dropdown
    $('.selection.dropdown')
    .dropdown()
    ; 
});
