import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './profile.entity';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async getProfileById(id: number): Promise<Profile> {
    const profile = this.profileRepository
      .createQueryBuilder('profile')
      .where('profile.id = :profileId', { profileId: id })
      .getOne();

    if (!profile) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }

    return profile;
  }

  async updateProfile(
    id: number,
    updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    const { firstName, lastName } = updateProfileDto;
    const profile = await this.getProfileById(id);

    profile.firstName = firstName;

    if (lastName) {
      profile.lastName = lastName;
    }

    await this.profileRepository.save(profile);

    return profile;
  }
}
