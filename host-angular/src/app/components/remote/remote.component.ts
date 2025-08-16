import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { init, loadRemote } from '@module-federation/enhanced/runtime';
import { environment } from '../../../environments/environment';

init({
  name: '@demo/app-main',
  remotes: [
    {
      name: '@demo/app2',
      entry: `${environment.REMOTE_HOST}/mf-manifest.json`,
      alias: 'app2'
    }
  ],
});

@Component({
  selector: 'app-remote',
  imports: [],
  templateUrl: './remote.component.html',
  styleUrl: './remote.component.css',
})
export class RemoteComponent implements AfterViewInit, OnDestroy {
  @ViewChild('ref', { static: false })
  ref!: ElementRef;
  remoteElement: any;

  ngAfterViewInit(): void {
    loadRemote('app2/App')
      .then(({ remote }: any) => {
        this.remoteElement = remote();
        this.remoteElement?.mount?.(this.ref.nativeElement);
      })
      .catch(() => {
        this.ref.nativeElement.innerText = 'Error loading remote module';
      });
  }
  ngOnDestroy(): void {
    this.remoteElement?.unmount?.();
  }
}
