import { Component, Input, OnChanges, SimpleChanges, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <h2>Child Component</h2>
        <h3>name: {{person.name}}</h3>
        <button (click)="doNothing()">Do Nothing</button>
        {{cd()}}
    `,
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class ChildComponent implements OnChanges {

    @Input() person
    
    //it is called whenever CD detects changes in @Input values
    ngOnChanges(changes: SimpleChanges){
        console.log('childComponent --> change detect')
    }

    doNothing(){
        
    }

    //it is called to every rendering
    cd(){
        console.log('childComponent --> rendering')
    }
}
