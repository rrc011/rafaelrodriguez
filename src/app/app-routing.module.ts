import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
	},
	{
		path: 'about',
		loadChildren: () => import('./features/about/about.module').then((m) => m.AboutModule),
	},
	{
		path: 'services',
		loadChildren: () => import('./features/service/service.module').then((m) => m.ServiceModule),
	},
	{
		path: 'portfolio',
		loadChildren: () => import('./features/portfolio/portfolio.module').then((m) => m.PortfolioModule),
	},
	{
		path: 'personal-information',
		loadChildren: () =>
			import('./features/personal-information/personal-information.module').then(
				(m) => m.PersonalInformationModule
			),
	},
	{
		path: 'upload',
		loadChildren: () => import('./features/upload/upload.module').then((m) => m.UploadModule),
	},
	{
		path: 'skills',
		loadChildren: () => import('./features/skills/skills.module').then((m) => m.SkillsModule),
	},
	{
		path: 'contact',
		loadChildren: () => import('./features/contact/contact.module').then((m) => m.ContactModule),
	},
	{
		path: 'social-media',
		loadChildren: () =>
			import('./features/social-media/social-media.module').then((m) => m.SocialMediaModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
