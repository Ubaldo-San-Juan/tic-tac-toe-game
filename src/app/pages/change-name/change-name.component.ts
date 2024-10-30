import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-change-name',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './change-name.component.html',
  styleUrl: './change-name.component.scss'
})
export class ChangeNameComponent {
  userService = inject(UserService);

  changeName(newName:string){
    this.userService.name.set(newName);
  }
}
