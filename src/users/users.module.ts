import {forwardRef, Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";
import {TrackModule} from "../track/track.module";
import {UserTracks} from "../track/user-roles.module";
import {Track} from "../track/track.model";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        SequelizeModule.forFeature([User, Role, UserRoles, UserTracks, Track]),
        RolesModule,
        forwardRef(() => AuthModule),
        TrackModule
    ],
    exports: [
        UsersService,
    ]
})
export class UsersModule {
}
