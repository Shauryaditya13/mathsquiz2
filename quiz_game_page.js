function send() {
 number1 = document.getElementById("number_1").value;
 number2 = document.getElementById("number_2").value;
 actual_answer = parseInt(number1) * parseInt(number2);
question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
input_answer = "<br> Answer: <input type='text' id='answer'>";
check_button = "<br> <br> <button class='btn btn-info' onclick='check()'> Check </button>";
row = question_number + input_answer + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("number_1").value = "";
document.getElementById("number_2").value = "";
}