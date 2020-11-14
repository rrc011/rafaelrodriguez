import {Component, OnInit} from '@angular/core';
import {Skill} from 'src/app/core/models/skill';
import {AuthenticationService} from 'src/app/core/services/authentication.service';
import {SkillService} from 'src/app/core/services/skill.service';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
	lst: Skill[] = [];
	constructor(private _skillService: SkillService, private _authService: AuthenticationService) {}

	ngOnInit() {
		this.init();
	}

	init() {
		this._skillService.getDefaultSkills().then((r: any) => (this.lst = r));
	}
}
