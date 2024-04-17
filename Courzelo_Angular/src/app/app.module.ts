import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackComponent } from './back/back.component';
import { FrontComponent } from './front/front.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HeadderrComponent } from './headderr/headderr.component';
import { HttpClientModule } from '@angular/common/http';
import { ContenuComponent } from './contenu/contenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './User/add-user/add-user.component';
import { UserService } from './Service/user.service';
import { ProfileComponent } from './User/profile/profile.component';
import { PartnerComponent } from './User/partner/partner.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';
import { ResetpasswordComponent } from './User/resetpassword/resetpassword.component';
import { AlluserComponent } from './User/alluser/alluser.component';
import { UpdateuserComponent } from './User/updateuser/updateuser.component';

@NgModule({
  declarations: [
    AppComponent,
    BackComponent,
    FrontComponent,
    FooterComponent,
    LoginComponent,
    HeadderrComponent,
    ContenuComponent,
    AddUserComponent,
    ProfileComponent,
    PartnerComponent,
    UserProfileComponent,
    ResetpasswordComponent,
    AlluserComponent,
    UpdateuserComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
