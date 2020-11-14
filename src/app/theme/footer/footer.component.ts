import {Component, OnInit} from '@angular/core';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {SocialMedia} from 'src/app/core/models/social-media';
import {SocialMediaService} from 'src/app/core/services/social-media.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
	lst: SocialMedia[] = [];
	faCoffee = faCoffee;
	constructor(private _socialMediaService: SocialMediaService) {}

	ngOnInit() {
		this.init();
	}

	init() {
		this._socialMediaService.getDefaultSocialMedia().then((r: SocialMedia[]) => {
			this.lst = r;
		});
	}
}
