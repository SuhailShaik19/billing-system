import { products } from '../data/product-list';
import { Product } from '../models/product';

export function getProductByName(name: string): Product | undefined {
      for(let i = 0 ;i<products.length;i++){
            if(products[i].name.toLowerCase()===name.toLowerCase().trim()){
                return products[i];
           }
     }
     return undefined;
}
