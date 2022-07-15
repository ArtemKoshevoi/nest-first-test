import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/profiles/profile.entity';
import { ProfilesModule } from 'src/profiles/profiles.module';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [ProfilesModule, TypeOrmModule.forFeature([User, Profile])],
  controllers: [UsersController],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
