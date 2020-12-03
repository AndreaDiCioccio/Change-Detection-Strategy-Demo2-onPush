import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>OnPUsh Change Detection Strategy Demo</h1>
        <h3>name: {{person.name}}</h3>
        <button (click)="changePropertyValue()">Chanage Property Value</button>
        <button (click)="changeObjectReference()">Chanage Object Reference</button>
        <button (click)="doNothing()">Do Nothing</button>
        <app-child [person]="person"></app-child>
        {{cd()}}
    `
})

export class AppComponent implements OnChanges {

    person = {
        name: 'Paperino'
    }

    // it is not called in this parent component because it is used only for @Input properties
    ngOnChanges(changes: SimpleChanges){
        console.log('appComponent --> change detect')
    }

    // don't change object reference
    changePropertyValue(){
        this.person.name = 'Gastone'
    }

    // change object reference
    changeObjectReference(){
        this.person = {
            name: 'Zio Paperone'
        }
    }
    
    doNothing(){

    }

    // it is called to every rendering
    cd(){
        console.log('appComponent --> rendering')
    }

}
