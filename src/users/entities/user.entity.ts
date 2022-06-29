import { Profile } from 'src/profiles/entities/profile.entity';

export enum UserStatus {
  active = 'ACTIVE',
  inactive = 'INACTIVE',
}

export class User {
  id: string;
  status: UserStatus = UserStatus.active;
  profileId: string;
  profile: Profile;
}
