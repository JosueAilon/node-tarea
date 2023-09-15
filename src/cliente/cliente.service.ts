import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ClienteService {
    private clientes = [
    
    {
    id: 1,
    nombre: 'Lopez',
    direccion: 'Huehuetenango',
    },
    
    {
    id: 2,
    nombre: 'Josue',
    direccion: 'Aguacatan',
    },

    {
    id: 3,
    nombre: 'Emanuel',
    direccion: 'Quetzaltenango',
    },    
    
    {
    id: 4,
    nombre: 'Ailon',
    direccion: 'Guatemala',
    }
    
    ]

    findAll(){
    return this.clientes;
    }

    findById(id: number){


        const cliente = this.clientes.find( c => c.id === id);
        
        if(!cliente){
        throw new NotFoundException(`Cliente with id ${id} doese eunotc exist`);
        
        }
   
        return cliente; 
    }

    updateCliente(clienteBody, id){

        const cliente = this.clientes.find( c => c.id === id);
        
        if(!cliente){
        throw new NotFoundException(`Cliente with id ${id} doese eunotc exist`);
        
        }
            
        return {status:'Cliente actualizado'}
    
    }


    deleteCliente(id){

        const cliente = this.clientes.find( c => c.id === id);
        
        if(!cliente){
        throw new NotFoundException(`Cliente with id ${id} doese eunotc exist`);
        
        }
            
        return {status:'Cliente eliminado'}
    
    }
   

    createCliente(clienteBody){

        const cliente = this.clientes.find( c => c.id === clienteBody.id);
        
        if(cliente){
        throw new NotFoundException(`Cliente with id ${clienteBody.id} ya existe xd`);
        
        }
            
        return {status:'Cliente creados'}
    
    }


}
 
 

