import { registerEnumType } from '@nestjs/graphql';

export enum UserStatus {
  active = 'ACTIVE',
  inactive = 'INACTIVE',
}

registerEnumType(UserStatus, {
  name: 'UserStatus',
  description: 'User status',
});
