import { Component } from '@angular/core';
import { MenuItem } from '../menu-item';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Sign Up',
      icon: 'login'
    },
    {
      label: 'About',
      icon: 'help'
    },
    {
      label: 'Pricing',
      icon: 'attach_money'
    },
    {
      label: 'Docs',
      icon: 'notes'
    },
    {
      label: 'Showcase',
      icon: 'slideshow'
    },
    {
      label: 'Blog',
      icon: 'rss_feed'
    },
  ];
  images = ['../../assets/little-girl-5785590_1920.jpg', '../../assets/mountain-bike-1149074_1920.jpg', '../../assets/slider/bicycle-5013316_1920.jpg'];
  constructor() { }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
  }
}
