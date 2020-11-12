import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UploadComponent} from './upload.component';
import {AuthGuard} from 'src/app/auth/guards/auth.guard';
import {RouterModule} from '@angular/router';
import {FilePickerModule} from 'ngx-awesome-uploader';
import {PdfViewerModule} from 'ng2-pdf-viewer';

@NgModule({
	imports: [
		CommonModule,
		FilePickerModule,
		PdfViewerModule,
		RouterModule.forChild([{path: '', component: UploadComponent, canActivate: [AuthGuard]}]),
	],
	declarations: [UploadComponent],
})
export class UploadModule {}
