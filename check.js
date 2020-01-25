function ct(){
  var e=document.getElementById("one").value;
  var f=document.getElementById("two").value; 
  var g=document.getElementById("three").value;
  var a = parseInt(e);
  var b = parseInt(f);
  var c = parseInt(g);
  var d=document.getElementById("op");
  var h = a+b;
  var g = c+b;
  var i = c+a;
  var count = 0;
  if(a<b+c && b<c+a && c<a+b){
    if(a==b && b==c){
      d.innerHTML="Equilateral Triangle";
    }
    else if(a==b || b==c || c==a){
      d.innerHTML="Isoceles Triangle";
    }
    else{
      d.innerHTML="Scalene Triangle";
    }
  }
  else{
    if(a==b && b==c){
      d.innerHTML="Impossible Triangle";
    }
    else{
      d.innerHTML="Not a Triangle";
    }
  }    
}