import {Column, DataType, Model, Table} from "sequelize-typescript";

interface TrackProps {
    id: number,
    name: string
    artist: string
    picture: string
    audio: string
}

@Table({tableName: 'track'})
export class Track extends Model<Track, TrackProps> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    name: string;

    @Column({type: DataType.STRING})
    artist: string;
    
    @Column({type: DataType.STRING})
    picture: string;

    @Column({type: DataType.STRING})
    audio: string;
}