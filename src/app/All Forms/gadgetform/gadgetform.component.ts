import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gadgetform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gadgetform.component.html',
  styleUrl: './gadgetform.component.css'
})
export class GadgetformComponent {
  @Output() formStageEvent: EventEmitter<any> =  new EventEmitter();

  handleSubmit(){
    console.log("handle submit gadget");
    this.formStageEvent.emit(1)
  }
}
