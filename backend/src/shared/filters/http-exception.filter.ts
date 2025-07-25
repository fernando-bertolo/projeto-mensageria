import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
} from '@nestjs/common';
import { AppException } from '../exceptions/app.exception';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    if (exception instanceof AppException) {
      return response.status(exception.statusCode).json({
        statusCode: exception.statusCode,
        message: exception.message,
        errorCode: exception.errorCode,
      });
    }

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const res = exception.getResponse();

      return response.status(status).json(
        typeof res === 'string' ? { message: res } : res,
      );
    }

    // fallback genérico
    return response.status(500).json({
      statusCode: 500,
      message: 'Internal server error',
    });
  }
}

