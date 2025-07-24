export class PrecoNaoPodeSerMenorQueZeroException extends Error {
    constructor() {
        super('Preço não pode ser menor que zero');
    }
}
