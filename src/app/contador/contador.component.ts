import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  valor: number = 0;

  ngOnInit(): void {
  }

  soma(){
    this.valor += 1;
  }

}
