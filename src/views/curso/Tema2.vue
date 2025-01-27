<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Antecedentes de la política educativa colombiana en educación inicial'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 A continuación, se abordará el tema de los antecedentes, un aspecto fundamental para comprender el contexto y la evolución de las estrategias educativas dirigidas a la primera infancia en el país. 

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10
        .tarjeta-avatar-b.mb-5.align-items-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/1.png' alt='AvatarTop')
          .tarjeta.bg-color-12
            .p-5
              p.mb-0 Analizar los antecedentes nos permitirá identificar los logros y desafíos previos, así como las bases sobre las que se han construido las políticas actuales. Este recorrido histórico es clave para entender cómo Colombia ha ido ajustando su enfoque en la educación inicial para garantizar una atención integral y de calidad desde los primeros años de vida.
    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Evolución histórica de la educación inicial en Colombia

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-9
        p(data-aos="fade-left") Para entender profundamente la evolución de la política educativa en Colombia, especialmente en lo que respecta a la educación inicial, es esencial recorrer los periodos claves y los hitos más relevantes que han marcado la trayectoria de este proceso. Estos momentos no son solo fechas o cambios legislativos; son puntos de inflexión que reflejan las necesidades sociales, culturales y económicas del país, a la vez que ponen de manifiesto el compromiso del Estado y la sociedad con la educación desde los primeros años de vida.
        .bg-color-2.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/template/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 La historia de la educación inicial en Colombia es un relato fascinante de transformación y progreso, marcado por hitos que reflejan cómo el país ha priorizado la atención a sus ciudadanos más pequeños. 
    
    p.mb-4 Realicemos un recorridos por esos períodos claves e hitos más relevantes:

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .tarjeta.bg-color-white.p-4
          PasosB.color-acento-contenido
            .row(titulo="").justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-3.mb-lg-0
                h3 1844 a 1870
                p.mb-0 Entre 1844 y 1870, las primeras instituciones, como las salas de asilo y el preescolar Yerbabuena, ofrecían más cuidado, que formación educativa. Incluso en 1870, con la creación del Hospicio de Bogotá, el énfasis seguía siendo proteger a la infancia más vulnerable (López Portela & Pro-Bueno, 2020).
              .col-md-8.col-lg-5
                figure
                  img(src='@/assets/curso/tema2/4.png', alt='Texto que describa la imagen')
            .row(titulo="").justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-3.mb-lg-0
                h3 1914 a 1962
                p.mb-0 Entre 1914 y 1962, el panorama cambió. Este período vio el nacimiento de iniciativas como la Casa de los Niños del Gimnasio Moderno, en 1914, y el Instituto Pedagógico Nacional, en 1917, donde la educación inicial comenzó a adquirir un enfoque más estructurado y formativo. Estas instituciones marcaron el inicio de una nueva manera de entender la educación en los primeros años (López Portela & Pro-Bueno, 2020).
              .col-md-8.col-lg-5
                figure
                  img(src='@/assets/curso/tema2/5.png', alt='Texto que describa la imagen')
            .row(titulo="").justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-3.mb-lg-0
                h3 1968 a 1989
                p.mb-0 En 1968 Colombia acaba de fundar el Instituto Colombiano de Bienestar Familiar (ICBF). ¿Qué impacto tuvo esto? Durante la etapa de 1968 a 1989, el preescolar se generalizó con iniciativas como los Centros de Atención Integral al Preescolar (CAIP) y el reconocimiento del término "educación inicial" en 1988. Este período sentó las bases para que el acceso a la educación temprana, se convirtiera en un objetivo nacional (López Portela & Pro-Bueno, 2020).
              .col-md-8.col-lg-5
                figure
                  img(src='@/assets/curso/tema2/6.png', alt='Texto que describa la imagen')
            .row(titulo="").justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-3.mb-lg-0
                h3 1991 a 2006
                p.mb-0 Con la Constitución Política, la educación se declaró un derecho fundamental. Pero esto no quedó solo en palabras. En 1994, la Ley General de Educación, reforzó este compromiso, mientras que, en el 2006, se adoptó una política pública para la primera infancia, consolidando un enfoque integral para su desarrollo. (López Portela & Pro-Bueno, 2020).
              .col-md-8.col-lg-5
                figure
                  img(src='@/assets/curso/tema2/7.png', alt='Texto que describa la imagen')
            .row(titulo="").justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-3.mb-lg-0
                h3 2007 a 2013
                p.mb-0 En los años 2007 a 2013, Colombia reafirmó su compromiso con la primera infancia, a través del Conpes 109 y la creación de la Comisión Intersectorial para la Atención Integral a la Primera Infancia. Este período demostró que la educación inicial ya no era solo un tema de cuidado, sino una prioridad en la agenda pública. 
              .col-md-8.col-lg-5
                figure
                  img(src='@/assets/curso/tema2/8.png', alt='Texto que describa la imagen')
            .row(titulo="").justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-3.mb-lg-0
                h3 2016 a la actualidad
                p.mb-0 Y hoy, en la etapa actual que comenzó en el 2016, la Ley 1804 y las Bases Curriculares del 2017, nos recuerdan que el camino continúa. El enfoque ahora no solo es inclusivo, sino también práctico, con un objetivo claro: garantizar una educación de calidad para todos los niños, desde sus primeros años (López Portela & Pro-Bueno, 2020).
              .col-md-8.col-lg-5
                figure
                  img(src='@/assets/curso/tema2/9.png', alt='Texto que describa la imagen')
    
    .bg-full-width.bg-color-11.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/template/1.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Así, la historia de la educación inicial en Colombia, nos invita a reflexionar sobre cómo cada etapa ha construido un sistema más inclusivo e integral. Pero también nos deja una pregunta abierta: ¿qué nuevos hitos alcanzaremos en el futuro para seguir fortaleciendo la educación de nuestros niños?

    .row.mb-5.align-items-center
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")
      .col-lg-7.mb-3.mb-lg-0
        .bg-color-13.p-4(data-aos="fade-left").mb-3
          p.mb-0 Los <b>periodos claves y los hitos relevantes</b> en la política educativa colombiana, muestran un <b>proceso continuo de avance</b> hacia la construcción de un sistema que no solo garantice acceso, sino que también brinde una educación integral, inclusiva y equitativa. 
        p(data-aos="fade-left") Sin embargo, es fundamental continuar reflexionando sobre cómo mejorar la implementación de estas políticas, para que sus beneficios realmente lleguen a todos los niños y niñas del país. 
        p.mb-0 Una vez comprendido el panorama histórico y nacional de la política educativa en Colombia, resulta crucial dar un paso hacia el <b>análisis de las influencias internacionales</b> que han tenido un impacto significativo en la configuración de la <b>educación inicial</b> en el país. En este contexto, es esencial mencionar la <b>UNESCO</b> y los <b>Objetivos de Desarrollo Sostenible (ODS)</b>, dos actores globales cuyo enfoque ha orientado muchas de las políticas y reformas educativas a nivel mundial y, por ende, ha influido directamente en la educación inicial en Colombia. Por ejemplo:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="zoom-in")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              p Supongamos un escenario en el que el desarrollo de cada niño y niña no solo depende de políticas locales, sino que también está respaldado por acuerdos y compromisos globales. Esa es la realidad de la educación inicial en Colombia, que ha sido profundamente influenciada por las orientaciones de la <b>UNESCO</b> y los <b>Objetivos de Desarrollo Sostenible (ODS)</b>. Estos marcos internacionales actúan como brújulas, orientando a los países hacia metas comunes, pero con la libertad de adaptar sus estrategias a las necesidades locales.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              p ¿Qué ha dicho la <b>UNESCO</b> sobre la educación inicial? La UNESCO ha liderado un llamado universal que pone a la primera infancia como una prioridad estratégica. A través de documentos como la <b>Recomendación sobre la educación preescolar</b> de 1960, este organismo promueve educación inclusiva que fomente el desarrollo integral desde las primeras etapas de vida. ¿Por qué tanto énfasis en la educación inicial? La respuesta radica en esta etapa que marca el inicio del aprendizaje, y sienta las bases para el desarrollo emocional, social y cognitivo de cada persona.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              p En Colombia, este enfoque ha sido clave para iniciativas como la estrategia <b>De Cero a Siempre</b>, que no solo busca garantizar la educación en la primera infancia, sino también integrar servicios esenciales como salud y nutrición. Esto no es coincidencia; es el resultado de aplicar los principios internacionales de la UNESCO a un país con necesidades complejas, pero lleno de posibilidades.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/14.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              p Los Objetivos de Desarrollo Sostenible y la educación inicial: ¿cómo conectan? Pensemos en los <b>Objetivos de Desarrollo Sostenible (ODS)</b> como un mapa de 17 puntos para transformar el mundo. El <b>ODS 4</b>, dedicado a la educación, resalta la necesidad de asegurar que todos los niños tengan acceso a una <b>educación inclusiva, equitativa y de calidad</b>, desde las primeras etapas. En este contexto, la educación inicial no es solo un derecho, sino una oportunidad para reducir las brechas sociales, antes que se agranden.

    .bg-full-width.bg-color-11.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/template/1.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En Colombia, esta visión se traduce en acciones concretas. Los <b>Centros de Desarrollo Infantil (CDI)</b>, por ejemplo, no solo brindan acceso a educación, sino que también consideran la nutrición, la salud y el cuidado emocional como elementos esenciales. Al cumplir con los ODS, estos centros fortalecen un enfoque que entiende la educación como una herramienta para romper ciclos de desigualdad.
    
    h5 ¿Cómo se conectan lo global y lo local?
    p.mb-4 Ahora surge una pregunta importante: ¿cómo asegurar que estas influencias internacionales se adapten a la realidad colombiana sin perder su esencia global? Aquí se presenta un desafío fascinante: lograr que las recomendaciones de la UNESCO y los ODS se conviertan en políticas efectivas en territorios rurales, urbanos y marginados.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-down")
        div.p-3.h-100.bg-color-5
          p.mb-0 ¿Cómo garantizar la inclusión de comunidades indígenas y afrodescendientes en un sistema educativo inspirado en principios globales? Este es un llamado a diseñar estrategias que no solo respeten las tradiciones culturales, sino que también promuevan el aprendizaje como un derecho universal.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-up")
        div.p-3.h-100.bg-color-2
          p.mb-0 La educación inicial en Colombia es un claro ejemplo de cómo las influencias internacionales pueden integrarse con las necesidades locales para generar cambios significativos. Desde las directrices de la UNESCO hasta los compromisos del ODS 4, estas guías ofrecen más que teorías: son un llamado a la acción para cada educador, gestor y ciudadano comprometido con el futuro de la niñez.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Políticas previas a "De Cero a Siempre"
    
    p.mb-4 Antes de la creación de la estrategia "De Cero a Siempre", existieron diversas políticas y programas que establecieron las bases para un enfoque integral en la atención de la primera infancia. Estas iniciativas, aunque inicialmente dispersas, marcaron los primeros pasos hacia el modelo actual. 

    .row.align-items-start.mb-5
      .col-lg-5.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/16.png", alt="").mb-4.mb-lg-0
      .col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="¿Cuál es su objetivo?")
            p.mb-0 El programa "De Cero a Siempre" tiene como objetivo promover el desarrollo integral de la primera infancia en Colombia, particularmente en contextos de vulnerabilidad, y es una estrategia clave dentro del Centro de Desarrollo Infantil del Instituto Colombiano de Bienestar Familiar (ICBF). 
          .div(titulo="¿Cuál es su enfoque?")
            p.mb-0 Su enfoque principal radica en garantizar los derechos de los niños y fortalecer las capacidades familiares para asegurar una educación de calidad (Bautista Cárdenas & Hernández Forero, 2018).

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/template/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            h5.mb-0 Reflexión:
            p.mb-0 ¿qué aprendizajes dejaron estas políticas previas y cómo influyeron en el desarrollo de una estrategia más coordinada y estructurada? 
    
    .row.mb-5.align-items-center
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/18.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") ¡Acompáñenos a descubrir los cimientos que antecedieron a una de las propuestas más transformadoras en la historia de la educación inicial en Colombia!
        p Piense en un rompecabezas con piezas valiosas pero dispersas: este era el panorama de las políticas públicas para la primera infancia en Colombia antes de la llegada de la estrategia "<b>De Cero a Siempre</b>". Los programas existentes, aunque bien intencionados, trabajaban de manera independiente, sin coordinarse entre sí. ¿El resultado? Niños que recibían atención médica pero carecían de estimulación temprana o educación inicial, y comunidades vulnerables enfrentando barreras insuperables para acceder a servicios integrales.     

    
        .bg-color-9.px-4.py-5(data-aos="fade-left")
          p Por ejemplo, iniciativas como el Plan Nacional de Atención Integral a la Infancia (1996) y el marco normativo establecido por la Ley 1098 del 2006, conocida como el Código de Infancia y Adolescencia, aportaron avances significativos en ciertos aspectos, pero operaban en "compartimentos estancos". Cada sector -salud, educación y protección social- trabajaba bajo sus propios objetivos, dejando de lado la visión holística que exige el desarrollo integral en los primeros años de vida (ICBF, 2006).
    
    p.mb-4 Este enfoque fragmentado tenía consecuencias tangibles. En las zonas rurales, donde los recursos ya eran escasos, las duplicidades y vacíos se traducen en desigualdades aún mayores. ¿Qué sucede cuando un niño accede a servicios de nutrición, pero no cuenta con un entorno educativo que fomente su desarrollo cognitivo? La respuesta es clara: se limita su potencial y se perpetúan ciclos de exclusión social.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/template/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            h5.mb-0 Reflexión:
            p.mb-0 ¿por qué es tan importante una atención integral para la primera infancia? Es en esta etapa donde se establecen las bases para el desarrollo físico, emocional y cognitivo. No se trata solo de atender necesidades individuales, sino de construir un futuro más justo y equitativo.

    p.mb-4 Esta realidad subrayó la urgencia de superar la fragmentación. Reconocer que las políticas aisladas no podían responder a las complejidades de la primera infancia impulsó la creación de estrategias integradas. "De Cero a Siempre", por ejemplo, representó un cambio de paradigma, consolidando esfuerzos multisectoriales para asegurar una atención coordinada y efectiva que incluyera educación, salud, protección y nutrición en un solo marco.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/template/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            h5.mb-0 Reflexión:
            p.mb-0 Cómo esta transición marcó un antes y un después en la política educativa de Colombia. ¿Qué aprendemos de los errores del pasado y cómo podemos aplicar estas lecciones en el diseño de políticas futuras? 

    p.mb-4 Habiendo descrito los programas fragmentados y su impacto, es momento de analizar cómo Colombia comenzó a construir un enfoque más cohesionado para la atención a la primera infancia.

    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/19.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-13.p-4.mb-3(data-aos="fade-left")
          p.mb-0 La progresión hacia un enfoque integral y multisectorial en la atención a la primera infancia es como armar un gran rompecabezas donde cada pieza, aunque única, debe encajar con las demás para formar una imagen completa y significativa. Durante años, Colombia enfrentó un reto: las piezas del rompecabezas estaban dispersas. Los sectores trabajaban por separado, como islas desconectadas, atendiendo necesidades específicas, pero dejando de lado la imagen completa del desarrollo infantil.
        p(data-aos="fade-left") Esto comenzó a cambiar con la llegada de una visión más amplia y articulada, que reconocía que los niños son seres complejos, con necesidades interdependientes. Por ejemplo, ¿de qué sirve que un niño tenga acceso a educación inicial si no cuenta con una buena nutrición o un entorno seguro en su hogar? Este razonamiento llevó a integrar esfuerzos en salud, educación, protección y nutrición, marcando el inicio de un enfoque verdaderamente integral.    

    .row.mb-5.align-items-center
      .col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")
      .col-lg-7.order-2.order-lg-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Un momento clave en esta evolución fue la creación de la estrategia "<b>De Cero a Siempre</b>", consolidada mediante la Ley 1804 del 2016. Esta política es un ejemplo inspirador de cómo diferentes sectores pueden trabajar juntos para garantizar el pleno desarrollo de los niños desde la gestación hasta los seis años. Imagina esto: mientras el Ministerio de Educación diseña programas de educación inicial inclusiva, el ICBF asegura que los niños reciban una alimentación adecuada, y los gobiernos locales adaptan estas políticas a las realidades culturales y sociales de sus comunidades. Es un modelo que, como una sinfonía, funciona mejor cuando todos los instrumentos trabajan en armonía.     

    
        .bg-color-11.p-4(data-aos="fade-left")
          p En este contexto, la integralidad no es solo un término técnico; es una promesa de que ningún niño será atendido de manera parcial o incompleta. Es una invitación a pensar en grande, a ver más allá de las fronteras institucionales y a poner a los niños en el centro de todo. Por ejemplo, al reflexionar sobre esta estrategia, se puede plantear una pregunta clave: ¿qué tan efectivas son estas políticas en los territorios más alejados, donde la articulación entre sectores enfrenta mayores desafíos?
    
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/21.png', alt='')
        .col-lg.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") Un aspecto fascinante de este enfoque es su capacidad de generar corresponsabilidad. No se trata solo de lo que hacen las instituciones, sino de cómo las familias y las comunidades participan activamente en el desarrollo infantil. Después de todo, como dice un proverbio africano: "Se necesita toda una aldea para criar a un niño".
    
    p.mb-4 Por último, es interesante considerar cómo esta progresión ha transformado las políticas en el papel, así como en la vida real de miles de niños. Reflexionar sobre estos avances lleva a valorar el impacto que tiene invertir en la primera infancia, no solo para el desarrollo individual, sino para el futuro de toda una sociedad.

    .row.justify-content-center(data-aos="zoom-out")
      .col-lg-10
        .tarjeta-avatar-b.mb-5.align-items-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/23.png' alt='AvatarTop')
          .tarjeta.bg-color-14.text-white
            .p-5
              p.mb-0 Ahora que se ha explorado el camino recorrido hacia un enfoque integral y multisectorial en la atención a la primera infancia, es momento de reflexionar sobre los retos históricos que han surgido en este proceso y, más importante aún, sobre las oportunidades que se vislumbran en el horizonte.
    
    p.mb-4 Cada avance en políticas públicas conlleva desafíos únicos que invitan a repensar estrategias y fortalecer alianzas. Al sumergirse en este tema, se podrá identificar cómo las lecciones del pasado no solo ofrecen aprendizajes valiosos, sino que también abren ventanas hacia un futuro más prometedor para la infancia en Colombia. ¿Qué desafíos históricos se mantienen vigentes y qué nuevas oportunidades se pueden aprovechar? Es hora de descubrirlo.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Retos históricos y oportunidades

    p.mb-4 Los sistemas educativos no surgen en un vacío, sino que son el resultado de contextos históricos y sociales que moldean sus características y desafíos.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Retos históricos y oportunidades  
            p(data-aos="fade-right") En el PDF Retos históricos y oportunidades, se analizarán las dificultades que ha enfrentado Colombia para garantizar una educación inicial inclusiva y de calidad, así como las oportunidades que han emergido para transformar estas dificultades en avances significativos en la atención a la primera infancia.

            p(data-aos="fade-left") A lo largo del documento, se abordarán las brechas de cobertura y calidad que afectan el acceso a la educación en distintas regiones del país, y cómo estas desigualdades impactan en el desarrollo de los niños. Además, se explorará la importancia de la articulación intersectorial en la creación de políticas públicas que garanticen un enfoque integral en la atención a la primera infancia, superando los desafíos estructurales y promoviendo el bienestar de los niños y niñas en sus primeros años de vida.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Retos históricos y oportunidades  .
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/24.png', alt='')

    



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://1library.co/article/breve-recorrido-hist%C3%B3rico-educaci%C3%B3n-inicial-colombia.zwvp7o7q" target="_blank" rel="noopener noreferrer") (S/f-f). 1Library.co. Recuperado el 21 de diciembre de 2024. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://lahistoria.info/historia-de-la-educacion-infantil-en-colombia-2/ " target="_blank" rel="noopener noreferrer") Historia de la Educación Infantil en Colombia 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.syseduca.com/" target="_blank" rel="noopener noreferrer") syseduca  
            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Z-BGqp3naK4 " target="_blank" rel="noopener noreferrer") Universidad Pedagógica Nacional. (1 noviembre 2024). La educación inicial en Colombia: Reflexiones sobre su historia y futuro.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=2lzvgdv8eyk " target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (7 oct 2013). Educación Inicial, El Mejor Comienzo. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
    

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
