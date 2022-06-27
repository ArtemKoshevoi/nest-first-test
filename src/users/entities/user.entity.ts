import { ApiProperty } from '@nestjs/swagger';

export enum UserStatus {
  active = 'ACTIVE',
  inactive = 'INACTIVE',
}

export class User {
  @ApiProperty()
  id: number;

  @ApiProperty({ enum: ['ACTIVE', 'INACTIVE'] })
  status: UserStatus = UserStatus.active;

  @ApiProperty()
  profileId: number;
}
