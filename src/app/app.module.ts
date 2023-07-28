import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { BottomComponent } from './bottom/bottom.component';
import { HiringSectionComponent } from './hiring-section/hiring-section.component';
import { HiringFooterComponent } from './hiring-footer/hiring-footer.component';
import { HiringMainSectionComponent } from './hiring-main-section/hiring-main-section.component';
import { CareersComponent } from './careers/careers.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    BottomComponent,
    HiringSectionComponent,
    HiringFooterComponent,
    HiringMainSectionComponent,
    CareersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
