import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInformationComponent } from './personal-information.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/guards/auth.guard';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([{path: '', component: PersonalInformationComponent, canActivate:[AuthGuard]}])
  ],
  declarations: [PersonalInformationComponent]
})
export class PersonalInformationModule { }
