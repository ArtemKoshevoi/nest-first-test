import { Injectable } from '@nestjs/common';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
  private readonly profiles: Profile[] = [];

  addProfile(profile: Profile) {
    this.profiles.push(profile);
  }

  getProfileById(id: string) {
    return this.profiles.find((profile) => profile.id === id);
  }

  updateProfile(newProfile: Profile) {
    const { id, firstName, lastName } = newProfile;
    const profile = this.getProfileById(id);

    //mutation
    profile.firstName = firstName;
    profile.lastName = lastName;
  }
}
