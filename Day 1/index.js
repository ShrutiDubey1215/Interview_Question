/*1. ==: check the value equal or not
we are finding duble equal to .when we talk about comparison operator. We are getting true or false.
for example:  let a = 10;
              let b = 15;
              let res = a==b;
              console.log(res);

 ===: triple equal to also compares the data type along with the value.
 for example: let a = 10;
              let b = "10";
              let res = a===b;
              console.log(res);


  2. What are the differences between var,let and const?
   var: var is globally exicute it means var can be Re-declared and Re-assign.
   for example:  var num = 10;
                 console.log(num);

                 var num = 10;
                 var num = 20;
                 console.log(num);

    let: let num1 = 20;
         console.log(num1);

         let num1 = 20;
         let num1 = 25;
         console.log(num1);

    it means let can Re-assign but it can't Re-declared


    const: const num2 = 40;
           console.log(num2);

           const num2 = 40;
           const num2 = 20;
           console.log(num2);

    it means it can't Re-assign the value side the const variable.

    it can not Re-assign and Re-declared.

3. what is execution context ?
  The environment in which our code is executed and is evaluated.
  JavaScript engine creates the global execution context before it starts to  execute any code.
  Variables,and function that is not inside any function.A new execution context gets created every time a function is executed.


4. what is creation phase and execution phase ?
 Creation Phase: variable object are created.
                 scope chains are created.
                 this variable created.
 Execution Phase: current execution context run line by line.

5. what is hoisting ?
 hoisting is a default behaviour of javascript .where all the variable and function declarations are moved on top.
  a = 1;
  alert('a=' +a);
  var a;
  (DECLARATION MOVES TO TOP)

6. Difference between undefined vs not defined vs NaN
NaN: Not a number: As the name implies, it is used to denote that the value of an object is not a number.
There are many ways that you can generate this error, one being invalid math opertaions such as 0/0 or sqrt(-1)

undefined: It means that the object doesn't have any value, therefore undefined.
This occurs when you create a variable and don't assign a value to it.

Not defined: In JavaScript, it is one of the reference errors that JavaScript will throw
when someone accesses the variable which is not inside the memory heap.

7. How many operator do we have in JS
Types of operators:
i)Arithmetic Operators (%, -, +, *, /)
ii)Assignment Operators
iii)Comparison (Relational) Operators(==, ===, !==, !=, <, >, <= , >=)
iv)Logical Operators(&& , || , ! )
v)Bitwise Operators

8. Explain Local Scope, Block Scope, Functional Scope and Scope chain in JavaScript

Local Scope : Local scope means that a variable is only available inside the function where it’s defined.
You can’t access it from outside that function.

Block Scope : Block Scope applies to variables declared inside a block of code, like inside an if statement or a loop.
Variables declared with let or const in a block can’t be accessed outside that block.

Functional Scope : Functional scope is similar to local scope.
It means that variables inside a function are only accessible within that function and any functions nested inside it.

Scope Chain : How JavaScript finds variables, starting from the current scope and moving outward.
