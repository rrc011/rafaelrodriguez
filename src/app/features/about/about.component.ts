import {Component, OnInit} from '@angular/core';
import {PersonalInformation} from 'src/app/core/models/personal-information';
import {PersonalInformationService} from 'src/app/core/services/personal-information.service';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
	model: PersonalInformation = new PersonalInformation();

	constructor(private _infoService: PersonalInformationService) {}

	ngOnInit() {
		this.init();
	}

	init() {
		this._infoService.getDefaultPersonalInformation().then((r: PersonalInformation) => {
			this.model = r;
		});
	}
}
