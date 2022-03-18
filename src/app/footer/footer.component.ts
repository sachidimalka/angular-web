import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  admin =
    {
      email: 'example@gmail.com',
      teleNumber: '0712210033'
    }


  constructor() { }

  ngOnInit(): void {
  }

}
