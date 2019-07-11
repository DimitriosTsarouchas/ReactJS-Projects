import foods from './foods';
import { choice, remove } from './helpers';

// Randomly draw a fruit from the array
let fruit = choice(foods);

console.log(`I'd like a ${fruit} please!`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious ! May I have another?`);

// Remove the fruit from the array
let remaining = remove(foods, fruit);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`)