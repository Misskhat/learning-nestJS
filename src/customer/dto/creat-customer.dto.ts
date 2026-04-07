import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCustomerDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsInt()
  @IsNotEmpty()
  age: number;
}
