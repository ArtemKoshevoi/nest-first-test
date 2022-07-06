import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Profile } from 'src/profiles/profile.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

import { UsersService } from './users.service';

@ApiTags('users')
@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  // @Get(':id')
  // getUserById(@Param('id') id: string): User {
  //   return this.usersService.getUserById(id);
  // }

  // @Get(':id/profile')
  // getProfileByUserId(@Param('id') id: string): Profile {
  //   return this.usersService.getProfileByUserId(id);
  // }

  // @Put(':id')
  // updateUser(
  //   @Param('id') id: string,
  //   @Body() updateUserDto: UpdateUserDto,
  // ): User {
  //   return this.usersService.updateUser(id, updateUserDto);
  // }
}
