import express, { Express } from 'express';

import { CS571Initializer } from '@cs571/su24-api-framework'
import { CS571FeaturedSaleItemRoute } from './routes/featured-sale-item';

import cookies from 'cookie-parser'

console.log("Welcome to HW1!");

const app: Express = express();
app.use(cookies());

const appBundle = CS571Initializer.init(app, {
  allowNoAuth: [],
  skipAuth: false
});

appBundle.router.addRoutes([
  new CS571FeaturedSaleItemRoute()
])

app.listen(appBundle.config.PORT, () => {
  console.log(`Running at :${appBundle.config.PORT}`);
});
