import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from 'angular2/router';
import {App} from './components/app';

bootstrap(App, [
    ROUTER_PROVIDERS
]);
