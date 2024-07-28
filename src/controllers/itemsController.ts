import { Request, Response } from "express";
import {
  editItem,
  getAllItems,
  deleteItem,
  addItem,
} from "../models/itemsModel";
import {
  BadRequestResponse,
  InternalServerErrorResponse,
  NotFoundResponse,
  SuccessResponse,
} from "../types/httpResponse";
import { Item } from "../types/types";

type ItemData = {
  totalItems: number;
  items: Item;
};

type ItemResponse =
  | BadRequestResponse
  | NotFoundResponse
  | SuccessResponse<ItemData>
  | InternalServerErrorResponse;

type ServiceResponse = Response<ItemResponse>;

export const getItemsController = async (
  req: Request,
  res: Response
): Promise<ServiceResponse> => {
  try {
    const items = await getAllItems();
    if (!items) {
      return serviceResponse(
        res,
        404,
        null,
        "Items not found",
        "404 not found"
      );
    }
    return serviceResponse(res, 200, items, "Items retrieved successfully", "");
  } catch (error) {
    return serviceResponse(res, 500, null, "Internal Server Error", error);
  }
};

export const addItemController = async (
  req: Request,
  res: Response
): Promise<ServiceResponse> => {
  try {
    const newItem = req.body;
    const addedItem = await addItem(newItem);

    if (!addedItem) {
      return serviceResponse(res, 500, null, "Failed to add item", "");
    }

    return serviceResponse(
      res,
      201,
      [addedItem],
      "Item added successfully",
      ""
    );
  } catch (error) {
    return serviceResponse(res, 500, null, "Internal Server Error", error);
  }
};

export const editItemController = async (
  req: Request,
  res: Response
): Promise<ServiceResponse> => {
  try {
    const updatedItem = req.body;
    const itemId = req.params.id;
    const editedItem = await editItem(updatedItem, itemId);

    if (!editedItem) {
      return serviceResponse(res, 404, null, "Item not found", "404 not found");
    }

    return serviceResponse(
      res,
      200,
      editedItem,
      "Item edited successfully",
      ""
    );
  } catch (error) {
    return serviceResponse(res, 500, null, "Internal Server Error", error);
  }
};

export const deleteItemController = async (
  req: Request,
  res: Response
): Promise<ServiceResponse> => {
  try {
    const itemId = req.params.id;
    const deletedItem = await deleteItem(itemId);

    if (!deletedItem) {
      return serviceResponse(res, 404, null, "Item not found", "404 not found");
    }

    return serviceResponse(
      res,
      200,
      deletedItem,
      "Item deleted successfully",
      ""
    );
  } catch (error) {
    return serviceResponse(res, 500, null, "Internal Server Error", error);
  }
};

const serviceResponse = (
  res: Response,
  code: number,
  data: Item[] | Item | null,
  message: string,
  errorMessage: string | unknown
): ServiceResponse => {
  return res.status(code).json({
    message,
    code,
    data,
    error: errorMessage,
  });
};
