function refreshGame()
{ var a=Math.ceil(Math.random()*6);
  var b=Math.ceil(Math.random()*6);
  document.querySelectorAll(".img")[0].setAttribute("src","images/dice"+a+".png");
  document.querySelectorAll(".img")[0].setAttribute("alt","dice"+a);
  document.querySelectorAll(".img")[1].setAttribute("src","images/dice"+b+".png");
  document.querySelectorAll(".img")[1].setAttribute("alt","images/dice"+b);
  if(a>b)
  {document.querySelector('h1').innerHTML="<img> Player1 wins";
   document.querySelector('img').setAttribute("src","images/flag.gif");
  }
  else if(b>a)
  {document.querySelector('h1').innerHTML="Player2 wins <img>";
   document.querySelector('img').setAttribute("src","images/flag.gif");
  }
  else
  {document.querySelector('h1').innerHTML="Draw";
  }
}
 if (performance.navigation.type == 1) {
   refreshGame();
 }
