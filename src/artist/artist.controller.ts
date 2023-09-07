import {Body, Controller, Delete, Get, Param, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {ArtistService} from "./artist.service";
import {CreateArtistDto} from "./dto/create-artist.dto";
import {FileFieldsInterceptor} from "@nestjs/platform-express";

@Controller('/artists')
export class ArtistController {
    constructor(private artistService: ArtistService) {
    }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        {name: 'avatar', maxCount: 1},
    ]))
    create(@UploadedFiles() files, @Body() dto: CreateArtistDto) {
        const {avatar} = files
        return this.artistService.create(dto, avatar[0])
    }

    @Get()
    getAll() {
        return this.artistService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.artistService.getOne(id)
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.artistService.delete(id)
    }
}
