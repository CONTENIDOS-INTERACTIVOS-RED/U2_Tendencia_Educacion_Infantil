export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Política educativa colombiana en educación inicial',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Fundamentos de la política educativa colombiana en educación inicial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              '¿Qué son las modalidades de atención en educación inicial? ',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Antecedentes de la política educativa colombiana en educación inicial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Evolución histórica de la educación inicial en Colombia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Políticas previas a "De Cero a Siempre"',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Retos históricos y oportunidades',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Documentos política educativa colombiana en educación inicial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Lineamientos pedagógicos del MEN para la educación inicial',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Documentos claves',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Guías y materiales complementarios',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Rizvi, F. (2014). Políticas educativas en un mundo globalizado: ( ed.). Ediciones Morata, S. L. ',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/51844 ',
    },
    {
      referencia:
        'Cámara de Diputados del H. Congreso de la Unión. (2016). Ley General de Educación: ( ed.). Cámara de Diputados del H. Congreso de la Unión.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/30824 ',
    },
    {
      referencia:
        'Ley 115 de 1994. Ley General de Educación. Congreso de la República de Colombia.',
      link:
        'https://www.mineducacion.gov.co/1759/articles-124745_archivo_pdf9.pdf ',
    },
    {
      referencia:
        'Ley 1804 de agosto 02 de 2016. (s/f). Gov.co. Recuperado el 21 de diciembre de 2024.',
      link:
        'https://www.mineducacion.gov.co/portal/normativa/Leyes/381611:Ley-1804-de-agosto-02-de-2016 ',
    },
    {
      referencia:
        'Ley 1752 de 2015 - Gestor Normativo. (s/f). Gov.co. Recuperado el 21 de diciembre de 2024.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=61858',
    },
    {
      referencia:
        'Ley 1618 de 2013 - Gestor Normativo. (s/f). Gov.co. Recuperado el 21 de diciembre de 2024.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52081 ',
    },
    {
      referencia:
        '(S/f-d). Unicef.orDewey, J. (1916). Democracy and Education. Macmillan.',
      link: 'https://archive.org/details/DemocracyAndEducation_201507 ',
    },
    {
      referencia:
        'Fullan, M. (2001). The New Meaning of Educational Change. Teachers College Press',
      link: 'https://archive.org/details/newmeaningofeduc0004edfull ',
    },
    {
      referencia:
        'Freire, P. (1997). Pedagogía de la esperanza. Siglo XXI Editores. ',
      link:
        'https://sigloxxieditores.com.mx/libro/pedagogia-de-la-esperanza-2/ ',
    },
    {
      referencia: '(S/f-d). Unicef.org. Recuperado el 21 de diciembre de 2024.',
      link:
        'https://www.unicef.org/es/convencion-derechos-nino/texto-convencion ',
    },
    {
      referencia:
        'Bautista Cárdenas, N. P. & Hernández Forero, D. I. (2018). Formación de la ciudadanía en primera infancia en entornos de vulnerabilidad: a propósito de la estrategia de Cero a Siempre en el programa Centro de Desarrollo Infantil del Instituto Colombiano de Bienestar Familiar: ( ed.). Fondo Editorial Universidad Cooperativa de Colombia. ',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/111663 ',
    },
    {
      referencia:
        'López Portela, L. X., & Pro-Bueno, A. (2020). Historia de la educación inicial en Colombia: démosle un giro a ese cuento. Actualidades Pedagógicas, (75), 131-156.',
      link: ' https://doi.org/10.19052/ap.vol1.iss75.7',
    },
    {
      referencia:
        '¿Qué es el CONPES?. (s/f). Gov.co. Recuperado el 21 de diciembre de 2024.',
      link:
        'https://www.dnp.gov.co/atencion-al-ciudadano/Paginas/que-es-el-conpes.aspx ',
    },
    {
      referencia:
        'Consejo Nacional de Política Económica y Social [CONPES]. (2007). Documento CONPES 109: Política Pública para la Infancia y Adolescencia. Bogotá: Departamento Nacional de Planeación. ',
      link: 'https://www.dnp.gov.co ',
    },
    {
      referencia:
        'Referentes Técnicos - Referentes Técnicos. (s/f). Portal MEN - Presentación. Recuperado el 21 de diciembre de 2024',
      link:
        'https://www.mineducacion.gov.co/portal/Educacion-inicial/Referentes-Tecnicos/341880:Referentes-Tecnicos',
    },
    {
      referencia:
        'Objetivos y metas de. (2018, agosto 22). Desarrollo Sostenible. ',
      link:
        'https://www.un.org/sustainabledevelopment/es/sustainable-development-goals/',
    },
    {
      referencia:
        'Secanilla Campo, E. (2016). La atención psicoeducativa en la primera infancia: evaluación de centros, servicios y programas: ( ed.). Editorial UOC. ',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/58537 ',
    },
    {
      referencia:
        'Ministerio de Educación Nacional [MEN]. (2015). Lineamientos pedagógicos para la educación inicial. Bogotá: MEN. ',
      link: 'https://www.mineducacion.gov.co  ',
    },
    {
      referencia:
        'Ministerio de Educación Nacional de Colombia. (2015). Decreto 1075 de 2015: Por el cual se expide el Decreto Reglamentario Único del Sector Educativo. ',
      link: 'https://www.mineducacion.gov.co ',
    },
    {
      referencia:
        'Condiciones de calidad de la educación inicial - Primera infancia. (s/f). Gov.co. Recuperado el 21 de diciembre de 2024.',
      link:
        'https://www.mineducacion.gov.co/primerainfancia/1739/article-177837.html ',
    },
    {
      referencia:
        'Portal MEN - Presentación - Educación inicial. (s/f). Portal MEN - Presentación. Recuperado el 21 de diciembre de 2024',
      link: 'https://www.mineducacion.gov.co/portal/Educacion-inicial/ ',
    },
  ],
  glosario: [
    {
      termino: 'Articulación intersectorial',
      significado:
        'estrategia que promueve la cooperación entre diferentes sectores (educación, salud, bienestar social, etc.) para abordar de manera conjunta las necesidades de los niños y garantizar su desarrollo integral.',
    },
    {
      termino: 'Brechas de cobertura y calidad',
      significado:
        'desigualdades en el acceso a la educación y en la calidad del servicio educativo, que afectan a diversos sectores de la población, especialmente en áreas rurales o en situación de vulnerabilidad.',
    },
    {
      termino: 'Constitución Política de 1991',
      significado:
        'documento fundamental que establece la estructura y los principios del Estado colombiano, reconociendo el derecho a la educación como un derecho fundamental y estableciendo directrices para el desarrollo de la primera infancia.',
    },
    {
      termino: 'Educación equitativa',
      significado:
        'principio que aboga por la justicia social en el ámbito educativo, asegurando que todos los niños, sin importar su origen, reciban el mismo acceso y calidad en la educación.',
    },
    {
      termino: 'Educación inclusiva',
      significado:
        'modelo educativo que busca la integración de todos los niños, independientemente de sus condiciones sociales, culturales, económicas o de discapacidad, garantizando igualdad de oportunidades y respeto por la diversidad.',
    },
    {
      termino: 'Enfoque de derechos',
      significado:
        'perspectiva que considera los derechos de los niños como el eje central de las políticas públicas, promoviendo su protección, participación y el acceso a una educación de calidad desde la primera infancia.',
    },
    {
      termino: 'Enfoque integral y multisectorial',
      significado:
        'modelo que promueve la colaboración entre diferentes sectores del gobierno y la sociedad (salud, educación, cultura, etc.) para garantizar el bienestar y el desarrollo de los niños desde una perspectiva global.',
    },
    {
      termino: 'Ley 1804 de 2016',
      significado:
        'también conocida como la Ley "De Cero a Siempre", tiene como objetivo garantizar el desarrollo integral de la primera infancia, promoviendo políticas públicas y programas de atención y protección para los niños menores de 6 años.',
    },
    {
      termino: 'Lineamientos pedagógicos',
      significado:
        'conjunto de orientaciones y directrices que guían la práctica educativa en la educación inicial, estableciendo los métodos y estrategias más apropiadas para promover el aprendizaje y el desarrollo de los niños en esta etapa crucial.',
    },
    {
      termino: 'Política educativa',
      significado:
        'conjunto de principios, directrices y normas que orientan y regulan el sistema educativo de un país. Su objetivo es garantizar el acceso a una educación de calidad para todos los ciudadanos.',
    },
    {
      termino: 'Programa fragmentados',
      significado:
        'políticas o iniciativas que abordan el desarrollo infantil de manera aislada, sin integrar a otros sectores como la salud, la nutrición o la protección social, lo que puede limitar su efectividad.',
    },
    {
      termino: 'Desarrollo humano',
      significado:
        'proceso integral que incluye el crecimiento físico, emocional, social y cognitivo de los individuos, promoviendo su capacidad de aprender, adaptarse y participar en la sociedad.',
    },
    {
      termino: 'Educación inicial',
      significado:
        'etapa educativa que abarca los primeros años de vida, generalmente desde el nacimiento hasta los 6 años, enfocada en el desarrollo integral de los niños, promoviendo su bienestar físico, emocional y cognitivo.',
    },
    {
      termino: 'Participación de la familia y la comunidad: ',
      significado:
        'concepto que resalta la importancia de la colaboración entre las familias y las comunidades locales en el proceso educativo, creando un entorno de apoyo para el aprendizaje y desarrollo de los niños.',
    },
  ],
}
