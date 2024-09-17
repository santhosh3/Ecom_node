import { IcatalogRepository } from "../interface/catelogRepository.interface";

export class CatalogService {

    private _repository: IcatalogRepository;

    constructor(repository: IcatalogRepository){}

    async createProduct(input: any){
       const data = await this._repository.create(input)
       return data
    }

    updateProduct(input: any){

    }

    getProducts(limit: number, offset: number){

    }

    getProduct(id: number){

    }

    deleteProduct(id: number){

    }
}