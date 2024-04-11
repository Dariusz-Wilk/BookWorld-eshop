import {
  Controller,
  NotFoundException,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/')
  getAllProducts(): any {
    return this.productsService.getAll();
  }
  @Get('/id/:id')
  async getProductById(@Param('id', new ParseUUIDPipe()) id: string) {
    const book = await this.productsService.getBookById(id);
    if (!book) throw new NotFoundException('Book Not Found!');
    return book;
  }

  @Get('/type/:type')
  async getProductByType(@Param('type') type: string) {
    const books = await this.productsService.getBookByType(type);
    if (books.length === 0) throw new NotFoundException('Nothing to show');
    return books;
  }
}
