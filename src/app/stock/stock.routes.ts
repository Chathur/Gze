import { Routes } from '@angular/router';
import { StockComponent} from './stock.component';
import { ItemEditComponent } from './items/edit/item.edit.component';
import { ItemListComponent } from './items/list/item.list.component';
import { CategoryEditComponent } from './categories/edit/category.edit.component';
import { CategoryListComponent } from './categories/list/category.list.component';

export const StockRoutes: Routes = [
    { path: '', component: StockComponent},
    { path: 'item-edit', component: ItemEditComponent},
    { path: 'item-list', component: ItemListComponent},
    { path: 'category-edit', component: CategoryEditComponent},
    { path: 'category-list', component: CategoryListComponent},
]