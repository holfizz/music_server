import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import {Track} from "./track/track.model";
import {TrackModule} from './track/track.module';
import {FileModule} from "./file/file.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from "path";
import {ArtistModule} from "./artist/artist.module";
import {Artist} from "./artist/artist.model";


@Module({
    providers: [],
    controllers: [],
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRESS_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRESS_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Track, Artist],
            autoLoadModels: true,
        }),
        TrackModule,
        ArtistModule,
        FileModule
    ]

})

export class AppModule {
}