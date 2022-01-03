import { ProductsComponent } from './products/products.component';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent, pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'edit/:id', component:FormComponent},
  {path: 'new', component:FormComponent},
  {path: 'products', component:ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
