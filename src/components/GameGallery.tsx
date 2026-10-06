import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function GameGallery({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <Carousel opts={{ loop: true }} aria-label="Fotos de GTA 6" tabIndex={0} className="min-w-0 overflow-hidden rounded-lg bg-muted shadow-cover">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={image.src} aria-label={`Foto ${index + 1} de ${images.length}`}>
            <img src={image.src} alt={image.alt} className="aspect-video w-full object-contain" loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious aria-label="Foto anterior" title="Foto anterior" className="left-3 h-10 w-10 border-border bg-background/90 text-foreground" />
      <CarouselNext aria-label="Foto siguiente" title="Foto siguiente" className="right-3 h-10 w-10 border-border bg-background/90 text-foreground" />
    </Carousel>
  );
}