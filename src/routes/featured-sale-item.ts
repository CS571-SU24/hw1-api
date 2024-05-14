import { Express } from 'express';

import { CS571Route } from "@cs571/su24-api-framework";
import { GroceryItem } from '../model/grocery-item';

export class CS571FeaturedSaleItemRoute implements CS571Route {

    public static readonly ROUTE_NAME: string = '/rest/su24/hw1/featured-sale-item';

    private static readonly FEATURE_MAPPER = {
        "Sunday": new GroceryItem("Sunflower Seeds", 1.29),
        "Monday": new GroceryItem("Molasses", 3.99),
        "Tuesday": new GroceryItem("Tuna", 0.99),
        "Wednesday": new GroceryItem("Weetabix", 2.49),
        "Thursday": new GroceryItem("Thyme", 0.49),
        "Friday": new GroceryItem("Fries (Frozen)", 1.89),
        "Saturday": new GroceryItem("Salmon", 6.99)
    }

    public addRoute(app: Express): void {
        app.get(CS571FeaturedSaleItemRoute.ROUTE_NAME, (req, res) => {
            res.status(200).send((CS571FeaturedSaleItemRoute.FEATURE_MAPPER as any)[CS571FeaturedSaleItemRoute.getDayName()]);
        })
    }

    public getRouteName(): string {
        return CS571FeaturedSaleItemRoute.ROUTE_NAME;
    }

    // https://stackoverflow.com/questions/57187691/javascript-how-to-verify-day-by-getday-when-using-timezone
    private static getDayName(): string {
        return new Date().toLocaleString("en-US", {
            timeZone: "America/Chicago",
            weekday: 'long'
        })
    }
}