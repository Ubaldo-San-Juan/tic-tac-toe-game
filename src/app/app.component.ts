import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GamepadComponent } from "./components/gamepad/gamepad.component";
import { ServerService } from './services/server.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GamepadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TicTacToe_project';

  serverService = inject(ServerService);
}
