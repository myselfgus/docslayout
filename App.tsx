import React from 'react';
import { reportData } from './data';
import { 
  Display,
  Mono,
  Body,
  Section,
  SubSection,
  MetricsGrid, 
  formatCategoryTitle,
  DataField
} from './components/DocumentComponents';
import { Printer } from 'lucide-react';

// --- ATOMIC LAYOUTS ---

const Header = ({ patientId, date }: { patientId: string; date: string }) => (
  <header className="border-b border-border pb-4 mb-10 flex justify-between items-end print:mb-8">
    <div className="flex flex-col">
      <h1 className="text-xl leading-none select-none">
        <Display.Brand>VOITHER</Display.Brand><span className="font-display font-light text-text-tertiary">HealthOS</span>
      </h1>
    </div>
    <div className="text-right">
      <Mono.Meta>{patientId} • {date}</Mono.Meta>
    </div>
  </header>
);

const Footer = ({ doctor, crm }: { doctor: string; crm: string }) => (
  <footer className="mt-auto pt-16 pb-0 print-break-inside-avoid">
    <div className="flex justify-between items-end">
      <div className="flex flex-col">
          <div className="border-t-2 border-text-primary w-64 mb-6"></div> 
          <div className="font-display font-bold text-xl text-text-primary leading-none uppercase tracking-wide mb-1">{doctor}</div>
          <div className="font-mono text-sm font-light text-text-secondary">{crm}</div>
          <div className="font-sans font-thin text-[10px] text-text-tertiary mt-1 uppercase tracking-widest">Médico Psiquiatra</div>
      </div>
      
      <div className="text-right opacity-60">
          <p className="font-mono text-[9px] text-text-quaternary uppercase tracking-[0.2em] leading-relaxed">
            Voither HealthOS<br/>
            ASL-V3 • {new Date().getFullYear()}
          </p>
      </div>
    </div>
  </footer>
);

const CoverPage: React.FC<{ data: typeof reportData }> = ({ data }) => (
  <div className="w-full h-[297mm] flex flex-col justify-between p-[20mm] bg-surface print:p-0 print-break-after relative overflow-hidden">
     {/* Decorative Element */}
     <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-surface-subtle rounded-full blur-3xl -z-10 opacity-60 print:hidden"></div>

     {/* Top */}
     <header className="pt-8">
        <h1 className="text-5xl mb-2 leading-none">
          <Display.Brand>VOITHER</Display.Brand><span className="font-display font-light text-text-quaternary">HealthOS</span>
        </h1>
        <div className="h-1.5 w-32 bg-text-primary mt-4"></div>
     </header>

     {/* Middle */}
     <div className="flex flex-col justify-center flex-grow pl-4 border-l border-border ml-2 my-12">
        <Mono.Label className="mb-6! text-text-secondary tracking-[0.4em]">Relatório Clínico Confidencial</Mono.Label>
        <Display.H1 className="mb-8">ANÁLISE<br/>SISTÊMICA<br/>LINGUÍSTICA</Display.H1>
        
        <div className="flex items-center gap-4">
           <Mono.Tag>ASL-V3</Mono.Tag>
           <span className="font-mono text-sm text-text-tertiary font-light">
             Processamento Neuro-Linguístico
           </span>
        </div>
     </div>

     {/* Bottom */}
     <div className="pb-8 pt-8 border-t border-border grid grid-cols-2 gap-12">
        <div>
           <Mono.Label>Paciente</Mono.Label>
           <span className="block font-display text-3xl font-medium text-text-primary mb-1">{data.metadata.paciente_id}</span>
           <span className="block font-sans font-light text-sm text-text-secondary">{data.metadata.contexto}</span>
        </div>
        <div>
           <Mono.Label>Médico Responsável</Mono.Label>
           <span className="block font-display text-2xl font-medium text-text-primary mb-1">{data.metadata.medico_responsavel}</span>
           <span className="block font-sans font-light text-sm text-text-secondary">{data.metadata.crm}</span>
        </div>
        
        <div className="col-span-2 flex justify-between items-end mt-4">
           <Mono.Meta>
             {new Date(data.metadata.data_analise).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
           </Mono.Meta>
           <Mono.Meta>Voither HealthOS Ecosystem</Mono.Meta>
        </div>
     </div>
  </div>
);

// --- MAIN APP ---

const App: React.FC = () => {
  const { 
    metadata, 
    categorias_analise, 
    sintese_interpretativa,
    observacoes_metodologicas
  } = reportData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-surface-muted py-8 print:bg-white print:py-0 print:m-0">
      
      {/* Print Control */}
      <div className="fixed bottom-8 right-8 z-50 print:hidden">
        <button
          onClick={handlePrint}
          className="flex items-center gap-3 bg-text-primary text-surface px-8 py-4 rounded-full shadow-2xl hover:bg-black hover:scale-105 transition-all group"
        >
          <Printer size={20} className="group-hover:animate-pulse" />
          <span className="font-display font-bold text-sm tracking-wide">IMPRIMIR</span>
        </button>
      </div>

      {/* A4 Container */}
      <main className="max-w-[210mm] mx-auto bg-surface shadow-2xl print:shadow-none print:max-w-none">
        
        <CoverPage data={reportData} />

        {/* Report Content */}
        <div className="p-[15mm] min-h-[297mm] flex flex-col print:p-0 print:print-padding">
          
          <Header patientId={metadata.paciente_id} date={metadata.data_analise} />

          {/* Metadata Dashboard */}
          <div className="grid grid-cols-4 gap-8 mb-16 p-6 bg-surface-subtle border border-border rounded-sm print:p-0 print:bg-transparent print:border-none print:mb-12">
            <div className="col-span-1">
               <DataField label="Paciente" value={metadata.paciente_id} />
            </div>
            <div className="col-span-2">
               <DataField label="Contexto" value={metadata.contexto} />
            </div>
            <div className="col-span-1">
               <DataField 
                 label="Volume de Dados" 
                 value={
                   <span className="font-mono text-xs">
                     {metadata.total_palavras.toLocaleString()} palavras<br/>
                     {metadata.total_turnos} turnos
                   </span>
                 } 
               />
            </div>
          </div>

          {/* Analysis Categories */}
          <div className="space-y-16">
            {Object.entries(categorias_analise).map(([key, category]) => (
              <Section key={key} title={formatCategoryTitle(key)}>
                <div className="grid grid-cols-12 gap-10">
                  
                  {/* Qualitative Analysis */}
                  <div className="col-span-12 md:col-span-7 print:col-span-7">
                    <SubSection title="Análise Contextual">
                      <Body.Paragraph>{category.analise_contextual}</Body.Paragraph>
                    </SubSection>
                  </div>

                  {/* Quantitative Metrics */}
                  <div className="col-span-12 md:col-span-5 print:col-span-5 bg-surface-subtle p-6 rounded-sm print:bg-transparent print:p-0 print:pl-8 print:border-l print:border-border">
                    <SubSection title="Métricas Quantitativas">
                      <MetricsGrid data={category.metricas_quantitativas} />
                    </SubSection>
                  </div>
                </div>
              </Section>
            ))}
          </div>

          {/* Synthesis Section */}
          <div className="print-break-before mt-12">
            <Section title="Síntese Interpretativa">
              
              {/* Highlight Quote */}
              <div className="bg-surface-subtle p-10 border-l-4 border-text-primary mb-12 print:bg-transparent print:p-0 print:pl-6 print:mb-10">
                <p className="font-sans text-xl font-light text-text-primary leading-loose italic">
                  "{sintese_interpretativa.perfil_linguistico_geral}"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 print:grid-cols-2">
                
                {/* Hypothesis */}
                <div>
                    <h3 className="font-display font-bold text-lg text-text-primary mb-8 flex items-center gap-3 border-b border-border pb-3">
                      <span className="bg-text-primary text-surface w-6 h-6 flex items-center justify-center text-xs font-mono rounded-full">H</span>
                      Hipóteses Psicolinguísticas
                    </h3>
                    <div className="space-y-4">
                      {sintese_interpretativa.hipoteses_psicolinguisticas.map((item, i) => (
                        <Body.ListItem key={i} index={i}>{item}</Body.ListItem>
                      ))}
                    </div>
                </div>

                {/* Contraindications */}
                <div>
                    <h3 className="font-display font-bold text-lg text-text-primary mb-8 flex items-center gap-3 border-b border-border pb-3">
                      <span className="bg-text-primary text-surface w-6 h-6 flex items-center justify-center text-xs font-mono rounded-full">R</span>
                      Risco de Psicose
                    </h3>
                    <div className="space-y-3">
                      {sintese_interpretativa.contraindicacoes_linguisticas_para_psicose.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-surface-subtle rounded-sm border border-transparent hover:border-border transition-colors print:bg-transparent print:p-0">
                          <div className="mt-2 w-2 h-2 bg-text-primary rounded-full shrink-0"></div>
                          <span className="font-sans font-medium text-sm text-text-primary leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                </div>
              </div>
            </Section>
          </div>

          {/* Methodology */}
          <div className="mt-8">
            <Section title="Observações Metodológicas">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <SubSection title="Limitações">
                    {observacoes_metodologicas.limitacoes.map((item, i) => (
                      <Body.Paragraph key={i}>{item}</Body.Paragraph>
                    ))}
                  </SubSection>
                </div>
                <div>
                  <SubSection title="Pontos Fortes da Análise">
                    {observacoes_metodologicas.pontos_fortes_analise.map((item, i) => (
                      <Body.Paragraph key={i}>{item}</Body.Paragraph>
                    ))}
                  </SubSection>
                </div>
              </div>
            </Section>
          </div>

          <Footer doctor={metadata.medico_responsavel} crm={metadata.crm} />
        </div>

      </main>
    </div>
  );
};

export default App;