import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {

  constructor() { }

  // ERRO
  public ErroServidor = 'Erro no servidor, tente novamente mais tarde !!!';
  public ErroCamposPreenchidos = 'Nem todos os campos foram preenchidos';

  // SUCESSO
  public CadastroConcluido = 'Cadastrado realizado com sucesso';
  public AtualizacaoConcluida = 'Atualização realizada com sucesso';
  public DeletarConcluido = 'Deletado com sucesso';

  // IMAGEM

  public ErroUploadImagem = 'Erro ao realizar upload da imagem';
  public ErroUploadImagemMini = 'Erro ao realizar upload da imagem minificada';

  // CARRINHO
  public ProdutoRemovidoCarrinho = 'Produto removido do carrinho!';
  public ProdutoSalvoCarrinho = 'Produto salvo com sucesso!';
  public ProdutoAdicionadoCarrinho = 'Produto adicionado ao carrinho!';
  public ErroEstoqueMaximo = 'Você já adicionou o máximo que temos em estoque';
  public ProdutoIndisponivelNoServidor = 'Um produto em seu carrinho se encontra indisponível !!!';
  public ErroPagSeguro = 'OPS! Infelizmente o PagSeguro está fora do ar atualmente, tente finalizar a compra mais tarde';
  public VendaComSucesso = 'Venda Realizada com sucesso!!!';

  // ESQUECI A SENHA && RESET SENHA
  public VerificarCaixaEmail = 'Verifique sua caixa de e-mail';
  public EmailNaoEncontrado = 'Não foi encontrado nenhum usuário com o e-mail informado !!!';
  public SenhaRedefinida = 'Senha redefinida com sucesso';

  // LOGIN
  public ErroLoginNaoAutorizado = 'E-mail ou senha incorretos';

  // REGISTER
  public ErroCadastroDuplicado = 'E-mail informado já possui cadastro !!!';

  // MELHOR ENVIO
  public ErroServidorMelhorEnvio = 'Erro inesperado no servidor do "Melhor Envio", tente novamente!!!';
  public ErroCampoCEPPreenchido = 'CEP é obrigatório para calcular o frete';

  // ROLE
  public ErroRoleAdmin = 'Erro ao adicionar a Role Admin';
  public ErroRoleEmpresa = 'Erro ao adicionar a Role Empresa';

  // VENDA
  public ErroCamposSemAlteracao = 'Não houve nenhuma alteração nos campos';

}
