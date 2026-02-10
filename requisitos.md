📋 Lista de Requisitos Funcionais - MoodWear
1. Gestão de Perfil e Personalização (Prioridade: Alta)
RF01 - Cadastro de Perfil Físico: O sistema deve permitir que o usuário cadastre e edite dados básicos (tipo de corpo, tom de pele e preferências estéticas).

RF02 - Questionário Emocional (Check-in): O sistema deve fornecer um formulário dinâmico para capturar o estado emocional atual (humor, energia e intenção) antes de cada nova recomendação.

RF03 - Guarda-Roupa Virtual (Básico): O usuário deve ser capaz de salvar ("favoritar") as combinações sugeridas pelo sistema em uma área de acesso rápido.

2. Motor de Recomendação e Conteúdo (Prioridade: Alta)
RF04 - Geração de Looks: O sistema deve cruzar os dados do perfil físico com as respostas do check-in emocional para gerar sugestões de peças e paletas de cores.

RF05 - Pílulas de Conhecimento: Cada recomendação deve exibir blocos explicativos curtos ("Por que esta cor?", "O que este estilo transmite?") relacionando a escolha à psicologia.

RF06 - Visualização Híbrida: O sistema deve apresentar as sugestões primeiro como um moodboard (composição visual) e, em seguida, permitir o detalhamento individual de cada peça.

3. Interação e Feedback (Prioridade: Média)
RF07 - Feedback de Recomendação: O usuário deve poder marcar se "gostou" ou "não gostou" de peças específicas para refinar o algoritmo futuro.

RF08 - Notificações de Bem-estar: O sistema deve enviar lembretes opcionais para check-in emocional e pílulas de autocuidado.

RF09 - Gestão de Histórico Emocional: O usuário deve poder visualizar, baixar ou excluir seu histórico de humores e respostas anteriores.

4. Planejamento e Evolução (Prioridade: Baixa / Pós-MVP)
RF10 - Calendário de Eventos: O usuário poderá agendar looks para datas futuras com base no "humor pretendido" para aquele evento.

RF11 - Inventário de Peças Pessoais: Funcionalidade para o usuário fazer upload de fotos de suas próprias roupas para serem integradas às sugestões.

RF12 - Relatórios Avançados: Geração de análises gráficas sobre a evolução do humor e padrões de estilo ao longo do tempo.

5. Administração - Backend (Prioridade: Alta)
RF13 - Painel de Curadoria: Interface para a equipe cadastrar peças, cores e estilos com "tags" psicológicas e físicas.

RF14 - Gestão de Regras Lógicas: Ferramenta para configurar as associações entre emoções específicas e os atributos de moda correspondentes.

🏗️ Requisitos Não Funcionais
1. Usabilidade (Experiência do Usuário)
RNF01 - Interface Estética e Minimalista: Por se tratar de um projeto que une moda e psicologia, a interface deve seguir princípios de design limpo (minimalista) e cores que transmitam calma e confiança, garantindo uma experiência visual prazerosa.

RNF02 - Responsividade: A plataforma deve ser 100% responsiva, adaptando-se perfeitamente a dispositivos móveis (Android/iOS) e desktops, já que a escolha de roupas é uma atividade frequentemente feita via celular.

RNF03 - Facilidade de Uso (Nielsen): Um usuário novo deve ser capaz de completar o fluxo de "Check-in Emocional" e receber sua primeira recomendação em menos de 3 minutos sem ajuda de tutoriais.

2. Desempenho e Disponibilidade
RNF04 - Tempo de Resposta: O motor de recomendação deve processar os dados e exibir o moodboard final em, no máximo, 3 segundos após o envio do questionário emocional.

RNF05 - Disponibilidade: O sistema deve estar disponível 99,5% do tempo (Uptime), considerando que o usuário pode precisar de uma consulta rápida ao se vestir pela manhã.

3. Segurança e Privacidade (LGPD)
RNF06 - Criptografia de Dados: Todos os dados sensíveis (especialmente as respostas sobre humor e estado emocional) devem ser criptografados no banco de dados e durante o trânsito (HTTPS).

RNF07 - Anonimização para Analytics: Caso os dados de humor sejam usados para métricas de sucesso da plataforma, eles devem ser totalmente anonimizados, impedindo a identificação do usuário individual.

RNF08 - Gestão de Consentimento: O sistema deve apresentar termos de uso claros, permitindo que o usuário aceite ou revogue o processamento de seus dados emocionais a qualquer momento.

4. Manutenibilidade e Escalabilidade
RNF09 - Arquitetura de Microserviços (Opcional): O backend deve ser estruturado de forma a permitir que, no futuro, a integração com APIs de lojas parceiras ou o módulo de IA não afete o núcleo principal do sistema.

RNF10 - Facilidade de Atualização de Conteúdo: O painel administrativo deve permitir que a equipe de curadoria atualize as tags e regras de moda sem a necessidade de intervenção dos desenvolvedores no código-fonte.

5. Compatibilidade
RNF11 - Navegadores Suportados: A plataforma deve ser compatível com as duas últimas versões estáveis dos principais navegadores (Chrome, Safari, Edge e Firefox).
