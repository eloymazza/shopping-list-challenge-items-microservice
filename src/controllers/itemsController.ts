import { Request, Response } from "express";
import { getAllItems } from "../models/itemsModel";
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

export const getItems = async (
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

const serviceResponse = (
  res: Response,
  code: number,
  data: Item[] | null,
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
