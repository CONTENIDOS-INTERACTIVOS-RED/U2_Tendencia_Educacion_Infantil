<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Modalidades y condiciones'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") Es hora de iniciar el estudio de las modalidades y condiciones del sistema de educación inicial. Este tema le proporcionará una visión clara de las diferentes formas en las que se organiza la educación para la primera infancia en Colombia, incluyendo las modalidades familiar, institucional y comunitaria.
      
    p.mb-5 ¡Adéntrese en este tema, para entender cómo se estructuran y se implementan estas modalidades en beneficio de los niños y las familias!

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] ¿Qué son las modalidades de atención en educación inicial?     
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-1(data-aos="fade-left") Al abordar  las modalidades de atención en educación inicial, se descubre que estas no son simplemente estructuras estáticas, sino estrategias dinámicas y flexibles, diseñadas para garantizar que cada niña y cada niño, acceda a una educación integral y de calidad, desde los primeros años de su vida. Fundamentadas en la <b>Estrategia Nacional De Cero a Siempre</b>, estas modalidades tienen como propósito adaptarse a la diversidad de realidades socioculturales, económicas y geográficas, que caracterizan a Colombia. Su objetivo principal es asegurar que ningún niño o niña quede excluido del derecho a una atención integral, tal como lo establece la <b>Ley 1804 del 2016</b>.
        p(data-aos="fade-left") Ahora, imagine las distintas formas en las que la educación puede llegar a un niño en una zona rural de difícil acceso, a una comunidad indígena con unas costumbres propias o a una familia en un entorno urbano. Cada una de estas realidades demanda un enfoque único, y las modalidades de atención están diseñadas precisamente para responder a estas necesidades.

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            h5.mb-0 Reflexione un momento: 
            p.mb-0 ¿Qué impacto podría tener una modalidad de atención que respete las tradiciones de una comunidad mientras promueve el desarrollo integral del niño? Esto no solo garantiza el acceso a la educación, sino que también refuerza el sentido de identidad y pertenencia de los más pequeños.
    
    .row.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Profundizar en este tema permite comprender cómo las modalidades de atención trascienden los enfoques tradicionales. Son una invitación a participar activamente en la creación de entornos educativos que valoren la diversidad y busquen siempre el bienestar de la infancia. A medida que avanza en este estudio, pregúntese: 
    
        .bg-color-3.p-5.tarjeta(data-aos="fade-left")
          p.mb-1 ¿Qué acciones concretas pueden implementarse para fortalecer estas modalidades y adaptarlas, aún más, a las necesidades de cada región?
          p.mb-0 La educación inicial es más que un derecho; es el primer paso para construir un futuro lleno de oportunidades para todos los niños y niñas. 

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Conceptualización de las modalidades (familiar, institucional, comunitaria)
    
    p.mb-4 En el contexto de la educación inicial en Colombia, el Sistema de Educación Inicial del Ministerio de Educación Nacional (MEN), establece tres modalidades claves para garantizar el desarrollo integral de los niños y niñas en sus primeros años de vida. Estas modalidades son fundamentales para ofrecer una educación que se adapte a las distintas realidades de las familias colombianas, tanto en áreas urbanas como rurales, y considerando también los diferentes contextos socioeconómicos (Robayo Noreña, 2021). Conozcamos cada una de ellas:

    .row.align-items-start.mb-5
      .col-lg-5.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/5.png", alt="").mb-4.mb-lg-0
      .col-lg-7(data-aos="fade-left")
    
        AcordionA(tipo="b")
          .div(titulo="Modalidad familiar: el hogar como espacio de aprendizaje ")
            p.mb-0 Suponga que el hogar es el primer salón de clases de un niño. En la modalidad familiar, los padres, madres y cuidadores, juegan un papel crucial como primeros docentes. Aquí, el aprendizaje no se limita a lo que sucede dentro de las paredes de una institución, sino que se extiende a la vida cotidiana. Este modelo busca fortalecer las habilidades de los cuidadores, mediante talleres y capacitaciones, donde aprenden a crear un ambiente estimulante en casa. Actividades como la lectura, el juego y la conversación, se convierten en herramientas claves para promover el desarrollo cognitivo, emocional y social de los niños (Pinto Rodríguez, 2014).
            p.mb-0 Además, es importante tener en cuenta que este modelo resulta esencial en áreas rurales o de difícil acceso, donde las familias, aunque no tengan una institución educativa cerca, pueden involucrarse de manera activa en el proceso educativo de sus hijos. 
            p.mb-0 ¿Qué ejemplos de actividades cotidianas en su entorno podría utilizar para fomentar el aprendizaje en casa?

    
          .div(titulo="Modalidad institucional: espacios formales de atención educativa ")
            p.mb-0 Se basa en un enfoque más estructurado. En este, los niños asisten a centros educativos especializados como jardines infantiles o centros de desarrollo infantil, diseñados para ofrecer un espacio seguro y estimulante, donde los niños puedan aprender y desarrollarse de manera integral. Estos centros no solo brindan atención educativa, sino también servicios de salud y nutrición, lo que asegura que los niños reciban una atención completa.
            p.mb-0 Los equipos de profesionales, que incluyen psicólogos, docentes y nutricionistas, trabajan juntos para garantizar que los niños reciban la mejor educación posible. ¿Se imagina cómo sería un día típico en uno de estos centros? Los niños aprenden a socializar, explorar su creatividad y desarrollar habilidades cognitivas, en un ambiente pensado especialmente para ellos (ICBF, s.f.).
            p.mb-0 Este modelo es más común en las áreas urbanas, donde las familias, debido a sus dinámicas laborales, necesitan un lugar seguro donde sus hijos puedan recibir atención de calidad. La modalidad institucional asegura que todos los niños tengan acceso a una educación que promueva el desarrollo, tanto individual como colectivo.

    
          .div(titulo="Modalidad comunitaria: la participación local para la primera infancia")
            p.mb-0 Está dirigida a las comunidades más vulnerables, aquellas que no tienen fácil acceso a los servicios educativos institucionales. En este modelo, la comunidad juega un papel central. Líderes comunitarios capacitados, asumen el rol de mediadores educativos, brindando a los niños experiencias de aprendizaje dentro de sus propios entornos. Estos espacios pueden ser casas vecinales, salones comunales o cualquier lugar accesible y adecuado para la enseñanza.
            p.mb-0 Esta modalidad no solo busca educar a los niños, sino también fortalecer la cohesión social y crear redes de apoyo entre los miembros de la comunidad. ¿Le parece interesante que los niños reciban educación en su propia comunidad, adaptada a sus necesidades y realidades? Esta modalidad ha demostrado ser especialmente eficaz en comunidades donde el acceso a servicios educativos es limitado (Freire, 1970).

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/6.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") Como hemos visto, cada una de estas modalidades, familiar, institucional y comunitaria, está pensada para responder a contextos específicos. Cada modalidad tiene características propias, pero todas buscan lo mismo: asegurar que los niños reciban una educación de calidad que favorezca su desarrollo integral desde la primera infancia. En este sentido, el sistema educativo colombiano, trabaja para garantizar que cada niño, sin importar su lugar de residencia o condición social, tenga las herramientas necesarias para un crecimiento pleno.
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            h5.mb-0 Reflexione un momento: 
            p.mb-0 ¿Cómo estas modalidades pueden impactar el desarrollo de los niños en su comunidad? 
            p.mb-0 ¿Qué modalidad sería la más adecuada para los niños de tu entorno?

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Principios de atención integral en la primera infancia

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Los principios de atención integral en la primera infancia, constituyen las bases filosóficas y operativas que orientan las acciones dirigidas al bienestar y pleno desarrollo de las niñas y los niños, desde sus primeros años. 
    
    p Estos principios, promovidos por la Estrategia Nacional De Cero a Siempre, se fundamentan en el reconocimiento de la primera infancia como una etapa crucial para el desarrollo humano, en la cual deben garantizarse derechos esenciales como la educación, la salud, la nutrición, la protección y la participación (Ley 1804 del 2016).

    h5 Conozcamos algunos de sus principios:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="zoom-in")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Interés superior del niño
              p Uno de los principios centrales, que establece que todas las decisiones y acciones, deben priorizar el bienestar físico, emocional, social y cognitivo, de los menores. 
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Universalidad y equidad
              p Como complemento del anterior principio, busca garantizar que cada niño y niña, sin importar su contexto socioeconómico o cultural, tenga acceso a las mismas oportunidades de desarrollo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Integralidad
              p Este aspecto clave, promueve la articulación de diversos sectores, como la educación, la salud y la familia, para ofrecer una atención completa que responda a las múltiples necesidades de la infancia. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Participación activa
              p Este principio, reconoce a los niños como sujetos de derechos y promueve su involucramiento en los procesos que les conciernen, respetando siempre su edad y capacidades.

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            h5.mb-0 Reflexione un momento: 
            p.mb-0 estos principios no solo guían las políticas públicas, sino que también invitan a repensar la forma en que se concibe y se ejecuta la atención integral. Reflexione: ¿cómo se puede garantizar que estos principios se reflejen en las prácticas diarias dentro de los hogares, las escuelas y las comunidades? Este cuestionamiento abre la puerta a evaluar la coherencia entre los marcos normativos y la realidad en el terreno.
    
    p.mb-4 Profundizar en estos principios es esencial para comprender cómo un enfoque integral puede transformar la vida de los niños y las niñas, ofreciendo no solo oportunidades de desarrollo, sino también un entorno que respalde su potencial humano en todas sus dimensiones. Como se plantea en la Estrategia Nacional De Cero a Siempre, atender la primera infancia, es construir el futuro de una sociedad más justa y equitativa.

    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Requisitos y estándares de calidad, según el MEN
    
    p.mb-4 La calidad educativa en la primera infancia es un pilar esencial para el desarrollo integral de los niños y niñas.

    .bg-color-5.shadow-soft.py-4.px-lg-5.mb-5
      .row.justify-content-around.align-items-center
        .col-md-auto
          img(src="@/assets/template/bg-icono-pdf.svg", style="width: 90px;")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Requisitos y estándares de calidad
              p En el PDF <b>Requisitos y estándares de calidad</b>, se analizan los lineamientos establecidos por el Ministerio de Educación Nacional, que incluyen aspectos clave como infraestructura adecuada, formación continua del personal educativo, un currículo flexible y un sistema de evaluación constante. Este contenido busca reflexionar sobre cómo estos estándares garantizan una educación inclusiva, equitativa y de calidad.
            .col-sm-auto
              a.boton.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-arrow-right

    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Inclusión y equidad en la educación     
    
    p(data-aos="fade-up") Uno de los principios más importantes promovidos por el Ministerio de Educación Nacional (MEN), es la inclusión. Todos los niños, sin importar su contexto social, económico o geográfico, deben tener acceso a una educación inicial de calidad. Este principio fundamental implica que las instituciones educativas deben eliminar cualquier tipo de barrera que impida la participación de los niños en los procesos educativos. El MEN fomenta políticas de equidad, garantizando que todos los niños, especialmente aquellos en situación de vulnerabilidad, tengan las mismas oportunidades de acceso y participación (Ministerio de Educación Nacional, s.f.).
    p(data-aos="fade-down") Para lograr una verdadera inclusión y equidad en la educación inicial, es crucial adoptar acciones concretas en los centros educativos. Entre estas acciones, se destacan la adaptación de los entornos físicos y curriculares para responder a las necesidades de todos los niños. Esto puede incluir la eliminación de barreras arquitectónicas, la provisión de materiales didácticos accesibles y la implementación de estrategias pedagógicas inclusivas (Jiménez & Quintana, 2020).
    h5.mb-5 Las acciones concretas para promover la inclusión y la equidad, son:

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100.text-center
              img.custom-image-card__image(src="@/assets/curso/tema1/12.png" alt="")
              .custom-image-card__text.p-4
                h5 Adaptación del entorno físico
                p.mb-0 Asegurar que los espacios sean accesibles para todos los niños, independientemente de sus habilidades físicas. Esto puede implicar la instalación de rampas, ascensores y baños adaptados.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100.text-center
              img.custom-image-card__image(src="@/assets/curso/tema1/13.png" alt="")
              .custom-image-card__text.p-4
                h5 Materiales didácticos accesibles
                p.mb-0 Proveer materiales educativos, como libros en braille, juguetes adaptados y recursos digitales accesibles, que puedan ser utilizados por niños con diversas capacidades.
    
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100.text-center
              img.custom-image-card__image(src="@/assets/curso/tema1/14.png" alt="")
              .custom-image-card__text.p-4
                h5 Formación de educadores
                p.mb-0 Capacitar a los educadores en metodologías inclusivas y en el manejo de la diversidad en el aula. Esto incluye la sensibilización sobre las diferentes necesidades y la promoción de un ambiente de respeto y aceptación.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100.text-center
              img.custom-image-card__image(src="@/assets/curso/tema1/15.png" alt="")
              .custom-image-card__text.p-4
                h5 Participación de la comunidad
                p.mb-0 Involucrar a las familias y a la comunidad en el proceso educativo, fomentando una colaboración estrecha que enriquezca el entorno educativo y responda a las necesidades específicas de cada niño.

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            h5.mb-0 Reflexión: 
            p.mb-0 A medida que se estudian los <b>requisitos y estándares de calidad</b> establecidos por el MEN, se hace evidente la importancia de crear un entorno educativo que responda a las necesidades de cada niño. ¿Cómo pueden los profesionales de la educación influir en la implementación de estos estándares para mejorar la educación infantil? Al reflexionar sobre estos principios, no solo se adquiere un conocimiento más profundo del sistema educativo colombiano, sino que también se adquieren herramientas valiosas para implementar prácticas que favorezcan el desarrollo integral de los niños.
    
    #t_1_6.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.6] Infraestructura y perfil del talento humano 

    p Imaginemos un espacio donde cada rincón está diseñado para fomentar el desarrollo de los niños desde sus primeros años: colores vivos, materiales seguros y áreas que invitan al juego, la exploración y el aprendizaje. Ese es el ideal de infraestructura en el sistema de educación inicial, pero ¿cómo se logra en un país tan diverso como Colombia? Y, sobre todo, ¿quiénes son los responsables de hacer de esos espacios un lugar de crecimiento integral?
    
    .bg-color-6.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 En el sistema de educación inicial, la infraestructura va mucho más allá de un lugar donde los niños asisten a diario. Se trata de construir entornos que estimulen su creatividad, respeten su seguridad y respondan a sus necesidades. Por ejemplo:

    .row.align-items-start.mb-5
      .col-lg-5.order-2(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/16.png", alt="").mb-4.mb-lg-0
      .col-lg-7.order-1.mb-3.mb-lg-0(data-aos="fade-left")
    
        AcordionA(tipo="b")
          .div(titulo="Seguridad y estímulo")
            p.mb-0 Los espacios deben ser seguros, con mobiliario adecuado para la edad y materiales que estimulen los sentidos. Un aula no solo es un lugar para aprender; también es un espacio para descubrir y crear.

    
          .div(titulo="Adaptación a contextos locales")
            p.mb-0 En regiones rurales, los espacios pueden ser más flexibles y aprovechar recursos naturales, mientras que en ciudades grandes se requieren ambientes especializados. ¿Cómo podrían estas diferencias enriquecer el aprendizaje de los niños?
    
          .div(titulo="Accesibilidad universal")
            p.mb-0 Ningún niño debería enfrentar barreras para aprender. ¿Cómo se garantiza que los espacios sean inclusivos para todos, incluyendo aquellos con discapacidades físicas o sensoriales?
    
    p.mb-4 Si la infraestructura es el escenario, los agentes educativos son los protagonistas. Estas personas no solo enseñan; también inspiran y acompañan a los niños en sus primeros pasos hacia el desarrollo integral. Conozcamos qué debe tener un buen docente:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/17.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="36%" y="33%" numero="+")
                h5 Formación especializada
                p Un buen docente tiene conocimientos sólidos sobre desarrollo infantil y pedagogía. Pero no basta con saber, ¿cómo se asegura que también se actualicen constantemente?
      
              .bg-color-white.box-shadow.p-3(x="20%" y="57.5%" numero="+")
                h5 Habilidades socioemocionales
                p Más allá de la técnica, la empatía y la capacidad de conectar emocionalmente con los niños, son esenciales. ¿Qué tanto se valora esta dimensión en la práctica educativa?
      
              .bg-color-white.box-shadow.p-3(x="36%" y="83%" numero="+")
                h5 Trabajo interdisciplinario
                p Un docente en este nivel trabaja en equipo con psicólogos, trabajadores sociales y profesionales de la salud. ¿Cómo se fomenta esta colaboración en el día a día?
    
    .bg-color-6.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 En algunos lugares, los espacios no son adecuados o faltan docentes capacitados. Esto plantea una pregunta importante: ¿qué más se puede hacer para garantizar que todos los niños reciban la mejor atención posible, sin importar dónde vivan?

    .row.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema1/18.png", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        h5 Colombia: avances y desafíos
        p(data-aos="fade-left") Gracias a la Estrategia Nacional De Cero a Siempre, se han creado Centros de Desarrollo Infantil (CDI) en varias regiones, y se han impulsado programas de formación para docentes. Sin embargo, persisten retos como ampliar la cobertura y garantizar la sostenibilidad de estas iniciativas.
    
        .bg-color-3.p-5.tarjeta(data-aos="fade-left")
          p.mb-0 ¿Es suficiente lo que se ha hecho hasta ahora? Reflexionar sobre la infraestructura y el talento humano en la educación inicial no es solo un ejercicio académico; es una oportunidad para imaginar y proponer soluciones que impacten positivamente, en la vida de los niños.



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.mineducacion.gov.co/1621/articles-341810_archivo_pdf_sentido_de_la_educacion.pdf" target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (s.f.). Sentido de la educación inicial. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/elibrocom/titulos/114132 " target="_blank" rel="noopener noreferrer") Serrano Romero, A. & Santos Rodríguez, M. (2014). Proyecto de atención a la infancia: ciclo formativo: educación infantil: ( ed.). Ministerio de Educación y Formación Profesional de España. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.mineducacion.gov.co/ " target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional de Colombia. (n.d.). Desarrollo infantil y competencias en la Primera infancia.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.labster.com/" target="_blank" rel="noopener noreferrer") Labster (educación).


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=NJd1iOSsqKw&ab_channel=permisoparasernino " target="_blank" rel="noopener noreferrer") Permisoparasernino ( 19 dic 2013). La importancia de la infancia 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
