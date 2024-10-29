import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GamepadComponent } from "./components/gamepad/gamepad.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GamepadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TicTacToe_project';
}
