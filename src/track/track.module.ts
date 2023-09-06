import {Module} from '@nestjs/common';
import {TrackService} from "./track.service";
import {Track} from "./track.model";
import {TrackController} from './track.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {FileService} from "../file/file.service";

@Module({
    controllers: [TrackController],
    providers: [TrackService, FileService],
    imports: [SequelizeModule.forFeature([Track])]
})
export class TrackModule {
}
