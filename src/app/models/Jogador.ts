import {Entity, PrimaryColumn, Column, ManyToMany, JoinColumn, ManyToOne, JoinTable} from 'typeorm';
import Endereco from '../models/Endereco';
import Patente from '../models/Patente';

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


    @ManyToMany(() => Patente)
    @JoinTable({name : "tb_jogador_patente", 
                joinColumn: {name: "jogador_nickname", 
                             referencedColumnName: "nickname"}, 
                inverseJoinColumn: {name: "patente_id", 
                                    referencedColumnName: "id"}})
    patentes: Patente[];

}

export default Jogador;