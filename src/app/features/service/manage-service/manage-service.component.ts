import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {NzTableQueryParams} from 'ng-zorro-antd/table';
import {NzUploadFile} from 'ng-zorro-antd/upload';
import {endpoints} from 'src/app/core/constants/endpoints.constants';
import {Service} from 'src/app/core/models/service';
import {AlertService} from 'src/app/core/services/alert.service';
import {AuthenticationService} from 'src/app/core/services/authentication.service';
import {ServiceService} from 'src/app/core/services/service.service';
import {environment} from 'src/environments/environment';
import {getBase64, dataURLtoFile} from '@helpers/utils';

@Component({
	selector: 'app-manage-service',
	templateUrl: './manage-service.component.html',
	styleUrls: ['./manage-service.component.scss'],
})
export class ManageServiceComponent implements OnInit {
	fileList: NzUploadFile[] = [];
	isVisible = false;
	model: Service = new Service();
	lst: Service[] = [];
	pageIndex: number = 1;
	pageSize: number = 10;
	totalItems: number;

	constructor(
		private _serviceService: ServiceService,
		private _alertService: AlertService,
		private _authService: AuthenticationService,
		private http: HttpClient
	) {}

	ngOnInit() {
		this.init(undefined);
	}

	init(e: NzTableQueryParams) {
		if (e) {
			this.pageSize = e.pageSize;
			this.pageIndex = e.pageIndex;
		}
		this._serviceService.getAll(this.pageIndex, this.pageSize).then((r) => {
			this.lst = r['Items'];
			this.totalItems = r['TotalCount'];
		});
	}

	beforeUpload = (file: NzUploadFile): boolean => {
		this.fileList = [file];
		return false;
	};

	submitForm() {
		if (this.model._id) this.update();
		else this.create();
	}

	create() {
		this._alertService.question(() => {
			this.model.userId = this._authService.currentUserValue.id;
			this.fileList.forEach((file: NzUploadFile) => {
				getBase64(file).then((r: string) => {
					this.model.img = r;
					this._serviceService.create(this.model).then(() => {
						this._alertService.success('Service created').then(() => {
							this.fileList = [];
							this.model = new Service();
							this.isVisible = false;
							this.init(undefined);
						});
					});
				});
			});
		}, 'Estas seguro de guardar este registro');
	}

	update() {
		this._alertService.question(() => {
			this.model.userId = this._authService.currentUserValue.id;
			this.fileList.forEach((file: NzUploadFile) => {
				getBase64(file).then((r: string) => {
					this.model.img = r;
					this._serviceService.update(this.model._id, this.model).then(() => {
						this._alertService.success('Service updated').then(() => {
							this.isVisible = false;
							this.init(undefined);
						});
					});
				});
			});
		}, 'Estas seguro de editar este registro');
	}

	delete(id: string) {
		this._alertService.question(() => {
			this._serviceService.hardDelete(id).then(() => {
				this._alertService.success('Registro elminado').then(() => {
					this.isVisible = false;
					this.init(undefined);
				});
			});
		}, 'Estas seguro de eliminar este registro');
	}

	showModal(editModel: Service): void {
		if (editModel) {
			this.model = editModel;
			let file = dataURLtoFile(this.model.img, 'image.png');
			this.fileList = [
				{
					uid: '1',
					name: file.name,
					filename: file.name,
					size: file.size,
					status: 'done',
					response: 'Server Error 500', // custom error message to show
					url: this.model.img,
				},
			];
		}
		this.isVisible = true;
	}

	handleCancel(): void {
		this.isVisible = false;
		this.model = new Service();
		this.fileList = [];
	}
}
