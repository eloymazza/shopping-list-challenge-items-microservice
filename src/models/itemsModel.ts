import { Item } from "../types/types";

const mockItemsData: Item[] = [
  {
    id: "1",
    name: "Milk",
    description: "Dairy",
    quantity: 2,
  },
  {
    id: "2",
    name: "Bread",
    description: "Bakery",
    quantity: 1,
  },
  {
    id: "3",
    name: "Eggs",
    description: "Dairy",
    quantity: 12,
  },
];

export const getAllItems = async (): Promise<Item[] | undefined> => {
  const items = mockItemsData;
  return items;
};

export const addItem = async (itemData: Item): Promise<Item | undefined> => {
  const randomId = crypto.randomUUID().toString();
  const newItem = { ...itemData, id: randomId };
  mockItemsData.push(newItem);
  return newItem;
};

export const editItem = async (
  updatedItem: Item
): Promise<Item | undefined> => {
  const index = mockItemsData.findIndex((i) => i.id === updatedItem.id);
  if (index !== -1) {
    mockItemsData[index] = updatedItem;
    return updatedItem;
  }
  return undefined;
};

export const deleteItem = async (id: string): Promise<Item | undefined> => {
  const index = mockItemsData.findIndex((i) => i.id === id);
  if (index !== -1) {
    const item = mockItemsData[index];
    mockItemsData.splice(index, 1);
    return item;
  }
  return undefined;
};
