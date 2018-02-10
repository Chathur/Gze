import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { SalesComponent } from './sales/sales.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { PaymentsComponent } from './payments/payments.component';
import { StockComponent } from './stock/stock.component';
import { SettingsComponent } from './settings/settings.component';
import { CustomerEditComponent } from './settings/customers/edit/customer.edit.component';
import { CustomerListComponent } from './settings/customers/list/customer.list.component';
import { SupplierEditComponent } from './settings/suppliers/edit/supplier.edit.component';
import { SupplierListComponent } from './settings/suppliers/list/supplier.list.component';
import { EmployeeEditComponent } from './settings/employees/edit/employee.edit.component';
import { EmployeeListComponent } from './settings/employees/list/employee.list.component';
import { RouteEditComponent } from './settings/routes/edit/route.edit.component';
import { RouteListComponent } from './settings/routes/list/route.list.component';
import { ItemEditComponent } from './stock/items/edit/item.edit.component';
import { ItemListComponent } from './stock/items/list/item.list.component';
import { CategoryEditComponent } from './stock/categories/edit/category.edit.component';
import { CategoryListComponent } from './stock/categories/list/category.list.component';
import { DirectSaleEditComponent } from './sales/DirectSales/directSale.edit.component';
import { SalesMainEditComponent } from './sales/salesMain/salesmain.edit.component';
import { SalesOrderEditComponent } from './sales/salesOrder/salesOrder.edit.component';
import { SalesReturnEditComponent } from './sales/salesReturns/salesReturn.edit.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    SalesComponent,
    PurchasesComponent,
    PaymentsComponent,
    StockComponent,
    SettingsComponent,
    CustomerEditComponent,
    CustomerListComponent,
    SupplierEditComponent,
    SupplierListComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    RouteEditComponent,
    RouteListComponent,
    ItemEditComponent,
    ItemListComponent,
    CategoryEditComponent,
    CategoryListComponent,
    DirectSaleEditComponent,
    SalesMainEditComponent,
    SalesOrderEditComponent,
    SalesReturnEditComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
