import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: '<h1>¿Esto es Angular 2?</h1><p>Pa k kieres saber eso jajaja saludos<p>'
})

export class App {
    constructor() {
        
    }
    
    ngOnInit() {
        console.log('[Component] app running');
    }
}