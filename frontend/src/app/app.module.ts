import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Moduli per la gestione delle richieste HTTP
import { BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; // Loader per le traduzioni HTTP

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'

// Factory function per il loader delle traduzioni HTTP
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// Definizione del modulo principale dell'applicazione
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Importa il modulo per la gestione delle richieste HTTP
  ],
  providers: [], // Fornitori di servizi
  bootstrap: [AppComponent]
})
export class AppModule { }
