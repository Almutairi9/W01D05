let number1 = 12;
let number2 = 5;
let number3 = 18;
let username = "Rawanfm ";
let password = "rawan12345"; 
let i = 0;
let n = 5;
let string = "";

if (number1 > number2) {
  console.log(`The largest Number is ${number1}`);
} else {
  console.log(`The largest Number is ${number2}`);
}
 
if (number1 % 2 == 0) {
  console.log(`The Number is ${number1} odd `);
} else {
  console.log(`The Number is ${number1} even `);
} 

 if (number1 > 0) /* positvie nigative  */
       {
        console.log( `The Number is ${number1} positive `); 
    }
else {
    console.log( `The Number is ${number1} nigative `); 
}

if (number1>number2 && number1>number3)
{
        if (number2>number3)
        {
            console.log(number1 + ", " + number2 + ", " +number3);
        }
        else
        {
            console.log(number1 + ", " + number3 + ", " +number2);
        }
}
else if (number2>number1 && number2 >number3)
{
        if (number1>number3)
        {
             console.log(number2 + ", " + number1 + ", " +number3);
        }
        else
        {
             console.log(number2 + ", " + number3 + ", " +number1);
        }
}
else if (number3>number1 && number3>number2)
{
        if (number1>number2)
        {
            console.log(number3 + ", " + number1 + ", " +number2);
        }
        else
        {
            console.log(number3 + ", " + number2 + ", " +number1);
        }
}  
    if (username > 6 && password >= 8 )
    {
      console.log(`login successful`);
    }  
    else { 
console.log(`login failed`);
  } 

  
while (i <= 20) 
{   
  console.log(i);
  i++;
}

for ( i = 20; i >= 0 ; i--) 
{
  console.log(i); 
   
}
for(i=1; i<=20; i++)
{ 
   if(i % 2 == 0){
    console.log(i);
  }
}
let a = 5;
while( a <= 8 )
{
  console.log(a);
  a++ ;
}
 
for (let x = 1; x <= n; x++) 
{
  for (let y = 0; y < x; y++) 
  {
    string += "*";
  }
  string += "\n";
}
console.log(string);
 
/*
if(control ==="upper")
{
  ///convert to upper case
  str = str.toUpperCase();
  console.log(str);
} else {
    ///convert to lower case
    str = str.toLocaleLowerCase();
  console.log(str); 
}

let str ="Rawan IT " 
let status = "upper" //"lower" 
*/
