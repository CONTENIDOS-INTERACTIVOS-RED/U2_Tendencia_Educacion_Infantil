<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Fundamentos de la política educativa colombiana en educación inicial'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5.align-items-center
      .col-lg-3.order-2
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-9.order-1.mb-3.mb-lg-0
        .bg-color-8.px-4.py-5(data-aos="fade-left")
          p ¿Alguna vez ha pensado en cómo las decisiones políticas impactan directamente en la calidad de la educación que reciben los niños desde sus primeros años de vida? Imagine un entorno educativo en el que cada niño, independientemente de su origen social o cultural, tenga acceso a las mismas oportunidades para desarrollarse de manera integral. Este es uno de los objetivos fundamentales de la política educativa en Colombia, un conjunto de normas y estrategias que buscan garantizar una educación inicial inclusiva, equitativa y de calidad para todos los niños del país.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0.order-2
            h2.mb-4(data-aos="flip-up") Fundamentos de la política educativa colombiana en educación inicial  
            p.mb-4(data-aos="fade-right") En el PDF <b>Fundamentos de la política educativa colombiana en educación inicial</b>, encontrará un análisis detallado de los principios rectores y los marcos normativos que han dado forma a la política educativa en Colombia. Este documento explora cómo se han establecido las bases legales para priorizar la educación inicial, promoviendo el acceso y la inclusión de los niños más vulnerables. Además, aborda los desafíos actuales en la implementación de políticas que aseguren entornos de aprendizaje seguros y estimulantes desde la primera infancia.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Fundamentos de la política educativa colombiana en educación inicial  .
    
          .col-lg-5.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/2.png', alt='')
    
    p.mb-4 Ahora que hemos comprendido la importancia de la educación inicial, es momento de adentrarnos en los fundamentos legales y normativos que respaldan esta etapa educativa. En este tema, explicaremos las leyes y normativas claves que guían la educación infantil en Colombia, asegurando su calidad y universalidad. 

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] ¿Qué son las modalidades de atención en educación inicial?     
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-9
        p(data-aos="fade-left") En este tema, analizaremos cómo las leyes y regulaciones establecen las bases para garantizar una educación de calidad desde los primeros años de vida. Este marco legal no solo define derechos, sino que también orienta acciones concretas para proteger y promover el desarrollo integral de los niños. Prepárese para analizar cómo estas normativas impactan directamente en la construcción de un futuro más equitativo y lleno de oportunidades.
        h5(data-aos="fade-left") Constitución Política de 1991 y la primera infancia
        p(data-aos="fade-left") Para comprender la relevancia de los fundamentos legales en la educación inicial, es crucial partir de la Constitución Política de Colombia de 1991, que se erige como el pilar normativo de las políticas públicas del país. Esta Carta Magna, al consagrar los derechos fundamentales, posiciona a la niñez como una prioridad, reconociéndose como una etapa vital que demanda atención y protección preferente:
    
    .row.align-items-start.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-2(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/4.png", alt="").mb-4.mb-lg-0
      .col-lg-7.order-1(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Artículo 44")
            p.mb-0 El Artículo 44 de la Constitución, establece que los derechos de los niños son prevalentes frente a los de los demás. Esto incluye derechos como la vida, la salud, la educación, la recreación, una familia y la protección frente al abandono o el maltrato, que deben garantizarse de manera prioritaria. Este principio no es solo una aspiración ética, sino un mandato legal que requiere la acción articulada del Estado, las familias y la sociedad para hacerlo efectivo.
          .div(titulo="Artículo 67")
            p.mb-0 En el ámbito de la educación, el Artículo 67 refuerza esta visión al declarar que la educación es un derecho fundamental y un servicio público con función social, bajo principios de calidad, equidad y acceso universal. En el caso de la educación inicial, estos principios adquieren un significado especial al ser reconocida como una etapa determinante para el desarrollo integral de los niños. Aquí no se trata únicamente de preparar al niño para el ámbito académico, sino de fomentar su desarrollo cognitivo, emocional, físico y social, sentando bases sólidas para el resto de su vida.
    
    p La relevancia de estos principios se refleja en políticas como <b>De Cero a Siempre</b>, una estrategia nacional que articula esfuerzos multisectoriales para garantizar la atención integral de la primera infancia. Este enfoque incluye componentes educativos, de salud, nutricionales y de protección, reconociendo que todos estos aspectos son interdependientes y esenciales para el desarrollo infantil temprano. Esta política busca romper ciclos de pobreza y desigualdad desde las primeras etapas de la vida, marcando una diferencia significativa en el bienestar de la sociedad.

    p.mb-4 En este contexto, se invita a reflexionar: 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="zoom-in")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 ¿Qué implica realmente que los derechos de los niños sean prevalentes?
              p No solo es una obligación para el Estado, sino también una responsabilidad compartida por todos los actores sociales. Garantizar estos derechos es sembrar las bases de una sociedad más equitativa y humana.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 ¿Qué sucede cuando estos derechos no se cumplen?
              p La falta de acceso a una educación inicial de calidad puede perpetuar desigualdades y privar a los niños de desarrollar su máximo potencial. Esta es una invitación a analizar cómo los principios constitucionales se convierten en políticas y cómo estas impactan la vida de los niños en diferentes contextos, incluyendo comunidades rurales, zonas urbanas marginadas y familias en condiciones de vulnerabilidad.
    
    p.mb-4 La educación inicial, respaldada por el marco constitucional, no solo constituye un derecho de los niños, sino una inversión que beneficia al conjunto de la sociedad. Desde esta perspectiva, garantizar una educación inclusiva, equitativa y de calidad es una oportunidad para construir un futuro más justo, equitativo y sostenible.
    
    .bg-full-width.bg-color-11.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/template/1.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Cuando se prioriza la educación inicial desde un marco constitucional, se están sembrando las bases para un futuro más justo. Esta etapa es una oportunidad única para intervenir de manera efectiva en el desarrollo cognitivo, emocional y social del niño. Es un llamado para reconocer que la primera infancia no solo es responsabilidad de la familia, sino también del Estado y de la sociedad.
    
    p Ahora, se invita a analizar cómo estos principios constitucionales se materializan en políticas específicas y cómo estas impactan en la vida de los niños. ¿Qué sucede cuando estos derechos no se garantizan? Es una pregunta que debe guiar nuestro compromiso como educadores, gestores y ciudadanos.
    p.mb-4 Lo invitamos a conocer otros fundamentos legales y normativos y aspectos importantes de la política educativa colombiana en la educación inicial.

    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Ley General de Educación (Ley 115 de 1994) 
            p(data-aos="fade-right") Esta es una de las normativas más importantes en el contexto educativo colombiano, ya que establece los lineamientos fundamentales que guían el sistema educativo en todos sus niveles, desde la educación inicial hasta la media. Este marco legal no solo garantiza el acceso a la educación como un derecho fundamental, sino que también define las responsabilidades del Estado, la familia y la comunidad en la formación de los ciudadanos.
            p(data-aos="fade-left") En el PDF Ley General de Educación, se analiza en profundidad cómo esta ley busca asegurar una educación inclusiva, equitativa y de calidad, haciendo énfasis en la formación integral de los estudiantes. A través de este documento, se explorarán las disposiciones legales que promueven la cobertura educativa, el mejoramiento de la calidad, la participación de las familias y el fortalecimiento del vínculo entre la educación y el desarrollo social del país.
            p(data-aos="fade-right") Este análisis permitirá comprender la relevancia de la Ley 115 en la transformación del sistema educativo colombiano y en la creación de oportunidades para que todos los niños y niñas accedan a un entorno educativo que favorezca su desarrollo integral y contribuyan, en el futuro, al bienestar de la sociedad.

    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ley General de Educación (Ley 115 de 1994) .
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/7.png', alt='')



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://redaprende.colombiaaprende.edu.co/recursos/colecciones/HSDM4BFF8M6/YOVEJTBW1PB/33074 " target="_blank" rel="noopener noreferrer") S/f-e). Edu.co. Recuperado el 21 de diciembre de 2024.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://politicaseducativasalvi.blogspot.com/2014/04/bases-y-fundamento-de-la-politica.html " target="_blank" rel="noopener noreferrer") De cero a siempre  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://escueladelicbf.icbf.gov.co/" target="_blank" rel="noopener noreferrer") Plataforma Virtual ICBF   
           


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Znc0zvEO470 " target="_blank" rel="noopener noreferrer") Universidad Pedagógica Nacional. (7 septiembre 2015). La infancia como sujeto de derechos según UNICEF.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=s2aHj-cLVP4 " target="_blank" rel="noopener noreferrer") Universidad Pedagógica Nacional. (14 noviembre 2013). Encuentro de prácticas y saberes para la primera infancia.

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
