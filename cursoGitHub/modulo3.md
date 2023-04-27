# BRANCHS - ambientes
## DEVELOP (UAT)
> ambiente para uso em tempo de desenvolvimento. Depois de testar o que desenvolvemos em nossa máquina (ambiente local), o código é disponibilizado nesse ambiente.

## HOMOLOG (PDT)
> Após as alterações serem validadas em ambiente de desenvolvimento, o código vai para a homologação, onde pessoas de negócio podem validar a solução e pessoas de qualidade efetuam testes.

## MASTER (PRD)
> É a principal. Contém os códigos de produção, disponibilizado para o público.

# CRIANDO NOVA BRANCH

|COMANDOS| DESCRIÇÃO |
|--|--|
| `git checkout -b [nomebranch` | cria nova branch e já faz o switch |
| `git branch` | lista as branchs existentes |
| `git checkout [nomadabranch]` | vai para a branch |
| `git merge [nomedabranch]`| na branch que se deseja carregar as atualizações de outra branch, informar de qual branch deseja fazer o merge|
| `git push` | não esquecer de dar o push depois do merge para atualizar no github |

### REFERÊNCIA
- [Tutorial] O que são branches (ramos) no Git?: https://dev.to/womakerscode/tutorial-git-o-que-sao-branches-ramos-no-git-57pn
