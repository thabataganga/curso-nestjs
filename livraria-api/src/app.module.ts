import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivroService } from './livro.service';
import { LivrosController } from './livros.controller';

@Module({
  imports: [],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivroService],
})
export class AppModule {}
