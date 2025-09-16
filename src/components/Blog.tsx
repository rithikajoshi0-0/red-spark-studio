import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

import blogMarketingImage from "@/assets/blog-marketing.jpg";
import blogDesignImage from "@/assets/blog-design.jpg";
import blogContentImage from "@/assets/blog-content.jpg";

const blogPosts = [
  {
    title: "10 Budget-Friendly Marketing Tips for College Startups",
    excerpt: "Discover effective marketing strategies that won't break the bank. Perfect for student entrepreneurs just starting out.",
    category: "Marketing",
    readTime: "5 min read",
    date: "Dec 15, 2024",
    author: "ServiceHub Team",
    image: blogMarketingImage
  },
  {
    title: "Essential Design Principles Every Small Business Should Know",
    excerpt: "Learn the fundamentals of good design that will make your business stand out, even on a tight budget.",
    category: "Design",
    readTime: "7 min read", 
    date: "Dec 12, 2024",
    author: "ServiceHub Team",
    image: blogDesignImage
  },
  {
    title: "How to Write Content That Converts: A Student's Guide",
    excerpt: "Master the art of persuasive writing for websites, social media, and marketing materials.",
    category: "Content",
    readTime: "6 min read",
    date: "Dec 10, 2024", 
    author: "ServiceHub Team",
    image: blogContentImage
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-secondary page-transition">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tips & Insights for Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest tips, trends, and strategies to help your 
            business grow and succeed in the digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 stagger-animation">
          {blogPosts.map((post, index) => (
            <Card key={index} className="portfolio-card border-0 shadow-card overflow-hidden group transition-all duration-500 hover:shadow-2xl">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <Badge 
                  className="absolute top-4 left-4 bg-primary text-primary-foreground transition-all duration-300 group-hover:bg-primary-hover"
                >
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader className="space-y-2">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground leading-tight">
                  {post.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0 space-y-4">
                <p className="text-muted-foreground">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  
                  <Button variant="ghost" className="text-primary hover:text-primary-hover p-0">
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline-red" className="px-8 py-3">
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-hero-gradient rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Never Miss an Update</h3>
          <p className="text-lg mb-6 opacity-90">
            Get weekly business tips, freelancing insights, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90 px-6 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;