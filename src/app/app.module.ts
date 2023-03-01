import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { LogginService } from './logginService.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LogginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
