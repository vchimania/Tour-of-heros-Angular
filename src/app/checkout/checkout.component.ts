import { Component, OnInit } from '@angular/core';
//step 3
import {FormGroup,FormControl,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
checkoutForm:FormGroup;  //step 3 (2) Give same formGroup name as in template
  constructor(
    private formBuilder:FormBuilder
  ) { 
    this.checkoutForm=formBuilder.group({ //building a form using formBuilder
    emailAdd:new FormControl(), //in formBuilder I created a group of form elemets
    quantity:new FormControl(), //these are exact same as form
    terms:new FormControl()
  })}

  ngOnInit(): void {
  }
postData(){
  console.log('FormGroup object'+this.checkoutForm);
  console.log('Entire form value'+this.checkoutForm.value);
  console.log('Entire Address'+this.checkoutForm.value);
}
}
