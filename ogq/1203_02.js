const person = {
    name: "oz"
    age: 500,
    mbti : null;
}:

console.log(Object.keys(person).lenhth);

// person에 있는 값(value)들 중에, null이 있는지 확인해보자.
// 있으면 true, 없으면 false
// includes() 에서도 사용.

const hasNull = Object.values(person).includes(null);
console.log(hasNull);

const tasks = [
    { id: 1, text: "walf"}
    { id: 2, text: "running"}
];

const newTask = {id:3, text: "programming"};

const finalTasks = /* tasks, newTask */

const tasks2 = [1,2, 5]
const newTasks2 = 3;
const finalTasks2 = [...tasks2, newTasks2];

console.log(finalTasks2); 
