import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserStatus } from './entities/user.entity';
import { v4 as uuid } from 'uuid';

import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  async findAll(): Promise<User[]> {
    const user = new User();
    user.id = 1;
    // user.status = UserStatus.inactive;

    return [user];
  }

  // private readonly users: User[] = [];

  // createUser(createUserDto: CreateUserDto): User {
  //   const { firstName, lastName } = createUserDto;
  //   const profileId = uuid();

  //   const profile: Profile = {
  //     id: profileId,
  //     firstName,
  //     lastName,
  //   };

  //   const user: User = {
  //     id: uuid(),
  //     status: UserStatus.active,
  //     profileId,
  //     profile,
  //   };

  //   this.users.push(user);
  //   this.profilesService.addProfile(user.profile);

  //   return user;
  // }

  // getUserById(id: string): User {
  //   const task = this.users.find((user) => user.id === id);

  //   if (!task) {
  //     throw new NotFoundException(`User with ID ${id} not found`);
  //   }

  //   return task;
  // }

  // getProfileByUserId(id: string): Profile {
  //   const user = this.getUserById(id);

  //   return user.profile;
  // }

  // updateUser(id: string, updateUserDto: UpdateUserDto): User {
  //   const { firstName, lastName, status } = updateUserDto;
  //   const user = this.getUserById(id);

  //   //mutation
  //   user.profile.firstName = firstName;

  //   if (lastName) {
  //     user.profile.lastName = lastName;
  //   }

  //   if (
  //     status &&
  //     status === UserStatus.active &&
  //     user.status === UserStatus.inactive
  //   ) {
  //     throw new ForbiddenException("You can't set current status to ACTIVE");
  //   }

  //   if (status) {
  //     user.status = status;
  //   }

  //   this.profilesService.updateProfile(user.profile);

  //   return user;
  // }
}
