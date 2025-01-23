<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") La educación infantil en Colombia, desempeña un papel crucial en el desarrollo integral de los niños y niñas durante su primera infancia, considerada una etapa determinante para la adquisición de habilidades cognitivas, emocionales y sociales. En este marco, la <b>Unidad 1, Sistema de educación inicial del Ministerio de Educación Nacional</b>, se centra en describir y analizar los lineamientos y estrategias implementados por el MEN y el ICBF, los cuales buscan garantizar una atención integral de calidad para la primera infancia.
    
        .bg-color-1.p-5(data-aos="fade-left")
          p.mb-0 Al abordar esta unidad, se espera que el estudiante comprenda el proceso del sistema de educación inicial, identificando las modalidades de atención, los mecanismos de seguimiento, y las actividades rectoras que fundamentan las prácticas pedagógicas en este nivel educativo. Este conocimiento resulta esencial para diseñar, implementar y evaluar programas enfocados en el desarrollo y bienestar de la primera infancia, un área de gran impacto social y educativo.
    
    p El contenido de esta unidad, cobra relevancia no solo por su aporte al ámbito académico y profesional, sino también por su influencia directa en la construcción de un sistema educativo, equitativo e inclusivo. Profundizar en estos temas, permitirá reflexionar sobre el impacto de las políticas públicas y las prácticas pedagógicas en el fortalecimiento del tejido social y en el futuro del país.
    h5.mb-4 Esta unidad está organizada en tres temas:

    .row.align-items-start.mb-5
      .col-lg-5.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/intro/2.png", alt="").mb-4.mb-lg-0
      .col-lg-7(data-aos="fade-left")
    
        AcordionA(tipo="b")
          .div(titulo="Modalidades y condiciones")
            p Donde se analizarán los tipos de atención existentes y los estándares de calidad que rigen su implementación.
    
          .div(titulo="Sistema de seguimiento")
            p Enfocado en las herramientas e indicadores que permiten evaluar el desarrollo infantil y monitorear los programas de atención.
    
          .div(titulo="Actividades rectoras")
            p Que incluyen el juego, el arte, la literatura y la exploración del medio, como fundamentos pedagógicos.
    
    .bg-full-width.bg-color-1
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 A lo largo de la unidad, se espera su participación activa en las actividades propuestas, como la lectura de materiales y la realización de ejercicios prácticos. Este compromiso contribuirá a consolidar los aprendizajes esperados y a lograr los resultados establecidos. ¡Comencemos este viaje de aprendizaje juntos!
    
          

</template>
