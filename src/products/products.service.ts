import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {

    private products = [
        {
            id: 1,
            nombre: 'Toallas',
            cantidad: 9,
            Descrpcion: 'Rojas',
        },

        {
            id: 2,
            nombre: 'Salsa',
            cantidad: 10,
            Descrpcion: 'Con picante',
        },
        
        {
            id: 3,
            nombre: 'Hamburguesa',
            cantidad: 5,
            Descrpcion: 'De pollo',
        },

        {
            id: 4,
            nombre: 'Agua',
            cantidad: 8,
            Descrpcion: 'Para beber',
        }

    ];
    public get productos() {
        return this.products;
    }
    public set productos(value) {
        this.products = value;
    }
    
        findAll(){
        return this.products;
        }
    
        findById(id: number){
    
    
            const products = this.products.find( c => c.id === id);
            
            if(!products){
            throw new NotFoundException(`Producto with id ${id} does not exist`);
            
            }
       
            return products; 
        }
    
        updateProducts(prodcutsBody, id){
    
            const products = this.products.find( c => c.id === id);
            if(!products){
            throw new NotFoundException(`Product with id ${id} does not exist`);
            
            }
                
            return {status:'Producto actualizado'}
        
        }
    
    
        deleteProducts(id){
    
            const products = this.productos.find( c => c.id === id);
            
            if(!products){
            throw new NotFoundException(`Prodcutos with id ${id} doese not exist`);
            
            }
                
            return {status:'Producto eliminado'}
        
        }
       
    
        createProducts(productsBody){
    
            const products = this.productos.find( c => c.id === productsBody.id);
            
            if(products){
            throw new NotFoundException(`Productos with id ${productsBody.id} ya existe`);
            
            }
                
            return {status:'Productos creados'}
        
        }
    



}
