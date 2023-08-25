import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "new",
    component: ContactFormComponent
  },
  {
    path: "list",
    component: ContactListComponent
  },
  {
    path: "edit/:id",
    component: ContactFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
