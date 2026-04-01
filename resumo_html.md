# Resumo – Curso de HTML para Iniciantes (Hora de Codar)

## O que é HTML?

HTML significa *HyperText Markup Language* (Linguagem de Marcação de Hipertexto).  
Ele não é uma linguagem de programação, pois não executa lógica, cálculos ou repetições.

O HTML é uma linguagem de marcação usada para estruturar páginas web.  
Ele funciona como o “esqueleto” de um site, organizando textos, imagens, links e outros elementos.

O navegador interpreta o código HTML e transforma ele na página visual que vemos.

HTML trabalha junto com:

- CSS → responsável pela aparência e estilo  
- JavaScript → responsável pela interatividade  

## Estrutura básica de um documento HTML

Todo documento HTML precisa começar com uma estrutura padrão:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Título da página</title>
  </head>
  <body>
    Conteúdo visível da página
  </body>
</html>
```

### Explicação da estrutura:

- `<!DOCTYPE html>` → informa que o documento está usando HTML5.  
- `<html>` → envolve todo o conteúdo da página.  
- `<head>` → contém informações sobre a página (como título e configurações).  
- `<body>` → contém tudo que aparece na tela para o usuário.  

## Anatomia das Tags

A maioria das tags possui:

- Tag de abertura  
- Conteúdo  
- Tag de fechamento  

Exemplo:

```html
<p>Exemplo de parágrafo</p>
```

Algumas tags não possuem fechamento, como:

```html
<img src="imagem.jpg" alt="Descrição da imagem">
```

## Glossário das principais tags

### `<h1>` até `<h6>`
São usadas para títulos e subtítulos.  
`<h1>` é o título mais importante e `<h6>` o menos importante.

### `<p>`
Define um parágrafo de texto.

### `<a>`
Cria um link para outra página.

Exemplo:

```html
<a href="https://google.com">Acessar Google</a>
```

### `<img>`
Exibe uma imagem na página.

- `src` → caminho da imagem  
- `alt` → descrição da imagem (importante para acessibilidade)  

### `<ul>`
Cria uma lista não ordenada (com marcadores).

### `<ol>`
Cria uma lista ordenada (numerada).

### `<li>`
Define um item dentro de uma lista.

## A importância da tag `<div>`

A tag `<div>` é usada para organizar e agrupar elementos dentro da página.

Ela ajuda no aninhamento (colocar elementos dentro de outros elementos) e na organização do código.

Exemplo:

```html
<div>
  <h2>Título</h2>
  <p>Texto dentro da divisão</p>
</div>
```

A `<div>` é muito utilizada para estruturar o layout da página e facilitar a aplicação de estilos com CSS.

## Conclusão

O HTML é a base de qualquer site.  
Ele organiza o conteúdo e cria a estrutura da página.

Aprender HTML é o primeiro passo para quem deseja trabalhar com desenvolvimento web, pois ele é o fundamento para o uso de CSS e JavaScript.
