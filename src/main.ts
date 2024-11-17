import '@angular/localize/init';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { VERSION as CDK_VERSION } from '@angular/cdk';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  VERSION as MAT_VERSION,
} from '@angular/material/core';
import { DatepickerLocaleExample } from './example/datepicker-locale-example';
import { fr, ja } from 'date-fns/locale';
import {
  DateFnsAdapter,
  MAT_DATE_FNS_FORMATS,
  provideDateFnsAdapter,
} from '@angular/material-date-fns-adapter';

/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

bootstrapApplication(DatepickerLocaleExample, {
  providers: [provideAnimations(), provideHttpClient()],
}).catch((err) => console.error(err));
