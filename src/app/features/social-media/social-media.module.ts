import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SocialMediaComponent} from './social-media.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzProgressModule} from 'ng-zorro-antd/progress';
import {NzTableModule} from 'ng-zorro-antd/table';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NzModalModule,
		NzFormModule,
		NzInputModule,
		NzButtonModule,
		NzInputNumberModule,
		NzTableModule,
		NzDividerModule,
		NzProgressModule,
		RouterModule.forChild([{path: 'management-social-media', component: SocialMediaComponent}]),
	],
	declarations: [SocialMediaComponent],
})
export class SocialMediaModule {}
