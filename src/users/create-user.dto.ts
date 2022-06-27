import { UserStatus } from 'src/users/user.interface';

export class CreateUserDto {
  id: string;
  status: UserStatus = UserStatus.active;
  profileId: string;
}
