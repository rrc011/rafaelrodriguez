import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
	imports: [CommonModule, RouterModule, FontAwesomeModule],
	declarations: [HeaderComponent, FooterComponent],
	exports: [HeaderComponent, FooterComponent],
})
export class ThemeModule {}
