import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIPrefixInterceptor } from './core/http/api-prefix-interceptor';
import { AuthGuardService } from './core/authentication/login/authentication.guard';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule
  ],
  providers: [AuthGuardService, {
    provide: HTTP_INTERCEPTORS,
    useClass: APIPrefixInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
