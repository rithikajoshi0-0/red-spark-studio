import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Palette, 
  Code, 
  PenTool, 
  Megaphone, 
  Camera, 
  FileText,
  ArrowRight,
  IndianRupee
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Logos, posters, social media graphics, and branding materials for your business or projects.",
    startingPrice: "₹500",
    features: ["Logo Design", "Social Media Graphics", "Print Materials", "Brand Identity"]
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with latest technologies.",
    startingPrice: "₹5,000",
    features: ["Responsive Design", "Custom Development", "E-commerce", "Maintenance"]
  },
  {
    icon: PenTool,
    title: "Content Writing",
    description: "Engaging content for websites, blogs, social media, and academic projects.",
    startingPrice: "₹300",
    features: ["Blog Posts", "Website Copy", "Social Media", "Academic Writing"]
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO, social media marketing, and online advertising to grow your business.",
    startingPrice: "₹1,000",
    features: ["SEO Optimization", "Social Media Marketing", "Ad Campaigns", "Analytics"]
  },
  {
    icon: Camera,
    title: "Video Editing",
    description: "Professional video editing for YouTube, social media, presentations, and events.",
    startingPrice: "₹800",
    features: ["YouTube Videos", "Social Media Clips", "Presentations", "Event Coverage"]
  },
  {
    icon: FileText,
    title: "Academic Services",
    description: "Research papers, presentations, and project assistance for students.",
    startingPrice: "₹400",
    features: ["Research Papers", "Presentations", "Project Reports", "Data Analysis"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Services for Every Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From graphic design to web development, I offer comprehensive freelance services 
            tailored for students and small businesses across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="service-card h-full border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {service.description}
                </p>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Starting at</span>
                  <span className="text-2xl font-bold text-primary flex items-center">
                    {service.startingPrice}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full btn-outline-red mt-4">
                  Get Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Student Discount Banner */}
        <div className="bg-hero-gradient rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Special Student Discount</h3>
          <p className="text-lg mb-6 opacity-90">
            Show your student ID and get 15% off on all services. Perfect for college projects and assignments!
          </p>
          <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Claim Student Discount
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;