import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from './livro.model'
import { LivroService } from "./livro.service";

@Controller('livros')
export class LivrosController {

    constructor(private produtosService: LivroService) {
        
    }

    @Get()
    async obterTodos(): Promise<Livro[]> {
        return this.produtosService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params):  Promise<Livro> {
        return this.produtosService.obterUm(params.id);
    }

    @Post()
    async criar(@Body() livro: Promise<Livro>) {
        this.produtosService.criar(livro);
    }

    @Put()
    async alterar(@Body() livro: Livro): Promise<[number, Livro[]]> {
        return this.produtosService.alterar(livro);
    }

    @Delete(':id')
    async apagar(@Param() params) {
        this.produtosService.apagar(params.id)
    }
}