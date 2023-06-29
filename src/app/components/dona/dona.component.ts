import { Component, Input } from '@angular/core';
import { ChartData, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent{
  @Input() titulo:string="Sin titulo";

  @Input() labels: string[] = ['Label1', 'Label2', 'Label2'];
  @Input() data:number[]=[ 550, 450, 100 ];

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(this.data)
  //   console.log(this.labels)
  //   console.log(this.titulo)
  // }
   doughnutChartLabels: string[] = this.labels;
   doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.data,
        backgroundColor: ["#6857E6", "#009FEE", "#F02056"]
      },
      // { data: [ 50, 150, 120 ] },
      // { data: [ 250, 130, 70 ] }
    ]
  };


  // public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];

  // public colors: Color[] = [
  //   { backgroundColor: [ '#6857E6','#009FEE','#F02059' ] }
  // ];
  // public doughnutChartType: ChartType = 'doughnut';
}
