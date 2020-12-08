var e1, e2, e3, e4;

//IHM

$(document).ready(function () {
    init();
    $("#carreButton").click(function () {
        if (parseInt($("#carrePoposition").val()) === e1.getDiscriminant()) {
            $("#carrePoposition").addClass("correct");
        }
        else {
            $("#carrePoposition").addClass("false");
            $("#carreSolution").html("La bonne réponse était :  " + e1.getDiscriminant());
        }
    });


    $("#petitButton").click(function () {
        if (parseInt($("#petitPoposition").val()) === e2.getDiscriminant()) {
            $("#petitPoposition").addClass("correct");
        }
        else {
            $("#petitPoposition").addClass("false");
            $("#petitSolution").html("La bonne réponse était :  " + e2.getDiscriminant());
        }
    });


    $("#grandButton").click(function () {
        if (parseInt($("#grandPoposition").val()) === e3.getDiscriminant()) {
            $("#grandPoposition").addClass("correct");
        }
        else {
            $("#grandPoposition").addClass("false");
            $("#grandSolution").html("La bonne réponse était : " + e3.getDiscriminant());
        }
    });


    $("#negatifButton").click(function () {
        if (parseInt($("#negatifPoposition").val()) === e4.getDiscriminant()) {
            $("#negatifPoposition").addClass("correct");
        }
        else {
            $("#negatifPoposition").addClass("false");
            $("#negatifSolution").html("La bonne réponse était : " + e4.getDiscriminant());
        }
    });

    $("#nouveau").click(function () {
        document.location.reload();
    })
});

function init() {
    e1 = discriminantCarre();
    $("#carre").html(e1.getEquation());

    e2 = discriminantNonCarrePetit();
    $("#petit").html(e2.getEquation());

    e3 = discriminantNonCarreGrand();
    $("#grand").html(e3.getEquation());

    e4 = discriminantNegatif();
    $("#negatif").html(e4.getEquation());
}





//LOGIQUE

/**
 * Genere une equation dont le discriminant est un carre
 */
function discriminantCarre() {
    var a = 0;
    var b = 0;
    var c = 0.1;
    var carre = 0;
    var i = 0;
    while (c % 1 !== 0) {
        a = getRandomInt(5);
        b = getRandomInt(5);
        carre = getRandomInt(12);
        i++;
        c = (-1) * ((carre * carre) - (b * b)) / (4 * a);
    }
    var equationCarre = new Equation(a, b, c);
    return equationCarre;
}
/**
 * Genere une equation dont le discriminant n'est pas un carre, mais est petit
 */
function discriminantNonCarrePetit() {
    var a = 0;
    var b = 0;
    var c = 0.1;
    var discriminant = 0.1;

    while (c % 1 !== 0 || Math.sqrt(discriminant) % 1 === 0 || discriminant < 0) {
        a = getRandomInt(11);
        b = getRandomInt(11);
        var max = 1 + getRandomInt(9);
        c = (-1) * (max - (b * b)) / (4 * a);
        discriminant = (b * b) - (4 * a * c);
    }
    var equationPetit = new Equation(a, b, c);
    return equationPetit;
}
/**
 * Genere un equation dont le discriminant n'est pas un accre et est grand
 */
function discriminantNonCarreGrand() {
    var a = 0;
    var b = 0;
    var c = 0.1;
    var discriminant = 0.1;

    while (c % 1 !== 0 || Math.sqrt(discriminant) % 1 === 0 || discriminant < 0) {
        a = getRandomInt(11);
        b = getRandomInt(11);
        var max = 10 + getRandomInt(140);
        c = (-1) * (max - (b * b)) / (4 * a);
        discriminant = (b * b) - (4 * a * c);
    }
    var equationGrand = new Equation(a, b, c);
    return equationGrand;
}
/**
 * Genere une equation dont le discriminant est negatif
 */
function discriminantNegatif() {
    var a = 0;
    var b = 0;
    var c = 0.1;
    var discriminant = 0.1;

    while (c % 1 !== 0 || discriminant >= 0) {
        a = getRandomInt(11);
        b = getRandomInt(11);
        var max = (-1) * getRandomInt(140);
        c = (-1) * (max - (b * b)) / (4 * a);
        discriminant = (b * b) - (4 * a * c);
    }
    var equationNegatif = new Equation(a, b, c);
    return equationNegatif;
}
/**
 * Genere un nombre aleatoire dans un interval [-max; max] en excluant 0
 */
function getRandomInt(max) {
    var plusOuMoins = Math.round(Math.random()) * 2 - 1;
    var value = Math.floor(Math.random() * Math.floor(max));
    if (value === 0) {
        value++;
    }
    return plusOuMoins * value;
}


let Equation = class Equation {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getDiscriminant() {
        return (this.b * this.b) - ((4 * this.a * this.c));
    }
    getEquation() {
        var res = "";
        if (this.a === 1) {
            res += "x²";
        }
        else if (this.a === -1) {
            res += "-x²"
        }
        else {
            res += this.a + "x²";
        }
        if (this.b < 0) {
            res += this.b + "x";
        }
        else if (this.b === 1) {
            res += "+x"
        }
        else if (this.b === -1) {
            res += "-x"
        }
        else {
            res += "+" + this.b + "x";
        }
        if (this.c < 0) {
            res += this.c;
        }
        else {
            res += "+" + this.c;
        }
        return res;
    }
}