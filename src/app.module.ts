import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ClienteModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
