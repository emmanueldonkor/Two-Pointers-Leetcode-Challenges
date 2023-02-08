/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  //using two pointers
  people = people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;
  let counter = 0;
  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    counter++;
  }
  return counter;
};
