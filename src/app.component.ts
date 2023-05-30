import { Component } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

@Component({
  selector: 'my-app',
  template: `
    <ag-grid-angular style="width: 500px; height: 300px;" class="ag-theme-alpine"
      [rowData]="rowData" [columnDefs]="columnDefs">
    </ag-grid-angular>
  `
})
export class AppComponent {
  columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Camry', price: 25000 },
    { make: 'Honda', model: 'Civic', price: 22000 },
    { make: 'Ford', model: 'F-150', price: 35000 }
  ];
}
