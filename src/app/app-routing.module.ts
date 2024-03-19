import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

// import Component
import { LoginComponent } from './components/login/login.component';
import { InventoryItemsComponent } from './components/inventory_items/inventory_items.component'; 

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' 
  },
  { 
    path: 'login', 
    component: LoginComponent, 
  },
  { 
    path: 'inventory_items', 
    component: InventoryItemsComponent,
    canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
