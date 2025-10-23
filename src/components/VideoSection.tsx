const VideoSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground animate-fade-in-up">
            Uma palavra da Eliene Marçal
          </h2>

          {/* Video Container */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Mensagem de Eliene Marçal"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-lg text-muted-foreground font-body italic animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Assista a mensagem que tem transformado vidas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
