import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    items: any = [];
    itemSelect: any = [];

    constructor(private location: Location) {
        this.items.push({
            text: "Grid Heat Map",
            link: "/heat-map/grid",
            key: "grid"
        });
        this.items.push({
            text: "Geo Coordinate Map",
            link: "/heat-map/geo",
            key: "geo"
        });
        this.itemSelect = null;
        const list = location.path().split("/");
        this.items.forEach((item) => {
           if (item.key === list[2]) {
               this.itemSelect = item;
           }
        });
    }
}
