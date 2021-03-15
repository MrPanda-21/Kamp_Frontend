import { Product } from "./product";
import { ResponseModule } from "./responseModel";

export interface ProductResponseModule extends ResponseModule{
    data:Product[],
    
}