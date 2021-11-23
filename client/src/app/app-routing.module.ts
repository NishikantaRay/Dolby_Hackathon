import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { HeaderComponent } from './home/header/header.component';
import { HotelComponent } from './home/hotel/hotel.component';
import { LiveformComponent } from './home/liveform/liveform.component';
import { SawoComponent } from './home/sawo/sawo.component';
import { SurveyComponent } from './home/survey/survey.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'form', component: LiveformComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'feedback', component: SurveyComponent },
  { path: 'sawo', component: SawoComponent },
  { path: '', redirectTo: '/sawo', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
