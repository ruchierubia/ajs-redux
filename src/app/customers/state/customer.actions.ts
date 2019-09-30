import { Action } from '@ngrx/store';

import { Update } from '@ngrx/entity';

import { Customer } from '../customer.model';

export enum CustomerActionTypes {
    LOAD_CUSTOMERS = '[Customer] Load Customers',
    LOAD_CUSTOMERS_SUCCESS = '[Customer] Load Customers Success',
    LOAD_CUSTOMERS_FAIL = '[Customer] Load Customers Fail',
    LOAD_CUSTOMER = '[Customer] Load Customer',
    LOAD_CUSTOMER_SUCCESS = '[Customer] Load Customer Success',
    LOAD_CUSTOMER_FAIL = '[Customer] Load Customer Fail',
    CREATE_CUSTOMER = '[Customer] Create Customer',
    CREATE_CUSTOMER_SUCCESS = '[Customer] Create Customer Success',
    CREATE_CUSTOMER_FAIL = '[Customer] Create Customer Fail',
    UPDATE_CUSTOMER = '[Customer] Update Customer',
    UPDATE_CUSTOMER_SUCCESS = '[Customer] Update Customer Success',
    UPDATE_CUSTOMER_FAIL = '[Customer] Update Customer Fail',
    DELETE_CUSTOMER = '[Customer] Delete Customer',
    DELETE_CUSTOMER_SUCCESS = '[Customer] Delete Customer Success',
    DELETE_CUSTOMER_FAIL = '[Customer] Delete Customer Fail'
}

export class LoadCustomers implements Action {
    readonly type = CustomerActionTypes.LOAD_CUSTOMERS;
}

export class LoadCustomersSuccess implements Action {
    readonly type = CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS;

    constructor(public payload: Customer[]) {}
}

export class LoadCustomersFail implements Action {
    readonly type = CustomerActionTypes.LOAD_CUSTOMERS_FAIL;

    constructor(public  payload: string) {}
}

export type Action = LoadCustomers | LoadCustomersSuccess | LoadCustomersFail;
