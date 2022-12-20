import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Sitio } from '../../models/sitio';
import { SitioService } from '../../services/sitio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playa',
  templateUrl: './playa.page.html',
  styleUrls: ['./playa.page.scss'],
})
export class PlayaPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  onCreatePlaya(){
    this.router.navigate(['/form-sitio']);
  }

}
