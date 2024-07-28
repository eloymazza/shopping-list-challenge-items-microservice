export interface BaseResponse<T> {
  message: string;
  code: number;
  data: T;
  error: unknown;
}

export interface BadRequestResponse extends BaseResponse<null> {
  code: 400;
  error: string;
}

export interface NotFoundResponse extends BaseResponse<null> {
  code: 404;
  error: string;
}

export interface InternalServerErrorResponse extends BaseResponse<null> {
  code: 500;
  error: any;
}

export interface SuccessResponse<T> extends BaseResponse<unknown> {
  code: 200;
  data: T;
  error: null;
}
