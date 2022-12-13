import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits! : Produit[]; 
  
  
  
    ngOnInit(): void {
         this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
      });
      
  }
  constructor(private produitService : ProduitService,
               public authService: AuthService,
               private router: Router) { }
supprimerProduit(p: Produit)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)    
this.produitService.supprimerProduit(p.idProduit!).subscribe(() => {
console.log("produit supprimé");
});
this.router.navigate(['produits']).then(() => {
window.location.reload();
});
}
}