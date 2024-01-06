// next.config.js
module.exports = {
  async generateStaticParams() {
    // Sua lógica de exportação de mapa aqui
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      // ...
    };
  },
};
