import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateUserInput {
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
