import { HistoricalEvent } from "./MapApp";


const eventsData: HistoricalEvent[] = [
  // Guerra
  {
    id: 1,
    title: "Desembarque na Normandia (Dia D)",
    description:
    "Forças aliadas desembarcaram nas praias da Normandia, França, em 6 de junho de 1944, marcando uma virada crucial na Segunda Guerra Mundial.",
    position: [49.4144, -0.8322],
    category: "Guerra",
  },
  // Art
  {
    id: 2,
    title: "Conclusão do Teto da Capela Sistina",
    description:
      "Michelangelo concluiu o teto da Capela Sistina na Cidade do Vaticano em 1512.",
    position: [41.9029, 12.4545],
    category: "Arte",
  },
  // Science
  {
    id: 3,
    title: "Invenção do Telefone",
    description:
      "Alexander Graham Bell patenteou o telefone nos Estados Unidos em 1876.",
    position: [38.8977, -77.0365],
    category: "Ciência",
  },
  // Politics
  {
    id: 4,
    title: "Índia Conquista a Independência",
    description:
      "A Índia conquistou a independência do domínio britânico em 15 de agosto de 1947.",
    position: [28.6139, 77.209],
    category: "Política",
  },
  // Religion
  {
    id: 5,
    title: "Primeiro Concílio de Niceia",
    description:
      "O primeiro concílio ecumênico da igreja cristã foi realizado em Niceia (atualmente Iznik, Turquia) em 325 d.C.",
    position: [40.4286, 29.7215],
    category: "Religião",
  },
  // Sports
  {
    id: 6,
    title: "Primeira Copa do Mundo da FIFA",
    description:
      "A primeira Copa do Mundo da FIFA foi realizada no Uruguai, com a nação anfitriã vencendo em 1930.",
    position: [-34.9011, -56.1645],
    category: "Esporte",
  },
  // Other
  {
    id: 7,
    title: "Construção da Ópera de Sydney",
    description: "A Ópera de Sydney foi inaugurada em 1973 na Austrália.",
    position: [-33.8568, 151.2153],
    category: "Outro",
  },
  // Guerra
  {
    id: 8,
    title: "Genocídio em Ruanda",
    description:
      "O genocídio em Ruanda foi um massacre em massa de Tutsis no Ruanda durante um período de 100 dias em 1994.",
    position: [-1.9403, 29.8739],
    category: "Guerra",
  },
  // Science
  {
    id: 9,
    title: "Descoberta de Petróleo na Arábia Saudita",
    description:
      "Quantidades comerciais de petróleo foram descobertas em Dhahran, na Arábia Saudita, em 1938.",
    position: [26.2361, 50.0393],
    category: "Ciência",
  },
  // Politics
  {
    id: 10,
    title: "Proclamação da Independência do Brasil",
    description:
      "O Brasil declarou sua independência de Portugal em 7 de setembro de 1822.",
    position: [-15.7934, -47.8822],
    category: "Política",
  },
  {
    id: 11,
    title: "Queda do Muro de Berlim",
    description: "O Muro de Berlim, símbolo da Guerra Fria, foi derrubado em 9 de novembro de 1989, levando à reunificação da Alemanha.",
    position: [52.5163, 13.3777],
    category: "Política",
  },
  {
    id: 12,
    title: "Assinatura da Magna Carta",
    description: "O Rei João da Inglaterra assinou a Magna Carta, um documento limitando seu poder e estabelecendo o princípio de que todos estão sujeitos à lei, em 15 de junho de 1215.",
    position: [51.1797, -0.4439],
    category: "Política",
  },
  {
    id: 13,
    title: "Bombardeios de Hiroshima e Nagasaki",
    description: "Os Estados Unidos lançaram bombas atômicas nas cidades japonesas de Hiroshima e Nagasaki em agosto de 1945, levando à rendição do Japão na Segunda Guerra Mundial.",
    position: [34.3853, 132.4553],
    category: "Guerra",
  },
  {
    id: 14,
    title: "Descoberta da Insulina",
    description: "A insulina foi descoberta por Frederick Banting e Charles Best em Toronto, Canadá, em 1921, revolucionando o tratamento da diabetes.",
    position: [43.661, -79.3957],
    category: "Ciência",
  },
  {
    id: 15,
    title: "Conquista Espanhola do Império Asteca",
    description: "Hernán Cortés e seus homens conquistaram o Império Asteca em 1521, marcando um evento significativo na colonização espanhola das Américas.",
    position: [19.4326, -99.1332],
    category: "Guerra",
  },
  {
    id: 16,
    title: "Fundação das Nações Unidas",
    description: "As Nações Unidas foram fundadas em 24 de outubro de 1945, após a Segunda Guerra Mundial, para prevenir futuros conflitos e promover a cooperação internacional.",
    position: [40.7489, -73.968],
    category: "Política",
  },
  {
    id: 17,
    title: "Primeiro Transplante de Coração",
    description: "O primeiro transplante de coração humano para humano foi realizado pelo Dr. Christiaan Barnard em Cidade do Cabo, África do Sul, em 3 de dezembro de 1967.",
    position: [-33.9249, 18.4241],
    category: "Ciência",
  },
  {
    id: 18,
    title: "Revolução Francesa",
    description: "A Revolução Francesa, um período de agitação social e política na França, começou com a tomada da Bastilha em 14 de julho de 1789.",
    position: [48.8566, 2.3522],
    category: "Política",
  },
  {
    id: 19,
    title: "Batalha de Adwa",
    description: "As forças etíopes derrotaram as tropas italianas na Batalha de Adwa em 1º de março de 1896, garantindo a independência da Etiópia.",
    position: [14.04, 38.2844],
    category: "Guerra",
  },
  {
    id: 20,
    title: "Revolução Egípcia de 2011",
    description: "A Revolução Egípcia de 2011, parte da Primavera Árabe, começou em 25 de janeiro de 2011, levando à queda do presidente Hosni Mubarak.",
    position: [30.0444, 31.2357],
    category: "Política",
  },
  {
    id: 21,
    title: "Descoberta da Pedra de Roseta",
    description: "A Pedra de Roseta, chave para decifrar hieróglifos do antigo Egito, foi descoberta no Egito em 1799.",
    position: [31.1981, 29.9192],
    category: "Outro",
  },
  {
    id: 22,
    title: "Erupção do Krakatoa",
    description: "A erupção catastrófica do vulcão Krakatoa ocorreu na Indonésia em 27 de agosto de 1883.",
    position: [-6.1025, 105.4233],
    category: "Outro",
  },
  {
    id: 23,
    title: "Construção da Grande Muralha",
    description: "A construção da Grande Muralha da China, como é conhecida hoje, começou por volta do século VII a.C. para se proteger contra invasões.",
    position: [40.4319, 116.5704],
    category: "Outro",
  },
  {
    id: 24,
    title: "A Grande Fome Irlandesa",
    description: "A Grande Fome Irlandesa, causada pela praga da batata, resultou na morte de aproximadamente um milhão de pessoas de 1845 a 1849.",
    position: [53.3498, -6.2603],
    category: "Outro",
  },
  {
    id: 25,
    title: "Invenção da Imprensa",
    description: "Johannes Gutenberg inventou a imprensa em Mainz, Alemanha, por volta de 1440, revolucionando a disseminação de informações.",
    position: [49.9929, 8.2473],
    category: "Ciência",
  },
  {
    id: 26,
    title: "Batalha de Isandlwana",
    description: "A Batalha de Isandlwana em 22 de janeiro de 1879 foi uma derrota significativa para o Império Britânico nas mãos das forças zulus.",
    position: [-28.3536, 30.6537],
    category: "Guerra"
  },
  {
    id: 27,
    title: "Primeiros Jogos Olímpicos da Era Moderna",
    description: "Os primeiros Jogos Olímpicos da era moderna foram realizados em Atenas, Grécia, em 1896.",
    position: [37.9838, 23.7275],
    category: "Esporte"
  },
  {
    id: 28,
    title: "Conclusão da Ferrovia Transcontinental",
    description: "A Ferrovia Transcontinental nos Estados Unidos foi concluída em 10 de maio de 1869, conectando as costas leste e oeste por trilho pela primeira vez.",
    position: [41.0192, -112.1231],
    category: "Outro"
  },
  {
    id: 29,
    title: "Tratado de Waitangi",
    description: "O Tratado de Waitangi foi assinado em 6 de fevereiro de 1840, marcando o início da colonização britânica na Nova Zelândia.",
    position: [-35.2623, 174.122],
    category: "Política",
  },
  {
    id: 30,
    title: "Renascimento",
    description: "O Renascimento foi um período de intenso desenvolvimento artístico e cultural que começou na Itália no século XIV e se espalhou por toda a Europa.",
    position: [43.7696, 11.2558],
    category: "Arte"
  },
  // Continuing the eventsData array with IDs starting from 31
  {
    id: 31,
    title: "Libertação de Nelson Mandela da Prisão",
    description: "Nelson Mandela foi libertado em 11 de fevereiro de 1990, após 27 anos de prisão, marcando um passo significativo em direção ao fim do apartheid na África do Sul.",
    position: [-33.9249, 18.4241],
    category: "Política"
  },
  {
    id: 32,
    title: "Batalha de Al-Qadisiyyah",
    description: "A Batalha de Al-Qadisiyyah em 636 EC viu o exército árabe muçulmano derrotar as forças persas sassânidas, levando à conquista islâmica da Pérsia.",
    position: [32.0575, 47.2635],
    category: "Guerra"
  },
  {
    id: 33,
    title: "Grande Zimbabwe",
    description: "Great Zimbabwe foi construída entre os séculos XI e XV e foi a capital do Reino do Zimbabwe durante o final da Idade do Ferro do país.",
    position: [-20.2686, 30.9309],
    category: "Outro"
  },
  {
    id: 34,
    title: "Descoberta da Tumba de Tutancâmon",
    description: "Howard Carter descobriu a tumba intacta do Faraó Tutancâmon em novembro de 1922, proporcionando imenso conhecimento sobre a cultura e história do antigo Egito.",
    position: [25.7402, 32.6014],
    category: "Outro"
  },
  {
    id: 35,
    title: "Batalha de Adwa",
    description: "A Batalha de Adwa em 1º de março de 1896 viu as forças etíopes derrotarem o exército italiano, garantindo a soberania da Etiópia.",
    position: [14.9482, 38.7749],
    category: "Guerra"
  },
  {
    id: 36,
    title: "Abertura do Canal de Suez",
    description: "O Canal de Suez no Egito foi aberto em 17 de novembro de 1869, conectando o Mar Mediterrâneo ao Mar Vermelho e encurtando significativamente as rotas comerciais.",
    position: [30.5852, 32.2654],
    category: "Outro"
  },
  {
    id: 37,
    title: "Genocídio Ruandês",
    description: "O Genocídio Ruandês foi um massacre em massa de tutsis em Ruanda durante um período de 100 dias de 7 de abril a meados de julho de 1994.",
    position: [-1.9403, 29.8739],
    category: "Guerra"
  },
  {
    id: 38,
    title: "Peregrinação de Mansa Musa",
    description: "Mansa Musa, imperador do Mali, fez sua peregrinação a Meca em 1324, demonstrando a riqueza e grandiosidade de seu império.",
    position: [12.6392, -8.0029],
    category: "Religião"
  },
  {
    id: 39,
    title: "Independência de Gana",
    description: "Gana tornou-se o primeiro país da África subsaariana a conquistar a independência do domínio colonial em 6 de março de 1957.",
    position: [5.6037, -0.187],
    category: "Política"
  },
  {
    id: 40,
    title: "Batalha de Isandlwana",
    description: "Em 22 de janeiro de 1879, as forças zulus derrotaram as tropas britânicas na Batalha de Isandlwana durante a Guerra Anglo-Zulu.",
    position: [-28.3536, 30.6537],
    category: "Guerra"
  },
  {
    id: 41,
    title: "Abertura da Universidade de Timbuktu",
    description: "A Universidade de Timbuktu, uma das mais antigas do mundo, foi um centro intelectual e espiritual nos séculos XV e XVI, atraindo estudiosos de todo o mundo islâmico.",
    position: [16.7666, -3.0026],
    category: "Ciência"
  },
  {
    id: 42,
    title: "Descoberta de Diamantes em Kimberley",
    description: "Diamantes foram descobertos em Kimberley em 1867, desencadeando uma corrida do diamante e a criação da De Beers Consolidated Mines Limited em 1888.",
    position: [-28.7282, 24.7499],
    category: "Outro"
  },
  {
    id: 43,
    title: "Construção da Barragem de Assuã",
    description: "O Egito construiu a Barragem de Assuã entre 1960 e 1970, controlando inundações, proporcionando aumento no armazenamento de água para irrigação e gerando energia hidroelétrica.",
    position: [23.97, 32.88],
    category: "Outro"
  },
  {
    id: 44,
    title: "Incidente de Fashoda",
    description: "O Incidente de Fashoda de 1898 foi o clímax das disputas territoriais imperiais entre Grã-Bretanha e França no leste da África, quase levando à guerra.",
    position: [9.8894, 32.2039],
    category: "Política"
  },
  {
    id: 45,
    title: "Guerra de Independência Argelina",
    description: "A Guerra de Independência Argelina foi travada entre a França e o Front de Libération Nationale argelino de 1954 a 1962, levando à independência da Argélia.",
    position: [36.7372, 3.0863],
    category: "Guerra"
  },
  {
    id: 46,
    title: "Descoberta de Lucy",
    description: "Em 1974, a descoberta do hominídeo 'Lucy' na Etiópia forneceu evidências cruciais sobre a evolução humana precoce.",
    position: [11.3548, 40.6822],
    category: "Ciência"
  },
  {
    id: 47,
    title: "Batalha de Mogadíscio",
    description: "A Batalha de Mogadíscio em 1993 foi um confronto entre as forças dos Estados Unidos e milicianos somalis, posteriormente retratada no filme 'Falcão Negro em Perigo'.",
    position: [2.0469, 45.3182],
    category: "Guerra"
  },
  {
    id: 48,
    title: "Reinado do Rei Shaka Zulu",
    description: "Shaka Zulu tornou-se rei da Nação Zulu em 1816 e a transformou em um império formidável por meio de suas inovações militares e liderança.",
    position: [-28.7998, 32.0383],
    category: "Política"
  },
  {
    id: 49,
    title: "A Corrida pela África",
    description: "A Corrida pela África foi a invasão, anexação e divisão do território africano por potências europeias durante o período do Novo Imperialismo, entre 1881 e 1914.",
    position: [9.145, 40.4897],
    category: "Política"
  },
  {
    id: 50,
    title: "Abolição da Escravidão na Mauritânia",
    description: "A Mauritânia foi o último país a abolir a escravidão em 1981, tornando a prática ilegal.",
    position: [18.0735, -15.9582],
    category: "Política"
  },
  // Continuing the eventsData array with IDs starting from 51
  {
    id: 51,
    title: "Independência do Brasil",
    description: "O Brasil declarou sua independência de Portugal em 7 de setembro de 1822, tornando-se o Império do Brasil.",
    position: [-15.7934, -47.8822],
    category: "Política"
  },
  {
    id: 52,
    title: "Batalha de Ayacucho",
    description: "A Batalha de Ayacucho, em 9 de dezembro de 1824, foi um encontro militar decisivo durante a Guerra de Independência do Peru. Ela efetivamente encerrou o domínio espanhol na América do Sul.",
    position: [-13.1588, -74.2239],
    category: "Guerra"
  },
  {
    id: 53,
    title: "Guerra de Independência da Argentina",
    description: "Iniciada em 1810 com a Revolução de Maio, a Argentina travou uma série de batalhas contra o domínio espanhol, culminando na independência em 1818.",
    position: [-34.6037, -58.3816],
    category: "Guerra"
  },
  {
    id: 54,
    title: "A Libertação do Chile",
    description: "Lideradas por Bernardo O'Higgins e José de San Martín, as forças chilenas garantiram a independência da Espanha com a vitória na Batalha de Maipú em 5 de abril de 1818.",
    position: [-33.4869, -70.7678],
    category: "Guerra"
  },
  {
    id: 55,
    title: "Revolução de Outubro",
    description: "A Revolução de Outubro, também conhecida como Revolução Bolchevique, derrubou o Governo Provisório Russo e deu origem à União Soviética em 1917.",
    position: [59.9343, 30.3351],
    category: "Política"
  },
  {
    id: 56,
    title: "Batalha de Stalingrado",
    description: "Uma das batalhas mais mortíferas da história humana, a Batalha de Stalingrado de 23 de agosto de 1942 a 2 de fevereiro de 1943 foi um ponto de virada na Segunda Guerra Mundial, marcando o declínio das potências do Eixo.",
    position: [48.708, 44.5133],
    category: "Guerra"
  },
  {
    id: 57,
    title: "O Voo de Yuri Gagarin",
    description: "Yuri Gagarin tornou-se o primeiro humano a viajar para o espaço e orbitar a Terra em 12 de abril de 1961, significando um feito significativo para o programa espacial soviético.",
    position: [55.7558, 37.6173],
    category: "Ciência"
  },
  {
    id: 58,
    title: "A Queda da União Soviética",
    description: "A dissolução da União Soviética ocorreu em 26 de dezembro de 1991, marcando o fim da Guerra Fria e resultando na independência de 15 repúblicas.",
    position: [55.7558, 37.6176],
    category: "Política"
  },
  {
    id: 59,
    title: "Primeira Guerra da Independência Indiana",
    description: "A Primeira Guerra da Independência Indiana, também conhecida como Revolta dos Sipaios, começou em 1857 como uma rebelião contra o domínio da Companhia Britânica das Índias Orientais.",
    position: [28.7041, 77.1025],
    category: "Guerra"
  },
  {
    id: 60,
    title: "Massacre de Jallianwala Bagh",
    description: "O Massacre de Jallianwala Bagh em 1919 envolveu tropas britânicas atirando em uma grande multidão de indianos desarmados em Amritsar, Punjab, escalando significativamente o movimento de independência indiano.",
    position: [31.62, 74.8765],
    category: "Política"
  },
  {
    id: 61,
    title: "Marcha do Sal",
    description: "A Marcha do Sal, ou Satyagraha do Sal, foi um protesto não violento liderado por Mahatma Gandhi em 1930 contra o imposto britânico sobre o sal na Índia colonial.",
    position: [20.9517, 72.9324],
    category: "Política"
  },
  {
    id: 62,
    title: "Lei de Independência da Índia de 1947",
    description: "A Lei de Independência da Índia foi aprovada pelo Parlamento Britânico, dividindo a Índia Britânica em duas novas domínios independentes, Índia e Paquistão.",
    position: [28.6143, 77.1994],
    category: "Política"
  },
  {
    id: 63,
    title: "Primeiro Satélite da Índia, Aryabhata",
    description: "A Índia lançou seu primeiro satélite, Aryabhata, em 1975, marcando um marco em seu programa espacial.",
    position: [13.0621, 77.4748],
    category: "Ciência"
  },
  {
    id: 64,
    title: "Fundação de São Petersburgo",
    description: "O Czar Pedro, o Grande, fundou a cidade de São Petersburgo em 1703, que mais tarde se tornou a capital do Império Russo por mais de dois séculos.",
    position: [59.9343, 30.3351],
    category: "Política"
  },
  {
    id: 65,
    title: "Tratado de Kuchuk-Kainarji",
    description: "O Tratado de Kuchuk-Kainarji em 1774 encerrou a Guerra Russo-Turca (1768–1774), marcando a ascensão da Rússia como uma potência europeia importante.",
    position: [45.3333, 36.4539],
    category: "Política"
  },
  {
    id: 66,
    title: "Emancipação dos Servos",
    description: "Em 1861, o Czar Alexandre II emitiu a Reforma da Emancipação, libertando milhões de servos e alterando profundamente a sociedade russa.",
    position: [55.7558, 37.6173],
    category: "Política"
  },
  {
    id: 67,
    title: "Levante do Encouraçado Potemkin",
    description: "A tripulação do encouraçado russo Potemkin se rebelou em 1905, um evento-chave no prelúdio para a Revolução Russa.",
    position: [44.6167, 33.5254],
    category: "Guerra"
  },
  {
    id: 68,
    title: "Lançamento do Sputnik",
    description: "A União Soviética lançou o Sputnik 1, o primeiro satélite artificial do mundo, em 1957, iniciando a era espacial e a corrida espacial.",
    position: [45.9646, 63.3052],
    category: "Ciência"
  },
  {
    id: 69,
    title: "Academia de Ciências de São Petersburgo",
    description: "Fundada por Pedro, o Grande, em 1724, a Academia de Ciências de São Petersburgo foi uma das primeiras instituições científicas na Rússia, promovendo o desenvolvimento da ciência e do conhecimento.",
    position: [59.9398, 30.3146],
    category: "Ciência"
  },
  {
    id: 70,
    title: "Tabela Periódica de Mendeleev",
    description: "Dmitri Mendeleev criou a Tabela Periódica dos Elementos em 1869, revolucionando a química com sua lei periódica para organizar os elementos.",
    position: [55.7517, 37.6178],
    category: "Ciência"
  },
  {
    id: 71,
    title: "Abertura da Galeria Tretyakov",
    description: "A Galeria Tretyakov, aberta em 1856, abriga uma das maiores coleções de arte russa no mundo.",
    position: [55.7415, 37.6208],
    category: "Arte"
  },
  {
    id: 72,
    title: "Primeiro Ballet Estatal Russo",
    description: "O Ballet Mariinsky, fundado na década de 1740 em São Petersburgo, é uma das principais companhias de balé do mundo, contribuindo significativamente para a arte do balé.",
    position: [59.9251, 30.2956],
    category: "Arte"
  },
  {
    id: 73,
    title: "Condicionamento Clássico de Pavlov",
    description: "O trabalho de Ivan Pavlov no condicionamento clássico começou na década de 1890, tornando-se um dos estudos mais famosos nas ciências comportamentais.",
    position: [59.9419, 30.2982],
    category: "Ciência"
  },
  {
    id: 74,
    title: "Principia Mathematica de Isaac Newton",
    description: "Sir Isaac Newton publicou 'Philosophiæ Naturalis Principia Mathematica' em 1687, lançando as bases para a mecânica clássica.",
    position: [52.2053, 0.1218],
    category: "Ciência"
  },
  {
    id: 76,
    title: "Sobre a Origem das Espécies de Charles Darwin",
    description: "O livro de Charles Darwin, publicado em 1859, introduziu a teoria científica da evolução por seleção natural.",
    position: [51.5118, -0.1445],
    category: "Ciência"
  },
  {
    id: 77,
    title: "Abertura da Galeria Nacional de Arte em Tóquio",
    description: "Em 1949, foi inaugurada a Galeria Nacional de Arte em Tóquio, Japão, exibindo uma impressionante coleção de obras de artistas japoneses e internacionais. A galeria tornou-se um importante centro cultural no país.",
    position: [35.6895, 139.6917],
    category: "Arte"
  },
  {
    id: 78,
    title: "Independência da Bolívia",
    description: "A Bolívia declarou sua independência da Espanha em 6 de agosto de 1825, marcando o surgimento do Estado Plurinacional da Bolívia.",
    position: [-16.5000, -68.1500],
    category: "Política"
  },
  {
    id: 79,
    title: "Descobrimento da Cidade Perdida",
    description: "A Cidade Perdida, construída pelos povos indígenas Tayrona, foi redescoberta em 1972, revelando uma antiga cidade pré-colombiana nas montanhas da Colômbia.",
    position: [11.0369, -73.8990],
    category: "Outro"
  },
  {
    id: 80,
    title: "Assinatura do Tratado de Paz de Loja",
    description: "O Tratado de Paz de Loja foi assinado em 1860 entre o Equador e o Peru, encerrando hostilidades e estabelecendo as fronteiras entre os dois países.",
    position: [-3.9931, -79.2045],
    category: "Política"
  },
  {
    id: 81,
    title: "Guerra do Paraguai",
    description: "A Guerra do Paraguai, travada de 1864 a 1870, envolveu o Paraguai contra a Tríplice Aliança (Brasil, Argentina e Uruguai), resultando em significativas perdas humanas e territoriais para o Paraguai.",
    position: [-23.4425, -58.4438],
    category: "Guerra"
  },
  {
    id: 82,
    title: "Descobrimento das Cataratas do Iguaçu",
    description: "As majestosas Cataratas do Iguaçu foram descobertas por Álvar Núñez Cabeza de Vaca em 1542, revelando uma das maravilhas naturais do mundo.",
    position: [-25.6953, -54.4367],
    category: "Outro"
  },
  {
    id: 83,
    title: "Guerra da Coreia",
    description: "A Guerra da Coreia ocorreu de 1950 a 1953, envolvendo a Coreia do Norte (apoiada pela China e pela União Soviética) e a Coreia do Sul (apoiada pelos Estados Unidos e outras nações), resultando em um armistício e a divisão da península coreana.",
    position: [38.4237, 127.8393],
    category: "Guerra"
  },
  {
    id: 84,
    title: "Guerra Civil Espanhola",
    description: "A Guerra Civil Espanhola ocorreu de 1936 a 1939, sendo um conflito ideológico entre republicanos e nacionalistas liderados por Francisco Franco, resultando na ascensão do regime franquista.",
    position: [40.4637, -3.7492],
    category: "Guerra"
  },
  {
    id: 85,
    title: "Descobrimento do Brasil",
    description: "Em 22 de abril de 1500, o navegador português Pedro Álvares Cabral chegou ao Brasil, marcando o descobrimento oficial do país pelos europeus.",
    position: [-15.7801, -47.9292],
    category: "Outro"
  },
  {
    id: 86,
    title: "Conquista da Ceuta",
    description: "A conquista de Ceuta em 1415 pelos portugueses foi um marco nas explorações marítimas, inaugurando a era dos descobrimentos portugueses.",
    position: [35.8992, -5.3195],
    category: "Guerra"
  },
  {
    id: 87,
    title: "Descobrimento do Caminho Marítimo para as Índias",
    description: "Em 1498, o explorador português Vasco da Gama descobriu o caminho marítimo para as Índias, estabelecendo uma rota que revolucionou o comércio e as viagens marítimas.",
    position: [38.7223, -9.1393],
    category: "Descobrimento"
  },
  {
    id: 88,
    title: "Fundação da Academia de Ciências Físicas, Matemáticas e Naturais",
    description: "A Academia de Ciências Físicas, Matemáticas e Naturais da Venezuela foi fundada em 1829, desempenhando um papel crucial no avanço da ciência no país.",
    position: [10.4991, -66.8819],
    category: "Ciência"
  },
  {
    id: 89,
    title: "Luta pela Igualdade Racial de Jesse Owens",
    description: "Nas Olimpíadas de Berlim em 1936, Jesse Owens, um atleta afro-americano, conquistou quatro medalhas de ouro, desafiando as ideias racistas de superioridade racial.",
    position: [52.5145, 13.2394],
    category: "Esporte"
  },
  {
    id: 90,
    title: "Muhammad Ali vs. Joe Frazier - 'Thrilla in Manila'",
    description: "A luta épica entre Muhammad Ali e Joe Frazier em 1975, conhecida como 'Thrilla in Manila', é considerada uma das maiores lutas de boxe da história.",
    position: [14.5896, 120.9811],
    category: "Esporte"
  },
  {
    id: 91,
    title: "A 'Mão de Deus' de Diego Maradona",
    description: "Na Copa do Mundo de 1986, Diego Maradona marcou um gol icônico com a mão, conhecido como a 'Mão de Deus', durante a partida entre Argentina e Inglaterra.",
    position: [19.4326, -99.1332],
    category: "Esporte"
  },
  {
    id: 92,
    title: "Roger Bannister - A Quebra da Barreira dos 4 Minutos na Milha",
    description: "Em 1954, Roger Bannister tornou-se o primeiro homem a correr uma milha em menos de 4 minutos, um feito que redefiniu os limites da corrida de meio-fundo.",
    position: [51.7563, -1.259],
    category: "Esporte"
  },
  {
    id: 93,
    title: "Tênis de Mesa na Diplomacia - China e Estados Unidos",
    description: "O pingue-pongue desempenhou um papel crucial na diplomacia entre China e Estados Unidos durante a Guerra Fria, levando à famosa 'Diplomacia do Ping Pong'.",
    position: [39.9042, 116.4074],
    category: "Esporte"
  },
  {
    id: 94,
    title: "A Corrida de Jesse Owens em 1936",
    description: "Nas Olimpíadas de Berlim, Jesse Owens conquistou quatro medalhas de ouro, desafiando a ideologia nazista de superioridade racial de Adolf Hitler.",
    position: [52.5145, 13.2394],
    category: "Esporte"
  },
  {
    id: 95,
    title: "LeBron James e sua Impactante Carreira na NBA",
    description: "A carreira de LeBron James na NBA não apenas redefiniu o basquete, mas também destacou seu ativismo social, impactando positivamente as comunidades.",
    position: [34.043, -118.2673],
    category: "Esporte"
  },
  {
    id: 96,
    title: "O Milagre no Gelo - Estados Unidos vs. União Soviética",
    description: "No hóquei no gelo dos Jogos Olímpicos de Inverno de 1980, a equipe dos Estados Unidos, composta por amadores, venceu a poderosa União Soviética, em um evento conhecido como o 'Milagre no Gelo'.",
    position: [40.7128, -74.006],
    category: "Esporte"
  },
  {
    id: 97,
    title: "A Lenda de Pelé no Futebol",
    description: "Pelé, o 'Rei do Futebol', marcou história com suas conquistas e habilidades extraordinárias, sendo considerado um dos maiores jogadores de futebol de todos os tempos.",
    position: [-23.5505, -46.6333],
    category: "Esporte"
  },
  {
    id: 98,
    title: "Usain Bolt e os Recordes Mundiais",
    description: "Usain Bolt, o velocista jamaicano, quebrou recordes mundiais nos 100m e 200m, tornando-se uma lenda do atletismo e o homem mais rápido do mundo.",
    position: [17.9714, -76.792],
    category: "Esporte"
  },
  {
    id: 99,
    title: "A Noite Estrelada de Vincent van Gogh",
    description: "A icônica pintura de Vincent van Gogh, 'A Noite Estrelada', é conhecida por suas pinceladas intensas e representa um dos pontos altos do expressionismo.",
    position: [48.8647, 2.349],
    category: "Arte"
  },
  {
    id: 100,
    title: "A Criação de Adão de Michelangelo",
    description: "O afresco no teto da Capela Sistina, 'A Criação de Adão' de Michelangelo, é uma representação poderosa da criação do homem, com a famosa cena do toque divino.",
    position: [41.9029, 12.4534],
    category: "Arte"
  },
  {
    id: 101,
    title: "A Última Ceia de Leonardo da Vinci",
    description: "Leonardo da Vinci's 'A Última Ceia' é uma obra-prima renascentista que retrata o momento dramático da última ceia de Jesus com seus apóstolos.",
    position: [45.4642, 9.191],
    category: "Arte"
  },
  {
    id: 102,
    title: "O Beijo de Gustav Klimt",
    description: "Gustav Klimt's 'O Beijo' é uma pintura simbolista que representa o amor e a união, caracterizada por padrões ornamentados e detalhes dourados distintivos.",
    position: [48.1858, 16.3117],
    category: "Arte"
  },
  {
    id: 103,
    title: "A Persistência da Memória de Salvador Dalí",
    description: "A famosa pintura surrealista de Salvador Dalí, 'A Persistência da Memória', apresenta relógios derretendo em um cenário onírico, explorando a natureza do tempo.",
    position: [41.9836, 2.8143],
    category: "Arte"
  },
  {
    id: 104,
    title: "O Grito de Edvard Munch",
    description: "A obra-prima expressionista de Edvard Munch, 'O Grito', é uma representação intensa da angústia humana, capturando emoções universais com seu estilo vibrante.",
    position: [59.9139, 10.7522],
    category: "Arte"
  },
  {
    id: 105,
    title: "O Monte Sinai e os Dez Mandamentos",
    description: "O Monte Sinai, associado aos Dez Mandamentos dados a Moisés, é um local sagrado no judaísmo, cristianismo e islamismo.",
    position: [28.5395, 33.9759],
    category: "Religião"
  },
  {
    id: 106,
    title: "A Peregrinação a Meca",
    description: "A peregrinação a Meca, conhecida como Hajj, é um dos Cinco Pilares do Islã e é um dever religioso que todo muçulmano adulto deve cumprir, se possível.",
    position: [21.389, 39.8579],
    category: "Religião"
  },
  {
    id: 107,
    title: "O Templo de Jerusalém",
    description: "O Templo de Jerusalém, especialmente o Segundo Templo, desempenhou um papel crucial nas tradições religiosas judaicas e foi destruído duas vezes na história.",
    position: [31.7784, 35.2299],
    category: "Religião"
  },
  {
    id: 108,
    title: "O Santo Sudário de Turim",
    description: "O Santo Sudário é uma peça de linho que, segundo a tradição cristã, teria envolvido o corpo de Jesus após a crucificação, tornando-se um objeto de devoção.",
    position: [45.0703, 7.6869],
    category: "Religião"
  },
  {
    id: 109,
    title: "O Muro das Lamentações",
    description: "O Muro das Lamentações, em Jerusalém, é um local sagrado para o judaísmo, sendo os restos remanescentes do Segundo Templo e um local de oração e reflexão.",
    position: [31.7767, 35.2345],
    category: "Religião"
  },
  {
    id: 110,
    title: "O Nascimento de Buda em Lumbini",
    description: "Lumbini, no Nepal, é o local tradicional do nascimento de Siddhartha Gautama, que mais tarde se tornou Buda, o fundador do budismo.",
    position: [27.4712, 83.2834],
    category: "Religião"
  },
  {
    id: 111,
    title: "A Basílica de São Pedro",
    description: "A Basílica de São Pedro, no Vaticano, é um dos principais locais de peregrinação cristã, sendo o maior templo cristão do mundo.",
    position: [41.9022, 12.4534],
    category: "Religião"
  },
  {
    id: 112,
    title: "O Templo Dourado de Amritsar",
    description: "O Templo Dourado, ou Harmandir Sahib, é o local mais sagrado do siquismo, situado em Amritsar, Índia, e é conhecido por sua beleza arquitetônica.",
    position: [31.6204, 74.8765],
    category: "Religião"
  },
  {
    id: 113,
    title: "A Peregrinação a Santiago de Compostela",
    description: "A Peregrinação a Santiago de Compostela, na Espanha, é uma jornada religiosa tradicionalmente associada ao sepulcro de Santiago, um dos apóstolos de Jesus.",
    position: [42.8806, -8.5456],
    category: "Religião"
  }
];

export default eventsData;