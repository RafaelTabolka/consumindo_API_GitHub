import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable } from 'rxjs';
import { Interface } from './interface';
import { ConsumoServicesService } from './service/consumo-services.service';

@Component({
  selector: 'app-consumo-api',
  templateUrl: './consumo-api.component.html',
  styleUrls: ['./consumo-api.component.css'],
})

export class ConsumoApiComponent implements OnInit {
  public apiValues$!: Observable<Interface>;
  interfaceValue!: Interface;
  cardValues:boolean = false

  id:number = 0
  login:string = ''
  followers:number = 0
  following:number = 0
  public_repos:number = 0
  image:string = ''

  constructor(private consumoService: ConsumoServicesService,
    private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  dataUsers(userName: string) {
    this.consumoService.dataUser(userName).subscribe((a) => {
      
     this.id = a.id
     this.login = a.login
     this.followers = a.followers
     this.following = a.following
     this.public_repos = a.public_repos
     this.image = a.avatar_url
     this.cardValues = true
      console.log(a);
    },
    (error:HttpErrorResponse) => {
      if(error.status == 404){
        this.snackBar.open("Usuário não encontrado", "Ok",{
          verticalPosition:'top',
          duration:3000
        })
      }
    });
  }
}