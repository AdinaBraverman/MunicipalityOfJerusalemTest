import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { EachDayComponent } from './Component/each-day/each-day.component';
import { MainPageComponent } from './Component/main-page/main-page.component';

// material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatInputModule} from '@angular/material/input';
import { OrderByPipe } from './Pipe/order-by.pipe';
import { FilterByPipe } from './Pipe/filter-by.pipe';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    EachDayComponent,
    MainPageComponent,
    OrderByPipe,
    FilterByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [MatDatepickerModule,
    MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
