import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    items: any = [];

    constructor() {
        this.items.push({
            text: "Grid Heat Map",
            link: "/heat-map/grid"
        });
        this.items.push({
            text: "Geo Coordinate Map",
            link: "/heat-map/geo"
        });
    }
}
