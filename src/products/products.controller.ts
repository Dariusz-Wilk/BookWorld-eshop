import {
  Controller,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Get } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/')
  @UseGuards(JwtAuthGuard)
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
