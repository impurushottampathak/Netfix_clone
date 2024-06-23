import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,BannerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{
  navList = ['Home','TV Shows','News & Popular', 'Browse by Language']
 
  
}
