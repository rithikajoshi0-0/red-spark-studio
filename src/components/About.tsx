import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              About ServiceHub
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Freelance Partner in India
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Hi! I'm a 19-year-old freelancer based in Mumbai, passionate about helping students 
              and small businesses succeed with professional, affordable services. Having started 
              my journey during college, I understand the unique challenges faced by young 
              entrepreneurs and students.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Student-Friendly Pricing</h3>
                  <p className="text-muted-foreground">Special discounts and flexible payment options for students</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Quick Turnaround</h3>
                  <p className="text-muted-foreground">Fast delivery without compromising on quality</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Heart className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Personal Touch</h3>
                  <p className="text-muted-foreground">One-on-one collaboration and unlimited revisions</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-primary mr-2" fill="currentColor" />
                  <span className="text-3xl font-bold text-foreground">4.9/5</span>
                </div>
                <p className="text-sm text-muted-foreground">Client Rating</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-foreground block">48hr</span>
                <p className="text-sm text-muted-foreground">Avg. Response</p>
              </div>
            </div>
          </div>

          {/* Right Content - Skills & Experience */}
          <div className="space-y-6">
            <Card className="border-0 shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Skills & Expertise</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Graphic Design",
                    "Web Development", 
                    "Content Writing",
                    "Digital Marketing",
                    "Video Editing",
                    "SEO Optimization",
                    "Social Media",
                    "Brand Strategy"
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Why Choose Me?</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground">Understanding Your Needs</h4>
                    <p className="text-sm text-muted-foreground">As a young entrepreneur myself, I get the budget constraints and urgent deadlines.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Latest Trends & Tools</h4>
                    <p className="text-sm text-muted-foreground">Always updated with the latest design trends and technologies.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Transparent Process</h4>
                    <p className="text-sm text-muted-foreground">Regular updates, clear communication, and no hidden costs.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;