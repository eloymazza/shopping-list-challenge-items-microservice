import { Item } from "../types/types";

const mockItemsData: Item[] = [
  {
    id: "1",
    name: "Milk",
    descriotion: "Dairy",
    quantity: 2,
  },
  {
    id: "2",
    name: "Bread",
    descriotion: "Bakery",
    quantity: 1,
  },
  {
    id: "3",
    name: "Eggs",
    descriotion: "Dairy",
    quantity: 12,
  },
];

export const getAllItems = async (): Promise<Item[] | undefined> => {
  const items = mockItemsData;
  return items;
};
