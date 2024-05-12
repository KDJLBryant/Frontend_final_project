import { Dish, Drink } from "../../../orders-api/src/types";

const mapDish = (dataToMap: any): Dish => {
  const mappedDish: Dish = {
    id: dataToMap.idMeal,
    name: dataToMap.strMeal,
    description: dataToMap.strInstructions,
    imageSource: dataToMap.strImageSource,
    price: 5,
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
    imageSource: dataToMap.strImageSource,
    price: 5,
    category: dataToMap.strCategory,
    brewer: dataToMap.strAlcoholic,
  };

  return mappedDrink;
};

export default {
  mapDish,
  mapDrink,
};
