import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-squre',
  templateUrl: './squre.component.html',
  styleUrls: ['./squre.component.scss']
})
export class SqureComponent implements OnInit {

  @Input() value !:'X' | 'O'
  constructor() { }

  ngOnInit(): void {
  }

}
