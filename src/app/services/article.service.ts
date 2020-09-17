import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { Article } from '../common/interfaces/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseUrl: string = environment.baseUrl;

  constructor(
    private readonly http: HttpClient,
  ) { }

  getArticleById(id: number): Observable<Article> {
    const url = `${this.baseUrl}/article/${id}`;
    
    return this.http.get<Article>(
      url,
      { withCredentials: true },
    ).pipe(take(1));
  }

  getArticles(): Observable<Article[]> {
    const url = `${this.baseUrl}/article`;

    return this.http.get<Article[]>(
      url,
      { withCredentials: true },
    ).pipe(take(1));
  }

  createArticle(article: Article): Observable<Article> {
    const url = `${this.baseUrl}/article`;

    return this.http.post<Article>(
      url,
      article,
      { withCredentials: true },
    ).pipe(take(1));
  }

  updateArticle(id: number, article: Article): Observable<Article> {
    const url = `${this.baseUrl}/article/${id}`;

    return this.http.put<Article>(
      url,
      article,
      { withCredentials: true },
    ).pipe(take(1));
  }
}
