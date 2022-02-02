import { Component } from '@angular/core';

@Component({
  selector: 'mfe-footer-entry',
  template: `<div class="remote-entry">
    <h2>Footer Component MFE (:4202)</h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #141414;
        color: white;
        padding: 1em;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
