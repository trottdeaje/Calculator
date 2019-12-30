//call each button from specified Id


//create button that when a value is pressed, will show up on screen


//every time a user inputs a value, add it to an arrary, 

//when an operater is pressed, concate the array items, convert them to ints, and add the value to a variable




//array of numbers
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "/", "="];

//array to hold pressed items
let doStuff = [];


if ($(":button").click(function () {

        var newP = $("<span>");
        var value = numbers[0];
        doStuff.push(value);
        $("#show_numbers").append(newP);
        newP.html(value);

    })) {

}




if ($("#num1").click(function () {
        var newP = $("<span>");
        var value = numbers[1];
        doStuff.push(value);
        $("#show_numbers").append(newP);
        newP.html(value);

    })) {

}



if ($("#num2").click(function () {
        var newP = $("<span>");
        var value = numbers[2];
        doStuff.push(value);
        $("#show_numbers").append(newP);
        newP.html(value);

    })) {


}



if ($("#num3").click(function () {
        var newP = $("<span>");
        var value = numbers[3];
        doStuff.push(value);
        $("#show_numbers").append(newP);
        newP.html(value);

    })) {


}



if ($("#num4").click(function () {
        var newP = $("<span>");
        var value = numbers[4];
        doStuff.push(value);
        $("#show_numbers").append(newP);
        newP.html(value);
    })) {

}



if ($("#num5").click(function () {
        var newP = $("<span>");
        var value = numbers[5];
        doStuff.push(value);
        $("#show_numbers").append(newP);
        newP.html(value);
    })) {

}



if ($("#num6").click(function () {
        var newP = $("<span>");
        var value = numbers[6];
        doStuff.push(value);
        $("#show_numbers").append(newP);
        newP.html(value);

    })) {

}


if ($("#num7").click(function () {
        var newP = $("<span>");
        var value = numbers[7];
        doStuff.push(value);
        $("#show_numbers").append(newP);
        newP.html(value);

    })) {

}


if ($("#num8").click(function () {
        var newP = $("<span>");
        var value = numbers[8];
        doStuff.push(value);
        $("#show_numbers").append(newP);
        newP.html(value);
    })) {


}


if ($("#num9").click(function () {
        var newP = $("<span>");
        var value = numbers[9];
        doStuff.push(value);
        $("#show_numbers").append(newP);
        newP.html(value);


    })) {

}


//take values from list and add them to a variable 
if ($("#add").click(function () {

        var value_1 = doStuff.join("");
        var value_2 = parseInt(value_1);
        console.log(value_2);
        for (var i = doStuff.length; i > 0; i--) {
            doStuff.pop()
        }

    })) {

}



//take each input, and concat them next to each other


//create an if state, which ever button they press, add it to a list, if they push either, addition, subraction, division, multiply, it will create an 
//and entirely new array(list) for more values, and will continue to do so until the equal button gets pushed.