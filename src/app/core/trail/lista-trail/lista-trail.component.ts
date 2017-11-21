import { Component, OnInit } from '@angular/core';

// Services
import { TrailService } from './../trail.service';

@Component({
  selector: 'app-lista-trail',
  templateUrl: './lista-trail.component.html',
  styleUrls: []
})
export class ListaTrailComponent implements OnInit {

  listaTrails: any = [];
  response: any = {}

  constructor(private trailService: TrailService) { }

  ngOnInit() {
    this.resetResponse(); 

    this.trailService.getListOfTrails().subscribe(
      (trails: any) => {
        if(trails.message)
          return this.response.message = trails.message;

        if(trails.error)
          return this.response.error = trails.error;

        this.listaTrails = trails.rows;
        this.response.success = trails;
      }
    )    
  }

  resetResponse() {
    this.response = { message: null, error: null, success: null };
  }

}
