/**
 * Created by Roman on 5/12/16.
 */

export class MoneyItemsService {

    getSpentMoneyItems(): MoneyItem[]{
        return spentMoneyItems.map(p => new MoneyItem(p.id, p.amount, p.tag, p.date));
    }

    getEarnedMoneyItems(): MoneyItem[]{
        return earnedMoneyItems.map(p => new MoneyItem(p.id, p.amount, p.tag, p.date));
    }

    addSpentMoneyItem(moneyItem: MoneyItem){

    }

    addEarnedMoneyItem(moneyItem: MoneyItem){

    }

}

export class MoneyDay{
    public date: Date;
    public earnedMoneyItems: MoneyItem[];
    public spentMoneyItems: MoneyItem[];

    constructor (
        public date: Date,
        public earnedMoneyItems: MoneyItem[],
        public spentMoneyItems: MoneyItem[]
    ){}

    constructor(){}
}

export class MoneyItem {

    id: number;
    public amount: number;
    public tag: string;
    public date: Date;

    constructor (
          public id: number,
          public amount: number,
          public tag: string,
          public date: Date
    ){

    }

    constructor (){}
}

var spentMoneyItems = [{
    "id": 1,
    "amount": 2345,
    "tag": "шоппинг",
    "date": new Date('2016-05-17 00:00:00')
}, {
    "id": 2,
    "amount": 124,
    "tag": "квартира",
    "date": new Date('2016-05-19 00:00:00')
}, {
    "id": 22,
    "amount": 987,
    "tag": "комунальные расходы",
    "date": new Date('2016-05-19 00:00:00')
}, {
    "id": 22,
    "amount": 1000,
    "tag": "парковка",
    "date": new Date('2016-05-19 00:00:00')
}]

var earnedMoneyItems = [{
    "id": 5,
    "amount": 30000,
    "tag": "зарплата",
    "date": new Date('2016-05-11 00:00:00')
}]