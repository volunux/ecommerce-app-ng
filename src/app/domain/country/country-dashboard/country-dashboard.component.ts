import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-dashboard',
  templateUrl: './country-dashboard.component.html',
  styleUrls: ['./country-dashboard.component.css']
})
export class CountryDashboardComponent implements OnInit {

  constructor() { }

  public title: string = 'Country';

  ngOnInit(): void {
  }

}
