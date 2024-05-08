import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    // Imposta la lingua predefinita dell'applicazione su 'en' (inglese)
    this.translate.setDefaultLang('en');
  }

  // Metodo per cambiare la lingua dell'applicazione
  switchLanguage(language: string) {
    // Utilizza il servizio TranslateService per impostare la lingua
    this.translate.use(language);
  }
}
