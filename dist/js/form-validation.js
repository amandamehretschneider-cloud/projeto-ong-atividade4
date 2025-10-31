// js/form-validation.js

const FormValidation = {
  validateVolunteerForm(formEl) {
    const nome = formEl.querySelector('#nome');
    const email = formEl.querySelector('#email');
    const cpf = formEl.querySelector('#cpf');
    const telefone = formEl.querySelector('#telefone');
    const tipo = formEl.querySelector('#tipo');

    const errors = [];

    if (!nome.value.trim() || nome.value.trim().length < 3) {
      errors.push('Nome deve ter ao menos 3 caracteres.');
    }
    if (!email.value.trim() || !email.value.includes('@')) {
      errors.push('Informe um e-mail válido.');
    }
    if (!cpf.value.trim()) {
      errors.push('CPF é obrigatório.');
    }
    if (!telefone.value.trim()) {
      errors.push('Telefone é obrigatório.');
    }
    if (!tipo.value.trim()) {
      errors.push('Selecione o tipo de cadastro.');
    }

    return errors;
  },

  showErrors(container, errors) {
    container.innerHTML = `
      <div class="alert alert-danger">
        <strong>Há problemas no formulário:</strong>
        <ul>
          ${errors.map(err => `<li>${err}</li>`).join('')}
        </ul>
      </div>
    `;
  },

  clearErrors(container) {
    container.innerHTML = '';
  }
};
