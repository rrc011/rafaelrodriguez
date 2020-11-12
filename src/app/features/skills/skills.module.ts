import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkillsComponent} from './skills.component';
import {RouterModule} from '@angular/router';
import {ManageSkillsComponent} from './manage-skills/manage-skills.component';

@NgModule({
	imports: [
		CommonModule,
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
