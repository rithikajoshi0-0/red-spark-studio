import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";

const portfolioItems = [
  {
    title: "E-commerce Website Design",
    category: "Web Development",
    description: "Modern e-commerce platform for a local clothing brand with payment integration.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    tags: ["React", "Stripe", "Responsive"]
  },
  {
    title: "Brand Identity Package",
    category: "Graphic Design",
    description: "Complete branding solution including logo, business cards, and social media kit.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    tags: ["Logo Design", "Branding", "Print"]
  },
  {
    title: "Tech Startup Marketing",
    category: "Digital Marketing",
    description: "Complete digital marketing campaign that increased leads by 300% in 3 months.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    tags: ["SEO", "Social Media", "Analytics"]
  },
  {
    title: "Student Portfolio Website",
    category: "Web Development",
    description: "Professional portfolio website for a design student with interactive galleries.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
    tags: ["Portfolio", "Responsive", "Animation"]
  },
  {
    title: "Restaurant Menu Design",
    category: "Graphic Design",
    description: "Elegant menu design for a local restaurant with QR code integration.",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=500&h=300&fit=crop",
    tags: ["Menu Design", "QR Code", "Print"]
  },
  {
    title: "YouTube Channel Growth",
    category: "Video Editing",
    description: "Video editing and thumbnail design that grew subscriber base by 500%.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=300&fit=crop",
    tags: ["Video Editing", "Thumbnails", "Growth"]
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Work & Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how I've helped students and small businesses achieve their goals with 
            professional, affordable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="portfolio-card overflow-hidden border-0 shadow-card">
              <div className="relative group">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <Button size="sm" variant="secondary" className="bg-white/20 text-white border-white/30">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/20 text-white border-white/30">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary bg-primary-light px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-outline-red px-8 py-3">
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;