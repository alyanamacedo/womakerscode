//Criando o diretório/repositório local. Pode ser direto na interface ou pelo terminal.
//...no terminal:

%mkdir nomedodiretorio
%ls                         -> lista o conteúdo do diretório
%cd nomedodiretorio         -> entra num diretório
%code .                     -> abre o Visual Studio Code. A partir daqui pode usar o terminal do VSCode para imputar os comandos
%git config --list          ->
[ESC] + %:wq                -> para sair do terminal
%clear                      -> limpa tela

//GIT INIT: inicializar o diretório
%git init                   -> permite que o Git monitore tudo o que tem nesse repositório
%git status                 -> verifica as modificações num nível mais macro

//GIT REMOTE: linkando com diretório no GitHub
- criar um diretório no GitHub      -> ele vai mostrar um comando remote add origin
%git remote -v              -> para verificar se já existe algum diretório no GitHub atrelado
%git remote add origin https://github.com/alyanamacedo/potencia-feminina-git-e-github.git       -> atrelar

//GIT CLONE: clonar um diretório. Copiar do github para um dir local
%cd ../                     -> retornar um diretório
%mkdir nomenovodir
%cd nomenovodir
%git clone https://github.com/alyanamacedo/potencia-feminina-git-e-github.git                   -> esse endereço o github informa na criação do dir

//GIT STATUS: verifica o status dos arquivos e pastas dentro do repositório
%git status     -> sem alterações
%git add .      -> depois que fizer alguma alteração local
%git status     -> com alterações

//GIT ADD
%git add .      -> adiciona todos os arquivos para a esteira de commit. Usar para adicionar novos arquivos, atualizar arquivo ou para identificar arquivos deletados
%git add [caminho do arquivo]    -> arquivo específico

//GIT COMMIT: de fato registrar as alterações feitas
%git add .
%git status
%git commit -m "comentários"    -> branch master. [master (root-commit) 6eb5936] Esse número é um código gerado

//GIT PUSH: envio para o Github
Quando a branch é nova, não existe uma referência de-para entre os arquivos locais e virtuais, então precisa dar o comando
%git push --set-upstream origin master

//GIT PULL: baixa as alteraçòes feitas no Github
%git pull