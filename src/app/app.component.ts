import {Component} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd, RoutesRecognized} from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'APP';
	showHeader = true;
	showSidebar = false;
	showFooter = true;

	constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		// this.router.events.subscribe((event) => {
		// 	if (event instanceof NavigationEnd) {
		// 		this.activatedRoute.data.subscribe(console.log);
		// 		console.log(this.router.getCurrentNavigation().extras.state?.showHeader);
		// 		if (this.router.getCurrentNavigation().extras.state) {
		// 			this.showHeader = this.router.getCurrentNavigation().extras.state?.showHeader;
		// 			this.showFooter = this.router.getCurrentNavigation().extras.state?.showFooter;
		// 		}
		// 		console.log(this.showHeader);
		// 	}
		// });
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.showHeader = !event.url.includes("/auth");
				this.showFooter = !event.url.includes("/auth");
			}
		});
	}
}
