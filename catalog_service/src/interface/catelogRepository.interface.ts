import { Product } from "../models/product.model";

export interface IcatalogRepository {
    create(data: Product): Promise<Product>;
    update(data: Product): Promise<Product>;
    delete(data: any): any;
    find(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
}