const chips = document.querySelectorAll('.chip');

chips.forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.filter;

    document.querySelectorAll('.producto').forEach(p => {
      p.style.display = (cat === 'all' || p.dataset.cat === cat) ? '' : 'none';
    });

    chips.forEach(c => c.classList.remove('active'));
    btn.classList.add('active');

    const recomendacion = document.getElementById('recomendacion');
    switch (cat) {
      case 'tortas-cuadradas':
        recomendacion.textContent = "Si te gustan las tortas cuadradas, prueba la Torta de Chocolate con Avellanas 🍫.";
        break;
      case 'tortas-circulares':
        recomendacion.textContent = "Las tortas circulares son ideales para celebraciones. Te recomendamos la Torta de Manjar 🎉.";
        break;
      case 'postres-individuales':
        recomendacion.textContent = "¿Algo ligero? Prueba el Tiramisú Clásico o el Mousse de Chocolate 🍮.";
        break;
      case 'sin-azucar':
        recomendacion.textContent = "Para una opción saludable, te sugerimos el Cheesecake Sin Azúcar 🍰.";
        break;
      case 'pasteleria-tradicional':
        recomendacion.textContent = "Si disfrutas lo clásico, prueba la Tarta de Santiago o la Empanada de Manzana 🥧.";
        break;
      case 'sin-gluten':
        recomendacion.textContent = "Te recomendamos el Brownie Sin Gluten o nuestro Pan artesanal libre de gluten 🌾🚫.";
        break;
      case 'vegana':
        recomendacion.textContent = "¿Prefieres opciones veganas? Te encantará la Torta Vegana de Chocolate o las Galletas de Avena 🌱.";
        break;
      case 'tortas-especiales':
        recomendacion.textContent = "Para ocasiones únicas, prueba la Torta Especial de Cumpleaños o la de Boda 🎂.";
        break;
      default:
        recomendacion.textContent = "Explora nuestro catálogo y te daremos sugerencias según lo que más te guste. 🍰";
    }
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
