import { Component } from '@angular/core';

@Component({
  selector: 'mfe-header-entry',
  template: `<div class="remote-entry">
    <h2>Header Component MFE (:4201)</h2>
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
