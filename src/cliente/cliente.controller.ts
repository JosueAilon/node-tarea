import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {

    constructor (private readonly clienteService: ClienteService){}

@Get()
getClientes(){
    return this.clienteService.findAll();
}

@Get(':id')
getClienteByid(@Param('id', ParseIntPipe) id: number){

    console.log(`el id a buscar es ${id}`)
    return this.clienteService.findById(id);
}

@Put(':id')
updateClienteByid(@Param('id', ParseIntPipe) id: number, @Body() body){

    console.log(`el id a actualizar es ${id}`)
    console.log(body);
    return this.clienteService.updateCliente(body, id);
}


@Delete(':id')
deleteClienteByid(@Param('id', ParseIntPipe) id: number){

    console.log(`el id a eliminar es ${id}`)
    return this.clienteService.deleteCliente(id);
}

@Post()
createClienteByid(@Body() body){

    console.log(body);
    return this.clienteService.createCliente(body);
}

} 