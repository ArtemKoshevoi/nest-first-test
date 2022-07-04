import { PartialType } from '@nestjs/swagger';
import { IsEnum, IsOptional, ValidateIf } from 'class-validator';
import { UserStatus } from '../entities/user.entity';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsEnum(UserStatus)
  @IsOptional()
  status?: UserStatus;
}
