var contenu = {
    en: {
        bienvenue: "Welcome to CheatSheets",
        /* autres traductions en anglais */
    },
    fr: {
        bienvenue: "Bienvenue sur CheatSheets",
        /* autres traductions en français */
    },
    /* autres langues */
};

var langue = navigator.language.slice(0, 2); // obtient les deux premiers caractères du code de la langue
if (!contenu[langue]) {
    langue = "en"; // langue par défaut si la langue du navigateur n'est pas prise en charge
}

document.querySelector("h1").textContent = contenu[langue].bienvenue;

//Card effect
var $cheatsheets = $('.cheatsheet'),
    w = $(window).width(), //window width
    h = $(window).height(); //window height

$(window).on('mousemove', function(e) {
    var offsetX = 0.5 - e.pageX / w, //cursor position X
        offsetY = 0.5 - e.pageY / h; //cursor position Y

    $cheatsheets.each(function() {
        var $this = $(this),
            $shine = $this.find('.shine'),
            $layers = $this.find('div[class*="layer-"]'),
            offsetPoster = $this.data('offset'),
            dy = e.pageY - h / 2, //@h/2 = center of poster
            dx = e.pageX - w / 2, //@w/2 = center of poster
            theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
            angle = theta * 180 / Math.PI - 90, //convert rad in degrees
            transformPoster = 'translateY(' + -offsetX * offsetPoster + 'px) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

        //get angle between 0-360
        if (angle < 0) {
            angle = angle + 360;
        }

        //gradient angle and opacity
        $shine.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + e.pageY / h +