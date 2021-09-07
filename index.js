for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", function () {
        var innerthing = this.innerHTML;
        sounds(innerthing);
        animateit(innerthing);

    });
}

document.addEventListener("keypress", function (event) {
    sounds(event.key);
    animateit(event.key);
});
function sounds(key) {


    switch (key) {


        case "w":
            var vfirst = new Audio("tom-1.mp3");
            vfirst.play();
            break;
        case "a":
            var first = new Audio("tom-2.mp3");
            first.play();
            break;
        case "s":
            var sec = new Audio("tom-3.mp3");
            sec.play();
            break;
        case "d":
            var third = new Audio("tom-4.mp3");
            third.play();
            break;
        case "j":
            var four = new Audio("tom-5.mp3");
            four.play();
            break;
        case "k":

            var five = new Audio("tom-6.mp3");
            five.play();
            break;
        case "l":
            var sixth = new Audio("tom-7.mp3");
            sixth.play();
            break;

        default:
            break;
    }


}

function animateit(ele) {
    var current = document.querySelector("." + ele);
    current.classList.add("pressed");

    setTimeout(function () {
        current.classList.remove("pressed");
    }, 100);


}
