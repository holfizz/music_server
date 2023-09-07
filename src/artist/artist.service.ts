import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Artist} from "./artist.model";
import {CreateArtistDto} from "./dto/create-artist.dto";
import {FileService, FileType} from "../file/file.service";

@Injectable()
export class ArtistService {
    constructor(@InjectModel(Artist) private artistRepository: typeof Artist,
                private fileService: FileService
    ) {
    }

    async create(dto: CreateArtistDto, avatar: string): Promise<Artist> {
        const avatarPath = this.fileService.createFile(FileType.AVATAR, avatar)
        const artists = await this.artistRepository.create({
            ...dto,
            avatar: `http://localhost:4000/${avatarPath}`
        })
        return artists
    }

    async getAll() {
        const artists = await this.artistRepository.findAll()
        return artists

    }

    async getOne(id: number) {
        const artists = await this.artistRepository.findOne({where: {id}})
        return artists
    }

    async delete(id: number): Promise<number> {
        let deletedItemId;

        const item = await this.artistRepository.findOne({
            where: {id}
        });

        if (item) {
            deletedItemId = item.id;
            await item.destroy();
        }

        return deletedItemId;
    }

}

