import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { StoreModule } from '@ngrx/store';

import {customerReducer} from './state/costumer.reducer';

import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const customerRoutes: Routes = [{path: "", component: CustomerComponent}]


@NgModule({
  declarations: [CustomerComponent, CustomerAddComponent, CustomerEditComponent, CustomerListComponent],
  imports: [
    CommonModule, RouterModule.forChild(customerRoutes),
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature("customers", customerReducer)
  ]
})
export class CustomersModule { }
