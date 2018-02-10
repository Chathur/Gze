import { Routes } from '@angular/router';
import { SalesComponent} from './sales.component';
import { DirectSaleEditComponent } from './DirectSales/directSale.edit.component';
import { SalesMainEditComponent } from './salesMain/salesmain.edit.component';
import { SalesOrderEditComponent } from './salesOrder/salesOrder.edit.component';
import { SalesReturnEditComponent } from './salesReturns/salesReturn.edit.component';

export const SalesRoutes: Routes = [
    { path: '', component: SalesComponent},
    { path: 'sales-main', component: SalesMainEditComponent},
    { path: 'sales-order', component: SalesOrderEditComponent},
    { path: 'sales-direct', component: DirectSaleEditComponent},
    { path: 'sales-return', component: SalesReturnEditComponent}
]