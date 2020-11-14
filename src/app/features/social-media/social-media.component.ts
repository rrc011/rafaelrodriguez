import {Component, OnInit} from '@angular/core';
import {NzTableQueryParams} from 'ng-zorro-antd/table';
import {SocialMedia} from 'src/app/core/models/social-media';
import {AlertService} from 'src/app/core/services/alert.service';
import {AuthenticationService} from 'src/app/core/services/authentication.service';
import {SocialMediaService} from 'src/app/core/services/social-media.service';

@Component({
	selector: 'app-social-media',
	templateUrl: './social-media.component.html',
	styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent implements OnInit {
	isVisible = false;
	model: SocialMedia = new SocialMedia();
	lst: SocialMedia[] = [];
	pageIndex: number = 1;
	pageSize: number = 10;
	totalItems: number;

	constructor(
		private _socialMediaService: SocialMediaService,
		private _alertService: AlertService,
		private _authService: AuthenticationService
	) {}

	ngOnInit() {
		this.init(undefined);
	}

	init(e: NzTableQueryParams) {
		if (e) {
			this.pageSize = e.pageSize;
			this.pageIndex = e.pageIndex;
		}
		this._socialMediaService.getAll(this.pageIndex, this.pageSize).then((r) => {
			this.lst = r['Items'];
			this.totalItems = r['TotalCount'];
		});
	}

	submitForm() {
		if (this.model._id) this.update();
		else this.create();
	}

	create() {
		this._alertService.question(() => {
			this.model.userId = this._authService.currentUserValue.id;
			this._socialMediaService.create(this.model).then(() => {
				this._alertService.success('Social media created').then(() => {
					this.isVisible = false;
					this.init(undefined);
				});
			});
		}, 'Estas seguro de guardar este registro');
	}

	update() {
		this._alertService.question(() => {
			this.model.userId = this._authService.currentUserValue.id;
			this._socialMediaService.update(this.model._id, this.model).then(() => {
				this._alertService.success('Social media updated').then(() => {
					this.isVisible = false;
					this.init(undefined);
				});
			});
		}, 'Estas seguro de editar este registro');
	}

	delete(id: string) {
		this._alertService.question(() => {
			this._socialMediaService.hardDelete(id).then(() => {
				this._alertService.success('Registro elminado').then(() => {
					this.isVisible = false;
					this.init(undefined);
				});
			});
		}, 'Estas seguro de eliminar este registro');
	}

	showModal(editModel: SocialMedia): void {
		if (editModel) this.model = editModel;
		this.isVisible = true;
	}

	handleCancel(): void {
		this.isVisible = false;
		this.model = new SocialMedia();
	}
}
