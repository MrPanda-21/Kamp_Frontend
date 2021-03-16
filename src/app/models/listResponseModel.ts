import { ResponseModule } from "./responseModel";

export interface ListResponseModel<T> extends ResponseModule{
    data : T[];
}