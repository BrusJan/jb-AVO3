import { Component } from '@angular/core';

@Component({
  selector: 'mfe-widget-entry',
  template: `<div class="remote-entry">
    <h2>widget's Remote Entry Component (:4206)</h2>  
    <mfe-banner></mfe-banner>
    <mfe-categories></mfe-categories>
    <mfe-loan></mfe-loan>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #345075;
        color: white;
        padding: 1em;
        border: 2px dotted green;
      }
    `,
  ],
})
export class RemoteEntryComponent {

}
