import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a free quote today! I typically respond within 2 hours and can start most projects immediately.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">rithikajoshi.b@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+91 97917 69420</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="bg-primary-light p-4 rounded-lg">
                  <p className="text-sm font-medium text-primary mb-2">Ready to Help</p>
                  <p className="text-sm text-primary/80">
                    I understand students and small businesses need quality work at affordable prices. Let's make your project amazing!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Request a Free Quote
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Your Name *
                      </label>
                      <Input 
                        placeholder="Enter your full name"
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number
                      </label>
                      <Input 
                        placeholder="+91 98765 43210"
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Service Needed *
                      </label>
                      <Select>
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="graphic-design">Graphic Design</SelectItem>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="content-writing">Content Writing</SelectItem>
                          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          <SelectItem value="video-editing">Video Editing</SelectItem>
                          <SelectItem value="academic-services">Academic Services</SelectItem>
                          <SelectItem value="other">Other / Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Project Budget (INR)
                    </label>
                    <Select>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1000">Under ₹1,000</SelectItem>
                        <SelectItem value="1000-5000">₹1,000 - ₹5,000</SelectItem>
                        <SelectItem value="5000-15000">₹5,000 - ₹15,000</SelectItem>
                        <SelectItem value="15000-30000">₹15,000 - ₹30,000</SelectItem>
                        <SelectItem value="30000-plus">₹30,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Project Details *
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project, timeline, specific requirements, and any questions you have..."
                      rows={4}
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="student" className="rounded border-border" />
                    <label htmlFor="student" className="text-sm text-muted-foreground">
                      I'm a student (15% discount applies)
                    </label>
                  </div>

                  <Button className="btn-hero w-full md:w-auto px-8 py-3">
                    Send Message & Get Quote
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-hero-gradient rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Tips & Offers</h3>
          <p className="text-lg mb-6 opacity-90">
            Get weekly tips for students and small businesses, plus exclusive discounts on services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;