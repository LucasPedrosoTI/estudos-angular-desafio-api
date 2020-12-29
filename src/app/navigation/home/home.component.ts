import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/model/Page';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/ProdutoService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private produtoService: ProdutoService) {}

  public produtos: Produto[] = [];

  ngOnInit(): void {
    this.produtoService.obterProdutos().subscribe(
      ({ content }) => ((this.produtos = content), console.log(content)),
      (err) => console.log(err)
    );
  }
}
