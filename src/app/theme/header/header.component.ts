import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { User } from 'src/app/core/models/user';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

interface IMenu {
	name: string;
	url: string;
	submenus?: IMenu[];
}

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
	menus: IMenu[] = [];
  user:User = new User();
	constructor(private router: Router, private authService: AuthenticationService) {}

	ngOnInit() {
		this.menus = [
			{
				name: 'Home',
				url: '/',
			},
			{
				name: 'About',
				url: '/about',
			},
			{
				name: 'Services',
				url: '/services',
			},
			{
				name: 'Portfolio',
				url: '/portfolio',
			},
			{
				name: 'Pages',
				url: '#',
				submenus: [
					{
						name: 'Elements',
						url: '#',
					},
					{
						name: 'Portfolio Details',
						url: '#',
					},
				],
			},
			{
				name: 'Blog',
				url: '#',
				submenus: [
					{
						name: 'Blog',
						url: '#',
					},
					{
						name: 'Blog details',
						url: '#',
					},
				],
			},
			{
				name: 'Contact',
				url: '/',
			},
    ];
    this.user = this.authService.currentUserValue.user;
	}

	goToLogin() {
		this.router.navigateByUrl('auth', {state: {showHeader: false, showFooter: false}});
  }

  logout() {
    this.authService.logout()
    this.user = new User();
    console.log(this.user);
	}
}
