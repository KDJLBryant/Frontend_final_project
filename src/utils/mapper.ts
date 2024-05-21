import { Dish, Drink } from "../../../orders-api/src/types";
import { getRandomNumber } from "./getRandomNumber";

const mapDish = (dataToMap: any): Dish => {
  const mappedDish: Dish = {
    id: dataToMap.idMeal,
    name: dataToMap.strMeal,
    description: dataToMap.strInstructions,
    imageSource: dataToMap.strMealThumb,
    price: getRandomNumber(15, 35),
    category: dataToMap.strCategory,
    cousine: dataToMap.strArea,
  };

  return mappedDish;
};

const mapDrink = (dataToMap: any): Drink => {
  const mappedDrink: Drink = {
    id: dataToMap.idDrink,
    name: dataToMap.strDrink,
    description: dataToMap.strInstructions,
    imageSource: dataToMap.strDrinkThumb,
    price: getRandomNumber(3, 8),
    category: dataToMap.strCategory,
    brewer: dataToMap.strAlcoholic,
  };

  return mappedDrink;
};

export default {
  mapDish,
  mapDrink,
};
