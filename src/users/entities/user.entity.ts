import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, JoinColumn, OneToOne } from 'typeorm';

export enum UserStatus {
  active = 'ACTIVE',
  inactive = 'INACTIVE',
}

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  // @Field(() => UserStatus)
  // @Column('enum', {
  //   enum: UserStatus,
  //   default: UserStatus.active,
  // })
  // status: UserStatus;

  @Field(() => Int)
  profileId: number;

  // @Field(() => Profile)
  // @OneToOne(() => Profile, (profile) => profile.user)
  // @JoinColumn()
  // profile: Profile;
}
