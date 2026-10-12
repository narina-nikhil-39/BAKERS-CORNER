import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { runProductDemo } from '../../../TypeScript/week11';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, RouterOutlet],
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor() {
        runProductDemo();
    }
}
