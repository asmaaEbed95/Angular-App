import { Component } from '@angular/core';

//we use the decorator to make it know what component it will be descriprd for to tell angular what to do with that class
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

//using export to be able to use this component from outside
export class ServerComponent {

}