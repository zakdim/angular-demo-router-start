import { Router } from '@angular/router';
import { Component, HostBinding } from '@angular/core';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent {
        
    constructor(private router: Router) { }

}