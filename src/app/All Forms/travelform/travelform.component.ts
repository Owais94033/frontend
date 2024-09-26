import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-travelform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './travelform.component.html',
  styleUrl: './travelform.component.css'
})
export class TravelformComponent {
  @Output() viewChangeEventEmitter : EventEmitter<any> = new EventEmitter();

  handleSubmit(){
    console.log("handle submit travel");
    this.viewChangeEventEmitter.emit(1);
  }
}
