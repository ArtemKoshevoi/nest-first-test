import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class UpdateProfileInput {
  @Field(() => Int)
  readonly id?: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  firstName: string;

  @Field({ nullable: true })
  @IsString()
  @MaxLength(10)
  lastName?: string;
}
