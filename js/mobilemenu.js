//Mobile menu

$(document).ready(function () {
    $(mobileMenu);

    function mobileMenu() {
        showMenu();
        hideMenu();
    }

    function showMenu() {
        $(".hamburgericon").click(function () {
            $(".mobilemenu").fadeIn(); //show menu
        });
    }

    function hideMenu() {
        $(".mobilemenu .closebutton").click(function () {
            $(".mobilemenu").fadeOut(); //hide menu
        });
    }
});