import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Profile } from 'src/profiles/profile.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  getUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Query(() => [User])
  getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query(() => Profile)
  async getUserProfileByUserId(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Profile> {
    const user = await this.usersService.findOne(id);
    return user.profile;
  }

  @Mutation(() => User)
  createUser(@Args('createUserInput') input: CreateUserInput): Promise<User> {
    return this.usersService.createUser(input);
  }

  @Mutation(() => User)
  updateUser(@Args('input') input: UpdateUserInput): Promise<User> {
    return this.usersService.updateUser(input);
  }
}
