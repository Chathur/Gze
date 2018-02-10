import { Routes } from '@angular/router';
import { SettingsComponent} from './settings.component';
import { CustomerEditComponent } from './customers/edit/customer.edit.component';
import { CustomerListComponent } from './customers/list/customer.list.component';
import { SupplierEditComponent } from './suppliers/edit/supplier.edit.component';
import { SupplierListComponent } from './suppliers/list/supplier.list.component';
import { EmployeeEditComponent } from './employees/edit/employee.edit.component';
import { EmployeeListComponent } from './employees/list/employee.list.component';
import { RouteEditComponent } from './routes/edit/route.edit.component';
import { RouteListComponent } from './routes/list/route.list.component';

export const SettingsRoutes: Routes = [
    { path: '', component: SettingsComponent},
    { path: 'customer-edit', component: CustomerEditComponent},
    { path: 'customer-list', component: CustomerListComponent},
    { path: 'supplier-edit', component: SupplierEditComponent},
    { path: 'supplier-list', component: SupplierListComponent},
    { path: 'employee-edit', component: EmployeeEditComponent},
    { path: 'employee-list', component: EmployeeListComponent},
    { path: 'route-edit',    component: RouteEditComponent},
    { path: 'route-list',    component: RouteListComponent}
]