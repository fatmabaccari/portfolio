
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { defineElement } from "@lordicon/element";
import { appConfig } from './app/app.config';

defineElement();

bootstrapApplication(App, appConfig).catch(err => console.error(err));
