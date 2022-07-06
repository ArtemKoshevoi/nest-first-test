import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Profile } from './profile.entity';
import { ProfilesService } from './profiles.service';
@ApiTags('profiles')
@Controller('profile')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}

  // @Get(':id')
  // getProfileById(@Param('id') id: string): Profile {
  //   return this.profilesService.getProfileById(id);
  // }
}
