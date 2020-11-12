import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Session} from '../models/session';
import {Login} from '../models/login';
import {endpoints} from '../constants/endpoints.constants';
import {User} from '../models/user';
import {Router} from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	private currentUserSubject: BehaviorSubject<User>;
	public currentUser: Observable<User>;
	private currentTokenSubject: BehaviorSubject<string>;
	public currentToken: Observable<string>;

	constructor(private http: HttpClient, private router: Router) {
		this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
		this.currentUser = this.currentUserSubject.asObservable();
		this.currentTokenSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentToken')));
		this.currentToken = this.currentTokenSubject.asObservable();
	}

	public get currentUserValue(): User {
		this.currentUserSubject.next(JSON.parse(localStorage.getItem('currentUser')));
		return this.currentUserSubject.value;
	}

	public get currentTokenValue(): string {
		this.currentTokenSubject.next(localStorage.getItem('token'));
		return this.currentTokenSubject.value;
	}

	login(model: Login) {
		return this.http.post(`${environment.apiUrl}${endpoints.login}`, model).pipe(
			map((session: Session) => {
				localStorage.setItem('currentUser', JSON.stringify(session.user));
				localStorage.setItem('token', session.access_token);
				this.currentUserSubject.next(session.user);
				this.currentTokenSubject.next(session.access_token);
				return session;
			})
		);
	}

	logout() {
		// remove user from local storage to log user out
		localStorage.removeItem('currentUser');
		localStorage.removeItem('token');
		this.currentUserSubject.next(null);
		this.currentTokenSubject.next(null);
		this.router.navigateByUrl('/');
	}
}
