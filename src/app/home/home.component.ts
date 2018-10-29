import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response} from '@angular/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  /*private apiUrl = 'http://localhost:8080/api/';  //creo una variabile a cui associo il mio percorso API
   data: any = [];  //recupera tutti i dati dell'array
   constructor(private http: Http) {
     console.log('Ciao');
     this.getProducts();
     this.getData();
    
     
   }
 
   getData(){
     return this.http.get(this.apiUrl)
     .pipe(map((res: Response)=> res.json()))
   }
 
   getProducts(){                                  //questo metodo grazie al metodo getData che recupera i dati dal DB riesce a stampare i dati a video
     this.getData().subscribe(data => {         //subscribe è un metodo che proviene da rxjs ed vene eseguito l'oggeto osservable 
       console.log(data);                 
       this.data = data;
     })
   }*/

  goToImage(){
    console.log('goToImage');
    this.router.navigate(['/detail-product']);
  }
}
