import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';


@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule,CommonModule,ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements AfterViewInit {
  categories:Icategory[];
  selectedCatId:number=0
  recievedTotalPrice:number=0

  @ViewChild('userNameInp', { static: true }) myInput!: ElementRef;   //non null assertion operator=> we use it when  a variable i don not to give it an initial value

  @ViewChild(ProductsComponent, { static: true }) prdComObj!: ProductsComponent;
constructor(){
  this.categories=[
    {id:1,name:'Laptop'},
    {id:2,name:'Mobile'},
    {id:3,name:'Tablet'},
  ]
}
  ngAfterViewInit(): void {
  //  console.log(this.myInput)
  // this.myInput.nativeElement.value="safy"
  this.prdComObj.products;

  }

calcTotalPrice(top:number){
this.recievedTotalPrice=top
}
}
