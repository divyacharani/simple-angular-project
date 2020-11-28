import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl;
  url;
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void{
    this.title = 'Hello from Bridgelabz!';
    this.imgUrl = '../assets/BL_logo_square_png.png';
    this.url = "https://www.bridgelabz.com";
  }

  onClick($event){
    console.log($event);
    window.open(this.url,"_blank");
  }

  onInput($event){
    console.log($event);
    const nameRegex = RegExp('^[A-Z][a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError = "";
      return;
    }
    this.nameError = "Invalid Name!!"
    this.userName = "";
    }
}
