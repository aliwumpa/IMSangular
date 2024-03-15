import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// import Component
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';


@NgModule({
    declarations: [AppComponent, LoginComponent],
    imports: [
      BrowserModule,
      CommonModule,
      FormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}