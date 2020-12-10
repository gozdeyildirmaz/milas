import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  public images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() {}

  ngOnInit(): void {
  }

}
