import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

// Services
import { TrailService } from './../trail.service';

@Component({
  selector: 'app-trail-info',
  templateUrl: './trail-info.component.html',
  styleUrls: ['./trail-info.component.css']
})
export class TrailInfoComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  routes: any = [
    {pointID: 60, latitude: -23.182301, longitude: -46.882598},
    {pointID: 61, latitude: -23.182301, longitude: -46.882598},
    {pointID: 62, latitude: -23.182301, longitude: -46.882598},
    {pointID: 63, latitude: -23.182301, longitude: -46.882598},
    {pointID: 64, latitude: -23.182301, longitude: -46.882598}
  ]

  constructor(private state: ActivatedRoute,
              private trailService: TrailService) { }

  ngOnInit() {
    this.state.params.subscribe(
      (params: any) => {
        if(params['trailID'])
          this.getTrailById(params['trailID'])
      }
    )
  }

  getTrailById(trailID: number) {
    this.trailService.getTrailById(trailID).subscribe(
      (trail: any) => {
        console.log(trail);
      }
    )
  }

}
