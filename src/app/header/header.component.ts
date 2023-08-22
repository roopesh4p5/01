import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  hello=()=>{
    let val=document.getElementById('val')
    console.log(val)
  }

}
