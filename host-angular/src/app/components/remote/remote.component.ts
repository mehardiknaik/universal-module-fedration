import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { loadRemote } from '@module-federation/enhanced/runtime';

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
    loadRemote('remote/App')
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
