/**
 * Created by Roman on 5/11/16.
 */
import {Component, Input} from 'angular2/core';
import {MoneyItemsService, MoneyItem, MoneyDay} from '../../services/money-items-service';
import {FilterDatePipe} from "../pipes/filter-date";
import MoneyItemForm from "../money-item-form/money-item-form";

@Component({
    selector: 'money-days-list',
    templateUrl: 'app/components/money-days-list/money-days-list.html',
    styleUrls: ['app/components/money-days-list/money-days-list.css'],
    providers: [MoneyItemsService],
    pipes: [FilterDatePipe],
    directives:[MoneyItemForm]
})

export default class MondeyDaysList{
    earnedMoneyItems: MoneyItem[];
    spentMoneyItems: MoneyItem[];
    moneyDays: MoneyDay[] = [];

    constructor(private moneyItemsService: MoneyItemsService){

        this.earnedMoneyItems = moneyItemsService.getEarnedMoneyItems();
        this.spentMoneyItems = moneyItemsService.getSpentMoneyItems();


        let startDate: Date = new Date('2016-05-01');
        let endDate: Date = new Date('2016-05-20');
        let day = endDate.getDate();

        while(endDate >= startDate)
        {

            let moneyDay = new MoneyDay();
            moneyDay.date = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
            moneyDay.earnedMoneyItems = this.earnedMoneyItems.filter(i=>i.date.valueOf() === moneyDay.date.valueOf());
            moneyDay.spentMoneyItems = this.spentMoneyItems.filter(i=>i.date.valueOf() === moneyDay.date.valueOf());

            this.moneyDays.push(moneyDay);

            endDate.setDate(--day);
        }
    }

    onCreateEarnedMoneyItemHandler(moneyItem: MoneyItem, moneyDay: MoneyDay){

        moneyDay.earnedMoneyItems.push(moneyItem);

    }

    onCreateSpentMoneyItemHandler(moneyItem: MoneyItem, moneyDay: MoneyDay){

        moneyDay.spentMoneyItems.push(moneyItem);

    }
}