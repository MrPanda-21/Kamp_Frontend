import { Category } from "./category";
import { ResponseModule } from "./responseModel";

export interface CategoryResponseModule extends ResponseModule{
    data: Category[];
}