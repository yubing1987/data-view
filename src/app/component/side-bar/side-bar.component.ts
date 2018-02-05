import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

    @Input() items: any = [];
    @Input() selectItem: any;
    @Output("itemSelectEvent") itemSelectEvent = new EventEmitter();

    constructor() {
        this.items.push({
            text: "Test 1"
        });
        this.items.push({
            text: "Test 2"
        });
    }

    ngOnInit() {
    }

    itemSelect(item: any) {
        if (item !== this.selectItem) {
            this.selectItem = item;
            this.itemSelectEvent.emit(item);
        }
    }
}
