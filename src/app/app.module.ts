import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaisieClientComponent } from './saisie-client/saisie-client.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShowFormDataComponent } from './show-form-data/show-form-data.component';
import { CtrlDataDirective } from './ctrl-data.directive';
import { PhonePipe } from './phone.pipe';
import { ShowCatalogueComponent } from './show-catalogue/show-catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    SaisieClientComponent,
    HeaderComponent,
    FooterComponent,
    ShowFormDataComponent,
    CtrlDataDirective,
    PhonePipe,
    ShowCatalogueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
