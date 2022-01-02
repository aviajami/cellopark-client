import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubscriptionLike } from 'rxjs';
import { CheesesService } from './services/cheeses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'cellopark';

  cheeses: Array<any>;

  cheesesSub: SubscriptionLike;

  constructor (private cheesesService: CheesesService) {  }
  ngOnDestroy(): void {
    this.cheesesSub.unsubscribe();
  }
  ngOnInit(): void {
    this.cheesesSub = this.cheesesService.cheesesOb.subscribe(x => {
      this.cheeses = x.slice();
    });
  }


}
