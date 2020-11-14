import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BaseApiService} from 'src/app/helpers/base-api-service';
import {environment} from 'src/environments/environment';
import {endpoints} from '../constants/endpoints.constants';
import {PersonalInformation} from '../models/personal-information';
import {Responses} from '../models/responses';

@Injectable({
	providedIn: 'root',
})
export class PersonalInformationService extends BaseApiService<PersonalInformation> {
	constructor(public http: HttpClient) {
		super(http);
	}

	createPersonalInformation(model: PersonalInformation): Promise<Responses[]> {
		return this.post(`${environment.apiUrl}${endpoints.personal_information}`, model).toPromise();
	}

	updatePersonalInformation(id: string, model: PersonalInformation) {
		return this.put(`${environment.apiUrl}${endpoints.personal_information}/${id}`, model).toPromise();
	}

	getPersonalInformation<PersonalInformation>(userId: string): Promise<PersonalInformation> {
		return this.get<PersonalInformation>(
			`${environment.apiUrl}${endpoints.personal_information}/getByUserId/${userId}`
		).toPromise();
	}

	getDefaultPersonalInformation<PersonalInformation>(): Promise<PersonalInformation> {
		return this.get<PersonalInformation>(
			`${environment.apiUrl}${endpoints.personal_information}/getByUserId/${endpoints.default_user}`
		).toPromise();
	}

	getFile(path: string) {
		return this.get(`${environment.apiUrl}${endpoints.personal_information}/download-cv/${path}`).toPromise();
	}

	getFileBase64(path: string): Promise<string> {
		return this.get<string>(
			`${environment.apiUrl}${endpoints.personal_information}/display-cv/${path}`
		).toPromise();
	}
}
