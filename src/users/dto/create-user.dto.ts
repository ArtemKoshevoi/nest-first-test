import { IsInt } from 'class-validator';
import { UserStatus } from '../entities/user.entity';

export class CreateUserDto {
  @IsInt()
  readonly id: number;

  // @IsInt()
  readonly status: UserStatus;

  @IsInt()
  readonly profileId: number;
}
