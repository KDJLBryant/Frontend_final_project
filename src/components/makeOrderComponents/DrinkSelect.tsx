import { useOrderContext } from "@/context/OrderContext";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Drink, Order } from "../../../../orders-api/src/types";
import api from "@/api/api";
import mapper from "@/utils/mapper";
import { getRandomNumber } from "@/utils/getRandomNumber";

const DrinkSelect = ({
  setConfirmedChoices,
}: {
  setConfirmedChoices: Dispatch<SetStateAction<boolean>>;
}) => {
  const { order, setOrder } = useOrderContext();
  const [drinksDisplay, setDrinksDisplay] = useState<Drink[] | null>(null);
  const [selectedDrinks, setSelectedDrinks] = useState<Drink[]>([]);

  const updateDrinkOrder = () => {
    if (order && selectedDrinks) {
      const updatedOrder: Order = {
        ...order,
        drinks: selectedDrinks,
      };
      setOrder(updatedOrder);
    }
    setConfirmedChoices(true);
  };

  const fetchOrderedDrinks = () => {
    if (order?.drinks) {
      setSelectedDrinks(() => [...order.drinks]);
    }
  };

  const addToSelectedDrinks = (drinkToAdd: Drink) => {
    if (selectedDrinks.length < 3 && !selectedDrinks.find((drink) => drink.id === drinkToAdd.id)) {
      setSelectedDrinks((prevSelectedDrinks) => [
        ...prevSelectedDrinks,
        drinkToAdd,
      ]);
    }
  };

  const removeFromSelectedDrinks = (drinkToRemove: Drink) => {
    setSelectedDrinks((prevSelectedDrinks) =>
      prevSelectedDrinks.filter((drink) => drink.id !== drinkToRemove.id)
    );
  };

  const fetchDrinksDisplay = async () => {
    const fetchedDrinks = await api.getDrinks();

    const mapAndReturnDrinks = () => {
      const drinksForReturn: Drink[] = [];
      for (let i = 0; i <= 5; i++) {
        const randomDrink = mapper.mapDrink(
          fetchedDrinks.drinks[
          getRandomNumber(0, fetchedDrinks.drinks.length - 1)
          ]
        );

        if (!drinksForReturn.some((drink) => drink.id === randomDrink.id)) {
          drinksForReturn.push(randomDrink);
        }
      }
      return drinksForReturn;
    };

    if (fetchedDrinks) {
      setDrinksDisplay(mapAndReturnDrinks());
    } else {
      console.log("Failed to fetch drinks");
    }
  };
  useEffect(() => {
    setDrinksDisplay(null);
    fetchOrderedDrinks();
    fetchDrinksDisplay();
  }, [order?.dish]);
  useEffect(() => {
    setConfirmedChoices(false);
  }, [selectedDrinks]);

  return (
    order && order.dish.name && (
      <div className="lg:flex justify-around">
        <div className="drinks-display-wrapper">
          <h1 className="content-card">Select Drink</h1>
          {drinksDisplay && drinksDisplay.map((drink) => (
            <div className="drink-item-card" key={drink.id}>
              <p>{drink.name} - £{drink.price}</p>
              <img
                className="drink-image"
                src={drink.imageSource}
                alt="Drink Image"
              />
              <button
                className="custom-button"
                onClick={() => addToSelectedDrinks(drink)}
              >
                Select
              </button>
            </div>
          ))}
        </div>

        <div className="selected-drinks-wrapper">
          <h1 className="content-card">{selectedDrinks.length > 0 ? "Chosen Drinks" : "Choose Drinks"}</h1>
          {selectedDrinks && selectedDrinks.map((drink) => (
            <div className="drink-item-card">
              <button
                className="custom-button"
                onClick={() => removeFromSelectedDrinks(drink)}
              >
                Remove
              </button>
              <p>{drink.name}</p>
              <img className="drink-image" src={drink.imageSource} alt="Drink Image"></img>
            </div>
          ))}
          {selectedDrinks.length > 0 && (
            <button className="custom-button" onClick={updateDrinkOrder}>
              Confirm choices
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default DrinkSelect;
