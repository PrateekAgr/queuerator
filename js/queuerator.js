var x=1;
function navButton() {
  if(x==1){
    document.getElementById("nav-bar-Options").style.display="inline-block";
    document.getElementById("nav-bar-cross").style.color="#007eff";
    x=0;
  }
  else
  {
    document.getElementById("nav-bar-Options").style.display="none";
    x=1;
  }
}