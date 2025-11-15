import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BarChart3, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

const TCCPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "A IMPORTÂNCIA DA CONTABILIDADE GERENCIAL NA TOMADA DE DECISÕES EM PEQUENAS E MÉDIAS EMPRESAS",
      subtitle: "Um estudo sobre o setor de varejo na cidade de São Paulo",
      content: (
        <div className="text-center space-y-6">
          <div className="text-5xl font-bold text-blue-600 mb-4">TCC</div>
          <p className="text-2xl font-semibold text-gray-800">Curso de Ciências Contábeis</p>
          <p className="text-xl text-gray-600 mt-8">Autor: [Seu Nome]</p>
          <p className="text-xl text-gray-600">Orientador: Prof. Dr. [Nome do Orientador]</p>
          <p className="text-lg text-gray-500 mt-8">São Paulo, 2024</p>
        </div>
      )
    },
    {
      title: "PROBLEMA DE PESQUISA",
      icon: <AlertCircle className="w-12 h-12 text-orange-500" />,
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <p className="text-xl font-semibold text-gray-800 mb-4">
              Como a contabilidade gerencial pode contribuir para melhorar o processo de tomada de decisões nas pequenas e médias empresas do setor varejista?
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-blue-800 mb-2">Contexto</p>
              <p className="text-gray-700">Muitas PMEs falham nos primeiros 5 anos por falta de controle gerencial adequado</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-blue-800 mb-2">Relevância</p>
              <p className="text-gray-700">PMEs representam 99% das empresas brasileiras e geram 52% dos empregos</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "OBJETIVOS",
      icon: <CheckCircle className="w-12 h-12 text-green-500" />,
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-green-800 mb-3">Objetivo Geral</h3>
            <p className="text-gray-800">
              Analisar a aplicação das ferramentas de contabilidade gerencial nas pequenas e médias empresas do varejo e sua influência no processo decisório.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Objetivos Específicos</h3>
            <ul className="space-y-2 text-gray-800">
              <li>• Identificar as principais ferramentas gerenciais utilizadas pelas PMEs</li>
              <li>• Avaliar o nível de conhecimento dos gestores sobre contabilidade gerencial</li>
              <li>• Analisar a relação entre uso de ferramentas gerenciais e performance financeira</li>
              <li>• Propor um modelo simplificado de gestão contábil para PMEs</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "JUSTIFICATIVA",
      icon: <TrendingUp className="w-12 h-12 text-purple-500" />,
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="font-bold text-purple-800 mb-2">Relevância Acadêmica</h3>
            <p className="text-gray-700">Contribuir para literatura sobre gestão contábil em PMEs brasileiras, área ainda pouco explorada</p>
          </div>
          <div className="bg-indigo-50 p-5 rounded-lg">
            <h3 className="font-bold text-indigo-800 mb-2">Relevância Prática</h3>
            <p className="text-gray-700">Auxiliar gestores de PMEs a implementarem controles gerenciais eficientes e acessíveis</p>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">Relevância Social</h3>
            <p className="text-gray-700">Fortalecer PMEs significa gerar mais empregos e desenvolvimento econômico local</p>
          </div>
          <div className="bg-teal-50 p-5 rounded-lg">
            <h3 className="font-bold text-teal-800 mb-2">Viabilidade</h3>
            <p className="text-gray-700">Acesso facilitado a empresas do setor varejista na região de São Paulo</p>
          </div>
        </div>
      )
    },
    {
      title: "METODOLOGIA",
      icon: <BarChart3 className="w-12 h-12 text-cyan-500" />,
      content: (
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
              <h3 className="font-bold text-cyan-800 mb-2">Tipo de Pesquisa</h3>
              <p className="text-gray-700">Exploratória-descritiva com abordagem qualiquantitativa</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-800 mb-2">Amostra</h3>
              <p className="text-gray-700">30 PMEs do varejo em São Paulo (5-100 funcionários)</p>
            </div>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-3">Instrumentos de Coleta</h3>
            <div className="space-y-2">
              <p className="text-gray-700">📋 Questionário estruturado (20 questões)</p>
              <p className="text-gray-700">💬 Entrevistas semiestruturadas com gestores</p>
              <p className="text-gray-700">📊 Análise documental (demonstrativos financeiros)</p>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 mb-2">Análise de Dados</h3>
            <p className="text-gray-700">Estatística descritiva e análise de conteúdo temática</p>
          </div>
        </div>
      )
    },
    {
      title: "FUNDAMENTAÇÃO TEÓRICA",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-2">1. Contabilidade Gerencial</h3>
            <p className="text-gray-700 text-sm">Conceitos, evolução e diferenças da contabilidade financeira</p>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-5 rounded-lg">
            <h3 className="font-bold text-purple-900 mb-2">2. Ferramentas Gerenciais</h3>
            <p className="text-gray-700 text-sm">Análise de custos, ponto de equilíbrio, fluxo de caixa, orçamento empresarial, indicadores de desempenho (KPIs)</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-5 rounded-lg">
            <h3 className="font-bold text-green-900 mb-2">3. Processo Decisório</h3>
            <p className="text-gray-700 text-sm">Teorias sobre tomada de decisão e papel da informação contábil</p>
          </div>
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-5 rounded-lg">
            <h3 className="font-bold text-orange-900 mb-2">4. PMEs no Brasil</h3>
            <p className="text-gray-700 text-sm">Características, desafios e importância econômica</p>
          </div>
        </div>
      )
    },
    {
      title: "RESULTADOS ESPERADOS",
      icon: <TrendingUp className="w-12 h-12 text-green-500" />,
      content: (
        <div className="space-y-5">
          <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
            <h3 className="font-bold text-green-800 mb-3">Identificação do Cenário Atual</h3>
            <p className="text-gray-700">Mapeamento das práticas contábeis gerenciais nas PMEs pesquisadas</p>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-800 mb-3">Correlações</h3>
            <p className="text-gray-700">Relação entre uso de ferramentas gerenciais e indicadores de performance (lucratividade, crescimento, inadimplência)</p>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-bold text-purple-800 mb-3">Modelo Proposto</h3>
            <p className="text-gray-700">Framework simplificado de contabilidade gerencial adaptado à realidade das PMEs</p>
          </div>
          <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
            <h3 className="font-bold text-orange-800 mb-3">Recomendações</h3>
            <p className="text-gray-700">Diretrizes práticas para implementação de controles gerenciais acessíveis</p>
          </div>
        </div>
      )
    },
    {
      title: "CRONOGRAMA",
      content: (
        <div className="space-y-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border p-3 text-left">Atividade</th>
                <th className="border p-3 text-center">Mar-Abr</th>
                <th className="border p-3 text-center">Mai-Jun</th>
                <th className="border p-3 text-center">Jul-Ago</th>
                <th className="border p-3 text-center">Set-Out</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="bg-gray-50">
                <td className="border p-3">Revisão bibliográfica</td>
                <td className="border p-3 text-center bg-green-200">✓</td>
                <td className="border p-3 text-center bg-green-200">✓</td>
                <td className="border p-3 text-center"></td>
                <td className="border p-3 text-center"></td>
              </tr>
              <tr>
                <td className="border p-3">Elaboração instrumentos</td>
                <td className="border p-3 text-center"></td>
                <td className="border p-3 text-center bg-green-200">✓</td>
                <td className="border p-3 text-center"></td>
                <td className="border p-3 text-center"></td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3">Coleta de dados</td>
                <td className="border p-3 text-center"></td>
                <td className="border p-3 text-center"></td>
                <td className="border p-3 text-center bg-green-200">✓</td>
                <td className="border p-3 text-center"></td>
              </tr>
              <tr>
                <td className="border p-3">Análise dos dados</td>
                <td className="border p-3 text-center"></td>
                <td className="border p-3 text-center"></td>
                <td className="border p-3 text-center bg-green-200">✓</td>
                <td className="border p-3 text-center bg-green-200">✓</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3">Redação final</td>
                <td className="border p-3 text-center"></td>
                <td className="border p-3 text-center"></td>
                <td className="border p-3 text-center"></td>
                <td className="border p-3 text-center bg-green-200">✓</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">Apresentação TCC</td>
                <td className="border p-3 text-center"></td>
                <td className="border p-3 text-center"></td>
                <td className="border p-3 text-center"></td>
                <td className="border p-3 text-center bg-blue-200">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      title: "REFERÊNCIAS PRINCIPAIS",
      content: (
        <div className="space-y-3 text-sm">
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-gray-800">ATKINSON, A. A. et al. <strong>Contabilidade Gerencial</strong>. 4. ed. São Paulo: Atlas, 2015.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-gray-800">GARRISON, R. H.; NOREEN, E. W. <strong>Contabilidade Gerencial</strong>. 14. ed. Porto Alegre: AMGH, 2013.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-gray-800">PADOVEZE, C. L. <strong>Contabilidade Gerencial: um enfoque em sistema de informação contábil</strong>. 8. ed. São Paulo: Atlas, 2017.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-gray-800">SEBRAE. <strong>Sobrevivência das empresas no Brasil</strong>. Brasília: SEBRAE, 2020.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-gray-800">IUDÍCIBUS, S. <strong>Contabilidade Gerencial</strong>. 6. ed. São Paulo: Atlas, 2019.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-gray-800">WARREN, C. S.; REEVE, J. M.; DUCHAC, J. <strong>Contabilidade Gerencial</strong>. 3. ed. São Paulo: Cengage Learning, 2018.</p>
          </div>
        </div>
      )
    },
    {
      title: "CONSIDERAÇÕES FINAIS",
      content: (
        <div className="text-center space-y-8">
          <div className="text-6xl">🎯</div>
          <div className="space-y-4">
            <p className="text-xl font-semibold text-gray-800">
              Este estudo pretende contribuir para:
            </p>
            <div className="grid grid-cols-1 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700">✓ Maior compreensão sobre gestão contábil em PMEs</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-gray-700">✓ Ofertar ferramentas práticas e acessíveis</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-gray-700">✓ Fortalecer a sustentabilidade das pequenas empresas</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-2xl font-bold text-blue-600">
            Obrigado pela atenção!
          </div>
          <p className="text-gray-600">Perguntas?</p>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {currentSlideData.icon}
              <h1 className="text-2xl font-bold">{currentSlideData.title}</h1>
            </div>
            <div className="text-sm bg-white/20 px-4 py-2 rounded-full">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
          {currentSlideData.subtitle && (
            <p className="text-blue-100 mt-2 text-lg">{currentSlideData.subtitle}</p>
          )}
        </div>

        {/* Content */}
        <div className="p-8 min-h-[500px] flex items-center">
          <div className="w-full">
            {currentSlideData.content}
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-gray-100 p-6 flex justify-between items-center">
          <button
            onClick={prevSlide}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-5 h-5" />
            Anterior
          </button>
          
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === slides.length - 1}
          >
            Próximo
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TCCPresentation;