import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {
  public doughnutcharType: string='doughnut';
  public doughnutchartLabels: string[]=['Hombres','Mujeres','medios'];
  public doughnutchartData:number[]=[60,10,78];

graficos:any={
  'grafico1':{
    'labels':['con frijoles','con natilla','con tocino'],
    'data':[24,30,46],
    'type':'doughnut',
    'leyenda':'el pan se come con '
  },
  'grafico2':{
    'labels':['Hombres','Mujeres'],
    'data':[4500,6000],
    'type':'doughnut',
    'leyenda':'Entrevistados'
  },
  'grafico3':{
    'labels':['Si','No'],
    'data':[95,5],
    'type':'doughnut',
    'leyenda':'Le dan gases los frioles'
  },
  'grafico4':{
    'labels':['Si','No'],
    'data':[85,15],
    'type':'doughnut',
    'leyenda':'Tiene sexo 1 diario'
  },
};

  constructor() { }

  ngOnInit() {
  }


}
