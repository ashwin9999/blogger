import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  
  // TODO: Get data from service
  userName = 'Ashwin Mishra';
  followers = '2.2k';
  likes = '17k';
  articles = '28';
}
