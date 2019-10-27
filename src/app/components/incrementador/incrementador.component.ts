import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input('nombre') leyenda: string;
  @Input() progreso: number;
  constructor() {
    this.leyenda = 'Leyenda';
    this.progreso = 20;
  }

  ngOnInit() {
  }

  sumarProgreso(value: number) {
    if (this.progreso + value >= 100 ) {
      this.progreso = 100;
    } else if ( this.progreso + value <= 0) {// lo vuelmo a sumar por que -*-  se suma
      this.progreso = 0;
    } else {
      this.progreso += value;
    }
    console.log(this.progreso);
  }
}
