import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserInput } from 'src/users/dto/update-user.input';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { UpdateProfileInput } from './dto/update-profile.input';
import { Profile } from './profile.entity';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async updateProfile(input: UpdateProfileInput): Promise<Profile> {
    const { id } = input;

    const profile = await this.profileRepository
      .createQueryBuilder('profile')
      .where('profile.id = :profileId', { profileId: id })
      .getOne();

    this.profileRepository.save(this.profileRepository.merge(profile, input));

    return profile;
  }
}
