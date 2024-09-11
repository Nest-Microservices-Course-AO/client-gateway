import { ArrayMinSize, IsArray, ValidateNested } from 'class-validator';
import { OrderItemDto } from './order-item.dto';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];
}

// import { OrderStatus } from '@prisma/client';
// import {
//   IsBoolean,
//   IsEnum,
//   IsNumber,
//   IsOptional,
//   IsPositive,
// } from 'class-validator';
// import { OrderStatusList } from '../enum/order.enum';

// export class CreateOrderDto {
//   @IsPositive()
//   @IsNumber()
//   totalAmount: number;

//   @IsPositive()
//   @IsNumber()
//   totalItems: number;

//   @IsEnum(OrderStatusList, {
//     message: `Possible values are ${OrderStatusList.join(', ')}`,
//   })
//   @IsOptional()
//   status: OrderStatus = OrderStatus.PENDING;

//   @IsBoolean()
//   @IsOptional()
//   paid: boolean = false;
// }
