import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterStateSerializer
} from '@ngrx/router-store';

import { CustomSerializer } from './shared/utils';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      router : routerReducer
    }),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([])
  ],
  providers: [ {provide: RouterStateSerializer, useClass : CustomSerializer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
