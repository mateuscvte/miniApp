import { postalCode } from './../../models/postalcode';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postalCode: postalCode

  constructor(private apiService: ApiService) {
    this.postalCode = {
      bairro: '',
      cep: '',
      complemento: '',
      ddd: '',
      gia: '',
      ibge: '',
      localidade: '',
      logradouro: '',
      siafi: '',
      uf: '',
    }
  }

  ngOnInit(): void {

  }

  getpostalCode(event: any) {
    console.log(event.cep)
    this.apiService.getPostalcode(event.cep).subscribe(res => {
      this.postalCode = res;
      console.log(res)
    })
  }

}
