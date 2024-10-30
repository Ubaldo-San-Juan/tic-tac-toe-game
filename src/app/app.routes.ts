import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlayComponent } from './pages/play/play.component';
import { ChangeNameComponent } from './pages/change-name/change-name.component';
import { nameRequiredGuard } from './guards/name-required.guard';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [nameRequiredGuard]
  },
  {
    path: "play",
    component: PlayComponent,
    canActivate: [nameRequiredGuard]
  },
  {
    path: "change-name",
    component: ChangeNameComponent
  }
];
