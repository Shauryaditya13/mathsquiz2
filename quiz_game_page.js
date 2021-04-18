player1name=localStorage.getItem("player1namekey");
player2name=localStorage.getItem("player2namekey");
player1score=0;
player2score=0;
document.getElementById("player1_name").innerHTML=player1name+" : ";
document.getElementById("player2_name").innerHTML=player2name+" : ";
document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;
document.getElementById("player_question").innerHTML="Question turn:"+player1name;
document.getElementById("player_answer").innerHTML="Answer turn:"+player2name;

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

player_question="player1";
player_answer="player2";

function check() {
    getanswer=document.getElementById("answer").value;

    if(actual_answer==getanswer) {
        if(player_answer=="player2"){
            player2score=player2score+1;
            document.getElementById("player2_score").innerHTML=player2score;
        }else{
            player1score=player1score+1;
            document.getElementById("player1_score").innerHTML=player1score;
        }
    }
    if(player_question=="player1"){
        player_question="player2";
        document.getElementById("player_question").innerHTML="Question turn:"+player2name;
    }else{
        player_question="player1";
        document.getElementById("player_question").innerHTML="Question turn:"+player1name;
    }

    if(player_answer=="player1"){
        player_answer="player2";
        document.getElementById("player_answer").innerHTML="Answer turn:"+player2name;
    }else{
        player_answer="player1";
        document.getElementById("player_answer").innerHTML="Answer turn:"+player1name;
    }
    document.getElementById("output").innerHTML="";
}