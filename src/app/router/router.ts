
import {HeatMapGridComponent} from "../component/heat-map-grid/heat-map-grid.component";
import {GeoCoordMapComponent} from "../component/geo-coord-map/geo-coord-map.component";

export class AppRouter {
    static getRouter() {
        return [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: "heat-map"
            },
            {
                path: "heat-map",
                children: [
                    {
                        path: "grid",
                        component: HeatMapGridComponent
                    },
                    {
                        path: "geo",
                        component: GeoCoordMapComponent
                    }
                ]
            }
        ];
    }
}
