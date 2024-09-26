import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodnwasteService } from '../../foodnwaste.service';

@Component({
  selector: 'app-foodform',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './foodform.component.html',
  styleUrl: './foodform.component.css'
})
export class FoodformComponent {
  @Output() viewChangeEventEmitter : EventEmitter<any> = new EventEmitter();
  foodForm :FormGroup;
  constructor(private fb : FormBuilder,private food:FoodnwasteService){
    this.foodForm = this.fb.group({
      amountSpent: [''],  // amount spent must be a positive number
      foodType: [''],  // required select field for food type
      waterUsage: [''],  // water usage must be a non-negative number
    });
  }

  handleSubmit(){
    console.log("handle submit food");
    console.log(this.foodForm.value)
    this.food.storeFoodNWaste("2024-09-17",this.foodForm.value).subscribe(d => {
      console.log(d)
    })
    // this.viewChangeEventEmitter.emit(1);
  }
}
