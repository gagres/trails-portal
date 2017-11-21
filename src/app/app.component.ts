import { Component, OnInit } from '@angular/core';

// Services
import { HttpService } from './shared/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showLoader: boolean = false;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.newTransaction.subscribe(
      state => {
        setTimeout(() => this.showLoader = state, 200)
      }
    )
  }
}
