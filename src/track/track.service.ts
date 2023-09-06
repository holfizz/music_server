import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Track} from "./track.model";
import {CreateTrackDto} from "./dto/create-track.dto";
import {FileService, FileType} from "../file/file.service";
import {Op} from "sequelize";

@Injectable()
export class TrackService {
    constructor(@InjectModel(Track) private trackRepository: typeof Track,
                private fileService: FileService
    ) {
    }

    async create(dto: CreateTrackDto, picture: string, audio: string): Promise<Track> {
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture)
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio)
        const track = await this.trackRepository.create({...dto, picture: picturePath, audio: audioPath})
        return track
    }

    async getAll() {
        const tracks = await this.trackRepository.findAll()
        return tracks

    }

    async getOne(id: number) {
        const track = await this.trackRepository.findOne({where: {id}})
        return track
    }

    async delete(id: number): Promise<number> {
        let deletedItemId;

        const item = await this.trackRepository.findOne({
            where: {id}
        });

        if (item) {
            deletedItemId = item.id;
            await item.destroy();
        }

        return deletedItemId;
    }

    async search(query: string): Promise<Track[]> {
        const tracks = await this.trackRepository.findAll({
            where: {
                [Op.or]: [
                    {
                        name: {
                            [Op.iLike]: `%${query}%`,
                        },
                    },
                    {
                        artist: {
                            [Op.iLike]: `%${query}%`,
                        },
                    },
                ],
            }
        })
        return tracks
    }
}

