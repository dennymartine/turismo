import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Sitio } from '../../../models/sitio';
import { map, Observable, Subscription } from 'rxjs';
import { SitioService } from '../../../services/sitio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  public sitioForm: FormGroup;
  public sitio: Sitio;
  public sitioSubscription = new Subscription();
  public idSitio: string = '';
  public show: boolean = false;

  constructor(  private sitioService: SitioService, private router: Router,
                private activateRoute: ActivatedRoute) { 

    //initialize the sitio
    this.sitio = new Sitio();

    //initialize the form
    this.sitioForm = new FormGroup({
      id:         new FormControl(''),
      nombre:     new FormControl('', [Validators.required]),
      tipo:       new FormControl('', [Validators.required]),
      ciudad:     new FormControl('', [Validators.required]),
      pais:       new FormControl('', [Validators.required]),
      direccion:  new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.idSitio = this.activateRoute.snapshot.paramMap.get('id')!;
    if (this.idSitio != null) {
      this.getSitio();
    }
    this.sitioSubscription = this.sitioService.getSitio$().subscribe({
      next: (sitio: Sitio) => {
          this.sitio = sitio;
          this.sitioForm.get('nombre')?.setValue(this.sitio.nombre)
          this.sitioForm.get('tipo')?.setValue(this.sitio.tipo)
          this.sitioForm.get('ciudad')?.setValue(this.sitio.ciudad)
          this.sitioForm.get('pais')?.setValue(this.sitio.pais)
          this.sitioForm.get('direccion')?.setValue(this.sitio.direccion)
        }
    });
  }

  getSitio() { 
    this.sitioService.getSitio(this.idSitio).subscribe(
      res => res
    );
  }

  createSitio() {
    this.sitio            = new Sitio();
    this.sitio.nombre     = this.sitioForm.get('nombre')?.value;
    this.sitio.tipo       = this.sitioForm.get('tipo')?.value;
    this.sitio.ciudad     = this.sitioForm.get('ciudad')?.value;
    this.sitio.pais       = this.sitioForm.get('pais')?.value;
    this.sitio.direccion  = this.sitioForm.get('direccion')?.value;

    this.sitioService.createSitio(this.sitio).subscribe({
      next: (response) => this.router.navigateByUrl('/playa', {skipLocationChange:true})
    });
  }

  update(): void {
    this.sitioService.updateSitio(this.idSitio, this.sitioForm.value).subscribe((res: any)=> {
      this.sitioForm.reset();
      this.router.navigateByUrl('/playa', {skipLocationChange:true});
    });
  }

}
