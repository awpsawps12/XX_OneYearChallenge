$('img').lazyload({
    effect: 'fadeIn'
});

$(document).ready(function() {

    var DAY_IN_MILLISECONDS  = 1000 * 3600 * 24;
    var HOME_PAGE_URL        = 'http://challenge.li-xinyang.com/';
    var HOME_PAGE_URL_SECURE = 'https://challenge.li-xinyang.com/';
    var START_DATE           = new Date('11/10/2016');

    /**
     * Append elapsed day count label to home page under mountain illustration
     */
    function appendElapsedDayLabel() {
        var url = document.URL;
        if (url == HOME_PAGE_URL_SECURE || url == HOME_PAGE_URL) {
            var now = new Date();

            var diff = Math.abs(now.getTime() - START_DATE.getTime());
            var diffDays = Math.ceil(diff / DAY_IN_MILLISECONDS);

            var label = '<p id="day-count">Day ' + diffDays + '</p>';
            $('.figure').first().append(label);
        }
    }

    appendElapsedDayLabel();
});
