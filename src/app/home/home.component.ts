import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
display=false;
showhide='Hide'

product={
  name:"Iphone 14",
  img:"./assets/01.png",
  price:799,
  processor:"A13 bionic Chip",
  discount:10.5
}

toggle=()=>{
  console.log(this.display);
  this.display=!this.display;
  if(this.display==true){
    this.showhide='Show'
  }
  else{
    this.showhide='Hide'

  }
}
}
