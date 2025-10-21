export class ApiError extends Error {
  public status: number;
  public statusText: string;
  public userMessage: string;

  constructor(
    message: string,
    status: number,
    statusText: string,
    userMessage: string
  ) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.statusText = statusText;
    this.userMessage = userMessage;
  }
}
