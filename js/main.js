// js/masks.js

function maskCPF(value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function maskPhone(value) {
  value = value.replace(/\D/g, '');
  if (value.length > 10) {
    // (11) 98888-7777
    return value
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .substring(0, 15);
  } else {
    // (11) 8888-7777
    return value
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .substring(0, 14);
  }
}

function maskCEP(value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .substring(0, 9);
}

document.addEventListener('DOMContentLoaded', function () {
  const cpf = document.getElementById('cpf');
  const telefone = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  if (cpf) {
    cpf.addEventListener('input', function (e) {
      e.target.value = maskCPF(e.target.value);
      e.target.setCustomValidity(e.target.value.length === 14 ? '' : 'CPF incompleto');
    });
  }

  if (telefone) {
    telefone.addEventListener('input', function (e) {
      e.target.value = maskPhone(e.target.value);
    });
  }

  if (cep) {
    cep.addEventListener('input', function (e) {
      e.target.value = maskCEP(e.target.value);
    });
  }
});


// menu mobile
const nav = document.getElementById('mainNav');
const toggle = document.getElementById('navToggle');

if (toggle) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
  });
}

// toast
function showToast(message = 'Cadastro enviado com sucesso!') {
  const toast = document.querySelector('.toast');
  if (!toast) return;
  toast.textContent = message;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
}

// modal
const modalBackdrop = document.querySelector('.modal-backdrop');
function openModal() {
  if (modalBackdrop) modalBackdrop.style.display = 'flex';
}
function closeModal() {
  if (modalBackdrop) modalBackdrop.style.display = 'none';
}
