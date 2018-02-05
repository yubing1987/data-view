import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgxEchartsModule } from 'ngx-echarts';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import {RouterModule} from "@angular/router";
import {AppRouter} from "./router/router";
import { HeatMapGridComponent } from './component/heat-map-grid/heat-map-grid.component';
import { GeoCoordMapComponent } from './component/geo-coord-map/geo-coord-map.component';
@NgModule({
    declarations: [
        AppComponent,
        SideBarComponent,
        HeatMapGridComponent,
        GeoCoordMapComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgxEchartsModule,
        NgZorroAntdModule.forRoot(),
        RouterModule.forRoot(AppRouter.getRouter())
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
