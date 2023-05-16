$(document).ready(function () {
    $(".form").submit(function (event) {
        event.preventDefault();

        $("#__programm-toggle").click(function () {
            $("#__programm-show").hide();
            $("#__programm-hide").show();
        });


    });
})