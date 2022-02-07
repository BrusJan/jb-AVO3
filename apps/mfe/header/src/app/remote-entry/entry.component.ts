import { Component } from '@angular/core';

@Component({
  selector: 'avo3-mfe-header-entry',
  template: `<div class="remote-entry">
    <h2>mfe-header's Remote Entry Component</h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
