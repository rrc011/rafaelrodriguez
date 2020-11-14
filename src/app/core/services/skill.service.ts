import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseApiService} from 'src/app/helpers/base-api-service';
import {environment} from 'src/environments/environment';
import {endpoints} from '../constants/endpoints.constants';
import {Responses} from '../models/responses';
import {SingleResponse} from '../models/single-response';
import {Skill} from '../models/skill';

@Injectable({
	providedIn: 'root',
})
export class SkillService extends BaseApiService<Skill> {
	constructor(public http: HttpClient) {
		super(http);
	}

	getDefaultSkills<Skill>(): Promise<Skill> {
		return this.get<Skill>(
			`${environment.apiUrl}${endpoints.skills}/getAllWithoutPagination/${endpoints.default_user}`
		).toPromise();
	}

	getAll(page: number, size: number): Promise<SingleResponse> {
		return this.get<SingleResponse>(
			`${environment.apiUrl}${endpoints.skills}?size=${size}&page=${page}`
		).toPromise();
	}

	getAllWithoutPagination(userId: string): Promise<SingleResponse> {
		return this.get<SingleResponse>(
			`${environment.apiUrl}${endpoints.skills}/getAllWithoutPagination/${userId}`
		).toPromise();
	}

	create(model: Skill): Promise<Responses[]> {
		return this.post(`${environment.apiUrl}${endpoints.skills}`, model).toPromise();
	}

	update(id: string, model: Skill): Promise<Responses[]> {
		return this.put(`${environment.apiUrl}${endpoints.skills}/${id}`, model).toPromise();
	}

	hardDelete(id: string): Promise<Responses[]> {
		return this.delete(`${environment.apiUrl}${endpoints.skills}/${id}`).toPromise();
	}
}
