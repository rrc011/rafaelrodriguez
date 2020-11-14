import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseApiService} from 'src/app/helpers/base-api-service';
import {environment} from 'src/environments/environment';
import {endpoints} from '../constants/endpoints.constants';
import {Responses} from '../models/responses';
import {Service} from '../models/service';
import {SingleResponse} from '../models/single-response';

@Injectable({
	providedIn: 'root',
})
export class ServiceService extends BaseApiService<Service> {
	constructor(public http: HttpClient) {
		super(http);
	}

	getDefaultService<Service>(): Promise<Service> {
		return this.get<Service>(
			`${environment.apiUrl}${endpoints.services}/getAllWithoutPagination/${endpoints.default_user}`
		).toPromise();
	}

	getAll(page: number, size: number): Promise<SingleResponse> {
		return this.get<SingleResponse>(
			`${environment.apiUrl}${endpoints.services}?size=${size}&page=${page}`
		).toPromise();
	}

	getAllWithoutPagination(userId: string): Promise<SingleResponse> {
		return this.get<SingleResponse>(
			`${environment.apiUrl}${endpoints.services}/getAllWithoutPagination/${userId}`
		).toPromise();
	}

	create(model: Service): Promise<Responses[]> {
		return this.post(`${environment.apiUrl}${endpoints.services}`, model).toPromise();
	}

	update(id: string, model: Service): Promise<Responses[]> {
		return this.put(`${environment.apiUrl}${endpoints.services}/${id}`, model).toPromise();
	}

	hardDelete(id: string): Promise<Responses[]> {
		return this.delete(`${environment.apiUrl}${endpoints.services}/${id}`).toPromise();
	}
}
