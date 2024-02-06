import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './service/user.service';
import { PostService } from './service/post.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [PrismaService, UserService, PostService],
})
export class AppModule {}
