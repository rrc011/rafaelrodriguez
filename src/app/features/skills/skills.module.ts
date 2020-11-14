import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzProgressModule} from 'ng-zorro-antd/progress';

import {SkillsComponent} from './skills.component';
import {ManageSkillsComponent} from './manage-skills/manage-skills.component';
import {FormsModule} from '@angular/forms';

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
		RouterModule.forChild([
			{path: '', component: SkillsComponent},
			{
				path: 'manageSkills',
				component: ManageSkillsComponent,
			},
		]),
	],
	declarations: [SkillsComponent, ManageSkillsComponent],
})
export class SkillsModule {}
