import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserStatus } from './entities/user.entity';
import { v4 as uuid } from 'uuid';
import { Profile } from 'src/profiles/entities/profile.entity';
import { ProfilesService } from 'src/profiles/profiles.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private profilesService: ProfilesService) {}

  private readonly users: User[] = [];

  createUser(createUserDto: CreateUserDto): User {
    const { firstName, lastName } = createUserDto;
    const profileId = uuid();

    const profile: Profile = {
      id: profileId,
      firstName,
      lastName,
    };

    const user: User = {
      id: uuid(),
      status: UserStatus.active,
      profileId,
      profile,
    };

    this.users.push(user);
    this.profilesService.addProfile(user.profile);

    return user;
  }

  getUserById(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  getProfileByUserId(id: string): Profile {
    const user = this.getUserById(id);

    return user.profile;
  }

  updateUser(id: string, updateUserDto: UpdateUserDto): User {
    const { firstName, lastName, status } = updateUserDto;
    const user = this.getUserById(id);

    //mutation
    user.profile.firstName = firstName;

    if (lastName) {
      user.profile.lastName = lastName;
    }

    if (status) {
      user.status = status;
    }

    this.profilesService.updateProfile(user.profile);

    return user;
  }
}
