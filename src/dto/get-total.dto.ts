/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetTotalBalanceDTO {
  @ApiProperty()
  @ValidateNested({ each: true })
  @IsArray({ each: true })
  @ArrayMinSize(1)
  @ArrayMaxSize(100)
  addresses: string[];
}
