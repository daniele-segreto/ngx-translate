import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Moduli per la gestione delle richieste HTTP
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; // Loader per le traduzioni HTTP
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    TranslateModule.forRoot({
      loader: { // Configurazione del loader delle traduzioni
        provide: TranslateLoader, // Fornisce il TranslateHttpLoader per caricare le traduzioni
        useFactory: HttpLoaderFactory, // Utilizza la factory function HttpLoaderFactory per creare l'istanza del loader
        deps: [HttpClient] // Dipendenza necessaria per la factory function (HttpClient)
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
