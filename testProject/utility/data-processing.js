const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'restaurant.json');

function readRestaurantData() {
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  return storedRestaurants;
}

function writeRestaurantData(dataRestaurant) {
  const fileData = fs.writeFileSync(filePath, JSON.stringify(dataRestaurant));
}

module.exports = {
  readRestaurantData: readRestaurantData,
  writeRestaurantData: writeRestaurantData,
};
