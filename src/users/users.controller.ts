import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

import { UsersService } from './users.service';

@ApiTags('users')
@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    console.log(222, createUserDto);
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  getUser(@Param('id') id: string): User {
    return this.usersService.getUser(id);
  }
}
