import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Icategory } from '../../models/icategory';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';
import { SquarePipe } from '../../pipes/square.pipe';
import { StaticProductService } from '../../services/static-product.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule,HighlightCardDirective,SquarePipe,RouterLink,RouterLinkActive],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges{
  products:Iproduct[];
  filteredProducts:Iproduct[];
  totalOrderPrice:number = 0
  num:number = 4
  myDate:Date=new Date()

  //1- define event
 @Output() onTotalPriceChanged:EventEmitter<number>

  @Input() recievedCatId:number=0
  // private _StaticProductService: any;
  constructor(private _StaticProductService:StaticProductService,private router:Router){
    
    this.products =this._StaticProductService.getAllProducts()
    
 

    this.filteredProducts=this.products

    this.onTotalPriceChanged=new EventEmitter<number>();
  }
  ngOnChanges() {
  //  this.filterProducts()
 this.filteredProducts= this._StaticProductService.getProductsByCatId(this.recievedCatId)
  }

  
   buy(count:string,price:number){
    //  this.totalOrderPrice=parseInt(count) *price
    // this.totalOrderPrice=Number(count) *price
    this.totalOrderPrice+= +count *price

    // 2-fire event
    this.onTotalPriceChanged.emit(this.totalOrderPrice)

   }


   change(){
    // this.selectedCatId=3
   }

   trackItem(index:number,item:Iproduct){
      return item.id
   }

  //  filterProducts(){
  //   if(this.recievedCatId==0){
  //     this.filteredProducts=this.products
  //   }else{
  //     this.filteredProducts=this.products.filter((prd)=>prd.catId==this.recievedCatId)

  //   }
  //  }


  navigateToDetails(id:number){
    // this.router.navigateByUrl('/Details')
    this.router.navigate([`/Details/${id}`])

  }
}
