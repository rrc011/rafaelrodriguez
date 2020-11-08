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
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
