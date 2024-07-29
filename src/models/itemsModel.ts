import { Item } from "../types/types";

const mockItemsData: Item[] = [];

export const getAllItems = async (): Promise<Item[] | undefined> => {
  const items = mockItemsData;
  return items;
};

export const addItem = async (itemData: Item): Promise<Item | undefined> => {
  // const randomId = crypto.randomUUID().toString(); // Only works in node v20
  const randomId = Math.random() + itemData.name;
  const newItem = { ...itemData, id: randomId };
  mockItemsData.push(newItem);
  return newItem;
};

export const editItem = async (
  item: Item,
  id: string
): Promise<Item | undefined> => {
  const index = mockItemsData.findIndex((i) => i.id === id);
  if (index !== -1) {
    const updatedItem = { ...mockItemsData[index], ...item };
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
