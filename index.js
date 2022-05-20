var RandomNumber1 = Math.floor(Math.random()*6+1);//1-6
var RandomImage1 = "dice"+RandomNumber1+".png";//dice1-6;
var RandomImageSource1 = "images/"+RandomImage1;//images/dice1.png-images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",RandomImageSource1);


var RandomNumber2 = Math.floor(Math.random()*6+1);
var RandomSource2 = "images/"+"dice"+RandomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",RandomSource2)

if (RandomNumber1>RandomNumber2){
  document.querySelector("h1").innerHTML = "Player1 Wins!🎈";
}
else if (RandomNumber1<RandomNumber2){
  document.querySelector("h1").innerHTML = "Player2 Wins!👏";
}
else{
  document.querySelector("h1").innerHTML = "Draw!😂";
}
