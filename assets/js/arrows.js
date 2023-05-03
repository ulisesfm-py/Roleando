
$(document).ready(function () {
    const $arrowLeft = $(".arrow-left");
    const $arrowRight = $(".arrow-right");
    const $gameCardInnerContainer = $(".game-card-inner-container");

    $arrowLeft.on("click", function () {
        $gameCardInnerContainer.animate(
            {
                scrollLeft: "-=" + window.innerWidth,
            },
            500
        );
    });

    $arrowRight.on("click", function () {
        $gameCardInnerContainer.animate(
            {
                scrollLeft: "+=" + window.innerWidth,
            },
            500
        );
    });
});
