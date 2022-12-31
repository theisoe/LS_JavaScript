/*Inputs:
2 arguments: array and object 
array must contains 2 or more elements: when combined with space, it should produce a name
object must contains 2 keys: "title" and "occupation", and the appropriate values 
Output:
Greeting with person's fullname and person's title
*/

function greetings (array, object) {
  return `Hello, ${array.join(' ')}! Nice to have a ${object.title} ${object.occupation} around.`;
}

console.log(greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }));