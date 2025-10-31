# Rede do Bem – Plataforma Web para ONGs

Projeto acadêmico de desenvolvimento web completo (HTML5, CSS3 e JavaScript) que simula uma aplicação real de gestão de projetos sociais, voluntários e doações.

---

## Funcionalidades Principais

- Design System completo (paleta, tipografia e espaçamento modular)
- Layout responsivo (Grid 12 colunas + Flexbox)
- SPA (Single Page Application) com templates JS
- Validação de formulários com feedback visual
- Armazenamento local (`localStorage`)
- Acessibilidade WCAG 2.1 Nível AA:
  - Navegação por teclado
  - Estrutura semântica com landmarks
  - Suporte a leitores de tela (aria-labels, aria-live, aria-modal)
  - Modo alto contraste / dark mode
- Versão de produção (`dist/`) com:
  - CSS/JS/HTML minificados
  - Imagens otimizadas (WebP/AVIF)
  - Melhor desempenho de carregamento

---

## Tecnologias Utilizadas
- HTML5 + CSS3 + JavaScript (modular ES6)
- Git + GitHub (GitFlow, tags, PRs e releases)
- Ferramentas de minificação e compressão online (CSSMin, JSMin, TinyPNG)

---

## Estrutura de Pastas

```text
projeto-ong-atividade4/
├── src/
│   ├── index.html
│   ├── projetos.html
│   ├── cadastro.html
│   ├── assets/
│   │   ├── css/style.css
│   │   └── img/
│   └── js/
│       ├── app.js
│       ├── templates.js
│       ├── storage.js
│       ├── form-validation.js
│       └── main.js
└── dist/
    ├── index.html
    ├── projetos.html
    ├── cadastro.html
    ├── assets/
    │   ├── css/style.min.css
    │   └── img/
    └── js/
        ├── app.min.js
        ├── templates.min.js
        ├── storage.min.js
        └── form-validation.min.js
