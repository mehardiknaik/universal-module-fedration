import { Component } from '@angular/core';
import { RemoteComponent } from './components/remote/remote.component';
import { RemoteInfoComponent } from './components/remote-info/remote-info.component';
import { HeroComponent } from './components/hero/hero.component';
import { init } from '@module-federation/enhanced/runtime';
import { environment } from '../environments/environment';
init({
  name: '@demo/app-main',
  remotes: [
    {
      name: '@demo/remote',
      entry: `${environment.REMOTE_HOST}/mf-manifest.json`,
      alias: 'remote',
    },
  ],
});
@Component({
  selector: 'app-root',
  imports: [RemoteComponent, HeroComponent, RemoteInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'host-angular';
}
