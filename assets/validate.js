(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  if (toggle && menu){
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('open');
    });
  }

  const forms = document.querySelectorAll('form[novalidate]');
  forms.forEach(form => {
    const fields = form.querySelectorAll('input, select, textarea');

    const showError = (field, message) => {
      const container = field.closest('.field');
      const errorEl = container ? container.querySelector('.error') : null;
      if (errorEl){ errorEl.textContent = message || ''; }
      field.setAttribute('aria-invalid', message ? 'true' : 'false');
    };

    const messages = {
      valueMissing: 'Este campo es obligatorio.',
      typeMismatch: 'El formato no es válido.',
      tooShort: 'El texto es demasiado corto.',
      patternMismatch: 'El formato no coincide (revisa el ejemplo).'
    };

    const validateField = (field) => {
      if (field.disabled || field.type === 'hidden') return true;
      const v = field.validity;
      if (v.valid){ showError(field, ''); return true; }
      if (v.valueMissing) return showError(field, messages.valueMissing), false;
      if (v.typeMismatch) return showError(field, messages.typeMismatch), false;
      if (v.tooShort) return showError(field, messages.tooShort), false;
      if (v.patternMismatch) return showError(field, messages.patternMismatch), false;
      return showError(field, 'Revisa este campo.'), false;
    };

    fields.forEach(field => {
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => validateField(field));
    });

    form.addEventListener('submit', (e) => {
      let ok = true;
      fields.forEach(f => { if (!validateField(f)) ok = false; });
      if (!ok){ e.preventDefault(); }
    });
  });
})();