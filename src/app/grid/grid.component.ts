import { Component } from '@angular/core';
import { customers } from './customers';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css', './kendo.blue.css']
})
export class GridComponent {
  public gridData: unknown[] = customers;
}
