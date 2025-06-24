import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { AppError } from "../err/AppError";
export function AppErrorMiddleware(
  err: any,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof ZodError) {
    response.status(400).json({
      erros: err.message,
    });
  }
  if (err instanceof AppError) {
    response.status(err.statusCode).json({
      erros: err.message,
    });
  }
  
}
