import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(user: CreateUserDto): User {
    this.users.push(user);
    return user;
  }

  getUser(id: number): User {
    return this.users.find((user) => user.id === id);
  }
}
