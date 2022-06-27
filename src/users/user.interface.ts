export enum UserStatus {
  active = 'ACTIVE',
  inactive = 'INACTIVE',
}

export interface User {
  id: string;
  status: UserStatus;
  profileId: string;
}
