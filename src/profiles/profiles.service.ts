import { Injectable, NotFoundException } from '@nestjs/common';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
  private readonly profiles: Profile[] = [];

  addProfile(profile: Profile) {
    this.profiles.push(profile);
  }

  getProfileById(id: string) {
    const profile = this.profiles.find((profile) => profile.id === id);

    if (!profile) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }

    return profile;
  }

  updateProfile(newProfile: Profile) {
    const { id, firstName, lastName } = newProfile;
    const profile = this.getProfileById(id);

    //mutation
    profile.firstName = firstName;
    profile.lastName = lastName;
  }
}
