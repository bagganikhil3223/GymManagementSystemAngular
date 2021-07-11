import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HeaderComponent, UserProfileComponent],
    exports: [HeaderComponent, UserProfileComponent]
})
export class SharedModule {

}
