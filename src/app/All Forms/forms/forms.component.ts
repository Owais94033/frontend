import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { FoodformComponent } from '../foodform/foodform.component';
import { GadgetformComponent } from '../gadgetform/gadgetform.component';
import { TravelformComponent } from '../travelform/travelform.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [TravelformComponent,FoodformComponent,GadgetformComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit{
  @Input() formStage :number = 0;
  @Output() formStageEventEmitter : EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    console.log(this.formStage);
  }

  constructor(private route: ActivatedRoute){}

  

  addNew(){
    this.formStage++;
    this.formStageEventEmitter.emit(this.formStage);
  }
  
  handleEvent(){
    this.formStage++;
    this.formStageEventEmitter.emit(this.formStage);
  }

}
