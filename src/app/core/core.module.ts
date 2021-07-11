import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication/login/authentication.routing.module';
import { AuthenticationService } from './authentication/login/authentication.service';
import { LoginComponent } from './authentication/login/login.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [ReactiveFormsModule, FormsModule, AuthenticationRoutingModule],
    providers: [AuthenticationService]
})
export class CoreModule {

}
