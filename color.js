var game= {}
game
var num=6;
var color=[];
var sq=document.querySelectorAll(".square");
var right;
var tryagain=document.getElementById("try");
var rg=document.getElementById("rgb");
var h1=document.querySelector("h1");
var resetbutton=document.getElementById("reset");
var buttonMode=document.querySelectorAll(".mode");

rg.textContent=right;
intit();
function intit()
{
 buttonm();
 squarecol();
 reset();
}
function buttonm()
{
   for(var i=0;i<buttonMode.length;i++)
{
 buttonMode[i].addEventListener("click",function()
  {
  buttonMode[0].classList.remove("select");
  buttonMode[1].classList.remove("select");
  this.classList.add("select");
  this.textContent==="Easy" ? num=3 : num=6;
  reset();
  });
}
}
 function squarecol()
 {
  for(var i=0;i<sq.length;i++)
 {
    sq[i].style.background =color[i];
   sq[i].addEventListener("click",function(){
    var clickedcol=this.style.background;
      if(right===clickedcol)
      {
        tryagain.textContent="correct!"
        resetbutton.textContent="Try Again?"
        correct(clickedcol);
        h1.style.background=clickedcol;
      }
      else
      {
        tryagain.textContent="Try Again"      
      this.style.background="#232323";
    }
   });
 }
 }

function reset()
{
color = genraterandom(num);
   right=pickcolor();
   rg.textContent=right;
   resetbutton.textContent="New Colors"
    h1.style.background="steelblue";
    tryagain.textContent=""
   for(var i=0;i<sq.length;i++)
 {
  sq[i].style.display= "block";
  if(color[i])
    sq[i].style.background =color[i];
  else
    sq[i].style.display= "none";
}
}
resetbutton.addEventListener("click",function()
{
  reset();
}); 

/*easy.addEventListener("click",function ()
{
  easy.classList.add("select");
  hard.classList.remove("select");
  num=3;
  color = genraterandom(num);
  right=pickcolor();
  rg.textContent=right;
  tryagain.textContent=""
  h1.style.background="steelblue";
  for(var i=0;i<sq.length;i++)
  {
    if(color[i])
    {
      sq[i].style.background=color[i];
    }
    else
      sq[i].style.display="none";
  }
});
hard.addEventListener("click",function ()
{
  easy.classList.remove("select");
  hard.classList.add("select");
  num=6;
  color = genraterandom(num);
  right=pickcolor();
  tryagain.textContent=""
  rg.textContent=right;
  h1.style.background="steelblue";
  for(var i=0;i<sq.length;i++)
  {
      sq[i].style.background=color[i];
      sq[i].style.display="block";
  }   
});  */

 
 function pickcolor()
{
 var random= Math.floor(Math.random()*color.length);
 return color[random];
}
 function correct(color)
 {
  for(var i=0;i<sq.length;i++)
 {
    sq[i].style.background =color;
 }
}

function genraterandom (num) {
  arr=[]
  for(var i=0;i<num;i++)
  {
     arr.push(randompick());
  }
  return arr;
}
function randompick () {
 
 var r= Math.floor(Math.random()*256);
 var g= Math.floor(Math.random()*256);
 var b= Math.floor(Math.random()*256);
 return "rgb("+r+", "+g+", "+b+")" ;
}
/*resetbutton.addEventListener("click",function()
{
  color = genraterandom(num);
   right=pickcolor();
   rg.textContent=right;
   resetbutton.textContent="New Colors"
    h1.style.background="steelblue";
    tryagain.textContent=""
   for(var i=0;i<sq.length;i++)
 {
    sq[i].style.background =color[i];
}
});  */
