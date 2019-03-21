import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { EventsComponent } from "./events/events.component";
import { SpecialEventsComponent } from "./special-events/special-events.component";
import { AuthGuard } from "./auth.guard";
import { EncryptionComponent } from "./encryption/encryption.component";
import { DecryptionComponent } from "./decryption/decryption.component";
import { FeedbackComponent } from "./feedback/feedback.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: EventsComponent
  },
  {
    path: "encrypt",
    component: EncryptionComponent
  },
  {
    path: "decrypt",
    component: DecryptionComponent
  },
  {
    path: "events",
    component: EventsComponent
  },
  {
    path: "special",
    component: SpecialEventsComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "feedback",
    component: FeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
