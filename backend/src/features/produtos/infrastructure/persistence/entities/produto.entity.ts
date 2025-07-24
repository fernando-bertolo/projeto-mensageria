import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'produtos' })
export class ProdutoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column('decimal', { precision: 10, scale: 2 })
    preco: number;

    @Column()
    descricao: string;
}
