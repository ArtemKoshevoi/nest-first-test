import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Profile } from 'src/profiles/profile.entity';
import { UserStatus } from 'src/shared/enums/user-status.enum';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  RelationId,
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
  @RelationId((user: User) => user.profile)
  @Column({ nullable: true })
  profileId: number;

  @Field(() => Profile)
  @OneToOne(() => Profile, (profile) => profile.user, { cascade: true })
  @JoinColumn()
  profile: Profile;
}
