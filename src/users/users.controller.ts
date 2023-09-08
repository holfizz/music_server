import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";
import {AddTrackDto} from "./dto/add-track.dto";

@Controller('/users')
export class UsersController {

    constructor(private usersService: UsersService) {
    }

    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.usersService.registrationUser(userDto);
    }

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }


    @Post('/role')
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto);
    }

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/ban')
    ban(@Body() dto: BanUserDto) {
        return this.usersService.ban(dto);
    }

    @Post('/track')
    addTrack(@Body() dto: AddTrackDto) {
        return this.usersService.addTrack(dto);
    }
}
