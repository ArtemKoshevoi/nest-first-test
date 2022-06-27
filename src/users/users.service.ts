import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(user: User) {
    this.users.push(user);
  }

  getUser(id: string) {
    return this.users.find((user) => user.id === id);
  }
}
