// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { defineElement } from "@lordicon/element";

// Déclare l'élément <lord-icon>
defineElement();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
