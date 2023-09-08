import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {Track} from "./track.model";


@Table({tableName: 'user_tracks', createdAt: false, updatedAt: false})
export class UserTracks extends Model<UserTracks> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Track)
    @Column({type: DataType.INTEGER})
    trackId: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

}
