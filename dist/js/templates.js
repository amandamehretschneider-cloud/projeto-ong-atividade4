// js/templates.js

const Templates = {
  home() {
    return `
      <section class="hero">
        <div>
          <h1>Juntos transformamos realidades</h1>
          <p>Nossa ONG conecta pessoas, recursos e causas sociais...</p>
          <a class="btn" href="projetos" data-link>Ver projetos</a>
          <a class="btn-secondary" href="cadastro" data-link>Quero me cadastrar</a>
        </div>
        <figure>
          <img src="assets/img/hero-ong.jpg" alt="Voluntários da ONG">
          <figcaption>Ações de impacto em 12 cidades brasileiras.</figcaption>
        </figure>
      </section>

      <section class="institucional">
        <h2>Missão, Visão e Valores</h2>
        <div class="grid-12">
          <article class="col-4">
            <h3>Missão</h3>
            <p>Promover inclusão social...</p>
          </article>
          <article class="col-4">
            <h3>Visão</h3>
            <p>Ser referência nacional...</p>
          </article>
          <article class="col-4">
            <h3>Valores</h3>
            <ul>
              <li>Transparência</li>
              <li>Respeito</li>
              <li>Colaboração</li>
            </ul>
          </article>
        </div>
      </section>
    `;
  },

  projetos() {
    return `
      <header class="page-header">
        <h1>Projetos sociais</h1>
        <p>Conheça nossos programas e veja como participar.</p>
      </header>

      <section class="projetos">
        <h2>Projetos ativos</h2>

        <article class="card-projeto">
          <figure><img src="assets/img/projeto1.jpg" alt=""></figure>
          <div>
            <h3>Educa+ Comunidade <span class="badge">Educação</span></h3>
            <p>Reforço escolar para crianças...</p>
            <p><strong>Meta:</strong> R$ 15.000 · <strong>Alcançado:</strong> R$ 10.200</p>
            <button class="btn" data-open-modal>Quero doar</button>
            <a class="btn-secondary" href="cadastro" data-link>Quero ser voluntário</a>
          </div>
        </article>

        <article class="card-projeto">
          <h3>Saúde em Movimento <span class="badge-warning">Em andamento</span></h3>
          <p>Atendimentos básicos e orientação.</p>
        </article>
      </section>
    `;
  },

  cadastro() {
    return `
      <header class="page-header">
        <h1>Cadastro</h1>
        <p>Preencha seus dados para participar dos projetos.</p>
      </header>

      <section>
        <form id="volunteerForm" novalidate>
          <div class="alert alert-info">
            Campos com * são obrigatórios.
          </div>

          <fieldset>
            <legend>Dados pessoais</legend>

            <label for="nome">Nome completo *</label>
            <input type="text" id="nome" name="nome" required minlength="3" />

            <label for="email">E-mail *</label>
            <input type="email" id="email" name="email" required />

            <label for="cpf">CPF *</label>
            <input type="text" id="cpf" name="cpf" required maxlength="14" />

            <label for="telefone">Telefone *</label>
            <input type="tel" id="telefone" name="telefone" required maxlength="15" />

            <label for="tipo">Quero me cadastrar como *</label>
            <select id="tipo" name="tipo" required>
              <option value="">Selecione</option>
              <option value="voluntario">Voluntário</option>
              <option value="doador">Doador</option>
              <option value="parceiro">Parceiro/ONG</option>
            </select>
          </fieldset>

          <button type="submit" class="btn">Enviar cadastro</button>
          <button type="button" class="btn-secondary" id="showLocalData">Ver cadastros salvos</button>
        </form>

        <div id="savedEntries" style="margin-top:1rem;"></div>
      </section>
    `;
  }
};
