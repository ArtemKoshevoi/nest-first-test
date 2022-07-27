import { Field, InputType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsEnum, IsOptional, ValidateNested } from 'class-validator';
import { UpdateProfileInput } from 'src/profiles/dto/update-profile.input';
import { UserStatus } from 'src/shared/enums/user-status.enum';

@InputType()
export class UpdateUserInput {
  @Field(() => Int)
  readonly id: number;

  @Field(() => UserStatus)
  @IsEnum(UserStatus)
  @IsOptional()
  status?: UserStatus;

  @Field(() => UpdateProfileInput)
  @Type(() => UpdateProfileInput)
  @ValidateNested()
  profile: UpdateProfileInput;
}
