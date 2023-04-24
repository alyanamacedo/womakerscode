## Criando o diretório/repositório local. 
> Pode ser direto na interface do Git ou pelo terminal no Visual Studio Code (VSC)

|COMANDOS| DESCRIÇÃO |
|--|--|
| `mkdir [nomedodiretorio]` | criar diretório |
| `ls` | lista o conteúdo do diretório |
| `cd [nomedodiretorio]` | entra num diretório |
| `code .` | se estiver pelo git, abre o VSC |
| `git config --list` | lista as propriedades da conta |
| [ESC] + `%:wq` | para sair do terminal |
| `clear` | limpa a tela |

## GIT INIT: inicializar o diretório
| COMANDOS | DESCRIÇÃO |
|--|--|
| `git init` | permite que o Git monitore tudo o que tem nesse repositório |
| `git status` | verifica as modificações num nível mais macro
 
## GIT REMOTE: linkando o diretório local com um diretório no GitHub
> primeiro crie um diretório no GitHub -> ele vai mostrar um comando remote add origin https://github.com/alyanamacedo/[nomedorepositório].git
| COMANDOS | DESCRIÇÃO |
|--|--|
| `git remote -v ` | para verificar se já existe algum diretório no GitHub atrelado |
| `git remote add origin [enderecodiretorioonline]` | atrelar |

## GIT CLONE: clonar um diretório. Copiar do github para um dir local
> usar quando não se tem ainda um diretório local criado
| COMANDOS | DESCRIÇÃO |
|--|--|
| `cd ../` | retornar um diretório |
| `mkdir [nomenovodir]` |  |
| `cd [nomenovodir]` |  |
| `git clone [enderecodiretorioonline]` | esse endereço o github informa na criação do dir https://github.com/alyanamacedo/[nomedorepositório] |

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
| `git add [caminhodoarquivo]` | arquivo específico |
 
## GIT COMMIT: de fato registrar as alterações feitas
| COMANDOS | DESCRIÇÃO |
|--|--|
| `git add .` |  |
| `git status` |  |
| `git commit -m "comentários"` | branch master. [master (root-commit) 6eb5936] Esse número é um código gerado |
| `git commit add .` | atalho para adicionar todas as mudanças que você tem |

## GIT PUSH: envio para o Github
| COMANDOS | DESCRIÇÃO |
|--|--|
| `git push --set-upstream origin master` | Quando a branch é nova, não existe uma referência de-para entre os arquivos locais e virtuais, então precisa dar esse comando |
| `git push` | para enviar do local para o github |

## GIT PULL: baixa as alteraçòes feitas no Github
| COMANDOS | DESCRIÇÃO |
|--|--|
| `git pull` | para baixar do github para o local |
|  |  |

  ### REFERÊNCIAS:
  
 - [Artigo] Guia rápido e Comandos básicos para iniciantes: https://dev.to/womakerscode/git-e-github-guia-rapido-e-comandos-basicos-para-iniciantes-4ile
 - [Tutorial] git commit -am: Atualizando arquivo modificado no Git: https://dev.to/womakerscode/tutorial-git-adicionando-um-arquivo-modificado-no-git-116c
 - [Tutorial] git commit: Enviando arquivos para o repositório Git: https://dev.to/womakerscode/tutorial-git-enviando-arquivos-para-o-repositorio-git-1k91
 - [Tutorial] git add: Adicionando arquivos no Git: https://dev.to/womakerscode/tutorial-git-adicionando-arquivos-no-git-3a0o
 - [Tutorial] Enviando um projeto para o repositório remoto no GitHub: https://dev.to/womakerscode/tutorial-git-enviando-um-projeto-para-o-repositorio-remoto-no-github-2p36
 - [Tutorial] Puxando commits remotos: https://dev.to/womakerscode/tutorial-git-puxando-commits-remotos-44an
 - [Tutorial] gitignore: Ignorando arquivos no Git: https://dev.to/womakerscode/tutorial-git-ignorando-arquivos-no-git-32m9
