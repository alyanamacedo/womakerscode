
### REFERÊNCIAS

 - Para instalar: [https://git-scm.com/download/win](https://git-scm.com/download/win) 
 - Tutorial Windows: [https://dev.to/womakerscode/tutorial-instalando-configurando-e-inicializando-o-git-no-windows-57cj](https://dev.to/womakerscode/tutorial-instalando-configurando-e-inicializando-o-git-no-windows-57cj) 
 - Comandos básicos para iniciantes: [https://dev.to/womakerscode/git-e-github-guia-rapido-e-comandos-basicos-para-iniciantes-4ile](https://dev.to/womakerscode/git-e-github-guia-rapido-e-comandos-basicos-para-iniciantes-4ile)

# CONCEITOS INICIAIS

 - **Commit** -> toda vez que você desejar salvar/registrar as alterações no seu projeto, você comita essas alterações 
 - **Branch** -> ramificações do repositório. Com elas, é possível que várias pessoas atuem em um mesmo projeto independentemente (ambientes: master (PRD), develop (UAT), homolog (PDT)) 
 - **Merge** -> para juntar alterações de duas branchs em que duas pessoas estavam atuando simultaneamente 
 - **Clone** -> transferir o repositório do github para o local 
 - **Pull** -> para atualizar o repositório local. É realizado um merge entre o repositório online (github) com o local 
 - **Push** -> para enviar as alterações para o repositório remoto 
 - **Fork** -> semelhante ao clone, porém só ocorre na interface gráfica do github. Depois de copiar um repositório de outra pessoa, é possível fazer pull-request para contribuir com o conteúdo no repositório principal (cultura OpenSource) 
 - **Pull Request** -> após fazer o fork no repositório de outra pessoa, podemos resolver issues dele e fazer pull requests enviando soluções para erros e adicionando novos conteúdos. A pessoa dona do repositório irá avaliar a sua pull request e se estiver tudo ok, será mergeada no repositório master

## PRIMEIROS COMANDOS GIT

|COMANDOS| DESCRIÇÃO |
|--|--|
| `git --version` | para saber a versão instalada |
| `git config --global user.name "[nome]"` | para configurar a conta do GitHub no computador |
| `git config --global user.email "[endereco-de-email]"` | para configurar a conta do GitHub no computador |
| `git config --global init.defaultBranch main` | para configurar o nome da Branch padrão |
| `git config --list` | lista as propriedades da conta |
| `clear` | para limpar a tela |
