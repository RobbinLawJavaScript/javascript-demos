// observe the bottom of the file.

const FOOD_THOUGHTS = {
  'sushi': 30,
  'chicken tikka masala': 13,
  'ice cream': 8,
  'delicious tacos': 10,
  'thai curries': 5,
  'healthy food': 35,
  'ramen': 12,
  'bingsu': 3
}

const FOOD_TIMES = {
  '8am':1,
  '9am':9,
  '10am':2,
  '11am':5,
  '12pm':8,
  '1pm':2,
  '2pm':1,
  '3pm':5,
  '4pm':1,
  '5pm':1,
  '6pm':3,
  '7pm':10,
  '8pm':5,
  '9pm':1,
  '10pm':1,
  '11pm':4,
  '12am':1,
}

export const getFoodThoughtsKeys = () => {
  // Returns an array of keys as strings from a literal object.
  const keys = Object.keys(FOOD_THOUGHTS);
  console.log (`Food Thought Keys = ${keys}`);
  console.log (`Food Thought index 1 Key = ${keys[1]}`);
  console.log (`typeof = ${typeof(keys)}`);
  return keys;

}

export const getFoodThoughtsValues = () => {
  // Returns an array of values as numbers from a literal object.
  const values = Object.values(FOOD_THOUGHTS);
  console.log (`Food Thought values = ${values}`);
  console.log (`Food Thought index 3 value = ${values[3]}`);
  console.log (`typeof = ${typeof(values)}`);
  return values;
}

export const getFoodTimesKeys = () => {
  const keys = Object.keys(FOOD_TIMES);
  console.log (`Food Times Keys = ${keys}`);
  console.log (`typeof = ${typeof(keys)}`);
  return keys;
}

export const getFoodTimesValues = () => {
  const values = Object.values(FOOD_TIMES);
  //const values = [5,3,8,9,10,2];
  console.log (`Food Times values = ${values}`);
  console.log (`typeof = ${typeof(values)}`);
  return values;
}