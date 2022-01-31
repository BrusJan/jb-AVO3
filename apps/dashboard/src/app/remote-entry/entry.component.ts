import { Component } from '@angular/core';

@Component({
  selector: 'mfe-dashboard-entry',
  template: `<div class="remote-entry">
    <h2>dashboard's Remote Entry Component</h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 1em;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
