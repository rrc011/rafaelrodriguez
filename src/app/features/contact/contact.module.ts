import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact.component';
import {RouterModule} from '@angular/router';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {FormsModule} from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NzFormModule,
		NzInputModule,
		NzButtonModule,
		RouterModule.forChild([{path: '', component: ContactComponent}]),
	],
	declarations: [ContactComponent],
})
export class ContactModule {}
