import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseApiService} from 'src/app/helpers/base-api-service';
import {environment} from 'src/environments/environment';
import {endpoints} from '../constants/endpoints.constants';
import {Contact} from '../models/contact';

@Injectable({
	providedIn: 'root',
})
export class ContactService extends BaseApiService<Contact> {
	constructor(public http: HttpClient) {
		super(http);
	}

	sendEmail(model: Contact) {
		return this.post(`${environment.apiUrl}${endpoints.contact}`, model).toPromise();
	}
}
