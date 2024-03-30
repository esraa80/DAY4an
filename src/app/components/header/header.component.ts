import { Component } from '@angular/core';
import { StaticProductService } from '../../services/static-product.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  providers:[StaticProductService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private _StaticProductService:StaticProductService){

  }

}
