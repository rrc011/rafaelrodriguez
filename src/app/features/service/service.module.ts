import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceComponent} from './service.component';
import {RouterModule} from '@angular/router';

@NgModule({
	imports: [CommonModule, RouterModule.forChild([{path: '', component: ServiceComponent}])],
	declarations: [ServiceComponent],
})
export class ServiceModule {}
