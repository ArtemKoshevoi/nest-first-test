import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserStatus } from './entities/user.entity';
import { v4 as uuid } from 'uuid';
import { Profile } from 'src/profiles/entities/profile.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(createUserDto: CreateUserDto): User {
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

    console.log(111, user);

    return user;
  }

  getUser(id: string): User {
    return this.users.find((user) => user.id === id);
  }
}
