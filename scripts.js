let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ]
let containerDiv = $("#calc_container");


// Numbers

if ($("button.btn_num0").click(function () {
        let newP = numbers[0];
        $("p#num_holder").append(newP)
    }));

if ($("button.btn_num1").click(function () {
        let newP = numbers[1]
        $("p#num_holder").append(newP)
    }));

if ($("button.btn_num2").click(function () {
        let newP = numbers[2]
        $("p#num_holder").append(newP)
    }));

if ($("button.btn_num3").click(function () {
        let newP = numbers[3]
        $("p#num_holder").append(newP)
    }));

if ($("button.btn_num4").click(function () {
        let newP = numbers[4]
        $("p#num_holder").append(newP)
    }));

if ($("button.btn_num5").click(function () {
        let newP = numbers[5]
        $("p#num_holder").append(newP)
    }));

if ($("button.btn_num6").click(function () {
        let newP = numbers[6]
        $("p#num_holder").append(newP)
    }));

if ($("button.btn_num7").click(function () {
        let newP = numbers[7]
        $("p#num_holder").append(newP)
    }));

if ($("button.btn_num8").click(function () {
        let newP = numbers[8]
        $("p#num_holder").append(newP)
    }));

if ($("button.btn_num9").click(function () {
        let newP = numbers[9]
        $("p#num_holder").append(newP)
    }));

// operators

if ($("button.btn_op_dot").click(function () {
        let newP = "."
        $("p#num_holder").append(newP)
    }));

if ($("button.btn_op_equals").click(function () {
        let newP = "."
        $("p#num_holder").append(newP)
    }));

if ($("button.btn_clear").click(function () {
        $("#num_holder").remove()
    }));

if ($("button.btn_divide").click(function () {
        let newP = "/"
        $("p#num_holder").append(newP)
    }));

if ($("button.btn_times").click(function () {
        let newP = "*"
        $("p#num_holder").append(newP)
    }));

if ($("button.btn_subtract").click(function () {
        let newP = "-"
        $("p#num_holder").append(newP)
    }));

if ($("button.btn_addition").click(function () {
        let newP = "+"
        $("p#num_holder").append(newP)
    }));

if ($("button.btn_del").click(function () {
        // num_holder.pop()
        // // $("p").last().remove("p")
        // // let newP = "."
        // // $("p#num_holder").append(newP)
    }));