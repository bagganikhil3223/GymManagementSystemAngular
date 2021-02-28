import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [LoginComponent, AuthenticationComponent],
    exports: [LoginComponent, AuthenticationComponent]
})
export class CoreModule {

}
