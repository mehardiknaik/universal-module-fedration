import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { loadRemote } from '@module-federation/enhanced/runtime';

@Component({
  selector: 'app-remote-info',
  imports: [JsonPipe],
  templateUrl: './remote-info.component.html',
  styleUrl: './remote-info.component.css'
})
export class RemoteInfoComponent implements OnInit {
  info: any;

  ngOnInit(): void {
    loadRemote('remote/Info').then((module:any) => {
      this.info = module.default;
      console.log(this.info);
    }).catch((error) => {
      console.error('Error loading remote module:', error);
    });
  }

}
