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
  userName: String = "";

  ngOnInit(): void{
    this.title = 'Hello from Bridgelabz!';
    this.imgUrl = '../assets/BL_logo_square_png.png';
    this.url = "https://www.bridgelabz.com";
  }

  onClick($event){
    console.log($event);
    window.open(this.url,"_blank");
  }
}
