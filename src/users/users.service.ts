import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserStatus } from './user.entity';
import { Profile } from 'src/profiles/profile.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    //TODO move to profile service
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { firstName, lastName } = createUserDto;

    const profile = this.profileRepository.create({
      firstName,
      lastName,
    });

    await this.profileRepository.save(profile);

    const user = this.userRepository.create();
    user.profile = profile;
    await this.userRepository.save(user);

    return user;
  }

  async getUserById(id: number): Promise<User> {
    const user = this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.profile', 'profile')
      .where('user.id = :userId', { userId: id })
      .getOne();

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return await user;
  }

  async getProfileByUserId(id: number): Promise<Profile> {
    const user = await this.getUserById(id);

    return user.profile;
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const { firstName, lastName, status } = updateUserDto;
    const user = await this.getUserById(id);

    if (
      status &&
      status === UserStatus.active &&
      user.status === UserStatus.inactive
    ) {
      throw new ForbiddenException("You can't set current status to ACTIVE");
    }

    if (status) {
      user.status = status;
    }

    const userProfile = user.profile;

    userProfile.firstName = firstName;

    if (lastName) {
      userProfile.lastName = lastName;
    }

    await this.profileRepository.save(userProfile);

    user.profile = userProfile;

    await this.userRepository.save(user);

    return user;
  }
}
