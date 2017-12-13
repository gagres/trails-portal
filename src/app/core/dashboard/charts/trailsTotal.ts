import { Chart } from './chart';

export class TrailsTotal implements Chart {
    labels:string[] = ['Total'];
    data:number[];
    colors:Array<any> = [{ backgroundColor: '#8FB98B' }];
    type:string = 'doughnut';

    constructor(value: number) {
        this.data = [value]; // Assina valor
    }
}