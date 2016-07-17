import {Component} from 'angular2/core';
import {Route, RouteConfig, RouterOutlet} from 'angular2/router';
import FilterComponet from '../filter/filter';
import MoneyDaysListComponet from '../money-days-list/money-days-list';
// import HomeComponent from '../home/home';
// import NavbarComponent from '../navbar/navbar';
// import FooterComponent from '../footer/footer';
// import SearchComponent from '../search/search';
// import ProductDetailComponent from "../product-detail/product-detail";

@Component({
    selector: 'auction-application',
    templateUrl: 'app/components/application/application.html',
    directives: [
        RouterOutlet, FilterComponet, MoneyDaysListComponet
    ]
})

// @RouteConfig([
//     {path: '/', component: HomeComponent, as: 'Home'},
//     {path: '/products/:productId', component: ProductDetailComponent, as: 'ProductDetail'}
// ])

export default class ApplicationComponent {}