import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  user = {
    email: '',
    password: ''
  };

  login(form: any) {
    console.log('Login Data:', form.value);

    if (this.user.email === 'admin@gmail.com' &&
        this.user.password === '123456') {
      alert('Login Successful');
    } else {
      alert('Invalid Credentials');
    }
  }
}
