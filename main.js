function myMeter() {
    let num1 = document.getElementById("num1").value;
    let var2 = document.getElementById("selection2").value;
    if (var2 == "meter") {
        result = num1 * 1;
        return result;
    } else if (var2 == "foot") {
        result = num1 * 3.281;
        return result;
    }
    else if (var2 == "millimeter") {
        result = num1 * 1000;
        return result;
    } else if (var2 == "centimeter") {
        result = num1 * 100;
        return result;
    }

};

function myFoot() {
    let num1 = document.getElementById("num1").value;
    let var2 = document.getElementById("selection2").value;
    if (var2 == "foot") {
        result = num1 * 1;
        return result;
    } else if (var2 == "meter") {
        result = num1 / 3.281;
        return result;
    }
    else if (var2 == "millimeter") {
        result = num1 * 304.8;
        return result;
    } else if (var2 == "centimeter") {
        result = num1 * 30.48;
        return result;
    }

};

function myMilli() {
    let num1 = document.getElementById("num1").value;
    let var2 = document.getElementById("selection2").value;
    if (var2 == "millimeter") {
        result = num1 * 1;
        return result;
    } else if (var2 == "meter") {
        result = num1 / 1000;
        return result;
    }
    else if (var2 == "foot") {
        result = num1 / 304.8;
        return result;
    } else if (var2 == "centimeter") {
        result = num1 / 10;
        return result;
    }

};

function myCenti() {
    let num1 = document.getElementById("num1").value;
    let var2 = document.getElementById("selection2").value;
    if (var2 == "centimeter") {
        result = num1 * 1;
        return result;
    } else if (var2 == "meter") {
        result = num1 / 100;
        return result;
    }
    else if (var2 == "foot") {
        result = num1 / 30.48;
        return result;
    } else if (var2 == "millimeter") {
        result = num1 * 10;
        return result;
    }

};

const ClearFields = function () {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
    document.getElementById("num4").value = "";


};

function myKilogram() {
    let num3 = document.getElementById("num3").value;
    let var2 = document.getElementById("selection4").value;
    if (var2 == "kilogram") {
        result = num3 * 1;
        return result;
    } else if (var2 == "gram") {
        result = num3 * 1000;
        return result;
    }
    else if (var2 == "pound") {
        result = num3 * 2.205;
        return result;
    } else if (var2 == "tonne") {
        result = num3 / 1000;
        return result;
    }

};

function myGram() {
    let num3 = document.getElementById("num3").value;
    let var2 = document.getElementById("selection4").value;
    if (var2 == "gram") {
        result = num3 * 1;
        return result;
    } else if (var2 == "kilogram") {
        result = num3 / 1000;
        return result;
    }
    else if (var2 == "pound") {
        result = num3 / 453.6;
        return result;
    } else if (var2 == "tonne") {
        result = num3 / 1,000,000;
        return result;
    }

};

function myPound() {
    let num3 = document.getElementById("num3").value;
    let var2 = document.getElementById("selection4").value;
    if (var2 == "pound") {
        result = num3 * 1;
        return result;
    } else if (var2 == "kilogram") {
        result = num3 / 2.205;
        return result;
    }
    else if (var2 == "gram") {
        result = num3 * 453.6;
        return result;
    } else if (var2 == "tonne") {
        result = num3 / 2205;
        return result;
    }

};

function myTonne() {
    let num3 = document.getElementById("num3").value;
    let var2 = document.getElementById("selection4").value;
    if (var2 == "tonne") {
        result = num3 * 1;
        return result;
    } else if (var2 == "kilogram") {
        result = num3 * 1000;
        return result;
    }
    else if (var2 == "gram") {
        result = num3 * 1e+6;
        return result;
    } else if (var2 == "pound") {
        result = num3 * 2205;
        return result;
    }

};