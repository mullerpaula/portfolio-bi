// Não usar "export default" nem import React
function PortfolioBI() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
      <header className="max-w-5xl mx-auto">
        <nav className="flex items-center justify-between py-6">
          <h1 className="text-2xl md:text-3xl font-extrabold">Paula Erdmann — Business Intelligence</h1>
          <div className="space-x-4">
            <a href="#projects" className="underline">Projetos</a>
            <a href="#skills" className="underline">Skills</a>
            <a href="#contact" className="underline">Contato</a>
          </div>
        </nav>
      </header>

      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center py-8">
        <div>
          <p className="text-sm uppercase text-gray-600">Analista / Engenheira de Dados & BI</p>
          <h2 className="text-4xl font-bold mt-2">Transformo dados em decisões — dashboards, modelos e pipelines confiáveis.</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">Tenho experiência em construir soluções de BI end-to-end: modelagem dimensional, ETL automatizado, dashboards com storytelling e análises acionáveis para times comerciais e executivos.</p>

          <div className="flex gap-3 mt-6">
            <a href="#projects" className="px-4 py-2 rounded-2xl border shadow-sm">Ver projetos</a>
            <a href="/resume.pdf" download className="px-4 py-2 rounded-2xl bg-black text-white">Baixar CV (PDF)</a>
          </div>

          <ul className="mt-6 text-sm text-gray-600 space-y-1">
            <li>📍 Panambi, RS — Disponível para vagas remotas/híbridas</li>
            <li>💼 Atualmente: Analista de Dados / Eng. de Dados</li>
            <li>📧 paula@email.com — LinkedIn / GitHub (links abaixo)</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="font-bold">Resumo em números</h3>
          <div className="grid grid-cols-3 gap-4 mt-4 text-center">
            <div>
              <div className="text-2xl font-extrabold">15+</div>
              <div className="text-xs text-gray-500">Dashboards entregues</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold">3M</div>
              <div className="text-xs text-gray-500">Registros processados / mês</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold">30%</div>
              <div className="text-xs text-gray-500">Melhoria média nas decisões</div>
            </div>
          </div>
        </div>
      </section>

      {/* Repita as demais seções como estão no seu arquivo original */}
    </main>
  );
}

// Torna o componente global para HTML
window.PortfolioBI = PortfolioBI;
