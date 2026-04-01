# Resumo – Introdução ao CSS

## O que é CSS e por que usar arquivos externos?

CSS (Cascading Style Sheets) é uma linguagem usada para definir o estilo e a aparência de páginas web. Com o CSS é possível mudar cores, fontes, espaçamentos, tamanhos e a organização dos elementos na página.

Existem três formas de aplicar CSS em um site: CSS inline, CSS interno e CSS externo.

O uso de um arquivo externo (como `style.css`) é o mais recomendado porque:

- **Organização:** separa o HTML (estrutura da página) do CSS (estilo).
- **Reutilização:** o mesmo arquivo de estilos pode ser usado em várias páginas do site.
- **Manutenção:** facilita alterações futuras, já que é possível mudar o estilo do site inteiro em apenas um arquivo.

---

## Glossário de Propriedades CSS

Algumas das principais propriedades usadas no CSS são:

- **color:** define a cor do texto de um elemento.

- **background-color:** define a cor de fundo de um elemento.

- **margin:** cria um espaço externo ao redor do elemento, afastando ele de outros elementos.

- **padding:** cria um espaço interno entre o conteúdo do elemento e sua borda.

- **display: flex:** ativa o modelo de layout Flexbox, que facilita o alinhamento e a organização de elementos na página.

- **font-family:** define qual fonte será usada no texto.

- **border-radius:** permite arredondar as bordas de elementos como botões, caixas e imagens.

---

## O uso de Classes (class)

As classes são usadas para aplicar estilos em elementos específicos da página.

No HTML, uma classe é adicionada usando o atributo `class`. Depois, no CSS, essa classe pode ser selecionada usando um ponto (`.`) antes do nome da classe.

Exemplo:

HTML:
```html
<p class="texto-destaque">Exemplo de texto</p>
```

CSS:
```css
.texto-destaque {
  color: blue;
}
```

As classes ajudam a organizar melhor o código e permitem aplicar estilos apenas em alguns elementos, sem afetar todos os outros da página.
