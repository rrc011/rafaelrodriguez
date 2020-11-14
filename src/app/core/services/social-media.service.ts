import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseApiService} from 'src/app/helpers/base-api-service';
import {environment} from 'src/environments/environment';
import {endpoints} from '../constants/endpoints.constants';
import {Responses} from '../models/responses';
import {SingleResponse} from '../models/single-response';
import {Skill} from '../models/skill';
import {SocialMedia} from '../models/social-media';

@Injectable({
	providedIn: 'root',
})
export class SocialMediaService extends BaseApiService<SocialMedia> {
	constructor(public http: HttpClient) {
		super(http);
	}

	getDefaultSocialMedia<SocialMedia>(): Promise<SocialMedia> {
		return this.get<SocialMedia>(
			`${environment.apiUrl}${endpoints.socialMedia}/getAllWithoutPagination/${endpoints.default_user}`
		).toPromise();
	}

	getAll(page: number, size: number): Promise<SingleResponse> {
		return this.get<SingleResponse>(
			`${environment.apiUrl}${endpoints.socialMedia}?size=${size}&page=${page}`
		).toPromise();
	}

	getAllWithoutPagination(userId: string): Promise<SingleResponse> {
		return this.get<SingleResponse>(
			`${environment.apiUrl}${endpoints.socialMedia}/getAllWithoutPagination/${userId}`
		).toPromise();
	}

	create(model: SocialMedia): Promise<Responses[]> {
		return this.post(`${environment.apiUrl}${endpoints.socialMedia}`, model).toPromise();
	}

	update(id: string, model: SocialMedia): Promise<Responses[]> {
		return this.put(`${environment.apiUrl}${endpoints.socialMedia}/${id}`, model).toPromise();
	}

	hardDelete(id: string): Promise<Responses[]> {
		return this.delete(`${environment.apiUrl}${endpoints.socialMedia}/${id}`).toPromise();
	}
}
