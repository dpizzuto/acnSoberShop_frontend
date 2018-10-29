import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response} from '@angular/http';



@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

/* id: object;

  }
   private apiUrl = 'http://localhost:28017/api/.....'; //creo una variabile a cui associo il mio percorso API
   data: any = [];
   constructor(private http: Http, private route: ActivatedRoute) {
     console.log('Ciao');
     this.getProducts();
     //this.getData();
     this.getProductsId();
     
   }

   getProductsId(){                                          
    this.route.params.subscribe(params => {   //questo metodo recupera l'id dall'URL salvandolo nella variabile id di tipo Object
      console.log(params)                 // registra l'intero oggetto params
      this.id = params['id'];
      console.log(params['id'])          // registra il valore di id 
                                                  
      
    });
     return this.http.get(this.apiUrl + this.id)
     .pipe(map((res: Response)=> res.json()))
   }
 
   /*getData(){
     return this.http.get(this.apiUrl)
     .pipe(map((res: Response)=> res.json()))
   }
 
   getProducts(){                                  //uguale al getProducts precedente
    this.getProdcutsId().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

 
}*/



}