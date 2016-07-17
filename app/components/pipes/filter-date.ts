/**
 * Created by Roman on 4/23/16.
 */
import { Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'filterDate'})
export class FilterDatePipe implements PipeTransform {
    transform(list: any[], parameters: string[]): any {

        

        const [filterByField, filterValue] = parameters;
        if (!filterByField || !filterValue) {
            return list;
        }


        return list.filter(item => {
            const field = item[filterByField];

            return field.valueOf() === filterValue.valueOf();
        });
    }
}