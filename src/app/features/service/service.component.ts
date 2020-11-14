import {Component, OnInit} from '@angular/core';
import {NzTableQueryParams} from 'ng-zorro-antd/table';
import {Service} from 'src/app/core/models/service';
import {AlertService} from 'src/app/core/services/alert.service';
import {AuthenticationService} from 'src/app/core/services/authentication.service';
import {ServiceService} from 'src/app/core/services/service.service';

@Component({
	selector: 'app-service',
	templateUrl: './service.component.html',
	styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
	lst: Service[] = [];

	constructor(
		private _serviceService: ServiceService,
		private _alertService: AlertService,
		private _authService: AuthenticationService
	) {}

	ngOnInit() {
		this.init();
	}

	init() {
		this._serviceService.getDefaultService().then((r: Service[]) => (this.lst = r));
	}
}
