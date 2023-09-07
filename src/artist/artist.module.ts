import {Module} from '@nestjs/common';
import {ArtistService} from "./artist.service";
import {Artist} from "./artist.model";
import {ArtistController} from './artist.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {FileService} from "../file/file.service";

@Module({
    controllers: [ArtistController],
    providers: [ArtistService, FileService],
    imports: [SequelizeModule.forFeature([Artist])]
})
export class ArtistModule {
}
