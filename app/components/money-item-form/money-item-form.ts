/**
 * Created by Roman on 5/17/16.
 */
import {Component, Output, EventEmitter} from "angular2/core";
import {Control, ControlGroup, Validators, FORM_DIRECTIVES} from 'angular2/common';
import {MoneyItem} from "../../services/money-items-service";

@Component({
    selector: 'money-item-form',
    templateUrl: 'app/components/money-item-form/money-item-form.html',
    styleUrls: ['app/components/money-item-form/money-item-form.css'],
    directives: [FORM_DIRECTIVES]

})

export default class MoneyItemForm{
    

    moneyItem: MoneyItem;
    @Output('on-create-money-item') moneyItemEventEmitter: EventEmitter<MoneyItem> = new EventEmitter()

    constructor(){
        this.moneyItem = new MoneyItem();

    }

    onSubmit(formValue){

        this.moneyItem.amount = formValue.amount;
        this.moneyItem.tag = formValue.tag;
        this.moneyItem.date = new Date();

        this.moneyItemEventEmitter.emit(this.moneyItem);

        //console.log(this.moneyItem);
    }

    onReset(formValue){

        formValue.amount = 0;
        formValue.tag = "";
    }

}