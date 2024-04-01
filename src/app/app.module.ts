import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';

// import Component
import { LoginComponent } from './components/login/login.component';
import { InventoryItemsComponent } from './components/inventory_items/inventory_items.component';
import { ItemAddEditComponent } from './components/item_add-edit/item_add-edit.component';
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
      AppComponent, 
      LoginComponent, 
      InventoryItemsComponent,
      ItemAddEditComponent
    ],
    imports: [
      BrowserModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule,
      BrowserAnimationsModule,

      // Angular material
      MatIconModule,
      MatButtonModule,
      MatToolbarModule,
      MatFormFieldModule,
      MatInputModule,
      MatMenuModule,
      MatDividerModule,
      MatTableModule,
      MatPaginatorModule,
      MatDialogModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}