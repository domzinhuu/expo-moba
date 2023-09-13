export class AppError {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  static isAppError(error: any) {
    return error instanceof AppError;
  }
}
