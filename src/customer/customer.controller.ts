/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDTO } from './dto/creat-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getCustomer() {
    return this.customerService.getAllCustomer();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.customerService.getCustomerById(Number(id));
  }

  @Post()
  customerAdd(@Body() body: CreateCustomerDTO) {
    return this.customerService.postCustomer(body);
  }

  @Put(':id')
  updateCustomerAllData(
    @Param('id') id: string,
    @Body() body: CreateCustomerDTO,
  ) {
    return this.customerService.putCustomer(Number(id), body);
  }

  @Patch(':id')
  updateCustomerSingleData(
    @Param('id') id: string,
    @Body() body: CreateCustomerDTO,
  ) {
    return this.customerService.patchCustomer(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.deleteCustomer(Number(id));
  }
}
