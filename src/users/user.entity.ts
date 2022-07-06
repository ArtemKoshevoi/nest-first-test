import { Profile } from 'src/profiles/profile.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum UserStatus {
  active = 'ACTIVE',
  inactive = 'INACTIVE',
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.active,
  })
  status: UserStatus;

  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn()
  profile: Profile;
}
