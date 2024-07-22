import { CanActivateFn } from '@angular/router';

export const canActivateChildGuard: CanActivateFn = (route, state) => {
  return true;
};
