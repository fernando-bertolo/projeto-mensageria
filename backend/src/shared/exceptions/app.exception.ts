export class AppException extends Error {
    constructor(
        public readonly message: string,
        public readonly statusCode: number = 500,
        public readonly errorCode: string = 'INTERNAL_ERROR',
    ) {
        super(message);
        this.name = new.target.name;
    }
}