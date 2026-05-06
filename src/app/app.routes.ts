import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout')
        .then(m => m.MainLayout),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home')
            .then(m => m.Home)
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./features/projects/projects')
            .then(m => m.Projects)
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./features/skills/skills')
            .then(m => m.Skills)
      },
      {
        path: 'experience',
        loadComponent: () =>
          import('./features/experience/experience')
            .then(m => m.Experience)
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/contact/contact')
            .then(m => m.Contact)
      }
    ]
  }
];
