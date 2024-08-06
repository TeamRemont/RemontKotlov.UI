import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { ServiceTypesComponent } from './components/service-types/service-types.component';
import { WorkersComponent } from './components/workers/workers.component';
import { BrandsComponent } from './components/brands/brands.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

import { SnapshotsComponent } from './components/snapshots/snapshots.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactButtonsComponent } from './components/contact-buttons/contact-buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    MainHeaderComponent,
    ServiceTypesComponent,
    WorkersComponent,
    SnapshotsComponent,
    BrandsComponent,
    ContactsComponent,
    FooterComponent,
    ContactButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    TagModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
