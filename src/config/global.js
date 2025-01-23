export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad:
      'Sistema de educación Inicial del Ministerio de Educación Nacional',
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
        titulo: 'Modalidades y condiciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              '¿Qué son las modalidades de atención en educación inicial?',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Conceptualización de las modalidades (familiar, institucional, comunitaria)',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Principios de atención integral en la primera infancia',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Requisitos y estándares de calidad, según el MEN',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Inclusión y equidad en la educación',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Infraestructura y perfil del talento humano',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistema de seguimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Indicadores de evaluación del desarrollo infantil',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Rol de los agentes educativos y entidades territoriales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Herramientas y metodologías de seguimiento',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Rol de las entidades territoriales en el seguimiento y monitoreo',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Actividades rectoras',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Principios y fundamentos pedagógicos de las actividades rectoras',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Fundamentos pedagógicos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Estrategias para integrar actividades rectoras en el currículo',
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
      referencia: 'ICBF. (s.f.). De Cero a Siempre',
      link: 'https://deceroasiempreterritorial.icbf.gov.co/   ',
    },
    {
      referencia:
        'Instituto Colombiano de Bienestar Familiar [ICBF]. (2020). Informe de avances en la estrategia De Cero a Siempre. ICBF',
      link: 'https://www.icbf.gov.co/de-cero-siempre ',
    },
    {
      referencia: 'Freire, P. (1970). Pedagogía del oprimido..',
      link:
        'https://www.academia.edu/41234517/Freire_Pedagog%C3%ADa_del_Oprimidohttps://www.academia.edu/41234517/Freire_Pedagog%C3%ADa_del_Oprimido ',
    },
    {
      referencia:
        'Jiménez-Rojas, Á. M., & Quintana-Hernández, L. S. (2020). Calidad en la educación inicial: desafío aún pendiente en América Latina. Hallazgos, 17(33), 1-15.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7532571 ',
    },
    {
      referencia:
        'Leyes desde 1992 - Vigencia expresa y control de constitucionalidad [LEY_1804_2016]. (s/f). Senado de la República de Colombia. Recuperado el 19 de diciembre de 2024.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1804_2016.html   ',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (s.f.). Desarrollo infantil y competencias en la Primera infancia.  ',
      link:
        'https://www.mineducacion.gov.co/primerainfancia/1739/articles-178053_archivo_PDF_libro_desarrolloinfantil.pdf ',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (s.f.). Sentido de la educación inicial. ',
      link:
        'https://www.mineducacion.gov.co/1621/articles-341810_archivo_pdf_sentido_de_la_educacion.pdf   ',
    },
    {
      referencia:
        'Pinto Rodríguez, M. M. (2014). La educación inicial y la educación preescolar: perspectivas de desarrollo en Colombia y su importancia en la configuración del mundo de los niños. Revista Científica de Cultura, Educación y Sociedad, 4(2), 45-58.',
      link:
        'https://revistascientificas.cuc.edu.co/index.php/culturaeducacionysociedad/article/view/889 ',
    },
    {
      referencia:
        'Reigeluth, C. (2012). Teoría instruccional y tecnología para el nuevo paradigma de la educación. Revista de educación a distancia (RED), (32).',
      link: 'https://revistas.um.es/red/article/view/233081 ',
    },
    {
      referencia:
        'Robayo Noreña, S. M. (2021). Antecedentes investigativos sobre primera infancia, aproximaciones como campo de conocimiento en Colombia entre el 2000 y el 2020. Revista Senderos Pedagógicos, 12(1), 67-89.',
      link: 'https://doi.org/10.53995/rsp.v12i12.1022.  ',
    },
    {
      referencia:
        'Mérida Serrano, R. & Ramírez García, A. (2015). La orientación en educación infantil: una alianza entre los agentes educativos: ( ed.). Difusora Larousse - Ediciones Pirámide. ',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/48959 ',
    },
    {
      referencia:
        'Miranda, A. J. M. (2013). La educación básica en Colombia: Una mirada a las políticas educativas. Saber, Ciencia y Libertad, 8(2), 141-155.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5104991 ',
    },
    {
      referencia:
        'Díaz-Rivadeneira, Y., Gonzales-Soto, V. A., & Temoche-Cavero, T. (2023). Acompañamiento y Seguimiento Pedagógico en las Escuelas del Nivel Inicial. Revista Docentes 2.0, 16(2), 1-84. Recuperado de SciELO. ',
      link:
        'https://ve.scielo.org/scielo.php?script=sci_arttext&pid=S2665-02662023000200184&lng=en&form=MG0AV3 ',
    },
    {
      referencia:
        'Flores-Flores, H. (2021). La gestión educativa, disciplina con características propias. Dilemas contemporáneos: educación, política y valores, 9(1). ',
      link: 'https://doi.org/10.46377/dilemas.v9i1.2832 ',
    },
    {
      referencia:
        'Mérida Serrano, R. & Ramírez García, A. (2015). La orientación en educación infantil: una alianza entre los agentes educativos: ( ed.). Difusora Larousse - Ediciones Pirámide. ',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/48959 ',
    },
    {
      referencia:
        'Rodríguez, C. S. H. A. (2019). Hacia la gestión educativa de la atención a la diversidad. VARONA, (68). ',
      link: 'https://www.redalyc.org/journal/3606/360671526006/ ',
    },
    {
      referencia:
        'Ausubel, D. P. (1968). Educational Psychology: A Cognitive View. Holt, Rinehart & Winston.',
      link: '.https://archive.org/details/educationalpsych0000ausu ',
    },
    {
      referencia:
        'Blumenfeld, P. C., Soloway, E., Marx, R. W., Krajcik, J. S., Guzdial, M., & Palincsar, A. (1991). Motivating Project-Based Learning: Sustaining the Doing, Supporting the Learning. Educational Psychologist, 26(3-4), 369-398. ',
      link:
        'https://www.researchgate.net/publication/232543390_Motivating_Project-Based_Learning_Sustaining_the_Doing_Supporting_the_Learning ',
    },
    {
      referencia:
        'Elkonin, D. B. (1971). Child Development. Lawrence Erlbaum Associates. ',
      link: 'https://psycnet.apa.org/record/1972-10572-004 ',
    },
    {
      referencia:
        'Eisner, E. W. (2002). The Arts and the Creation of Mind. Yale University Press.',
      link: 'https://www.jstor.org/stable/j.ctt1np7vz ',
    },
    {
      referencia:
        'Flores-Flores, H. (2021). La gestión educativa, disciplina con características propias. Dilemas contemporáneos: educación, política y valores, 9(1). ',
      link: 'https://doi.org/10.46377/dilemas.v9i1.2832 ',
    },
    {
      referencia: 'Goleman, D. (1995). Emotional Intelligence. Bantam Books. ',
      link: 'https://openlibrary.org/books/OL784532M/Emotional_intelligence ',
    },
    {
      referencia:
        'González-Grandón, Ximena, Chao Rebolledo, Cimenna, & Patiño Domínguez, Hilda. (2021). El juego en la educación: una vía para el desarrollo del bienestar socioemocional en contextos de violencia. Revista latinoamericana de estudios educativos, 51(2), 233-269. Epub 20 de octubre de 2023.',
      link: 'https://doi.org/10.48102/rlee.2021.51.2.375 ',
    },
    {
      referencia:
        'Louv, R. (2008). Last Child in the Woods: Saving Our Children from Nature-Deficit Disorder. Algonquin Books. ',
      link: 'https://archive.org/details/lastchildinwoods0000louv ',
    },
    {
      referencia:
        'Piaget, J. (1962). Play, Dreams, and Imitation in Childhood. Norton. ',
      link: 'https://archive.org/details/playdreamsimitat0000piag ',
    },
    {
      referencia:
        'Piaget, J. (1976). The Grasp of Consciousness: Action and Concept in the Young Child. Harvard University Press.',
      link: 'https://psycnet.apa.org/record/1976-27668-000',
    },
    {
      referencia:
        'Thomas, J. W. (2000). A Review of Research on Project-Based Learning. Autodesk Foundation. ',
      link:
        'https://www.semanticscholar.org/paper/A-REVIEW-OF-RESEARCH-ON-PROJECT-BASED-LEARNING-Thomas/556a3e15b4cfe31588cff520206fcf764a413c25 ',
    },
    {
      referencia:
        'Mérida Serrano, R. & Ramírez García, A. (2015). La orientación en educación infantil: una alianza entre los agentes educativos: ( ed.). Difusora Larousse - Ediciones Pirámide. ',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/48959 ',
    },
  ],
  glosario: [
    {
      termino: 'Actividades rectoras',
      significado:
        'procesos pedagógicos fundamentales en la primera infancia, como el juego, el arte, la literatura y la exploración del medio, que fomentan el desarrollo integral.',
    },
    {
      termino: 'Atención integral',
      significado:
        'enfoque que busca garantizar el desarrollo pleno de los niños y niñas, abarcando aspectos de salud, nutrición, educación, protección y cuidado.',
    },
    {
      termino: 'Desarrollo infantil',
      significado:
        'proceso continuo y secuencial en el que los niños adquieren habilidades físicas, cognitivas, emocionales y sociales desde el nacimiento hasta la adolescencia.',
    },
    {
      termino: 'Educación inicial',
      significado:
        'primera etapa del sistema educativo destinada a promover el desarrollo integral de los niños y niñas en su primera infancia, a través de experiencias pedagógicas y de cuidado.',
    },
    {
      termino: 'Exploración del medio',
      significado:
        'actividad pedagógica que permite a los niños interactuar con su entorno natural y social para estimular su curiosidad, aprendizaje y desarrollo sensorial.',
    },
    {
      termino: 'ICBF (Instituto Colombiano de Bienestar Familiar)',
      significado:
        'entidad encargada de proteger y garantizar los derechos de los niños, niñas y adolescentes en Colombia, en articulación con el Sistema Nacional de Bienestar Familiar.',
    },
    {
      termino: 'Indicadores de desarrollo',
      significado:
        'herramientas utilizadas para medir y evaluar el crecimiento y progreso de los niños en las áreas física, cognitiva, emocional y social.',
    },
    {
      termino: 'Juego',
      significado:
        'actividad esencial para el aprendizaje en la primera infancia que facilita el desarrollo cognitivo, emocional, social y físico de los niños y niñas.',
    },
    {
      termino: 'Literatura infantil',
      significado:
        'conjunto de textos, cuentos y relatos diseñados específicamente para estimular la imaginación, el lenguaje y las habilidades cognitivas de los niños.',
    },
    {
      termino: 'Modalidades de atención',
      significado:
        'diferentes formas de ofrecer servicios educativos y de cuidado a la primera infancia, como la atención familiar, institucional y comunitaria.',
    },
    {
      termino: 'Normatividad',
      significado:
        'conjunto de leyes, decretos y lineamientos que regulan la implementación de la educación inicial en el país.',
    },
    {
      termino: 'Primera infancia',
      significado:
        'etapa del desarrollo que abarca desde el nacimiento hasta los seis años, considerada fundamental para el establecimiento de bases sólidas en el desarrollo integral.',
    },
    {
      termino: 'Seguimiento pedagógico',
      significado:
        'proceso de observación y registro sistemático del progreso de los niños en su aprendizaje y desarrollo, utilizado para ajustar y mejorar las estrategias educativas.',
    },
    {
      termino: 'Sistema Nacional de Bienestar Familiar (SNBF)',
      significado:
        'conjunto de entidades públicas y privadas que trabajan articuladamente para garantizar el bienestar y la protección integral de los niños, niñas y adolescentes.',
    },
    {
      termino: 'Territorialización',
      significado:
        'proceso de adaptar las políticas y programas educativos a las características y necesidades específicas de las regiones y comunidades en Colombia.',
    },
  ],
}
