import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ThemeModule} from './theme/theme.module';
import {HomeModule} from './features/home/home.module';
import {AboutModule} from './features/about/about.module';
import {ServiceModule} from './features/service/service.module';
import {PortfolioModule} from './features/portfolio/portfolio.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ThemeModule,
		HomeModule,
		AboutModule,
		ServiceModule,
		PortfolioModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
