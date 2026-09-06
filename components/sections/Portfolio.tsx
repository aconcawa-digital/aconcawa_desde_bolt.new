'use client';

const videos = [
  { id: 'mD-aQyYeX4c', start: 0 },
  { id: 'wM011v8DYKw', start: 1 },
  { id: 'iGPAtFiVHfg', start: 4 },
  { id: '_kqPjOwlWbY', start: 17 },
  { id: 'nSUYNQTKc3I', start: 1 },
  { id: 'pleyFnQRSWs', start: 2 },
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
                  title={`Video ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
