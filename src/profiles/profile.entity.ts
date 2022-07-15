import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Profile extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  lastName?: string;

  @Field(() => User)
  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
