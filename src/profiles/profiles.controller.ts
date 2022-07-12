import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './profile.entity';
import { ProfilesService } from './profiles.service';
@ApiTags('profiles')
@Controller('profile')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}

  @Get(':id')
  getProfileById(@Param('id') id: number): Promise<Profile> {
    return this.profilesService.getProfileById(id);
  }

  @Put(':id')
  updateProfile(
    @Param('id') id: number,
    @Body() updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    return this.profilesService.updateProfile(id, updateProfileDto);
  }
}
