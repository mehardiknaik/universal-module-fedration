import { Component } from '@angular/core';
import { RemoteComponent } from './components/remote/remote.component';
import {HeroComponent} from "./components/hero/hero.component"

@Component({
  selector: 'app-root',
  imports: [RemoteComponent,HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'host-angular';
}
