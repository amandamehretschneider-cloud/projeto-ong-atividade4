// js/app.js

// roteamento bem simples
const routes = {
  '/': 'home',
  '/index.html': 'home',
  '/projetos': 'projetos',
  '/cadastro': 'cadastro'
};

function render(viewName) {
  const app = document.getElementById('app');
  if (!app) return;

  let html = '';
  switch (viewName) {
    case 'projetos':
      html = Templates.projetos();
      break;
    case 'cadastro':
      html = Templates.cadastro();
      break;
    case 'home':
    default:
      html = Templates.home();
  }

  app.innerHTML = html;

  // mover foco pro conteúdo
  app.setAttribute('tabindex', '-1');
  app.focus();

  // depois de renderizar, ligar eventos específicos da página
  if (viewName === 'cadastro') {
    setupCadastroPage();
  }
  if (viewName === 'projetos') {
    setupProjetosPage();
  }
}

function setupCadastroPage() {
  const form = document.getElementById('volunteerForm');
  const savedEntries = document.getElementById('savedEntries');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // criar container de erro se não existir
    let errorContainer = form.querySelector('.form-errors');
    if (!errorContainer) {
      errorContainer = document.createElement('div');
      errorContainer.classList.add('form-errors');
      form.prepend(errorContainer);
    }

    const errors = FormValidation.validateVolunteerForm(form);

    if (errors.length) {
      FormValidation.showErrors(errorContainer, errors);
      return;
    }

    FormValidation.clearErrors(errorContainer);

    // se passou, salvar
    const data = {
      nome: form.nome.value.trim(),
      email: form.email.value.trim(),
      cpf: form.cpf.value.trim(),
      telefone: form.telefone.value.trim(),
      tipo: form.tipo.value.trim(),
      createdAt: new Date().toISOString()
    };

    Storage.save(data);

    // feedback visual
    if (typeof showToast === 'function') {
      showToast('Cadastro salvo localmente ✅');
    } else {
      alert('Cadastro salvo com sucesso!');
    }

    form.reset();
  });

  // botão "ver cadastros"
  const btnShow = document.getElementById('showLocalData');
  if (btnShow) {
    btnShow.addEventListener('click', () => {
      const all = Storage.getAll();
      if (!all.length) {
        savedEntries.innerHTML = '<p>Nenhum cadastro salvo ainda.</p>';
        return;
      }

      savedEntries.innerHTML = `
        <h3>Cadastros salvos (${all.length})</h3>
        <ul>
          ${all.map(item => `<li><strong>${item.nome}</strong> (${item.tipo}) - ${item.email}</li>`).join('')}
        </ul>
      `;
    });
  }
}

function setupProjetosPage() {
  // exemplo: abrir modal ao clicar em "Quero doar"
  const donateBtn = document.querySelector('[data-open-modal]');
  if (donateBtn) {
    donateBtn.addEventListener('click', () => {
      if (typeof openModal === 'function') {
        openModal();
      }
    });
  }
}

// delegação de eventos para links SPA
document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-link]');
  if (link) {
    e.preventDefault();
    const href = link.getAttribute('href');
    navigateTo(href);
  }
});

function navigateTo(path) {
  // normalizar
  const viewName = routes[path] || 'home';
  window.history.pushState({ view: viewName }, '', path);
  render(viewName);
}

// back/forward do navegador
window.addEventListener('popstate', (e) => {
  const view = e.state?.view || 'home';
  render(view);
});

// render inicial
document.addEventListener('DOMContentLoaded', () => {
  render('home');
});
