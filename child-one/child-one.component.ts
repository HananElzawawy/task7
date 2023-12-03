import { Component , ViewChild , ElementRef , Input ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent {}

/*  @Output()ItemEvent = new EventEmitter<string>();
@Input() item ="";
@ViewChild('myvar') childvar! :ElementRef;
additem=( par : string)
}*/