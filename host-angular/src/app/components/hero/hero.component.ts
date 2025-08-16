import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, OnDestroy {
  number: number | null = null;

  private eventHandler = (event: Event) => {
    const customEvent = event as CustomEvent;
    this.number = customEvent.detail?.count || 0;
  };
  ngOnInit(): void {
    document.addEventListener('build', this.eventHandler);
  }

  ngOnDestroy(): void {
    document.removeEventListener('build', this.eventHandler);
  }
}
