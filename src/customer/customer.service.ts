/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDTO } from './dto/creat-customer.dto';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [];

  getAllCustomer(): Customer[] {
    return this.customers;
  }

  getCustomerById(id: number): Customer {
    const findCustomer = this.customers.find((s) => s.id === id);
    if (!findCustomer) throw new NotFoundException('Customer not found');
    return findCustomer;
  }

  postCustomer(customerDto: CreateCustomerDTO): Customer {
    const newCustomer = {
      id: Date.now(),
      ...customerDto,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  putCustomer(id: number, customerDto: CreateCustomerDTO): Customer {
    const findCustomer = this.customers.find((s) => s.id === id);
    if (!findCustomer) throw new NotFoundException('Customer not found');
    Object.assign(findCustomer, customerDto);
    return findCustomer;
  }

  patchCustomer(id: number, customerDto: Partial<CreateCustomerDTO>): Customer {
    const findCustomer = this.customers.find((s) => s.id === id);
    if (!findCustomer) throw new NotFoundException('Customer not found');
    Object.assign(findCustomer, customerDto);
    return findCustomer;
  }

  deleteCustomer(id: number) {
    const findCustomerIndex = this.customers.findIndex((s) => s.id === id);
    if (findCustomerIndex === -1)
      throw new NotFoundException('Customer not found');
    const deleteCustomer = this.customers[findCustomerIndex];
    this.customers.splice(findCustomerIndex, 1);
    return { message: 'customer deleted' };
  }
}
