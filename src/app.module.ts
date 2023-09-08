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
import {User} from "./users/users.model";
import {UsersModule} from "./users/users.module";
import {Role} from "./roles/roles.model";
import {RolesModule} from "./roles/roles.module";
import {UserRoles} from "./roles/user-roles.model";
import {UserTracks} from "./track/user-roles.module";


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
            models: [Track, Artist, User, Role, UserRoles, UserTracks],
            autoLoadModels: true,
        }),
        TrackModule,
        ArtistModule,
        FileModule,
        UsersModule,
        RolesModule
    ]

})

export class AppModule {
}