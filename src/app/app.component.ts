import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  greet = false
  title = 'form-mudule';
  onFormSubmition(user : NgForm) {
    console.log(user.form.value);
    console.log(user.form.value.username);
    this.greet=true
  }
}
