# Projeto CDC 8990

Site estático de 13 páginas pessoais para um jantar de antigos jogadores do
Clube Desportivo de Cerveira. Cada página abre a partir de uma tag NFC colada
numa placa de madeira que cada pessoa recebe.

## Contexto fixo
- Repositório: https://github.com/davidvibeia/cdc8990 (público, criado, vazio)
- Ramo: main
- O site é servido em subpasta: https://davidvibeia.github.io/cdc8990/<slug>/
- Data do jantar: sábado, 15 de agosto de 2026
- Cores do clube: verde #2C7C4E, amarelo #EFC81C
- Fala comigo sempre em português de Portugal.

## Regras invioláveis

### Caminhos
- TODOS os caminhos de imagens, CSS e links têm de ser RELATIVOS (../img/x.jpg).
  Nunca uses caminhos absolutos começados por /, porque o site vive em subpasta
  e isso parte tudo em produção.
- Todos os nomes de ficheiros e pastas em minúsculas, sem espaços e sem acentos.
  O GitHub Pages corre em Linux e distingue maiúsculas de minúsculas.

### Tecnologia
- HTML e CSS puros. Sem frameworks, sem build, sem npm, sem dependências.
- Sem fontes externas nem CDNs. Só fontes do sistema.
- JavaScript apenas para a fotografia de grupo (anti-cache e fallback se faltar).
- Sem analytics, sem cookies, sem rastreio.
- Todas as páginas: <!DOCTYPE html>, lang="pt-PT", charset UTF-8 e
  <meta name="viewport" content="width=device-width, initial-scale=1">.
  Os acentos dos nomes têm de aparecer corretos (Óscar, Luís, José, António).

### Ficheiros
- Nunca alterar, mover nem apagar as imagens originais de fotos/. Só copiar.
- A pasta fotos/ e os ficheiros .DS_Store nunca vão para o repositório.
- Todas as páginas levam <meta name="robots" content="noindex, nofollow">.

### Antes de qualquer commit
- Confirmar que cada caminho de imagem existe em disco com o nome exato,
  incluindo maiúsculas e minúsculas.
- Confirmar que cada página aponta para as imagens da pessoa certa.
- Nunca fazer force push. Nunca apagar nem recriar o repositório remoto.

## Se algo correr mal
Se a execução se desviar do plano aprovado, para e volta a planear comigo
antes de continuares.
