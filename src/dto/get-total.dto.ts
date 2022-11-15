/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  ValidateNested,
} from 'class-validator';

export class GetTotalBalanceDTO {
  @ValidateNested({ each: true })
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(100)
  addresses: string[];
}
