import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserStatus } from './user.entity';
import { v4 as uuid } from 'uuid';
import { Profile } from 'src/profiles/profile.entity';
import { ProfilesService } from 'src/profiles/profiles.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { firstName, lastName } = createUserDto;

    const profile = this.profileRepository.create({
      firstName,
      lastName,
    });

    await this.profileRepository.save(profile);

    const user = this.userRepository.create();
    user.profile = profile;
    await this.userRepository.save(user);

    return user;
  }

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
