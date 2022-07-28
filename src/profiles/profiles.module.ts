import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { ProfilesResolver } from './profiles.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  providers: [ProfilesService, ProfilesResolver],
  controllers: [ProfilesController],
})
export class ProfilesModule {}
