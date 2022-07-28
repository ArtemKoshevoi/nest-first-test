import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UpdateProfileInput } from './dto/update-profile.input';
import { Profile } from './profile.entity';
import { ProfilesService } from './profiles.service';

@Resolver(() => Profile)
export class ProfilesResolver {
  constructor(private profilesService: ProfilesService) {}

  @Mutation(() => Profile)
  updateProfile(@Args('input') input: UpdateProfileInput): Promise<Profile> {
    return this.profilesService.updateProfile(input);
  }
}
