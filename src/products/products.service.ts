import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Product[]> {
    return this.prismaService.product.findMany({
      include: {
        orderProducts: {
          include: { order: { include: { user: true } } },
        },
        users: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  public getBookById(id: Product['id']): Promise<Product | null> {
    return this.prismaService.product.findUnique({
      where: { id },
    });
  }

  public getBookByType(type: Product['type']): Promise<Product[] | null> {
    return this.prismaService.product.findMany({
      where: { type },
    });
  }
}
