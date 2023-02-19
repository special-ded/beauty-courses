import { Component } from '@angular/core';

@Component({
  selector: 'app-for-visagiste',
  templateUrl: './for-visagiste.component.html',
  styleUrls: ['./for-visagiste.component.scss'],
})
export class ForVisagisteComponent {
  imageObject: Array<object> = [
    {
      image: 'assets/img/slider/circle.JPG',
      thumbImage: 'assets/img/slider/circle.JPG',
    },
    {
      image: 'assets/img/slider/circle.JPG',
      thumbImage: 'assets/img/slider/circle.JPG',
    },
    {
      image: 'assets/img/slider/circle.JPG',
      thumbImage: 'assets/img/slider/circle.JPG',
    },
    {
      image: 'assets/img/slider/circle.JPG',
      thumbImage: 'assets/img/slider/circle.JPG',
    },
    {
      image: 'assets/img/slider/circle.JPG',
      thumbImage: 'assets/img/slider/circle.JPG',
    },
    {
      image:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    },
    {
      video: 'https://youtu.be/6pxRHBw-k8M',
    },
  ];
}
