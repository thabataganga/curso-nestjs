import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from './livro.model'
import { LivroService } from "./livro.service";

@Controller('livros')
export class LivrosController {

    constructor(private produtosService: LivroService) {
        
    }

    @Get()
    obterTodos(): Livro[] {
        return this.produtosService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() params): Livro {
        return this.produtosService.obterUm(params.id);
    }

    @Post()
    criar(@Body() livro: Livro) {
        this.produtosService.criar(livro);
    }

    @Put()
    alterar(@Body() livro: Livro): Livro {
        return this.produtosService.alterar(livro);
    }

    @Delete(':id')
    apagar(@Param() params) {
        this.produtosService.apagar(params.id)
    }
}