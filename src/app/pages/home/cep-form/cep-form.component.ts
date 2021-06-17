import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cep-form',
  templateUrl: './cep-form.component.html',
  styleUrls: ['./cep-form.component.css']
})
export class CepFormComponent implements OnInit {

  cepForm: FormGroup;
  @Output() formEventEmitter = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.cepForm = this.fb.group({
      cep: ''
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.formEventEmitter.emit(this.cepForm.value);
  }

}
