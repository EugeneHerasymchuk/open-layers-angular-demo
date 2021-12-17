import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.sass']
})
export class RequestFormComponent implements OnInit {

  presentForm = new FormGroup({
    lon: new FormControl(''),
    lat: new FormControl(''),
    wish: new FormControl(''),
    present: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void {
  }
}
