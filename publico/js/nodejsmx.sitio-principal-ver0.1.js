/**
 * Created by jorgearturo on 10/22/14.
 */

/* DEPENDENCIES */
// jQuery
// bcat bgswitcher https://github.com/bcat-eu/jquery-bgswitcher

var srcBgArray = [
    "publico/img/bg-df.jpg",
    "publico/img/bg-mty.jpg",
    "publico/img/bg-gdl.jpg"
];

$(document).ready(function() {
    $('#bg-body').bcatBGSwitcher({
        urls: srcBgArray,
        alt: 'Ciudades'
    });
});