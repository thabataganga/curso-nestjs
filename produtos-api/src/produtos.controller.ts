import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from './produto.model'

@Controller('produtos')
export class ProdutosController {
    produtos: Produto[] = [
        new Produto("LIV001", "Livro X", 29.90),
        new Produto("LIV002", "Livro Inciante", 15.90),
        new Produto("LIV003", "Livro Bla bla ", 12.90)
    ]

    @Get()
    obterTodos(): Produto[] {
        return this.produtos;
    }

    @Get(':id')
    obterUm(@Param() params): Produto {
        return this.produtos[params.id];
    }

    @Post()
    criar(@Body() produto: Produto) {
        produto.id = 100;
        this.produtos.push(produto);
    }

    @Put()
    alterar(@Body() produto: Produto): Produto {
        return produto;
    }

    @Delete(':id')
    apagar(@Param() params) {
        this.produtos.pop();
    }
}