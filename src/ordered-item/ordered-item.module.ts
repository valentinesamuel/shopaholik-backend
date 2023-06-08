import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { OrderedItemService } from './ordered-item.service';
import { OrderedItemController } from './ordered-item.controller';
import { OrderedItem } from './entities/ordered-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderedItem]),
    ConfigModule.forRoot(),
    JwtModule.registerAsync({
      useFactory: () => ({
        global: true,
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: process.env.JWT_EXPIRE },
      }),
    }),
  ],
  controllers: [OrderedItemController],
  providers: [OrderedItemService, AuthGuard],
})
export class OrderedItemModule {}
