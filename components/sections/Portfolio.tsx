'use client';

const videos = [
  {
    id: 'mD-aQyYeX4c',
    start: 0,
    title: 'Proyecto 1',
    description: 'Una pieza audiovisual para presentar una idea, una mirada y una historia.',
  },
  {
    id: 'wM011v8DYKw',
    start: 1,
    title: 'Proyecto 2',
    description: 'Narrativa visual pensada para conectar con nuevas audiencias.',
  },
  {
    id: 'iGPAtFiVHfg',
    start: 4,
    title: 'Campaña X',
    description: 'Contenido audiovisual que transforma un mensaje en experiencia.',
  },
  {
    id: '_kqPjOwlWbY',
    start: 17,
    title: 'Relato de marca',
    description: 'Una historia que da forma, tono y personalidad a un proyecto.',
  },
  {
    id: 'nSUYNQTKc3I',
    start: 1,
    title: 'Pieza editorial',
    description: 'Una propuesta de contenido para comunicar con claridad y carácter.',
  },
  {
    id: 'pleyFnQRSWs',
    start: 2,
    title: 'Historia en movimiento',
    description: 'Imágenes y palabras que acompañan una nueva etapa.',
  },
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 md:mb-24">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">
            Trabajos seleccionados
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-primary md:text-5xl">
            Portafolio
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, i) => (
            <article
              key={`${video.id}-${i}`}
              className="group overflow-hidden rounded-lg border border-border/60 bg-card transition-all duration-500 hover:border-border hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?start=${video.start}&rel=0`}
                  title={video.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6 md:p-7">
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Video {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-serif text-xl text-primary md:text-2xl">
                  {video.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {video.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
