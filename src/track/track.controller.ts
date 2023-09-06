import {Body, Controller, Delete, Get, Param, Post, Query, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {TrackService} from "./track.service";
import {CreateTrackDto} from "./dto/create-track.dto";
import {FileFieldsInterceptor} from "@nestjs/platform-express";

@Controller('/tracks')
export class TrackController {
    constructor(private trackService: TrackService) {
    }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        {name: 'picture', maxCount: 1},
        {name: 'audio', maxCount: 1},
    ]))
    create(@UploadedFiles() files, @Body() dto: CreateTrackDto) {
        const {picture, audio} = files
        return this.trackService.create(dto, picture[0], audio[0])
    }

    @Get()
    getAll() {
        return this.trackService.getAll()
    }

    @Get('/search')
    search(@Query('query') query: string) {
        return this.trackService.search(query)
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.trackService.getOne(id)
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.trackService.delete(id)
    }
}
