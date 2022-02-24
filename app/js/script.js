$("document").ready(function () {
    // declare variables
    let openNavIcon = $(".open-nav");
    let closeNavIcon = $(".close-nav");
    let mobileMenu = $(".nav-side_menu")
    // nav open event


    $(openNavIcon).click(function () {
        $(mobileMenu).css("left", 0);
        $("body").css("overflow", "hidden")
        setTimeout(() => {
            $(this).hide();
            $(closeNavIcon).show();

        }, 400);
    })
    // nav close event
    $(closeNavIcon).click(function () {
        $(mobileMenu).css("left", -100 + "%")
        $("body").css("overflow", "auto")
        setTimeout(() => {
            $(this).hide();
            $(openNavIcon).show()
        }, 400);
    })
})