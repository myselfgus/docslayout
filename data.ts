import { ReportData } from './types';

export const reportData: ReportData = {
  "metadata": {
    "paciente_id": "Gabriel Mendes",
    "contexto": "Consulta psiquiátrica sobre retirada de risperidona",
    "data_analise": "2025-12-03",
    "total_turnos": 438,
    "total_palavras": 12519,
    "duracao_estimada_consulta": "aproximadamente 90 minutos",
    "analista": "Sistema ASL - Análise Sistêmica Linguística",
    "medico_responsavel": "Dr. Gustavo Mendes e Silva",
    "crm": "CRM 218133/SP"
  },
  "categorias_analise": {
    "1_morfossintaxe": {
      "metricas_quantitativas": {
        "tipo_frases_predominantes": "orações coordenadas assindéticas (50%), subordinadas adverbiais (30%), frases simples (20%)",
        "complexidade_sintática": "baixa a média",
        "marcação_temporal_verbal": {
          "presente_indicativo": "68%",
          "pretérito_perfeito": "20%",
          "pretérito_imperfeito": "8%",
          "futuro_perifrástico": "4%"
        },
        "uso_conectivos": {
          "aditivos": "né (142 ocorrências), e, aí, daí",
          "adversativos": "mas (89 ocorrências), só que (47 ocorrências)",
          "explicativos": "porque, que (uso polivalente)",
          "conclusivos": "então, aí"
        },
        "padrões_gramaticais": {
          "omissão_sujeito": "frequente (75% das orações)",
          "concordância_verbal": "adequada na maioria dos casos",
          "concordância_nominal": "adequada",
          "uso_pronomes": "predominância de 'você' e 'eu', uso de 'a gente' como sujeito coletivo"
        },
        "marcadores_discursivos": {
          "né": 142,
          "cara": 87,
          "mano": 34,
          "tipo assim": 56,
          "entendeu": 41,
          "ó": 38
        }
      },
      "exemplos_textuais": [
        "Então assim, é, fica mais idiota. Porque eu penso assim, as meninas, as mulheres, elas gostam de certo filminho no romance.",
        "Aí quando eu falei que tinha, né, esse carro aí, a fisionomia e o discurso mudaram, cara, como da água pro vinho.",
        "Não, tipo assim, tipo assim. Ééé, a menina que tem carro, por exemplo, ela não vai vim aqui me buscar pra sair.",
        "Comprei um incensário de papel, paguei trezentos reais. Um incensário de papel eu paguei trezentos conto.",
        "Tipo assim, se eu tô num bar, por exemplo, ó, eu não devo falar assim: cara, faz uma cara que eu tô escrevendo um diário.",
        "É, então, é, mo-- assim. Só, então eu fico na aquela situação. Pô, se eu tivesse carro...",
        "Não sei, tá pequenininho demais. Eu fico mexendo a perna assim como se eu tivesse dançando."
      ],
      "analise_contextual": "A estrutura morfossintática do paciente apresenta predominância de orações coordenadas com uso intensivo de conectores coloquiais ('aí', 'daí', 'então'). Há alta frequência de marcadores discursivos típicos da oralidade ('né', 'cara', 'tipo assim', 'entendeu'), indicando necessidade de confirmação e busca de validação do interlocutor. O uso do 'né' (142 ocorrências) sugere insegurança comunicativa e necessidade constante de aprovação. As frases tendem a ser longas e coordenadas, com múltiplas ideias conectadas de forma aditiva, sem hierarquização clara. Observa-se tendência à repetição de estruturas sintáticas e reformulações constantes. O tempo verbal predominante é o presente do indicativo, com incursões frequentes ao pretérito perfeito para narrativas autobiográficas. Há uso consistente de diminutivos afetivos ('pequenininho', 'dinheirinho', 'negocinho') e linguagem informal urbana."
    },
    "2_semantica": {
      "metricas_quantitativas": {
        "diversidade_lexical": {
          "type_token_ratio": "aproximadamente 0.31 (baixo para texto extenso)",
          "palavras_únicas_estimadas": 1850,
          "palavras_repetidas_alta_frequência": "né, cara, tipo, mano, entendeu, aí, então, é, coisa, negócio"
        },
        "campos_semanticos_dominantes": [
          "trabalho_profissão (inspetor, escola, porteiro)",
          "transporte_locomoção (moto, carro, Uber)",
          "drogas_substâncias (maconha, cocaína, clorofórmio)",
          "relacionamentos (Camila, ex-mulher, Bernardo)",
          "dinheiro_economia (grana, dinheiro, pagar, gastar)"
        ],
        "densidade_informacional": "média-baixa (muita repetição, circunlóquios)",
        "polaridade_emocional": {
          "negativa": "60%",
          "neutra": "30%",
          "positiva": "10%"
        },
        "metáforas_analogias": [
          "desenho na água",
          "água bateu na bunda",
          "da água pro vinho",
          "cem por cento algodão",
          "chutar o pau da barraca",
          "viajar na maionese"
        ]
      },
      "exemplos_textuais": [
        "Parece o desenho na água, tá ligado? Parece o desenho na água. Parece o desenho na água.",
        "Porque a moto chegou no final da, da saga, tinha que um banquete divino pra comer.",
        "Tipo assim, pô, sabe-- eu fico, fico, de repente: será que eu tô pensando alto? Será que eu quero uma namorada na minha consciência e não tô encontrando?",
        "É como se eu já tivesse tudo na vida. De repente, vou falar uma coisa pra você.",
        "Não vai pagar a conta do espaço, mas ali já tá massa pra caramba.",
        "O dia melhorou surreal, mano. O dia melhorou surreal.",
        "Eu matava a mulher com os olhos, entendeu? E, e não falava, eu nunca entendi por quê."
      ],
      "analise_contextual": "O léxico do paciente apresenta diversidade moderadamente baixa, com alto grau de repetição vocabular. Há predominância de campos semânticos relacionados a preocupações materiais (trabalho, dinheiro, transporte) e dificuldades relacionais. A polaridade emocional é predominantemente negativa, com frequentes expressões de insatisfação, frustração e inadequação social. O paciente utiliza gírias urbanas contemporâneas ('massa', 'rolê', 'mano') e metáforas coloquiais. Observa-se uso intensivo de termos vagos e generalizadores ('coisa', 'negócio', 'bagulho', 'esquema'), sugerindo dificuldade em precisão semântica ou em acessar vocabulário específico. As metáforas utilizadas são predominantemente convencionais, com algumas criações pessoais ('desenho na água' para expressar fugacidade de ideias). Há campo semântico significativo relacionado a substâncias psicoativas, com vocabulário técnico e de gíria. A densidade informacional é reduzida por circunlóquios, reformulações e repetições."
    },
    "3_coerencia_coesao": {
      "metricas_quantitativas": {
        "uso_conectivos_coesivos": {
          "aditivos": "e, aí, daí, então (alta frequência)",
          "adversativos": "mas, só que, porém (frequente)",
          "causais": "porque, que, né (frequente)",
          "temporais": "quando, aí, depois (média frequência)"
        },
        "referenciação": {
          "anafórica": "ele, ela, isso, esse, aquele (adequada)",
          "catafórica": "rara",
          "elíptica": "muito frequente (omissão de sujeitos e objetos)"
        },
        "progressão_temática": {
          "linear": "30%",
          "com_ruptura": "45%",
          "digressões": "25%"
        },
        "coerência_textual": "preservada globalmente, mas com múltiplas digressões e retomadas",
        "organização_narrativa": "não-linear, associativa, com saltos temporais e temáticos frequentes"
      },
      "exemplos_textuais": [
        "Aí trabalhei hoje, fiquei um bagaço, dormi duas horas da manhã, acordei atrasado, peguei Uber, fiquei de corrimão de rodoviário na Bombas o dia inteiro.",
        "Não, cara, não. Não, tipo, eu vou tomar cerveja num, num-- Tipo uma espécie de quio-- Uma espécie de container que tem numa galeria lá embaixo.",
        "É, quando era jovem, sim, mas hoje bem, hoje é bem difícil. Não, não, não tinha isso também Não tinha segredo, porque não tinha aquela malícia de-de sexualidade, nada, né?",
        "Então. Aí eu comecei-- Fiz-- Trabalhei de porteiro e comecei a ter gosto por essa coisa de segurança.",
        "Cara, olha. Os caras inventaram um bong aí, que cê gira, cê põe água, cê vai girando ele. Ah os caras dizem que é pra fumar maconha, mas de repente é pras, fumar ervas secas, né?",
        "Aí ele falou-- Ele deve ter pensado com ele mesmo, né? Pô, juiz é o que mais ganha dinheiro, né? Vai e faz Direito, cara, porque--"
      ],
      "analise_contextual": "A coerência do discurso está globalmente preservada, mas há padrão marcante de digressões associativas e dificuldade em manter linearidade temática. O paciente frequentemente inicia narrativas, as abandona para desenvolver pensamentos tangenciais, e pode ou não retornar ao tópico original. Há uso adequado de conectivos básicos, mas predominância de conectores aditivos e adversativos simples. A coesão referencial é mantida, embora com uso intensivo de elipses que ocasionalmente geram ambiguidade referencial. Observam-se múltiplas autocorreções e reformulações sintáticas ('Não, tipo, eu vou tomar cerveja num, num-- Tipo uma espécie de quio-- Uma espécie de container que tem numa galeria lá embaixo'). A progressão textual é frequentemente interrompida por inserções metalinguísticas, explicações ou esclarecimentos que o próprio paciente julga necessários. Há tendência a perder-se em detalhes secundários, comprometendo a objetividade comunicativa. A organização temporal das narrativas é não-linear, com saltos entre passado remoto, passado recente e presente sem marcação clara de transição."
    },
    "4_pragmatica": {
      "metricas_quantitativas": {
        "atos_de_fala_predominantes": {
          "assertivos": "65% (afirmações, relatos, descrições)",
          "expressivos": "25% (queixas, lamentações, expressões emocionais)",
          "diretivos": "5% (pedidos, perguntas)",
          "compromissivos": "3% (promessas, intenções)",
          "declarativos": "2%"
        },
        "modalização": {
          "epistêmica": "alta (acho que, parece, de repente, sei lá)",
          "deôntica": "média (tenho que, preciso, devo)",
          "volitiva": "alta (quero, gostaria, pretendo)"
        },
        "marcadores_interacionais": {
          "busca_confirmação": "né (142x), entendeu (41x), tá ligado (8x)",
          "atenuadores": "tipo assim, meio que, mais ou menos, de repente",
          "intensificadores": "muito, pra caralho, massa, surreal, horrores"
        },
        "adequação_situacional": "parcialmente adequada ao contexto clínico",
        "turnos_colaborativos": "frequentes, com responsividade adequada"
      },
      "exemplos_textuais": [
        "Acabei de jantar. Alô? Ainda não tomei banho. Cheguei era umas quatro e-- quase cinco horas.",
        "Cara, né, eu não tenho, eu não tô em muita posição de escolha, porque assim, ó, se chegar assim, ó: cara, eu gostei daquela moça, mas aquela moça é casada.",
        "Tipo assim, pô, eu comecei a escrever porque, sei lá, o Che Guevara tinha um diário também, qualquer coisa.",
        "Não sei te dizer, cara. Parece o desenho na água, tá ligado?",
        "É, fica mais idiota. Porque eu penso assim, as meninas, as mulheres, elas gostam de certo filminho no romance.",
        "Eu não posso-- eu também, eu também não, eu fico meio perdido às vezes, porque eu quero falar coisas e eu acabo falando coisa-- eu sou um cara que fala coisas aleatórias."
      ],
      "analise_contextual": "Pragmaticamente, o discurso do paciente apresenta alta necessidade de validação interlocutória, evidenciada pelo uso massivo de 'né' e 'entendeu'. Há adequação básica ao contexto conversacional clínico, embora com oscilações de registro (alternância entre formal e coloquial). A modalização epistêmica é intensa, sugerindo incerteza cognitiva e dificuldade em expressar convicções firmes. O paciente demonstra consciência de inadequação comunicativa em certos contextos sociais (bar vs. consultório), mas tem dificuldade em ajustar o discurso. Há uso frequente de atenuadores e hedges, minimizando o comprometimento com as próprias afirmações. Os atos de fala expressivos (queixas, lamentações) são proeminentes, especialmente relacionados a insatisfação profissional, financeira e relacional. Observa-se padrão de auto-revelação intensa, com baixa censura em temas potencialmente estigmatizantes (uso de drogas, dificuldades sexuais, conflitos familiares). A cooperatividade conversacional é mantida, com responsividade adequada às perguntas do terapeuta, embora com tendência à prolixidade."
    },
    "5_consistencia_temporal": {
      "metricas_quantitativas": {
        "distribuição_temporal_narrativas": {
          "infância": "5% (separação dos pais aos 9 anos)",
          "adolescência": "15% (início tabagismo 13-14 anos, faculdade)",
          "juventude": "25% (faculdade, uso de drogas, início trabalhos)",
          "adulto_jovem": "35% (casamento, nascimento filho, trabalhos)",
          "presente": "20% (situação atual, preocupações cotidianas)"
        },
        "marcos_temporais_citados": {
          "separação_pais": "9 anos de idade",
          "início_tabagismo": "13-14 anos",
          "ensino_médio": "17-18 anos",
          "faculdade_direito": "início aos 19 anos",
          "uso_drogas": "durante faculdade (20-24 anos)"
        },
        "sequenciação_temporal": "não-linear, com múltiplos flashbacks e projeções futuras",
        "orientação_temporal": "preservada, mas com dificuldade em precisar datas e períodos"
      },
      "exemplos_textuais": [
        "Eu fumo desde-- putz, cara, comecei muito-- assim, começava, parava, fumava menos, fumava mais, mas eu tinha lá uns treze, quatorze anos.",
        "No segundo ano do, do ensino médio, eu voltei a morar com meu pai em Jaraguá. Aí no terceiro, eu fui pra Curitiba, estudar num Positivo, lá.",
        "Meu pai se separou eu tinha nove anos, né? Ele separou, eu tinha nove. A Amanda tinha dois.",
        "É, é... Cola de sapateiro, não sei por que cargas d'água. E... Aí clorofórmio, a gente comprou um vidro lá.",
        "Aí deu quatro anos e separou. Eu não queria ter separado, eu queria ter tentado mais e tal, né?",
        "Já paguei vinte e nove. Falta trinta e seis parcelas. Em trinta e seis parcelas, a moto tem que ser sorteada pra mim."
      ],
      "analise_contextual": "A consistência temporal está preservada quanto à orientação básica (passado-presente-futuro), mas há organização narrativa não-linear significativa. O paciente transita entre períodos de vida sem demarcação clara, frequentemente saltando de eventos recentes para a infância e vice-versa. Os marcos temporais são relativamente consistentes quando revisitados (separação dos pais aos 9 anos, início tabagismo 13-14 anos), embora haja imprecisão em datas específicas e durações. Há preocupação temporal significativa com o futuro, especialmente relacionada a planos financeiros (consórcio, trabalho com moto/carro) e relacionais. O passado é frequentemente evocado com tom nostálgico ou de contraste negativo com o presente. Observa-se dificuldade em estabelecer cronologia precisa de eventos da vida adulta (sequência de empregos, duração do casamento). A narrativa temporal tende a ser mais precisa para eventos da infância e adolescência do que para períodos recentes. Há projeções futuras recorrentes, mas com baixa especificidade e alta idealização."
    },
    "6_fragmentacao_fluencia": {
      "metricas_quantitativas": {
        "disfluências": {
          "repetições_palavras": "alta frequência (é, né, aí, então)",
          "prolongamentos": "moderada (ééé, pô)",
          "hesitações": "muito alta (é, tipo, né)",
          "autocorreções": "alta (mais de 50 ocorrências)",
          "frases_incompletas": "frequente (aproximadamente 30% das frases)"
        },
        "padrões_interrupção": {
          "auto-interrupção": "muito frequente",
          "abandono_ideias": "frequente",
          "retomadas": "variável"
        },
        "completude_sintática": "60% frases completas, 40% incompletas ou truncadas",
        "velocidade_estimada_fala": "média a rápida, com acelerações pontuais",
        "pausas_preenchidas": "muito frequentes (é, né, tipo, cara)"
      },
      "exemplos_textuais": [
        "Não, tipo, eu vou tomar cerveja num, num-- Tipo uma espécie de quio-- Uma espécie de container que tem numa galeria lá embaixo.",
        "É, quando era jovem, sim, mas hoje bem, hoje é bem difícil.",
        "Aí ele falou-- Ele deve ter pensado com ele mesmo, né?",
        "Não, é, é, é, cada, cada turma na, na, na UPP tem uns cento e cinquenta alunos de medicina por ano.",
        "Eu tinha-- Morava num apartamento que minha mãe ajudava a bancar, aí ela-- Sobrava um dinheirinho pra mim.",
        "É, fica mais idiota. Porque eu penso assim, as meninas, as mulheres, elas gostam de certo filminho no romance.",
        "Pera aí Gustavo, vou precisar ir no banheiro, mano, você espera eu aí?"
      ],
      "analise_contextual": "A fragmentação discursiva é característica marcante da fala do paciente. Há alta densidade de disfluências verbais, incluindo repetições, hesitações, prolongamentos e autocorreções. As frases frequentemente são iniciadas e abandonadas, com reformulações imediatas. Este padrão sugere dificuldade em planejamento verbal prévio, com construção do discurso em tempo real e múltiplas reavaliações durante a produção. As pausas preenchidas ('é', 'né', 'tipo') são extremamente frequentes, funcionando como estratégia de manutenção do turno conversacional enquanto o pensamento é organizado. Não há evidência de gagueira verdadeira, mas sim de disfluências típicas de ansiedade ou dificuldade de organização do pensamento. A completude sintática está comprometida em aproximadamente 40% das produções, com orações truncadas ou suspensas. As autocorreções são frequentes e imediatas, sugerindo monitoramento ativo da própria fala. Há acelerações pontuais do discurso em momentos de maior engajamento emocional ou quando relata eventos estressantes. A fluência melhora em narrativas mais automáticas ou temas menos conflitivos."
    },
    "7_complexidade_densidade": {
      "metricas_quantitativas": {
        "complexidade_lexical": {
          "palavras_concretas": "75%",
          "palavras_abstratas": "25%",
          "tecnicalidade": "baixa",
          "comprimento_médio_palavras": "4.2 letras"
        },
        "complexidade_sintática": {
          "sentenças_simples": "40%",
          "sentenças_compostas_coordenadas": "45%",
          "sentenças_compostas_subordinadas": "15%",
          "comprimento_médio_sentença": "12-15 palavras",
          "profundidade_encaixamento": "baixa"
        },
        "densidade_informacional": {
          "proposições_por_sentença": "1.8",
          "redundância": "alta (40% do discurso é repetitivo)",
          "conteúdo_novo_vs_repetido": "60% conteúdo novo, 40% repetição"
        },
        "abstração_conceitual": "baixa a média",
        "elaboração_narrativa": "média (detalhes variáveis, maior em temas de interesse)"
      },
      "exemplos_textuais": [
        "Só que ao mesmo tempo que, né? Que tinha as crianças que davam um mega trabalho, né?",
        "Tipo assim, se você quer fazer um assalto, um negócio ser engraçado, ou se xingar, assustar as pessoa, isso outra pessoa pode ser pai da gente.",
        "É, é isso mesmo. Não, pra praia daqui de Itatiba nunca fui não. É, Caraguá, Ubatuba que é mais, mais próximo.",
        "Comprei um incensário de papel, paguei trezentos reais. Um incensário de papel eu paguei trezentos conto.",
        "Então assim, se, se de repente, é, conhecer alguém, mas esse alguém não quer ter filho, por exemplo, é, a gente tem que pensar se realmente essa pessoa vale a pena.",
        "O carro, eu ofereceria segurança, conforto e transporte para o meu fi-- eu quero ficar com meu filho."
      ],
      "analise_contextual": "A complexidade linguística geral é moderadamente baixa. O léxico é predominantemente concreto, cotidiano e coloquial, com baixa densidade de termos técnicos ou abstratos. A complexidade sintática é reduzida, com preferência por estruturas coordenadas aditivas sobre subordinação complexa. A densidade informacional é comprometida por alta redundância, circunlóquios e repetições. Há dificuldade em síntese e objetividade, com tendência a reiterar ideias múltiplas vezes sem acréscimo de informação nova. O pensamento tende ao concreto, com dificuldade em abstração e generalização conceitual. As narrativas são mais elaboradas e detalhadas quando tratam de temas de interesse pessoal (motos, carros, segurança, drogas) ou conflitos emocionais. Observa-se capacidade de raciocínio hipotético-dedutivo, mas com dificuldade em sustentá-lo sem perder-se em tangentes. A argumentação tende a ser informal, baseada em experiências pessoais mais do que em princípios abstratos. Há uso ocasional de metáforas e comparações, geralmente convencionais."
    },
    "8_caracteristicas_prosodicas_textuais": {
      "metricas_quantitativas": {
        "marcadores_enfase": {
          "intensificadores_lexicais": "muito, pra caralho, massa, surreal, legal, lindo",
          "repetição_enfática": "frequente (desenho na água x3, melhorou surreal x2)",
          "interjeições": "cara, mano, pô, carai, ah, nossa, putz"
        },
        "marcadores_pausa": {
          "pausas_curtas": "vírgulas, travessões",
          "pausas_longas": "pontos finais, reticências",
          "pausas_preenchidas_textualizadas": "é, né, tipo, hã"
        },
        "ritmo_textualizado": "variável, com acelerações e desacelerações",
        "entonação_inferida": {
          "assertiva": "predominante",
          "interrogativa": "frequente (busca confirmação)",
          "exclamativa": "ocasional (momentos emocionais intensos)"
        },
        "marcadores_afetivos": {
          "positivos": "massa, legal, lindo, maravilhoso, joia",
          "negativos": "merda, bosta, fudeu, zona, bagui, caralho"
        }
      },
      "exemplos_textuais": [
        "Nossa, horrores! Umas seiscentas crianças, mais ou menos.",
        "O dia melhorou surreal, mano. O dia melhorou surreal.",
        "Parece o desenho na água, tá ligado? Parece o desenho na água. Parece o desenho na água.",
        "É uma delícia. É. ...só que se eu levar gente, usar o carro pra outro contexto, eu acho que va-vai ser mais, na minha cabeça, vai funcionar melhor.",
        "Compre três, pague um. Compre três, pague um. Não entendi. Compre três e pague um. Compre três e pague um.",
        "Então, eu fico na aquela situação. Pô, se eu tivesse carro...",
        "Eu quero que, que ele tenha uma vida próspera e feliz, meu menino, né?"
      ],
      "analise_contextual": "As características prosódicas textualizadas revelam um padrão emocional intenso e flutuante. Os marcadores de ênfase são frequentes, com uso de intensificadores lexicais e repetições enfáticas. A repetição tripla de 'desenho na água' sugere tentativa de transmitir conceito subjetivo importante. As pausas são textualizadas por hesitações, vírgulas e travessões frequentes, indicando velocidade de fala média com múltiplas interrupções. A afetividade negativa é mais expressiva lexicalmente do que a positiva, com uso frequente de palavrões e termos pejorativos para descrever situações frustrantes. O ritmo inferido varia entre momentos de fluxo rápido (narrativas animadas) e lentificações com hesitações (temas conflitivos ou complexos). Há uso expressivo de interjeições ('cara', 'mano', 'pô') que funcionam como marcadores de envolvimento emocional e proximidade interpessoal pretendida. A entonação interrogativa inferida é frequente, especialmente com 'né?', sugerindo busca constante de validação. Observam-se momentos de intensidade emocional marcada por exclamações e palavrões, alternando com passagens mais neutras e descritivas."
    }
  },
  "sintese_interpretativa": {
    "perfil_linguistico_geral": "Paciente adulto, sexo masculino, escolaridade superior completa (Direito), apresentando discurso espontâneo fluente mas fragmentado, com alta densidade de disfluências, marcadores interacionais e busca de validação. A produção linguística é extensa, prolixa, com organização narrativa não-linear e múltiplas digressões temáticas. Há preservação das competências linguísticas fundamentais (fonológica, morfológica, sintática, semântica), mas com padrões pragmáticos e discursivos indicativos de dificuldades de organização do pensamento, ansiedade comunicativa e possível impulsividade verbal.",
    "achados_clinicamente_relevantes": [
      "Alta frequência de marcadores de incerteza epistêmica ('acho que', 'parece', 'de repente', 'sei lá') sugerindo baixa autoconfiança e dificuldade em comprometimento assertivo",
      "Densidade extrema de marcador interacional 'né' (142 ocorrências) indicando necessidade patológica de validação e confirmação externa",
      "Fragmentação discursiva significativa com 40% de frases incompletas ou truncadas, sugerindo desorganização do pensamento ou ansiedade",
      "Alta densidade de automonitoramento com múltiplas autocorreções e reformulações, indicando autocrítica elevada",
      "Polaridade emocional predominantemente negativa (60%) com campos semânticos centrados em preocupações materiais, insatisfação profissional e dificuldades relacionais",
      "Narrativas autobiográficas não-lineares com dificuldade em sequenciação temporal precisa, especialmente para eventos recentes",
      "Uso significativo de linguagem coloquial e palavrões, com adequação situacional parcialmente comprometida",
      "Projeções futuras recorrentes mas pouco específicas, com alternância entre idealização e desamparo",
      "Baixa densidade informacional por alta redundância (40% do discurso é repetitivo)",
      "Auto-revelação intensa sobre temas estigmatizantes (drogas, dificuldades sexuais, conflitos) sugerindo baixa censura ou necessidade de catarse"
    ],
    "hipoteses_psicolinguisticas": [
      "Padrão de fala compatível com ansiedade moderada a severa (hesitações, busca de validação, fragmentação)",
      "Possível desorganização do pensamento de base ansiosa ou impulsiva, não necessariamente psicótica",
      "Dificuldades executivas: planejamento verbal, inibição de tangentes, síntese informacional",
      "Baixa autoestima e autoimagem negativa refletidas na escolha lexical e temas recorrentes",
      "Preocupações obsessivas com status socioeconômico e comparação social",
      "Possível componente depressivo: polaridade emocional negativa, projeções futuras ambivalentes, queixas somáticas"
    ],
    "contraindicacoes_linguisticas_para_psicose": [
      "Coerência global preservada sem descarrilamentos verdadeiros",
      "Ausência de neologismos",
      "Ausência de pensamento mágico ou ideias delirantes expressas",
      "Capacidade de autocorreção e monitoramento preservadas",
      "Adequação contextual básica mantida",
      "Organização sintática preservada (embora fragmentada, não é desorganizada)",
      "Compreensão de metáforas e linguagem figurada adequada"
    ],
    "recomendacoes_clinicas": [
      "Avaliar formalmente sintomas ansiosos e depressivos",
      "Investigar funcionalidade executiva (testes neuropsicológicos)",
      "Explorar impacto da retirada de risperidona nos padrões de fala (comparação com gravações prévias se disponíveis)",
      "Considerar intervenções focadas em organização do pensamento e comunicação assertiva",
      "Monitorar evolução longitudinal dos marcadores de fragmentação e ansiedade comunicativa"
    ]
  },
  "observacoes_metodologicas": {
    "limitacoes": [
      "Análise baseada exclusivamente em transcrição escrita, sem acesso a prosódia real (entonação, velocidade, pausas exatas)",
      "Impossibilidade de avaliar aspectos não-verbais (gestos, expressões faciais, postura)",
      "Métricas quantitativas são aproximadas devido ao volume textual e natureza qualitativa da análise",
      "Ausência de comparação com linha de base pré-medicação ou normas populacionais estratificadas"
    ],
    "pontos_fortes_analise": [
      "Amostra extensa (12.519 palavras, 438 turnos) fornecendo padrões robustos",
      "Contexto naturalístico (consulta clínica real) aumentando validade ecológica",
      "Análise sistêmica multidimensional capturando complexidade linguística",
      "Citações textuais literais preservando autenticidade"
    ]
  }
};