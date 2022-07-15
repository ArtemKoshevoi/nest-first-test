import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/profiles/profile.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  createUser(createUserInput: CreateUserInput): Promise<User> {
    const { firstName, lastName } = createUserInput;

    const profile = this.profileRepository.create({
      firstName,
      lastName,
    });

    this.profileRepository.save(profile);

    const user = this.userRepository.create();
    user.profile = profile;

    return this.userRepository.save(user);
  }

  findOne(id: number): Promise<User> {
    const user = this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.profile', 'profile')
      .where('user.id = :userId', { userId: id })
      .getOne();

    return user;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
