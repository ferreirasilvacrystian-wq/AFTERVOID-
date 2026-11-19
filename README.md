# AFTERVOID — Website + AFTER AI Discord Bot

Projeto inicial funcional com:
- Site institucional responsivo.
- Bot Discord com `/ia`, `/ajuda`, `/limpar_conversa` e `/anunciar`.
- Integração com OpenAI Responses API.
- Mensagem de boas-vindas opcional.
- Endpoint `/api/status`.
- Proteção básica HTTP, limite de requisições e segredos em `.env`.

## Requisitos
- Node.js 20 ou superior.
- Uma aplicação criada no Discord Developer Portal.
- Uma chave da OpenAI API. O uso da API pode gerar custos separados da assinatura do ChatGPT.

## Instalação
1. Extraia o ZIP e abra a pasta `aftervoid` no terminal.
2. Execute `npm install`.
3. Copie `.env.example` para `.env`.
4. Preencha `DISCORD_TOKEN`, `DISCORD_CLIENT_ID` e `OPENAI_API_KEY`.
5. Para comandos de teste em um servidor, preencha `DISCORD_GUILD_ID`.
6. Execute `npm run commands` para registrar os comandos.
7. Execute `npm start`.
8. Acesse `http://localhost:3000`.

## Configuração do Discord
1. Crie uma Application no Discord Developer Portal.
2. Na aba Bot, crie o bot e copie o token para `.env`.
3. Em OAuth2 > URL Generator, selecione os escopos `bot` e `applications.commands`.
4. Conceda somente as permissões necessárias: View Channels, Send Messages, Embed Links e Read Message History. Para boas-vindas, habilite Server Members Intent e também `GuildMembers` no código já configurado.
5. Abra o link gerado e adicione o bot ao servidor desejado.
6. Nunca compartilhe o token do bot ou a chave da API.

## Configurar o site
No arquivo `public/app.js`, substitua `DISCORD_INVITE_URL` pelo link de convite do seu servidor.
Para mensagens de boas-vindas, informe o ID do canal em `WELCOME_CHANNEL_ID`.

## Publicação
Hospede o processo Node.js em um serviço que mantenha o processo ativo. Configure as variáveis do `.env` no painel do provedor de hospedagem. Use HTTPS e não envie o `.env` ao GitHub.

## Segurança e privacidade
- A conversa da AFTER AI fica em memória temporária e é perdida quando o bot reinicia.
- O bot não lê todas as mensagens do servidor; a interação com a IA acontece pelo comando `/ia`.
- `/anunciar` exige a permissão Gerenciar Servidor.
- A IA não executa banimentos, expulsões ou alterações de cargos.
- Não adicione dados pessoais, senhas ou tokens às mensagens.
- Para produção, implemente autenticação robusta antes de adicionar um painel administrativo com ações sobre o servidor.

## Estrutura
```text
aftervoid/
  public/
    index.html
    styles.css
    app.js
  src/
    ai.js
    bot.js
    commands.js
    config.js
    deploy-commands.js
    index.js
  .env.example
  .gitignore
  package.json
  README.md
```

## Próximas evoluções recomendadas
- Login OAuth2 do Discord para painel de membros.
- Banco de dados para preferências e configurações.
- Painel administrativo com autenticação e registro de auditoria.
- Configuração de canais permitidos para a AFTER AI.
- Sistema de tickets e níveis com regras transparentes.
