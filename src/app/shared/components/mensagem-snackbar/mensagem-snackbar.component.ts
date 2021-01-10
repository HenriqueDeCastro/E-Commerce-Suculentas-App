import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemSnackbarComponent {

  // ERRO
  public ErroServidor = 'Erro no servidor, tente novamente mais tarde !!!';
  public ErroCamposPreenchidos = 'Nem todos os campos foram preenchidos';
  public ErroUploadImagem = 'Erro ao realizar upload da imagem';

  // SUCESSO
  public CadastroConcluido = 'Cadastrado realizado com sucesso';
  public AtualizacaoConcluida = 'Atualização realizada com sucesso';
  public DeletarConcluido = 'Deletado com sucesso';

  // CARRINHO
  public ProdutoRemovidoCarrinho = 'Produto removido do carrinho!';
  public ProdutoSalvoCarrinho = 'Produto salvo com sucesso!';
  public ProdutoAdicionadoCarrinho = 'Produto adicionado ao carrinho!';
  public ErroEstoqueMaximo = 'Você já adicionou o máximo que temos em estoque';

  // ESQUECI A SENHA && RESET SENHA
  public VerificarCaixaEmail = 'Verifique sua caixa de e-mail';
  public EmailNaoEncontrado = 'Não foi encontrado o e-mail informado !!!';
  public SenhaRedefinida = 'Senha redefinida com sucesso';

  // LOGIN
  public ErroLoginNaoAutorizado = 'E-mail ou senha incorretos';

  // REGISTER
  public ErroCadastroDuplicado = 'E-mail informado já possui cadastro !!!';

  // MELHOR ENVIO
  public ErroServidorMelhorEnvio = 'Erro inesperado no servidor do "Melhor Envio", tente novamente!!!';
  public ErroCampoCEPPreenchido = 'CEP é obrigatório para calcular o frete';


  constructor() { }

}
