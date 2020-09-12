import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // TODO: Get these from service calls
  genreList = ['Science', 'Finance', 'Politics', 'Literature', 'Entertainment', 'Sports'];

  articles = [
    {
      img: 'https://media13.s-nbcnews.com/j/MSNBC/Components/Video/202009/tdy_news_miguel_wildfires_200911_1920x1080.focal-760x428.jpg',
      title: 'What\'s causing the California wildfires?',
      author: 'Ashwin Mishra',
      date: 'Sep 10',
      link: '',
    },
    {
      img: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/12953/production/_113951167_index_promo_simple_guide_976_v2.png',
      title: '2020 Election: Who\'s the Underdog? ',
      author: 'Ashwin Mishra',
      date: 'Sep 8',
      link: '',
    },
    {
      img: 'https://m.economictimes.com/thumb/msid-73728164,width-1200,height-900,resizemode-4,imgsize-380733/apple-logs-double-digit-growth-in-iphone-sales-in-india-in-dec-quarter.jpg',
      title: 'What you should know about Apple Stocks',
      author: 'Ashwin Mishra',
      date: 'Sep 4',
      link: '',
    }
  ]

  constructor() {}

}
