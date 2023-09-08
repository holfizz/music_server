import {IsNumber, IsString} from "class-validator";

export class AddTrackDto {
    @IsString({message: "Должно быть числом"})
    readonly id: number;
    @IsNumber({}, {message: "Должно быть числом"})
    readonly userId: number;
}
