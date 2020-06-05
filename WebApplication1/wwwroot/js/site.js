/*$(document).ready(function(){
    $("#toggle-button").click(function () {
        $("#toggle").toggleClass(function () {
            return 'shownangcao';
        });
    });
});*/
$(document).ready(function () {
    $("#toggle-button").click(function () {
        $("#toggle").toggleClass("shownangcao",5000);
    });
});