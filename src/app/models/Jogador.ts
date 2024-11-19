import {Entity, PrimaryColumn, Column} from 'typeorm';

@Entity('tb_jogador')
class Jogador {

 @PrimaryColumn('text')
 nickname: string;

 @Column('text')
 senha: string;

 @Column('int')
 quantpontos: number;

 @Column('num')
 quantdinheiro: number;

 @Column('text')
 situacao: string;

 @Column('date')
 data_cadastro: Date;

 @Column('date')
 data_ultimo_login: Date;
}

export default Jogador;