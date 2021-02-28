import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
    declarations: [HeaderComponent, UserProfileComponent],
    exports: [HeaderComponent, UserProfileComponent]
})
export class SharedModule {

}
