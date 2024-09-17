import { IcatalogRepository } from "../interface/catelogRepository.interface";
import { Product } from "../models/product.model";

export class MockCatalogRepository implements IcatalogRepository {
    create(data: Product): Promise<Product> {
        const mockProduct = {
            id : 34,
            ...data
        } as Product
        return Promise.resolve(mockProduct)
    }
    update(data: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    delete(data: any) {
        throw new Error("Method not implemented.");
    }
    find(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    
}