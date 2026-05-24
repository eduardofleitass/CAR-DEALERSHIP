// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
import { IsString, isString, MinLength } from 'class-validator';

export class UpdateBrandDto {
    @IsString()
    @MinLength(1)
    name!:string;
}
