import {Column, DataType, Model, Table} from "sequelize-typescript";

interface TrackProps {
    id: number,
    name: string
    avatar: string
}

@Table({tableName: 'artist'})
export class Artist extends Model<Artist, TrackProps> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    name: string;

    @Column({type: DataType.STRING})
    avatar: string;
}