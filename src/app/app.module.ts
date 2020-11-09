import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ThemeModule} from './theme/theme.module';
import {HomeModule} from './features/home/home.module';
import {AboutModule} from './features/about/about.module';
import {ServiceModule} from './features/service/service.module';
import {PortfolioModule} from './features/portfolio/portfolio.module';
import {AuthModule} from './auth/auth.module';
import { BasicAuthInterceptor } from './helpers/basic-auth.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		RouterModule.forRoot([]),
		AppRoutingModule,
		ThemeModule,
		HomeModule,
		AboutModule,
		ServiceModule,
		PortfolioModule,
		AuthModule,
		HttpClientModule,
	],
	providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
],
	bootstrap: [AppComponent],
})
export class AppModule {}
