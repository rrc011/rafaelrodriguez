import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { map } from "rxjs/operators";
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Session } from '../models/session';
import { Login } from '../models/login';
import { endpoints } from '../constants/endpoints.constants';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	private currentUserSubject: BehaviorSubject<Session>;
	public currentUser: Observable<Session>;

	constructor(private http: HttpClient) {
		this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
		this.currentUser = this.currentUserSubject.asObservable();
	}

	public get currentUserValue(): Session {
		return this.currentUserSubject.value;
	}

	login(model:Login) {
		return this.http.post(`${environment.apiUrl}${endpoints.login}`, model).pipe(
			map((session:Session) => {
        localStorage.setItem('currentUser', JSON.stringify(session.user));
        localStorage.setItem('token', session.access_token)
				this.currentUserSubject.next(session);
				return session
			})
		);
	}

	logout() {
		// remove user from local storage to log user out
		localStorage.removeItem('currentUser');
		this.currentUserSubject.next(null);
	}
}
