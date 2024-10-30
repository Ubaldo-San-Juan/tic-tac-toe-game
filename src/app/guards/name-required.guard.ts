import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const nameRequiredGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  if(userService.name()) return true;
  const routeTree = router.parseUrl("/change-name");
  return new RedirectCommand(routeTree, {skipLocationChange: true});
};
