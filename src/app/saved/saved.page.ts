import { Component } from '@angular/core';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage {
  // TODO: get these from service calls
  articles = [
    {
      img: 'https://media13.s-nbcnews.com/j/MSNBC/Components/Video/202009/tdy_news_miguel_wildfires_200911_1920x1080.focal-760x428.jpg',
      title: 'What\'s causing the California wildfires?',
      link: '',
      genre: 'Science',
    },
    {
      img: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/12953/production/_113951167_index_promo_simple_guide_976_v2.png',
      title: '2020 Election: Who\'s the Underdog? ',
      link: '',
      genre: 'Politics'
    },
    {
      img: 'https://m.economictimes.com/thumb/msid-73728164,width-1200,height-900,resizemode-4,imgsize-380733/apple-logs-double-digit-growth-in-iphone-sales-in-india-in-dec-quarter.jpg',
      title: 'What you should know about Apple Stocks',
      link: '',
      genre: 'Finance',
    },
    {
      img: 'https://static01.nyt.com/images/2020/09/05/sports/04messi-print/merlin_175716516_4ac2f4b5-1407-431b-a1e5-d5024c03234a-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
      title: 'Lionel Messi: Unfolding the Barcelona Crisis',
      link: '',
      genre: 'Sports',
    },
    {
      img: 'https://images.indianexpress.com/2020/08/the-batman-teaser-1200-1.jpg',
      title: 'Batman: Is the hype surrounding the new lead worth it?',
      link: '',
      genre: 'Entertainment',
    },
  ];
}
