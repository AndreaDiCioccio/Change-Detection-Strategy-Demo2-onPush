import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>onPush Change Detection Demo1</h1>
        <h3>name: {{person.name}}</h3>
        <button (click)="changeName1()">Chanage Name 1</button>
        <button (click)="changeName2()">Chanage Name 2</button>
        <button (click)="doNothing()">Do Nothing</button>
        <app-child [person]="person"></app-child>
        {{cd()}}
    `
})

export class AppComponent implements OnChanges {

    person = {
        name: 'Paperino'
    }

    //it is not called in this parent component because it is used only for @Input properties
    ngOnChanges(changes: SimpleChanges){
        console.log('appComponent --> change detect')
    }

    //don't change object reference
    changeName1(){
        this.person.name = 'Gastone'
    }

    //change object reference
    changeName2(){
        this.person = {
            name: 'Zio Paperone'
        }
    }
    
    doNothing(){

    }

    //it is called to every rendering
    cd(){
        console.log('appComponent --> rendering')
    }

}
