<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Actividades rectoras'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Es hora de iniciar el estudio de las modalidades y condiciones del sistema de educación inicial. Este tema le proporcionará una visión clara de las diferentes formas en las que se organiza la educación para la primera infancia en Colombia, incluyendo las modalidades familiar, institucional y comunitaria.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Principios y fundamentos pedagógicos de las actividades rectoras

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Las <b>actividades rectoras</b>, dentro del sistema de educación inicial, son esenciales para el desarrollo integral de los niños en sus primeras etapas de vida. Estas actividades no solo buscan promover el aprendizaje académico, sino también fomentar el desarrollo social, emocional y físico de los niños.  
      
    p Para que estas actividades sean efectivas, deben basarse en principios pedagógicos sólidos y estar diseñadas, de acuerdo con las necesidades y características de cada niño (Rodríguez, 2019).
    h5.mb-4 Conozcamos algunos de estos principios:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3.bg-color-8(titulo="Enfoque centrado en el niño" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Enfoque centrado en el niño
            p Este enfoque propone que el niño debe ser el protagonista de su propio aprendizaje. Las actividades deben adaptarse a sus necesidades, intereses y ritmos de desarrollo. De esta manera, se crea un ambiente en el que el niño se siente motivado para explorar y aprender por sí mismo. En lugar de ser un receptor pasivo de información, el niño se convierte en un aprendiz activo, lo que facilita un aprendizaje más profundo y significativo (Jiménez y Quintana, 2020).
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/3.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3.bg-color-8(titulo="Aprendizaje a través del juego" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Aprendizaje a través del juego
            p En la infancia, el juego no es solo una actividad recreativa, sino un vehículo fundamental para el aprendizaje. Mediante el juego, los niños desarrollan habilidades cognitivas, motoras y sociales. Por ejemplo, cuando un niño juega con bloques, no solo está aprendiendo sobre formas y tamaños, sino que también está desarrollando su capacidad para resolver problemas, trabajar en equipo y coordinar sus movimientos. Las actividades rectoras deben incluir juegos que estimulen estos aspectos del desarrollo infantil (Gonzales et al., 2021).
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/4.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3.bg-color-8(titulo="Promover un desarrollo integral" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Promover un desarrollo integral
            p Las actividades rectoras, también deben promover un desarrollo integral, es decir, deben tener en cuenta todos los aspectos del crecimiento del niño: intelectual, emocional, social y físico. Un niño que participa en actividades que favorecen tanto su desarrollo cognitivo como el emocional, por ejemplo, será más capaz de manejar sus emociones, interactuar de manera positiva con otros niños y desarrollar habilidades de comunicación. Es crucial que las actividades rectoras proporcionen un balance entre estos diferentes tipos de aprendizaje (Mérida & Ramírez, 2015).
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/5.png', alt='', style="width: 100%;")
    
      .tabs-content.border.px-4.p-md-5.py-3.bg-color-8(titulo="Inclusión y equidad" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Inclusión y equidad
            p El principio de inclusión y equidad también es esencial en el diseño de las actividades rectoras. Esto significa que las actividades deben estar pensadas para que todos los niños, independientemente de su contexto o capacidades, puedan participar y beneficiarse de ellas. Las actividades deben adaptarse a las necesidades de cada niño, asegurando que todos tengan las mismas oportunidades de aprender y desarrollarse. Esto puede incluir actividades que fomenten la cooperación y el respeto por las diferencias, promoviendo un ambiente inclusivo y respetuoso para todos.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/6.png', alt='', style="width: 100%;")
    
    .bg-color-1.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Finalmente, las actividades rectoras deben fomentar la colaboración con las familias. La participación activa de los padres y cuidadores, es clave en el proceso de desarrollo de los niños. Las actividades rectoras deben incluir elementos que permitan una interacción constante entre la escuela y el hogar, de manera que los padres puedan involucrarse en el aprendizaje de sus hijos. Esto no solo fortalece el vínculo entre la escuela y la familia, sino que también asegura un seguimiento constante del desarrollo del niño, en diferentes contextos (Flores-Flores, 2021).
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Fundamentos pedagógicos
    
    p.mb-4 Las actividades rectoras están basadas en principios pedagógicos como:

    .row.align-items-start.mb-5
      .col-lg-5.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/7.png", alt="").mb-4.mb-lg-0
      .col-lg-7(data-aos="fade-left")
    
        AcordionA(tipo="b")
          .div(titulo="El constructivismo")
            p.mb-0 Propone que el aprendizaje se construye de manera activa, a través de la interacción del niño con su entorno. Según este enfoque, los niños no son simplemente receptores de información, sino que son actores activos en su proceso de aprendizaje. Esto se traduce en actividades que permitan a los niños experimentar, explorar y aprender de manera práctica (Piaget, 1976).

    
          .div(titulo="Aprendizaje significativo")
            p.mb-0 Desarrollado por David Ausubel, también es clave. Este principio señala que el aprendizaje es más efectivo cuando se conecta con conocimientos previos del niño. Por ejemplo, si un niño ya ha tenido experiencias previas con animales, una actividad que le enseñe sobre diferentes especies, será más relevante y comprensible. Esto facilita la integración de nuevos conocimientos con lo que ya se sabe, haciendo el aprendizaje más significativo (Ausubel, 1968).

    
          .div(titulo="El enfoque socioemocional ")
            p.mb-0 Es fundamental en las actividades rectoras. Este enfoque promueve el desarrollo de habilidades sociales y emocionales, como la empatía, la resolución de conflictos y la cooperación. Las actividades rectoras deben ofrecer oportunidades para que los niños interactúen entre sí, gestionen sus emociones y desarrollen habilidades para convivir de manera armoniosa con otros (Goleman, 1995).

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Al comprender los principios y fundamentos pedagógicos de las actividades rectoras, es posible pensar en cómo diseñar actividades que realmente favorezcan el desarrollo integral de los niños. ¿Cómo se pueden crear experiencias que fomenten tanto el aprendizaje cognitivo como emocional? La clave está en diseñar actividades que no solo sean educativas, sino que también sean inclusivas, participativas y centradas en el niño.
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Las <b>actividades rectoras</b> juegan un papel crucial en la construcción de un entorno de aprendizaje positivo y enriquecedor para los niños, ayudándoles a desarrollarse en todas las áreas necesarias para su crecimiento.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0(data-aos="fade-up")
        p.mb-0.py-4.px-5.bg-color-5 Tras haber comprendido los principios y fundamentos pedagógicos de las actividades rectoras, es momento de profundizar en cómo el juego, el arte, la literatura y la exploración del medio, se convierten en ejes fundamentales para el desarrollo infantil. 
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-down")
        Figure
          img(src='@/assets/curso/tema3/9.png', alt='', style="width: 100%;")
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-up")
        p.mb-0.py-4.px-5.bg-color-2 En el contexto de la educación infantil, el juego, el arte, la literatura y la exploración del medio, son reconocidos como ejes fundamentales dentro de las actividades rectoras. 
    
    p.mb-4 Estas actividades no solo son herramientas pedagógicas, sino que son esenciales para el desarrollo integral de los niños, estimulando tanto su creatividad como su capacidad cognitiva, emocional y social. En este sentido, es importante comprender cómo estos elementos contribuyen al proceso de aprendizaje en los primeros años de vida:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="zoom-in")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Juego 
              p El <b>juego</b> se considera una de las formas más naturales y efectivas de aprendizaje en la infancia, porque permite que los niños exploren el mundo que les rodea, desarrollando habilidades cognitivas y sociales, a través de la interacción con su entorno y con otros niños. A través del juego, los niños no solo aprenden a resolver problemas, sino que también adquieren competencias emocionales al experimentar y gestionar diferentes emociones en situaciones simuladas.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Arte
              p El <b>arte</b> también juega un papel clave, dado que ofrece a los niños un medio para expresar sus emociones, pensamientos e ideas. El arte, en sus diversas formas, como la pintura, la música, la danza y el teatro, fomenta la creatividad, la imaginación y la capacidad de comunicación. A través de estas actividades, los niños desarrollan habilidades motoras finas, aprenden a trabajar en equipo y, lo más importante, encuentran una vía para comprender y procesar el mundo que les rodea. El arte también contribuye al desarrollo cognitivo, porque involucra la observación, la toma de decisiones y la resolución de problemas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Literatura
              p La <b>literatura</b>, por su parte, tiene una gran influencia en el desarrollo del lenguaje y las habilidades cognitivas de los niños. A través de los libros, los niños no solo aprenden nuevas palabras y conceptos, sino que también adquieren una comprensión más profunda de su entorno y de las emociones humanas. La lectura compartida fomenta la empatía y permite que los niños desarrollen una comprensión más amplia de la diversidad, los valores y las relaciones interpersonales. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Exploración del medio
              p La <b>exploración del medio</b> es fundamental, dado que permite que los niños descubran y comprendan el mundo natural y social en el que viven. Esta exploración no solo involucra la observación del entorno físico, sino también el aprendizaje de cómo los seres humanos interactúan con su entorno y con los demás. La observación, el análisis y la experimentación, son herramientas esenciales para que los niños desarrollen un pensamiento crítico y reflexivo, sobre el mundo que los rodea.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Para garantizar una educación integral en la primera infancia, es fundamental integrar actividades rectoras, como el juego, el arte, la literatura y la exploración del medio, en el currículo, de manera efectiva. Estas actividades no solo estimulan el desarrollo cognitivo y emocional de los niños, sino que también favorecen la adquisición de habilidades sociales y el descubrimiento del mundo que los rodea (Elkonin, 1971).
        p(data-aos="fade-left") Ahora, se propone profundizar en las estrategias para integrar estas actividades rectoras en el currículo, lo cual permitirá entender cómo organizar y aplicar estos enfoques pedagógicos de manera coherente y eficiente. Es esencial conocer cómo estas actividades pueden ser utilizadas como herramientas de aprendizaje en todas las áreas, facilitando la participación activa y el aprendizaje significativo.
        
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Estrategias para integrar actividades rectoras en el currículo
    
    p.mb-4 A continuación, se invita a explorar las diferentes estrategias que pueden ser implementadas en el aula para maximizar el impacto de las actividades rectoras en el desarrollo integral de los niños.

    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Estrategias para integrar actividades rectoras en el currículo 
            p.mb-4(data-aos="fade-right") La integración de actividades rectoras en el currículo educativo es fundamental para promover un desarrollo integral en la infancia. En el PDF <b>Estrategias para integrar actividades rectoras en el currículo</b>, se presentan enfoques prácticos para incorporar el juego, el arte, la literatura y la exploración del medio en el proceso de enseñanza. Estas estrategias no solo enriquecen el aprendizaje, sino que también fomentan el desarrollo emocional, social y cognitivo de los niños, creando experiencias educativas significativas y transformadoras.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Estrategias para integrar actividades rectoras en el currículo .
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/15.png', alt='')







    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.mineducacion.gov.co/portal/?form=MG0AV3 " target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (2020). Centros de Desarrollo Infantil: Mejorando el Futuro de los Niños.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.mineducacion.gov.co/portal/?form=MG0AV3 " target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (2021). Evaluación de políticas públicas en educación infantil. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.mineducacion.gov.co/portal/Educacion-inicial/Sistema-de-Educacion-Inicial/178032:Actividades-rectoras-de-la-primera-infancia-y-de-la-educacion-inicial " target="_blank" rel="noopener noreferrer") Actividades rectoras de la primera infancia y de la educación inicial - Actividades rectoras de la primera infancia y de la educación inicial. (s/f). Portal MEN - Presentación.    
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.miprimerainfancia.com/actividades-rectoras/ " target="_blank" rel="noopener noreferrer") Mi Primera Infancia. (s.f.). ¿Qué son las actividades rectoras en la primera infancia?. Mi Primera Infancia. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://mineducacion.gov.co/1780/w3-article-178032.html " target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (s.f.). Actividades rectoras de la primera infancia y de la educación inicial. Ministerio de Educación Nacional.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.teachy.app/es?form=MG0AV3 " target="_blank" rel="noopener noreferrer") Teachy
           


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=C7M6bJl_ryk" target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional (30 jun 2014). Referentes Técnicos para la Educación Inicial: Paso a paso.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema:
          'Sistema de Educación Inicial del Ministerio de Educación Nacional',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el objetivo principal del Sistema de Educación Inicial en Colombia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Brindar educación formal desde los primeros grados escolares',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Garantizar una atención integral de calidad para la primera infancia',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Reducir la tasa de deserción escolar',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Implementar programas de arte en las aulas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué modalidad de atención en educación inicial está dirigida principalmente a la educación dentro del hogar?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Modalidad institucional',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Modalidad comunitaria',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Modalidad familiar',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Modalidad educativa rural',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de los siguientes es un principio fundamental de la atención integral en la primera infancia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Enseñanza únicamente académica',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Inclusión y equidad',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Separación entre la educación y la salud',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Exclusión de las comunidades rurales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué entidad es responsable de implementar las políticas de educación inicial en Colombia, junto con el Ministerio de Educación Nacional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La Fiscalía General',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La Secretaría de Educación',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'El Ministerio de Cultura',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'El Instituto Colombiano de Bienestar Familiar (ICBF)',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es un requisito fundamental para las instituciones que brindan educación inicial en Colombia según el MEN?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Asegurar infraestructura de calidad',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Ofrecer programas extracurriculares',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Contar con docentes extranjeros',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Brindar almuerzos gratis',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
