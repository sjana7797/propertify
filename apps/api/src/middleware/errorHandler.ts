import type { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (
  error: ProError,
  req,
  res,
  next,
) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Something went wrong";

  console.error(error);

  return res.status(statusCode).json({
    message,
    error: JSON.stringify(error),
  });
};

export class ProError extends Error {
  constructor(
    public statusCode: number | undefined,
    message?: string,
  ) {
    super(message);
  }
}
