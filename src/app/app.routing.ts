import {Routes} from '@angular/router';
import { FlierComponent } from './flier/flier.component';
import {SubCategoryComponent} from './sub-category/sub-category.component';

export const appRoutes: Routes = [
  { path: 'flier', component: FlierComponent},
  { path: 'sub-category', component: SubCategoryComponent},
  { path: '', component: FlierComponent},
  { path: '**', component: FlierComponent},
];
