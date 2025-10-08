// Não usar "export default" nem import React
function PortfolioBI() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">

      {/* Header */}
      <header className="max-w-5xl mx-auto">
        <nav className="flex items-center justify-between py-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-purple-900">Paula Erdmann — Business Intelligence</h1>
          <div className="space-x-4">
            <a href="#projects" className="underline text-purple-700">Projetos</a>
            <a href="#skills" className="underline text-purple-700">Skills</a>
            <a href="#contact" className="underline text-purple-700">Contato</a>
          </div>
        </nav>
      </header>

      {/* Hero / Introdução */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center py-8">
        <div>
          <p className="text-sm uppercase text-gray-600">Analista / Engenheira de Dados & BI</p>
          <h2 className="text-4xl font-bold mt-2 text-purple-900">Transformo dados em decisões — dashboards, modelos e pipelines confiáveis.</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">Tenho experiência em construir soluções de BI end-to-end: modelagem dimensional, ETL automatizado, dashboards com storytelling e análises acionáveis para times comerciais e executivos.</p>

          <div className="flex gap-3 mt-6">
            <a href="#projects" className="px-4 py-2 rounded-2xl border shadow-sm hover:bg-purple-100">Ver projetos</a>
            <a href="/resume.pdf" download className="px-4 py-2 rounded-2xl bg-purple-700 text-white hover:bg-purple-800">Baixar CV (PDF)</a>
          </div>

          <ul className="mt-6 text-sm text-gray-600 space-y-1">
            <li>📍 Panambi, RS — Disponível para vagas remotas/híbridas</li>
            <li>💼 Atualmente: Analista de Dados / Eng. de Dados</li>
            <li>📧 paula@email.com — LinkedIn / GitHub (links abaixo)</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-purple-600">
          <h3 className="font-bold text-purple-900">Resumo em números</h3>
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

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto py-8 bg-blue-50 rounded-xl px-6">
        <h3 className="text-2xl font-bold text-blue-900">Competências técnicas</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-800">Visualização & Storytelling</h4>
            <p className="text-sm text-gray-600 mt-2">Power BI, Tableau, Looker, metodologias de storytelling com dados, design centrado no usuário.</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-500">
            <h4 className="font-semibold text-green-800">Data Engineering & ETL</h4>
            <p className="text-sm text-gray-600 mt-2">SQL avançado, Python (Pandas), Airflow, DBT, pipelines automatizados, integração de APIs.</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-yellow-500">
            <h4 className="font-semibold text-yellow-800">Armazenamento & Modelagem</h4>
            <p className="text-sm text-gray-600 mt-2">Modelagem dimensional, Data Warehouse (Redshift/Snowflake/BigQuery/Azure), otimização de custo.</p>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projects" className="max-w-5xl mx-auto py-8">
        <h3 className="text-2xl font-bold text-purple-900">Projetos selecionados</h3>
        <div className="mt-6 grid gap-6">

          {/* Projeto 1 */}
          <article className="bg-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row gap-6 items-stretch border-l-4 border-purple-600">
            <div className="md:w-2/5">
              <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">Imagem / GIF do dashboard</div>
            </div>
            <div className="md:w-3/5">
              <h4 className="font-bold text-xl text-purple-900">Sales Performance Dashboard — Rede Comercial</h4>
              <p className="text-sm text-gray-600 mt-2">Dashboard executivo que consolidou vendas, metas e forecast por regional.</p>
              <ul className="mt-3 text-sm text-gray-700 space-y-1">
                <li>📌 Tecnologias: Power BI, SQL (Postgres), Python para pré-processamento.</li>
                <li>📈 Resultado: reduziu o tempo de relatórios de 2 dias para 2 horas; forecast +18%.</li>
                <li>🔗 Link ao projeto: <a href="#" className="underline text-purple-700">GitHub / Demo</a></li>
              </ul>
            </div>
          </article>

          {/* Projeto 2 */}
          <article className="bg-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row gap-6 items-stretch border-l-4 border-green-600">
            <div className="md:w-2/5">
              <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">Imagem / GIF do modelo</div>
            </div>
            <div className="md:w-3/5">
              <h4 className="font-bold text-xl text-green-900">Churn Prediction + Dashboard de Retenção</h4>
              <p className="text-sm text-gray-600 mt-2">Modelo de churn (XGBoost) combinado com dashboards para priorização de contatos e campanhas de retenção.</p>
              <ul className="mt-3 text-sm text-gray-700 space-y-1">
                <li>📌 Tecnologias: Python, scikit-learn/xgboost, Airflow, Power BI.</li>
                <li>📈 Resultado: aumento da retenção em 12%; ROI estimado 4.2x.</li>
                <li>🔗 Link ao projeto: <a href="#" className="underline text-green-700">GitHub / Modelo</a></li>
              </ul>
            </div>
          </article>

          {/* Projeto 3 */}
          <article className="bg-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row gap-6 items-stretch border-l-4 border-yellow-600">
            <div className="md:w-2/5">
              <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">Imagem / documento</div>
            </div>
            <div className="md:w-3/5">
              <h4 className="font-bold text-xl text-yellow-900">Análise de Custo-Benefício: Ambientes de Data Warehouse</h4>
              <p className="text-sm text-gray-600 mt-2">Estudo comparativo (on-prem vs cloud) com TCO e recomendações.</p>
              <ul className="mt-3 text-sm text-gray-700 space-y-1">
                <li>📌 Tecnologias: Excel, Python, Power BI, Snowflake/Azure Synapse.</li>
                <li>📈 Resultado: redução de custos estimada em 27% no primeiro ano.</li>
                <li>🔗 Link ao projeto: <a href="#" className="underline text-yellow-700">Relatório / Slides</a></li>
              </ul>
            </div>
          </article>

        </div>
      </section>

      {/* Contato */}
      <section id="contact" className="max-w-5xl mx-auto py-8 bg-purple-50 rounded-xl px-6">
        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-900">Contato & Links</h3>
          <p className="mt-3 text-gray-700">Email: <a href="mailto:paula@email.com" className="underline text-purple-700">paula@email.com</a></p>
          <p className="mt-1 text-gray-700">LinkedIn: <a href="#" className="underline text-purple-700">linkedin.com/in/paula</a> — GitHub: <a href="#" className="underline text-purple-700">github.com/paula</a></p>
          <div className="mt-6 flex gap-3">
            <a href="#" className="px-4 py-2 rounded-2xl bg-purple-700 text-white hover:bg-purple-800">Ver GitHub</a>
            <a href="#" className="px-4 py-2 rounded-2xl bg-purple-700 text-white hover:bg-purple-800">Ver LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto text-center text-sm text-gray-500 py-8">
        © {new Date().getFullYear()} Paula Erdmann — Portfólio criado com foco em vagas de BI
      </footer>

    </main>
  );
}

// Torna o componente global para HTML
window.PortfolioBI = PortfolioBI;
