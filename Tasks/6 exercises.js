// 1 задача
const fruits = ['kiwi', 'apple', 'kiwi', 'banana', 'orange', 'kiwi', 'apple', 'kiwi'];

const CountFruit = (list) => {
  const counter = {};
  list.forEach(element => {
    if (!counter[element]){
      counter[element] = 1;
    } else {
      counter[element] ++;
    }
  });
  return counter
}

// 2 задача
const fruits2 = ['kiwi', 'apple', 'kiwi', 'banana', 'orange', 'kiwi', 'apple', 'kiwi'];

const FounderFruits = (list) => {
  const array = {};
  list.forEach(f => {
   array[f] = true;
  });
  return array;
}

// 3 задача
const students = [
  { name: 'alex', age: 20 },
  { name: 'mike', age: 24 },
  { name: 'masha', age: 20 },
  { name: 'stas', age: 18 },
];

const groupStudents = (list) => {
  group = {}
  list.forEach(s => {
    if (!group[s.age]){
      group[s.age] = [s]
    }else{
      group[s.age].push(s);
    }
  });
  return group;
}
//console.log(groupStudents(students))

// 4 задача
const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6];
const sum = 10;

const findParis = (nums, target) => {
  for (let i = 0; i < nums.length; i++){
    const numFirst = nums[i];
    for (let j = i+1; j < nums.length; j++){
      const numSecond = nums[j]
      if (numFirst + numSecond === target){
        return [numFirst, numSecond];
      }
    }
  }
  return [];
};
//console.log(findParis(myNumbers, sum))

//5 задача

const friends = [
  { name: 'alex', pizzas: ['cheese', 'pepperoni']},
  { name: 'mike', pizzas: ['salami', 'margarita']},
  { name: 'stas', pizzas: ['meat']},
  { name: 'anna', pizzas: ['fish']}
];

const pizzas = friends.reduce((accum, current) => {
  return [...accum, ...current.pizzas];
}, []);
//console.log(pizzas)

// 6 задача

const myStr = "pizza"
const reverseString = (str) => {
  const reversed = [];

  for (let i = str.length - 1; i >= 0; i--){
    reversed.push(str[i]);
  }
  return reversed.join('');
}
//console.log(reverseString(myStr))
