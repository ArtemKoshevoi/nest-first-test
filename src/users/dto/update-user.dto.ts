import { PartialType } from '@nestjs/swagger';
import { IsEnum, ValidateIf } from 'class-validator';
import { UserStatus } from '../entities/user.entity';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsEnum(UserStatus)
  status?: UserStatus;
}
