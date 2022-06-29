import { Module } from '@nestjs/common';
import { ProfilesService } from 'src/profiles/profiles.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ProfilesService],
})
export class UsersModule {}
