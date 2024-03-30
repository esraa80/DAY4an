import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticProductService } from '../../services/static-product.service';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  currentId:number=0;
  product:Iproduct|null=null;
constructor(private _activatedRouted:ActivatedRoute,private _stativService:StaticProductService){

}
  ngOnInit(): void {
 this.currentId=Number(this._activatedRouted.snapshot.paramMap.get("id"))
 this.product=this._stativService.getProductById(this.currentId)
  }
}
