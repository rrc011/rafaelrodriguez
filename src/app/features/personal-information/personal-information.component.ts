import {Component, OnInit} from '@angular/core';
import {PersonalInformation} from 'src/app/core/models/personal-information';
import {AlertService} from 'src/app/core/services/alert.service';
import {AuthenticationService} from 'src/app/core/services/authentication.service';
import {PersonalInformationService} from 'src/app/core/services/personal-information.service';

@Component({
	selector: 'app-personal-information',
	templateUrl: './personal-information.component.html',
	styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent implements OnInit {
	model: PersonalInformation = new PersonalInformation();

	constructor(
		private _infoService: PersonalInformationService,
		private _authService: AuthenticationService,
		private _alertService: AlertService
	) {}

	ngOnInit() {
		this.getInfo();
	}

	getInfo() {
		this._infoService
			.getPersonalInformation(this._authService.currentUserValue.id)
			.then((r: PersonalInformation) => (this.model = r));
	}

	submit() {
		if (this.model._id) this.update();
		else this.create();
	}

	create() {
		this.model.userId = this._authService.currentUserValue.id;
		this._alertService.question(() => {
			this._infoService.createPersonalInformation(this.model).then(() => {
				this._alertService.success('Informacion guardada').then(() => {
					this.getInfo();
				});
			});
		}, 'Estas seguro');
	}

	update() {
		this._alertService.question(() => {
			this._infoService.updatePersonalInformation(this.model._id, this.model).then(() => {
				this._alertService.success('Informacion actualizada').then(() => {
					this.getInfo();
				});
			});
		}, 'Estas seguro de actulizar tu informacion personal?');
	}
}
