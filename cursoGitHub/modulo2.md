## Criando o diretório/repositório local. 
> Pode ser direto na interface do Git ou pelo terminal no Visual Studio Code (VSC)

|COMANDOS| DESCRIÇÃO |
|--|--|
| `mkdir [nomedodiretorio]` | criar diretório |
| `ls` | lista o conteúdo do diretório |
| `cd [nomedodiretorio]` | entra num diretório |
| `code .` | se estiver pelo git, abre o VSC |
| `git config --list` | lista as propriedades da conta |
| [ESC] + `%:q` | para sair do terminal |
| `clear` | limpa a tela |

> Criando novo repositório por linha de comando
> primeiro crie um diretório no GitHub -> ele vai mostrar um comando remote add origin https://github.com/[nomedousuário]/[nomedorepositório]

|COMANDOS| DESCRIÇÃO |
|--|--|
| `echo "# ntsl" >> README.md` | cria uma documento md novo |
| `git init` | permite que o Git monitore tudo o que tem nesse repositório |
| `git add README.md` | adiciona o arquivo novo a fila |
| `git commit -m "first commit"` |  |
| `git branch -M main` |  |
| `git remote add origin [enderecodiretorioonline]` |  |
| `git push -u origin main` |  |

> Puxando de um repositório já existente

|COMANDOS| DESCRIÇÃO |
|--|--|
| `git remote add origin [enderecodiretorioonline]` |  |
| `git branch -M main` |  |
| `git push -u origin main` |  |

## GIT INIT: inicializar o diretório

| COMANDOS | DESCRIÇÃO |
|--|--|
| `git init` | permite que o Git monitore tudo o que tem nesse repositório |
| `git status` | verifica as modificações num nível mais macro
 
## GIT REMOTE: linkando o diretório local com um diretório no GitHub
> primeiro crie um diretório no GitHub -> ele vai mostrar um comando remote add origin https://github.com/[nomedousuário]/[nomedorepositório]
> esse link é a referência [enderecodiretorioonline]

| COMANDOS | DESCRIÇÃO |
|--|--|
| `git init` | permite que o Git monitore tudo o que tem nesse repositório |
| `git status` | verifica as modificações num nível mais macro |
|  |  |
| `git add .`| adicione os arquivos do repositório local na fila do commit |
| `git commit -m "[comentários]"` | confirme as alterações localmente |
|  |  |
| `git remote -v ` | para verificar se já existe algum diretório no GitHub atrelado |
| `git remote add origin [enderecodiretorioonline]` | atrelar o diretório local a origem especificada no github |
| `git remote set-url origin [enderecodiretorioonline]` | se por acaso digitou o endereço errado, use esse comando para alterar a origem |
| `git push --set-upstream origin master` | depois de dar o commit e definir a origem é hora de subir os arquivos para o github. Se for a primeira vez precisa definir o upstream origin [nomedabranch] |

> Atualizando somente o diretório local. Seguir os passos anteriores e...

| COMANDOS | DESCRIÇÃO |
|--|--|
| `git push --set-upstream origin master` | depois de dar o commit e definir a origem é hora de subir os arquivos para o github. Se for a primeira vez precisa definir o upstream origin [nomedabranch] |
| `git pull origin master --allow-unrelated-histories` | se houver algum arquivo no github será necessário fazer um pull. Se der erro no merge, será necessário este comando. Depois disso pode dar o push |
| `git push origin master --force` | se rejeitar o 'git push --set-upstream origin master' (non-fast-forward) |


## GIT REMOTE: alterando caminho do diretório no github atrelado ao diretório local
> usar se o endereço do diretório do repositório no github mudar

| COMANDOS | DESCRIÇÃO |
|--|--|
| `git remote -v ` | para verificar a origin e upstream atuais |
| `git remote remove origin ` | deleta a origin junto com o upstream |
| `git remote add origin [enderecodiretorioonline] ` | atrela nova origin |
| `git push --set-upstream origin master ` | conecta com a branch master daquela origin |

## GIT CLONE: clonar um diretório. Copiar do github para um diretório local
> usar quando não se tem ainda um diretório local criado

| COMANDOS | DESCRIÇÃO |
|--|--|
| `cd ../` | retornar um diretório |
| `mkdir [nomenovodir]` |  |
| `cd [nomenovodir]` |  |
| `git clone [enderecodiretorioonline]` | esse endereço o github informa na criação do dir https://github.com/[nomedousuário]/[nomedorepositório] |

## GIT STATUS: verifica o status dos arquivos e pastas dentro do repositório

| COMANDOS | DESCRIÇÃO |
|--|--|
| `git status` | ...sem alterações |
| `git add .` | depois que fizer alguma alteração local |
| `git status` | ...com alterações |

## GIT ADD

| COMANDOS | DESCRIÇÃO |
|--|--|
| `git add .` | adiciona todos os arquivos para a esteira de commit. Usar para adicionar novos arquivos, atualizar arquivo ou para identificar arquivos deletados |
| `git add --all` | similar a `git add .`|
| `git add [caminhodoarquivo]` | arquivo específico |
 
## GIT COMMIT: de fato registrar as alterações feitas

| COMANDOS | DESCRIÇÃO |
|--|--|
| `git add .` |  |
| `git status` |  |
| `git commit -m "comentários"` | branch master. [master (root-commit) 6eb5936] Esse número é um código gerado |
| `git commit -a` | não precisa entrar com comentários |
| `git commit add .` | atalho para adicionar todas as mudanças. NÃO FUNCIONOU! |

## GIT PUSH: envio para o Github

| COMANDOS | DESCRIÇÃO |
|--|--|
| `git push --set-upstream origin master` | Quando a branch é nova, não existe uma referência de-para entre os arquivos locais e virtuais, então precisa dar esse comando |
| `git push` | para enviar do local para o github |

## GIT PULL: baixa as alteraçòes feitas no Github

| COMANDOS | DESCRIÇÃO |
|--|--|
| `git pull` | para baixar do github para o local |


 ### REFERÊNCIAS:
  
 - [Artigo] Guia rápido e Comandos básicos para iniciantes: https://dev.to/womakerscode/git-e-github-guia-rapido-e-comandos-basicos-para-iniciantes-4ile
 - [Tutorial] git commit -am: Atualizando arquivo modificado no Git: https://dev.to/womakerscode/tutorial-git-adicionando-um-arquivo-modificado-no-git-116c
 - [Tutorial] git commit: Enviando arquivos para o repositório Git: https://dev.to/womakerscode/tutorial-git-enviando-arquivos-para-o-repositorio-git-1k91
 - [Tutorial] git add: Adicionando arquivos no Git: https://dev.to/womakerscode/tutorial-git-adicionando-arquivos-no-git-3a0o
 - [Tutorial] Enviando um projeto para o repositório remoto no GitHub: https://dev.to/womakerscode/tutorial-git-enviando-um-projeto-para-o-repositorio-remoto-no-github-2p36
 - [Tutorial] Puxando commits remotos: https://dev.to/womakerscode/tutorial-git-puxando-commits-remotos-44an
 - [Tutorial] gitignore: Ignorando arquivos no Git: https://dev.to/womakerscode/tutorial-git-ignorando-arquivos-no-git-32m9
