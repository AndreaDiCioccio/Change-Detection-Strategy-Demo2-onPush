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

    // con la CD onPush si aggiornata solo in caso di cambio di referenza dell' oggetto, 
    // ovvero quando si esegue la funzione changeName2() del parent component
    @Input() person
    
    //it is called whenever CD detects changes in @Input values
    ngOnChanges(changes: SimpleChanges){
        console.log('childComponent --> change detect')
    }

    // chiama la renderizzazione solo di questo componente
    doNothing(){
        
    }

    //it is called to every rendering
    cd(){
        console.log('childComponent --> rendering')
    }

}
