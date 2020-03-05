module.exports = "---\ntitle: Componente React de avaliação\ncomponents: Rating\n---\n\n# Avaliação\n\n<p class=\"description\">As avaliações fornecem informações sobre opiniões e experiências de outros usuários com um produto. Os usuários também podem avaliar os produtos que compraram.</p>\n\n## Avaliações simples\n\n{{\"demo\": \"pages/components/rating/SimpleRating.js\"}}\n\n## Avaliações customizadas\n\nAqui esta um exemplo de customização do componente. Você pode aprender mais sobre isso na [página de documentação de sobrescritas](/customization/components/).\n\n{{\"demo\": \"pages/components/rating/CustomizedRatings.js\"}}\n\n## Feedback ao passar mouse\n\nVocê pode exibir um rótulo ao passar o mouse para ajudar os usuários a escolher o valor de avaliação correto. The demo uses the `onChangeActive` prop.\n\n{{\"demo\": \"pages/components/rating/HoverRating.js\"}}\n\n## Meias avaliações\n\nA avaliação pode exibir qualquer número flutuante com a propriedade `value`. Use a propriedade `precision` para definir a alteração mínima do valor de incremento permitida.\n\n{{\"demo\": \"pages/components/rating/HalfRating.js\"}}\n\n## Tamanhos\n\nGosta de avaliações maiores ou menores? Use a propriedade `size`.\n\n{{\"demo\": \"pages/components/rating/RatingSize.js\"}}\n\n## Acessibilidade\n\n(WAI tutorial: https://www.w3.org/WAI/tutorials/forms/custom-controls/#a-star-rating)\n\nA acessibilidade neste componente conta com:\n\n- Um grupo de botões é usado com seus campos visualmente ocultos. Ele contém seis botões de opção, um para cada estrela e outro para 0 estrelas, que é marcado por padrão. Certifique-se de que você está fornecendo uma propriedade `name`, que é exclusivo para o formulário principal.\n- Os rótulos dos botões de opção contêm o texto atualmente como (\"1 Star\", \"2 Star\", …). Certifique-se de fornecer uma propriedade `getLabelText` quando o idioma da página não for o inglês."