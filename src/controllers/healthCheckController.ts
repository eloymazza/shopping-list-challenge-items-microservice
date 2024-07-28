import { Request, Response } from "express";

export const healthCheck = (req: Request, res: Response) => {
	res.status(200).json({
		message: "Server is running",
		code: 200,
		data: null,
		error: null,
	});
};
