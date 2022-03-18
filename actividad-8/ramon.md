# Quiz

​

#### Nombre: Ramon Penilla

## Chapter 1: Into Programming

​

### Self-Evaluation

​

#### Section: Code

## ​

​

##### 1. What's a program?

​

> Set of instructions to computers to do something
> ​

##### 2. What's a computer language?

​

> Is a set of specific words to make instructions for computers to do something.
> ​

##### 3. What's a variable?

​

> As Up&Going said, it's like a box to hold values
> ​

##### 4. What's a statement?

​

> Group of numbers, words and operators
> ​

##### 5. From the statement `a = b * 2` identify its parts _(literals, variables, operators)._

​

> a is a variable expression, assigment operator, variable expression, multiplicator operator,
> literal expression.
> ​

##### 6. What's an expression?

​

> An expression is when it compare variables with operators
> ​

##### 7. How many expressions can you indentify from the statement `a = b * 2;`?

​

> 4:
> ​

##### 8. What's the difference between `interpreted` and `compiled` code?

​

> interpretado lee y ejecuta linea por linea. Compilado lee todo el código y despues ejecuta
> ​

##### 9. Is JavaScript `interpreted` or `compiled`? Explain why.

​

> interpretado
> ​

#### Section: Try It Yourself

## ​

​

##### 10. Output Exercises.

​
Consider: `var a = 1;`
​
Write the code to:
​

###### 10.1. print `a` in the **console**

​

> \_`// console.log(a);
> ​

###### 10.2. show `a` in a **popup**

​

> \_`// alert(a);
> ​

##### 11. Input Exercises.

​
Code challenge:
​
Ask the user's name with a **prompt** message `"Please, type your username"` and store it in a variable `username`, then log the value in the console.
​
Solution:
​

```js
// var username = prompt('Escribe tu nombre);
// console.log(username);
```

​

#### Section: Operators

## ​

​

##### 12. Complete the sentence:

​
JavaScript has both u**_ and b_** operators, and one special t\_\_\_ operator
​

> ​

##### 13. Operators types.

​
Name the _types of operators_ you know, and give some **basic** examples.
​

> aritmeticos como + - \* / para comparar == === !== !=== logicos como && || y para asignar = y +=
> ​

#### Section: Values & Types

## ​

​

##### 14. Name JavaScript built-in types aka as _primitive_ values.

​

> number, string, boolean, undefined y null
> ​

##### 15. What's coercion in JS?

​

> _your answer here_
> ​

##### 16. Explain the difference between `implicit` and `explicit` coercion in JS. Give examples.

​

> _your answer here_
> ​

#### Section: Code Comments

## ​

​

##### 17. What are the two types of comments in JS? Give examples.

​

> para cada línea con //
> para bloques se abre con /_ y cierra _/
> ​

##### 18. Why is it important to comment code?

​

> para que trabajar mejor en equipo ya que otras personas pueden entender mejor tu código
> ​

#### Section Variables

## ​

​

##### 19. Does JavaScript use Static or Weak typing?

​

> _your answer here_
> ​

##### 20. Describe `static typing` aka `type enforcement`.

​

> _your answer here_
> ​

##### 21. Describe `weak typing` aka `dynamic typing`.

​

> _your answer here_
> ​

##### 22. Name some conventions to write constants in JS.

​

> const
> ​

#### Section: Blocks

## ​

​

##### 23. Is this valid code in JS?

​

```js
var amount = 100;
​
{
  amount = amount * 2;
  console.log(amount)
}
```

​

> no porque se está sobre escribiendo el var amount
> ​

#### Section: Conditionals

## ​

​

##### 24. Write a block of code to validate if a variable `number` is less than `10` to log `one digit`, log `two digits` otherwise.

​
Solution:
​

```js
var number = 9
if(number < 10){
    console.log('one digit);
}else{
    console.log('two digits');
}
```

​

#### Section: Loops

## ​

​

##### 25. Write a block of code to log numbers from `0-9` using `while`, `do-while` and `for` loops.

​
**`while`** solution:
​

```js
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

​
**`do-while`** solution:
​

```js
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
```

​
**`for`** solution:
​

```js
var numero = 0;
for (i = 0; i < 10; i++) {
  console.log(i);
}
```

​

##### 26. What are the three clauses for a `for` loop?

​

> _your answer here_
> ​

#### Section: Functions

## ​

​

##### 27. What's a function?

​

> una serie de instrucciones agrupadas en un bloque
> ​

##### 28. Write a function `sum` that receives two numbers as arguments and returns the sum of both.

​
Solution:
​

```js
// your code here
```

​

##### 29. What's `scope` in JS?

​

> _your answer here_
> ​

##### 30. Answer `true` or `false` for the following statements:

​
Consider:
​

```js
function outer() {
  var a = 1;
​
  function inner() {
    var b = 2;
  }
​
  inner();
}
​
outer();
```

​

###### 30.1. Does the `inner` function have access to the `outer` function scope?

​

> _your answer here_
> ​

###### 30.2. Does the `outer` function have access to the `inner` function scope?

​

> _your answer here_
> ​

#### Section: Challenges

## ​

​

##### 1.1 Create a function `calculateAreaOfACircle` that receives `radius` as parameter. Use a constant `PI` equal to `3.14159`. _Avoid the temptation of using the `Math`library._

​
Solution:
​

```js
// create the constat PI here
​
​
// create your function here
​
​
// Do NOT touch this code.
console.log('Expect area of a circle with radius = "3" to be "28.27431" ->', calculateAreaOfACircle(3) == 28.27431)
```
