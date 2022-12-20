import { Component, Input, OnInit } from '@angular/core';
import { Sitio } from '../../../models/sitio';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SitioService } from '../../../services/sitio.service';

@Component({
  selector: 'app-item-playa',
  templateUrl: './item-playa.component.html',
  styleUrls: ['./item-playa.component.scss'],
})
export class ItemPlayaComponent implements OnInit {

  @Input() sitio: Sitio;

  constructor(private router: Router, private sitioService: SitioService) {
    this.sitio = new Sitio();
   }

  ngOnInit() {}

  clickEventEdit(id?: string){
    this.router.navigate(['/form-sitio/', id]);
  }

  clickEventDelete(id?: string) {
    this.sitioService.deleteSitio(id).subscribe(() => {
      this.router.navigate(['/playa']);
    })
  }
}
