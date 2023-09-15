import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    
        constructor (private readonly productsService: ProductsService){}
    
    @Get()
    getProducts(){
        return this.productsService.findAll();
    }
    
    @Get(':id')
    getProductsByid(@Param('id', ParseIntPipe) id: number){
    
        console.log(`el id a buscar es ${id}`)
        return this.productsService.findById(id);
    }
    
    @Put(':id')
    updateProductsByid(@Param('id', ParseIntPipe) id: number, @Body() body){
    
        console.log(`el id a actualizar es ${id}`)
        console.log(body);
        return this.productsService.updateProducts(body, id);
    }
    
    
    @Delete(':id')
    deleteProductsByid(@Param('id', ParseIntPipe) id: number){
    
        console.log(`el id a eliminar es ${id}`)
        return this.productsService.deleteProducts(id);
    }
    
    @Post()
    createClienteByid(@Body() body){
    
        console.log(body);
        return this.productsService.createProducts(body);
    }


}
