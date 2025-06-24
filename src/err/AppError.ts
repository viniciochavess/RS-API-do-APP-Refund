export class AppError extends Error {
  statusCode: number;
  message: string;
  constructor(message: string, statusCode: 409) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}
