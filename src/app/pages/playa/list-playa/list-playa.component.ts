import { Component, OnInit } from '@angular/core';
import { Sitio } from '../../../models/sitio';
import { Subscription } from 'rxjs';
import { SitioService } from 'src/app/services/sitio.service';

@Component({
  selector: 'app-list-playa',
  templateUrl: './list-playa.component.html',
  styleUrls: ['./list-playa.component.scss'],
})
export class ListPlayaComponent implements OnInit {

  public sitios: Sitio[] = [];
  public sitio: Sitio;
  public sitioSubscription = new Subscription();

  constructor( private sitioService: SitioService) { 
    this.sitio = new Sitio();
  }

  ngOnInit() {
    this.sitioSubscription = this.sitioService.all$().subscribe((res: Sitio[])=> {
      this.sitios = res;
    });
    this.getSitio();
  }

  getSitio() {
    this.sitioService.all().subscribe((res)=> {
    });
  }
}
