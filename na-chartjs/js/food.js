// observe the bottom of the file.

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

const getFoodThoughtKeys = ()=> {
  return Object.keys(FOOD_THOUGHTS)
}

const getFoodThoughtsValues = () => {
  return Object.values(FOOD_THOUGHTS)
}

const getFoodTimesKeys = ()=> {
  return Object.keys(FOOD_TIMES)
}

const getFoodTimesValues = () => {
  return Object.values(FOOD_TIMES)
}




// this is how you make your functions and other piece available
// to other files.
export {getFoodThoughtKeys, getFoodThoughtsValues, getFoodTimesKeys, getFoodTimesValues}
