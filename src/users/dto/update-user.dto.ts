import { IsEnum, ValidateIf } from 'class-validator';
import { UserStatus } from '../entities/user.entity';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends CreateUserDto {
  @ValidateIf((val) => val.status === 'ACTIVE')
  @IsEnum(UserStatus)
  status?: UserStatus;
}
