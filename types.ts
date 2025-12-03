export interface Metadata {
  paciente_id: string;
  contexto: string;
  data_analise: string;
  total_turnos: number;
  total_palavras: number;
  duracao_estimada_consulta: string;
  analista: string;
  medico_responsavel: string;
  crm: string;
}

export interface MetricValue {
  [key: string]: string | number | string[] | object;
}

export interface AnalysisCategory {
  metricas_quantitativas: {
    [key: string]: string | number | string[] | object;
  };
  exemplos_textuais: string[];
  analise_contextual: string;
}

export interface InterpretativeSynthesis {
  perfil_linguistico_geral: string;
  achados_clinicamente_relevantes: string[];
  hipoteses_psicolinguisticas: string[];
  contraindicacoes_linguisticas_para_psicose: string[];
  recomendacoes_clinicas: string[];
}

export interface MethodologicalObservations {
  limitacoes: string[];
  pontos_fortes_analise: string[];
}

export interface ReportData {
  metadata: Metadata;
  categorias_analise: {
    [key: string]: AnalysisCategory;
  };
  sintese_interpretativa: InterpretativeSynthesis;
  observacoes_metodologicas: MethodologicalObservations;
}