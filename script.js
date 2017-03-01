$(document).ready(function(){
    var guesses = 3
     $("#result").hide();
     $("#other_result").hide();
     $("#alternate_result").hide();
    $("button").click(function(){
        var password=$("input").val();
        if(guesses === 0){
            $("#alternate_result").show();
            $("#other_result").hide();
        }
         else if(password === "computer science"){
            $("#result").show();
            $("#other_result").hide();
        }
        else{
            $("#other_result").show();
            $("#result").hide();
            guesses = guesses - 1
            
        }
    });
})