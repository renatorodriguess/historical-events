// next.config.js
module.exports = {
  async exportPathMap() {
    // Sua lógica de exportação de mapa aqui
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      // ...
    };
  },
};
