const SiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://armando-bretas.vercel.app';

export const cvData = {
  siteUrl: SiteUrl,
  name: 'Armando Bretas',
  initials: 'AB',
  photo: '/1667316741214.jpeg',
  title:
    'Senior Front-end Developer | React | Flutter | React Native | Micro Frontends',
  subtitle: 'Umuarama, Paraná, Brasil',
  tagline: '8+ anos de experiência | Web & Mobile | Liderança técnica',

  about: {
    stats: [
      { value: '8', suffix: '+', label: 'anos de experiência' },
      { value: '3000', suffix: '+', label: 'usuários em plataformas' },
      { value: '8', suffix: '+', label: 'projetos em produção' },
      { value: '6', suffix: '+', label: 'clientes enterprise' },
    ],
    bio: [
      'Desenvolvedor Front-end Sênior com 8+ anos de experiência em desenvolvimento web e mobile, especializado em React, Angular, Flutter e React Native.',
      'Trajetória sólida com 4+ anos na Levva como Dev Front-end Senior e 4+ anos na Gazin como Dev Fullstack. Experiência com clientes de peso: Azul, GDM Seeds, Grupo NC, EMS, Ourofino, Rivvals.',
      'Perfil hands-on com foco em arquitetura escalável, mobile-first e entrega de impacto. Liderança técnica em squads de 5+ desenvolvedores e participação em war rooms para incidentes críticos.',
    ],
  },

  skills: {
    main: [
      { name: 'React / Next.js', level: 95 },
      { name: 'Flutter', level: 80 },
      { name: 'React Native', level: 90 },
      { name: 'TypeScript / JavaScript', level: 95 },
      { name: 'Angular', level: 50 },
    ],
    categories: [
      {
        title: 'Desenvolvimento Web',
        items: ['React', 'Angular', 'Vue', 'Blazor', 'Next.js', 'TypeScript'],
      },
      {
        title: 'Desenvolvimento Mobile',
        items: ['Flutter', 'React Native', 'BLoC', 'Flutter Modular'],
      },
      {
        title: 'Arquitetura',
        items: ['Micro Frontends', 'SOLID', 'Clean Architecture', 'MVVM'],
      },
      {
        title: 'Cloud & DevOps',
        items: ['Azure', 'AWS', 'GitHub Actions', 'CI/CD'],
      },
      {
        title: 'Integrações',
        items: ['Azure AD', 'Keycloak', 'DatoCMS', 'APIs REST', 'GraphQL'],
      },
    ],
  },

  experience: [
    {
      company: 'BeCash Programa de Vantagens e Fidelidade',
      role: 'Senior Frontend Developer',
      period: 'Set 2025 - Presente',
      location: 'São Paulo, Brasil',
      description:
        'Desenvolvimento full-stack frontend da plataforma BeCash, programa de vantagens e fidelidade para estabelecimentos comerciais.',
      highlights: [
        'Criação de aplicação web responsiva com React, Next.js e TypeScript, priorizando mobile-first',
        'Desenvolvimento de app mobile multiplataforma com Flutter para usuários finais e estabelecimentos',
        'Implementação de features críticas: sistema de cashback, gestão de transações, onboarding',
        'Integração com múltiplas APIs: autenticação, processamento de pagamentos, gestão de pontos',
        'Otimização de performance: lazy loading, code splitting, cache strategies',
        'Arquitetura de micro frontends e componentes reutilizáveis para escalabilidade',
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Flutter', 'Node.js'],
    },
    {
      company: 'Levva',
      role: 'Front-end Developer Pl. → Sr.',
      period: 'Jan 2021 - Set 2025 (4 anos 9 meses)',
      location: 'Campinas, São Paulo, Brasil',
      badge: '3.000+ usuários',
      description:
        'Desenvolvimento em ambiente ágil com foco em qualidade e boas práticas. Promoção a Sr. em 2023. Desenvolvimento do App Velos (Flutter) para propagandistas médicos - Grupo NC/EMS e Aplicativo Calculadora de Jornada para comissários da Azul Linhas Aéreas.',
      highlights: [
        'Desenvolvimento do App Velos (Flutter) para +3.000 propagandistas médicos - Grupo NC/EMS',
        'Aplicativo Calculadora de Jornada para comissários da Azul Linhas Aéreas - React Native',
        'Liderança técnica em squads de 5+ desenvolvedores',
        'Participação em war rooms para incidentes críticos em produção',
        'Implementação de arquitetura offline-first com sincronização inteligente de dados',
        'Mentoria técnica para desenvolvedores júnior e pleno',
        'Estimativas junto ao time, testes unitários e trabalho em ambiente ágil (Scrum/Kanban)',
      ],
      technologies: [
        'Flutter',
        'React Native',
        'React',
        'TypeScript',
        'BLoC',
        'JavaScript',
      ],
    },
    {
      company: 'Gazin',
      role: 'Desenvolvedor full stack',
      period: 'Jun 2017 - Jan 2021 (3 anos 8 meses)',
      location: 'Douradina, Paraná',
      description:
        'Desenvolvimento de ferramentas para gestão de logística, integração com APIs e estruturação de banco de dados.',
      highlights: [
        'Desenvolvimento de ferramentas para gestão de logística',
        'Integração com Web Services e APIs',
        'Criação de dashboards e ferramentas para gestão das Frotas',
        'Estruturação de banco de dados (PostgreSQL, SQL Server, Oracle)',
        'Implantação de sistemas WMS nas filiais',
      ],
      technologies: ['JavaScript', 'PostgreSQL', 'SQL Server', 'Oracle'],
    },
    {
      company: 'Gazin',
      role: 'Jovem aprendiz',
      period: 'Ago 2015 - Jul 2016 (1 ano)',
      location: 'Douradina, Paraná, Brasil',
      description:
        'Menor aprendiz em parceria com SENAC-PR no departamento de T.I., utilizando HTML e CSS para desenvolver hotsites.',
      highlights: [
        'Desenvolvimento de hotsites com HTML e CSS',
        'Início da carreira em tecnologia',
      ],
      technologies: ['HTML', 'CSS'],
    },
  ],

  projects: [
    {
      name: 'App Calculadora de Jornada',
      client: 'Azul Linhas Aéreas',
      platform: 'Android + iOS',
      description:
        'Aplicativo corporativo para comissários de bordo, com cálculo automático de jornada, repouso e aclimatização em diferentes fusos horários, em conformidade com as normas da ANAC (RBAC 117). Lógica complexa de regras regulatórias, suporte offline e interface intuitiva.',
      technologies: ['React Native', 'Scrum', 'Azure', 'TypeScript'],
    },
    {
      name: 'App Velos',
      client: 'Grupo NC / EMS',
      platform: 'Android',
      description:
        'Aplicativo mobile Flutter offline-first para propagandistas médicos, com sincronização inteligente de dados, gestão de visitas, controle de estoque e relatórios de performance. Isar Database, MobX e sincronização bidirecional. Suporta mais de 3.000 usuários simultâneos.',
      technologies: ['Flutter', 'Redis', 'Datadog', 'MobX', 'Isar'],
    },
    {
      name: 'App iUsePet',
      client: 'Ourofino',
      platform: 'Android + iOS',
      description:
        'Aplicativo mobile para cuidados veterinários de pets: agendamento de vacinas, controle de medicamentos, histórico médico e integração com clínicas. Notificações push, chat com veterinários e gamificação para cuidados preventivos.',
      technologies: ['React Native', 'TypeScript', 'Scrum'],
    },
    {
      name: 'NEWBIES',
      client: 'Levva',
      platform: 'Android',
      role: 'Tech Lead',
      description:
        'Tech Lead de time com 5 desenvolvedores iniciantes em migração de carreira. Aplicativo mobile para receber convidados em eventos com leitura de QR Code. Iniciativa Newbies da Levva para entrada de novos profissionais na área tech.',
      technologies: ['Gestão de pessoas', 'Scrum', 'Refinamento', 'Liderança'],
    },
    {
      name: 'Portal de Agendamento',
      client: 'Gazin',
      platform: 'Web',
      description:
        'Sistema para gestão completa de agendamentos de descarga de mercadorias, com workflow de aprovação multi-nível, integração bidirecional com ERP legado, geração de protocolos em PDF e notificações por email. Calendário, transferências entre filiais e acompanhamento em tempo real.',
      technologies: [
        'Next.js 14',
        'TypeScript',
        'Effector',
        'PostgreSQL',
        'JWT',
      ],
    },
    {
      name: 'Sistema Cardio360',
      client: 'Grupo NC / EMS',
      platform: 'Web',
      description:
        'Sistema web para gestão de solicitações de equipamentos médicos, com formulários dinâmicos baseados em regras de negócio, workflow de aprovação e integração com sistemas hospitalares. Validações complexas, notificações em tempo real e relatórios customizáveis.',
      technologies: ['React', 'TypeScript', 'Scrum'],
    },
    {
      name: 'Sistema Impressor de Escalas',
      client: 'Azul Linhas Aéreas',
      platform: 'Web',
      description:
        'Sistema corporativo em C# .NET para gerar e imprimir relatórios de escalas de tripulação em múltiplos fusos horários. Padronização, precisão e clareza na visualização de escalas, cumprindo normas regulatórias do setor aéreo.',
      technologies: ['ASP.NET', 'C#', 'jQuery'],
    },
    {
      name: 'Site Médico Exponencial (Medex)',
      client: 'Grupo NC / EMS',
      platform: 'Web',
      description:
        'Portal Médico Exponencial com conteúdo científico para médicos. CMS headless (DatoCMS) para gestão de artigos e recursos educacionais. Busca avançada, filtros por especialidade e design responsivo otimizado para mobile.',
      technologies: ['Next.js', 'React', 'DatoCMS', 'TypeScript'],
    },
  ],

  differentials: [
    {
      title: 'Experiência Full-Stack Frontend',
      items: [
        '8+ anos em desenvolvimento web e mobile',
        'Domínio de React, Flutter e React Native',
        'Arquitetura de micro frontends',
        'Projetos com 3.000+ usuários em produção',
      ],
    },
    {
      title: 'Liderança Técnica',
      items: [
        'Liderança de squads de 5+ desenvolvedores',
        'Mentoria para desenvolvedores júnior e pleno',
        'Participação em war rooms para incidentes críticos',
        'Code review e garantia de qualidade',
      ],
    },
    {
      title: 'Clientes de Peso',
      items: [
        'Azul Linhas Aéreas',
        'GDM Seeds',
        'Grupo NC / EMS',
        'Ourofino, Rivvals',
      ],
    },
    {
      title: 'Arquitetura e Qualidade',
      items: [
        'SOLID, Clean Architecture, MVVM',
        'Arquitetura offline-first',
        'Testes unitários e CI/CD',
        'Otimização de performance',
      ],
    },
  ],

  contact: {
    email: 'bretas.dev@gmail.com',
    linkedin: 'https://linkedin.com/in/bretas-dev',
    linkedinLabel: 'linkedin.com/in/bretas-dev',
    instagram: 'https://www.instagram.com/dev.bretas/',
    instagramLabel: '@dev.bretas',
  },

  quote:
    'Se tudo parece sob controle, você não está indo rápido o suficiente — Mario Andretti',

  education: {
    institution: 'Faculdade Alfa Umuarama',
    degree: 'Tecnólogo, Sistemas para Internet',
    period: '2017 - 2019',
  },

  languages: [
    { name: 'Português', level: 'Nativo', levelCount: 5, flag: '🇧🇷' },
    { name: 'Inglês', level: 'Intermediário', levelCount: 3, flag: '🇺🇸' },
  ],
};
