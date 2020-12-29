import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './navigation/home/home.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from './service/ProdutoService';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { SpinnerComponent } from './util/spinner/spinner.component';

registerLocaleData(localePt);
@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent, FooterComponent, ListaProdutoComponent, SpinnerComponent],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [
    ProdutoService,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
