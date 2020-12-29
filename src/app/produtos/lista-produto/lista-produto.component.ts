import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/ProdutoService';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styles: [],
})
export class ListaProdutoComponent implements OnInit {
  constructor(private produtoService: ProdutoService) {}

  public produtos: Produto[] = [];

  ngOnInit(): void {
    this.produtoService.obterProdutos().subscribe(
      ({ content }) => ((this.produtos = content), console.log(content)),
      (err) => console.log(err)
    );
  }
}
