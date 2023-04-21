//Criando o diretório/repositório local. Pode ser direto na interface ou pelo terminal.
//...no terminal:

%mkdir nomedodiretorio
%ls                         -> lista o conteúdo do diretório
%cd nomedodiretorio         -> entra num diretório
%code .                     -> abre o Visual Studio Code. A partir daqui pode usar o terminal do VSCode para imputar os comandos
%git config --list          ->
[ESC] + %:wq                -> para sair do terminal
%clear                      -> limpa tela

//INIT: inicializar o diretório
%git init                   -> permite que o Git monitore tudo o que tem nesse repositório
%git status                 -> verifica as modificações num nível mais macro

//REMOTE: linkando com diretório no GitHub
- criar um diretório no GitHub      -> ele vai mostrar um comando remote add origin
%git remote -v              -> para verificar se já existe algum diretório no GitHub atrelado
%git remote add origin https://github.com/alyanamacedo/potencia-feminina-git-e-github.git       -> atrelar

//CLONE: clonar um diretório. Copiar do github para um dir local
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
