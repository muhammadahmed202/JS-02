// Chapter 01
// Q 01
// var nam = "My name is Abdul Rafay.";
// var age = "I am 16 years old.";
// var batch = "I study in batch 11.";
// document.write(nam + age + batch);
// Q 02
// document.write("<h1>Legal Variables</h1><p>myName</p><p>_count</p><p>$price</p><p>age23</p><p>first_name</p>");
// document.write("<h1>Illegal Variables</h1><p>3colors</p><p>my-variable</p><p>@name</p><p>function</p><p>var</p>");

// OR

// var myName = "Rafay";
// alert(myName);
// var _count = 100;
// alert(_count);
// var $price = "50rs";
// alert($price);
// var age23 = 23;
// alert(age23);
// var first_name = "Abdul";
// alert(first_name);

// var 3colors = "Rgb";
// alert(3colors);
// var my-variable = "hello";
// alert(my-variable);
// var @name = "Rafay";
// alert(@name);
// var function = "alert";
// alert(function);
// var var = "var";
// alert(var);

// Q 03
// document.write("<h1>Rules for naming JS variables</h1><p>Variable names can only contain numbers,$,_.and For example:$my_1stVariable<br>Variables must begin with a letter,$ or _. For example:$name, _name or name<br>Variable names are case sensitive.<br>Variable names should not be JS keywords.</p>");
// Chapter 02
// Q 01 and Q 02
// var ten = 10
// var two = 2
// document.write("10 + 2 = "+(ten + two))
// document.write("<br>"+ "10 - 2 = " + (ten - two))
// document.write("<br>"+ "10 * 2 = " + (ten * two))
// document.write("<br>"+ "10 % 2 = " + (ten % two))
// Q 03
// var myVariable;
// document.write("Value after variable declaration is: " + myVariable + "<br>")
// myVariable = 5;
// document.write("Initial value: " + myVariable + "<br>")
// myVariable++;
// document.write("Value after increment is: " + myVariable + "<br>")
// myVariable +=7;
// document.write("Value after addition is: " + myVariable + "<br>")
// myVariable--;
// document.write("Value after decrement is: " + myVariable + "<br>")
// var remainder = myVariable % 3
// document.write("The remainder is: " + remainder)
// Q 04
// var ticket = 600
// document.write("Total cost to buy 5 tickets to a movie is " +  ticket*5 + "PKR")
// Q 05

// var one = 1;
// var two = 2;
// var three = 3;
// var four = 4;
// var five = 5;
// var six = 6;
// var seven = 7;
// var eight = 8;
// var nine = 9;
// var ten = 10;

// document.write("<h1>"+"Table of "+four+"</h1>")
// document.write("4x1 = " + (four*one)+ "<br>")
// document.write("4x2 = " + (four*two)+ "<br>")
// document.write("4x3 =" + (four*three)+ "<br>")
// document.write("4x4 =" + (four*four)+ "<br>")
// document.write("4x5 =" + (four*five)+ "<br>")
// document.write("4x6 =" + (four*six)+ "<br>")
// document.write("4x7 =" + (four*seven)+ "<br>")
// document.write("4x8 =" + (four*eight)+ "<br>")
// document.write("4x9 =" + (four*nine)+ "<br>")
// document.write("4x10 =" + (four*ten))

// Q 06
// var celsius = 25;
// var fahrenheit = (celsius*9/5)+32;
// document.write(celsius + "°C is " + fahrenheit + "°F" + "<br>");

// var fahrenheit2 = 70;
// var celsius2 = (fahrenheit2-32)*5/9;
// document.write(fahrenheit2 +"°F is " + celsius2 + "°C");
// Q 07
// var item1 = 650;
// var item2 = 100;
// var orderItem1 = 3;
// var orderItem2 = 7;
// var shippingCharges = 100;

// document.write("<h1>"+"Shopping Cart"+"</h1>")
// document.write("Price of item 1 is "+item1 +"<br>")
// document.write("Quantity of item 1 is "+orderItem1 +"<br>")
// document.write("Price of item 2 is "+item2 +"<br>")
// document.write("Quantity of item 2 is "+orderItem2 +"<br>")
// document.write("Shipping Charges "+shippingCharges+"<br>"+"<br>")
// document.write("Total cost of your order is "+(item1*3+item2*7+shippingCharges))
// Q 08
// var totalMarks = 980;
// var obtainedMarks = 804;

// document.write("<h1>"+"Marks Sheet"+"</h1>")
// document.write("Total Marks: "+totalMarks+"<br>")
// document.write("Obtained Marks: "+obtainedMarks+"<br>")
// document.write("Percentage: "+(obtainedMarks*100/totalMarks)+"%")

// Q 09
// var cDollar = 10;
// var cSr = 25;
// var dollar = 104.80;
// var sr = 28;
// var cPkr = (cDollar*dollar)+(cSr*sr);

// document.write("<h1>"+"Currency in PKR"+"</h1>")
// document.write("Total Currency in PKR: "+cPkr)

// Q 10
// var number = 10;
// var result = (number+5)*10/2;

// document.write(result)

// Q 11
// var currentYear = 2023;
// var birthYear = 2000;
// document.write("<h1>"+"Age Calculator"+"</h1>")
// document.write("Current Year: "+currentYear +"<br>")
// document.write("Birth Year: "+birthYear +"<br>")
// document.write("Your Age is: "+(currentYear-birthYear))

// Q 12
// var radius = 20;
// var circumference = 2*3.142*radius;
// var area = 3.142*radius*radius;
// document.write("<h1>"+"The Geometrizer"+"</h1>")
// document.write("Radius of a circle: "+radius + "<br>")
// document.write("The circumference is: "+circumference + "<br>")
// document.write("The area is: "+area)

// Q 13
// var favouriteSnack = "Chocolate Chips";
// var currentAge = 15;
// var maximumAge = 65;
// var perDay = 3;
// document.write("<h1>"+"The Lifetime Supply Calculator"+"</h1>")
// document.write("Favorite Snack: " +favouriteSnack+"<br>")
// document.write("Current Age: " +currentAge+"<br>")
// document.write("Estimated Maximum Age: " +maximumAge+"<br>")
// document.write("Amount of snacks per day: " +perDay+"<br>")
// document.write("You will need "+((maximumAge-currentAge)*perDay)+" Chocolate Chips to last you until the ripe old age of "+maximumAge )

// Chapter 03
// Q 01
// var a = 10;

// document.write("<h1>"+"Result"+"</h1>")
// document.write("The value of a is: "+ a + "<br>")

// ++a;
// document.write("The value of ++a is: "+ a + "<br>")
// document.write("Now the value of a is: "+ a + "<br>")

// document.write("The value of a++ is: "+ a + "<br>")
// a++;
// document.write("Now the value of a is: "+ a + "<br>")

// --a;
// document.write("The value of --a is: "+ a + "<br>")
// document.write("Now the value of a is: "+ a + "<br>")

// document.write("The value of a-- is: "+ a + "<br>")
// a--;
// document.write("Now the value of a is: "+ a + "<br>")

// Q 02

// var a = 2;
// var b = 1;
// document.write("a is: " + a +"<br>")
// document.write("b is: " + b +"<br>")

// var result = --a - --b + ++b + b--;
// document.write("Result is: " +result)

// Q 03

// var greet = prompt()
// greet = "Howdy!"
// document.write(greet)

// Q 04
// var number = prompt("Enter a number:")

// if(number === ""){
//   number = 5;
// }

// document.write("<h2> Multiplication of Table of " + number + "</h2>");
// for(var i = 1 ; i<=10 ; i++){
//   document.write(number + "x" + i + "=" + (number*i) + "<br>" )
// }

// Q 05

// var subject1 = prompt("Enter name of first subject:");
// var subject2 = prompt("Enter name of second subject:");
// var subject3 = prompt("Enter name of third subject:");

// var totalMarks = 100;

// var obtainedMarks1 = +(prompt("Enter obtained marks for " + subject1 + ":"));

// var obtainedMarks2 = +(prompt("Enter obtained marks for " + subject2 + ":"));
// var obtainedMarks3 = +(prompt("Enter obtained marks for " + subject3 + ":"));

// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks*100/(totalMarks*3));

// document.write("<table border='1'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><td colspan='2'>Total Obtained Marks</td><td>" + totalObtainedMarks + "</td></tr>");
// document.write("<tr><td colspan='2'>Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>");
// document.write("</table>");


































































































