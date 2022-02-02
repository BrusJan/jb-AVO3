import { Injectable } from '@angular/core';
import { Microfrontend } from './microfrontend';

@Injectable({ providedIn: 'root' })
export class LookupService {
  lookup(): Promise<Microfrontend[]> {
    return Promise.resolve([
      /*{
                // For Loading
                type: 'module',
                remoteEntry: 'http://localhost:4201/remoteEntry.js',
                exposedModule: './HeaderComponent',

                ngModuleName: 'HeaderComponent',
            },
            {
                // For Loading
                type: 'module',
                remoteEntry: 'http://localhost:4202/remoteEntry.js',
                exposedModule: './FooterComponent',

                ngModuleName: 'FooterComponent',
            },
            {
                // For Loading
                type: 'module',
                remoteEntry: 'http://localhost:4203/remoteEntry.js',
                exposedModule: './DashboardComponent',

                ngModuleName: 'DashboardComponent',
            },*/
      {
        // For Loading
        type: 'module',
        remoteEntry: 'http://localhost:4205/remoteEntry.js',
        exposedModule: './Module',

        // For Routing
        displayName: 'Takeaways',
        routePath: 'takeaways',
        ngModuleName: 'TakeawaysComponent',
      },
      {
        // For Loading
        type: 'module',
        remoteEntry: 'http://localhost:4205/remoteEntry.js',
        exposedModule: './Module',

        // For Routing
        displayName: 'Wallet',
        routePath: 'wallet',
        ngModuleName: 'WalletModule',
      },
    ] as Microfrontend[]);
  }
}
