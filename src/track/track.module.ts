import {Module} from '@nestjs/common';
import {TrackService} from "./track.service";
import {Track} from "./track.model";
import {TrackController} from './track.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {FileService} from "../file/file.service";
import {UserTracks} from "./user-roles.module";
import {User} from "../users/users.model";

@Module({
    controllers: [TrackController],
    providers: [TrackService, FileService],
    imports: [SequelizeModule.forFeature([Track, User, UserTracks])],
    exports: [TrackService]
})
export class TrackModule {
}
