import { Order } from "../../../orders-api/src/types";

export const emptyOrder: Order = {
  id: 0,
  drinks: [],
  email: "",
  count: 0,
  date: new Date(),
  dish: {
    id: "",
    category: "",
    cousine: "",
    description: "",
    imageSource: "",
    name: "",
    price: 0,
  },
};
