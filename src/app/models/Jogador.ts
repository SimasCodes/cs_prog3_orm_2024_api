import {Entity, PrimaryColumn, Column, ManyToMany, JoinColumn, ManyToOne} from 'typeorm';
import Endereco from '../models/Endereco';

@Entity('tb_jogador')
class Jogador {

    @PrimaryColumn('text')
    nickname: string;

    @Column('text')
    senha: string;

    @Column('int')
    pontos: number;

    @Column('date', {default: () => 'CURRENT_TIMESTAMP'})
    data_cadastro: Date;

    @Column('date', {nullable: true})
    data_ultimo_login: Date;

    @ManyToOne(type => Endereco)
    @JoinColumn({name: "endereco_id", referencedColumnName: "id"})
    endereco: Endereco;   
}

export default Jogador;