## FORK E PULL REQUEST
> A ação FORK é feita na interface do Github. Serve para clonar o diretório de outra pessoa para o seu.

> Depois de fazer o FORK e trabalhar as alterações no projeto, para enviar os commits ao diretório original, deve-se solicitar a aprovação nas alterações. Esse é o PULL REQUEST.
>> Pode ser feito via interface no Github ou via terminal

## ATUALIZAR O FORK: via terminal
| COMANDOS | DESCRIÇÃO |
|--|--|
| `git remote add upstream [endereçodiretórioonline]` | primeiro sincronize com o diretório do projeto base, da outra pessoa |
| `git fecth upstream` | similar ao pull. Tem a função de pegar todos os commits do projeto base |
| `git rebase upstream/master` | faz um rebalanceamento do que tem na upstream com a master. Permite a comparação entre os códigos |

### REFERÊNCIAS

- [Tutorial] fork: Como colaborar com projetos de código aberto: https://dev.to/womakerscode/tutorial-git-fork-como-colaborar-com-projetos-de-codigo-aberto-1lkm

- [Tutorial] Copiando um repositório existente (git clone): https://dev.to/womakerscode/tutorial-git-copiando-um-repositorio-existente-git-clone-1bfe

- [Tutorial] Verificando commits remotos: https://dev.to/womakerscode/tutorial-git-verificando-commits-remotos-56f3
