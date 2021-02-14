var colorArray = ["green","red","yellow","blue"];
var gamePattern = [];
var userClickPattern = [];
var started = false;
$(document).keypress(function(){
    if(!started){
    started = true;
    nextSequence();
    }
});
$(".color").click(function(){
    let userClick = $(this).attr("id");
    userClickPattern.push(userClick);
    playSound(userClick);
    checkAnswer(userClickPattern.length - 1);

});

function nextSequence(){
    userClickPattern = [];
    var rand = Math.floor(Math.random()*4);
    gamePattern.push(colorArray[rand]);
    var name = gamePattern[gamePattern.length - 1];
    $("#level").text("Level " + gamePattern.length);
    $("."+ name).fadeOut(100).fadeIn(100);
    playSound(name);
}

function playSound(name){
    var aduio = new Audio("sounds/"+ name +".mp3")
    aduio.play();
}
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickPattern[currentLevel]){
    
    if(gamePattern.length === userClickPattern.length){
        setTimeout(()=>{nextSequence();},1000);
    }
}
    else{
        console.log("wrong");
        var audio = new Audio("sounds/wrong.mp3");
        $("#level").text("Game Over")
        $("body").addClass("game-over");
        setTimeout(()=>{
            $("body").removeClass("game-over");
            audio.play();
        },200);
        startOver();
    }

}
function startOver(){
    gamePattern = [];
    userClickPattern = [];
    started = false;
    $("#level").text("Game Over, Press any key to restart")

}
