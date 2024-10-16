import { inject, Injectable, Inject, PLATFORM_ID } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { FacebookPixelService } from '../services/facebook-pixel.service';

@Injectable({
  providedIn: 'root',
})
export class FacebookPixelGuard implements CanActivate {
  private fps = inject(FacebookPixelService);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  canActivate(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      this.fps.load();
    }
    return true;
  }
}
