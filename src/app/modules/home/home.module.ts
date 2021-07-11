import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/authentication/login/authentication.guard';
import { CustomerStatsComponent } from './customer-stats/customer-stats.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
    {
        path: '', component: HomeComponent, canActivate: [AuthGuardService]
    }
];

@NgModule({
declarations: [HomeComponent, CustomerStatsComponent],
imports: [RouterModule.forChild(routes)]
})
export class HomeModule{}
