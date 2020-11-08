import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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

	constructor(private router: Router) {}

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
	}

	goToLogin() {
		this.router.navigateByUrl('auth', {state: {showHeader: false, showFooter: false}});
	}
}
