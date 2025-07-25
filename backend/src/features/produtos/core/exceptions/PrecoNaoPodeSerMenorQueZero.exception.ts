import { AppException } from "@/shared/exceptions/app.exception";

export class PrecoNaoPodeSerMenorQueZeroException extends AppException {
    constructor(message: string) {
        super(message, 400, 'PRECO_INVALIDO');
    }
}
