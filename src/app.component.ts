import 'zone.js/dist/zone';
import { AppModule } from './app.module';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'my-app',
  template: `
    <ag-grid-angular style="width: 500px; height: 300px;"
      class="ag-theme-alpine"
      [rowData]="rowData"
      [columnDefs]="columnDefs">
    </ag-grid-angular>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  columnDefs = [
    { field: 'name' },
    { field: 'height' },
    { field: 'weight' },
    { field: 'price' },
  ];

  rowData = [
    { name: 'yamada', height: 150, weight: 80, price: 1000 },
    { name: 'tanaka', height: 160, weight: 90, price: 2000 },
    { name: 'yamamoto', height: 180, weight: 30, price: 5000 },
    { name: 'ito', height: 10, weight: 80, price: 100 },
  ];
}

platformBrowserDynamic().bootstrapModule(AppModule);
