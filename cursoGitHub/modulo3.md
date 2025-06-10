# BRANCHS - ambientes
## DEVELOP (UAT)
> ambiente para uso em tempo de desenvolvimento. Depois de testar o que desenvolvemos em nossa máquina (ambiente local), o código é disponibilizado nesse ambiente.

## HOMOLOG (PDT)
> Após as alterações serem validadas em ambiente de desenvolvimento, o código vai para a homologação, onde pessoas de negócio podem validar a solução e pessoas de qualidade efetuam testes.

## MASTER (PRD)
> É a principal. Contém os códigos de produção, disponibilizado para o público.

## CRIANDO NOVA BRANCH

|COMANDOS| DESCRIÇÃO |
|--|--|
| `git checkout -b [nomebranch]` | cria nova branch e já faz o switch |
| `git branch` | lista as branchs existentes |
| `git checkout [nomadabranch]` | vai para a branch |
| `git merge [nomedabranch]`| na branch que se deseja carregar as atualizações de outra branch, informar de qual branch deseja fazer o merge|
| `git push --set-upstream origin develop` | não esquecer de dar o push depois do merge para atualizar no github |

## RENOMEANDO A BRANCH
> Como exemplo, renomeei a branch 'main' para 'master' via interface no GitHub. Em seguida, precisa atualizar via terminal

| COMANDOS | DESCRIÇÃO |
|--|--|
| `git branch -m main master` |  |
| `git fetch origin` |  |
| `git branch -u origin/master master` |  |
| `git remote set-head origin -a` |  |

## LIMPANDO OS COMMITS DA BRANCH
> Quando dá algum erro no push por algum commit do passado, melhor limpar o histórico

| COMANDOS | DESCRIÇÃO |
|--|--|
| `git checkout --orphan nova-main` | crie um novo branch órfão (sem histórico) |
| `git add .` | adicione todos os arquivos |
| `git commit -m "Novo início do histórico"` | faça um novo commit inicial |
| `git branch -d main` | apague o branch antigo. Seguro (só apaga branch já mesclado) |
| `git branch -D main` | apague o branch antigo. Força (apaga de qualquer jeito, pode perder histórico) |
| `git branch -m main` | renomeie a nova branch |
| `git push -f origin main` | Forçe o push para o repositório remoto (isso sobrescreve o histórico remoto!) |
| `git branch -v` | ver o último commit de cada Branch |

### REFERÊNCIA
- [Tutorial] O que são branches (ramos) no Git?: https://dev.to/womakerscode/tutorial-git-o-que-sao-branches-ramos-no-git-57pn
