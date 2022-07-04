import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  firstName: string;

  @IsString()
  @MaxLength(10)
  lastName?: string;
}
