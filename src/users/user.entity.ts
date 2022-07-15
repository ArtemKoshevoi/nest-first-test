import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Profile } from 'src/profiles/profile.entity';
import { UserStatus } from 'src/shared/enums/user-status.enum';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => UserStatus)
  @Column('enum', {
    enum: UserStatus,
    default: UserStatus.active,
  })
  status: UserStatus;

  @Field(() => Int)
  @Column({ nullable: true })
  profileId: number;

  @Field(() => Profile)
  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn()
  profile: Profile;
}
