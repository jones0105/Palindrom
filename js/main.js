var a=parseInt(prompt("Enthr The Value"));
result=0;
var c=a;
var b;
 // document.write("Enter the value"+a);
 // document.write("<br>");
  while(a>0)
   {
    b=a%10;
	result= result*10+b;
	a=parseInt(a/10);
   }
  if (result==c)
  {
  document.write("This is Palindrom");
  }
  else
  {
  document.write("This is not Palindrom");
  }