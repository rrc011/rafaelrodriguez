import {Component, OnInit} from '@angular/core';
import {Contact} from 'src/app/core/models/contact';
import {AlertService} from 'src/app/core/services/alert.service';
import {ContactService} from 'src/app/core/services/contact.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
	model: Contact = new Contact();

	constructor(private _contactService: ContactService, private _alertService: AlertService) {}

	ngOnInit() {}

	submit() {
		this._contactService.sendEmail(this.model).then(() => {
			this._alertService.success('Email sended').then(() => window.location.reload());
		});
	}

	reset() {
		this.model = new Contact();
	}
}
