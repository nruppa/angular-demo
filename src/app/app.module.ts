import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { ProductService } from "./productservice";

import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { SortingComponent } from './sorting/sorting.component';
import { SearchComponent } from './search/search.component';
import { CustomerService } from "./customerservice";
import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";
import { InputTextModule } from "primeng/inputtext";
import {MultiSelectModule} from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {ProgressBarModule} from 'primeng/progressbar';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ToastModule} from 'primeng/toast';

@NgModule({
  imports: [
   
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [AppComponent,SortingComponent, SearchComponent],
  bootstrap: [AppComponent],
  providers: [ProductService,CustomerService]
})
export class AppModule {}
