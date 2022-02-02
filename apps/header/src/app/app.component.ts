import { Component, OnInit } from '@angular/core';
import { LookupService } from '@mfe/shared';
import { Microfrontend } from 'libs/shared/src/lib/microfrontends/microfrontend';

@Component({
  selector: 'mfe-header-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  microfrontends: Microfrontend[] = [];

  constructor(private lookupService: LookupService) { }

  async ngOnInit() {
    this.microfrontends = await this.lookupService.lookup();
  }

}
