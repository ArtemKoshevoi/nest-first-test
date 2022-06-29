import { IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(10)
  firstName: string;

  @IsString()
  @MaxLength(10)
  lastName: string;
}
