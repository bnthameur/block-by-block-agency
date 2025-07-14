import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your interest! We will contact you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact-submissions"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const projectTypes = [
    "DeFi Protocol",
    "NFT Project", 
    "GameFi",
    "Layer 1/Layer 2",
    "Exchange/DEX",
    "Other"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-900"></div>
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30 mb-6">
              <span className="text-sm font-medium text-blue-400">Ready To Work With Us?</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              <span className="text-white">Let's Get To Work</span><br />
              <span className="gradient-text">Together</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to transform your blockchain project? Let's discuss how we can help you build real growth and lasting impact.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-700/50 border border-slate-600/50 rounded-xl flex items-center justify-center">
                  <i className="fas fa-envelope text-blue-400"></i>
                </div>
                <div>
                  <div className="font-semibold text-white">Email Us</div>
                  <div className="text-slate-300">admin@blockbyblocksolutions.xyz</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-700/50 border border-slate-600/50 rounded-xl flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-blue-400"></i>
                </div>
                <div>
                  <div className="font-semibold text-white">Global Presence</div>
                  <div className="text-slate-300">India | UAE | Remote</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-700/50 border border-slate-600/50 rounded-xl flex items-center justify-center">
                  <i className="fab fa-telegram text-blue-400"></i>
                </div>
                <div>
                  <div className="font-semibold text-white">Telegram</div>
                  <div className="text-slate-300">@blockbyblocksolutions</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-700/50 border border-slate-600/50 rounded-xl flex items-center justify-center">
                  <i className="fas fa-clock text-blue-400"></i>
                </div>
                <div>
                  <div className="font-semibold text-white">Response Time</div>
                  <div className="text-slate-300">Within 24 hours</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 mt-12 pt-8 border-t border-slate-700">
              <a href="https://www.linkedin.com/company/block-by-block-solutions/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-700/50 border border-slate-600/50 rounded-xl flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300 group">
                <i className="fab fa-linkedin text-slate-400 group-hover:text-blue-400"></i>
              </a>
              <a href="https://x.com/byblocksolution?s=21&t=IUCNKsJfyLq74I2sbCxdHg" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-700/50 border border-slate-600/50 rounded-xl flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300 group">
                <i className="fab fa-twitter text-slate-400 group-hover:text-blue-400"></i>
              </a>
              <a href="https://www.instagram.com/byblocksolutions?igsh=MXY0dXV0dTNpYzR1dw==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-700/50 border border-slate-600/50 rounded-xl flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300 group">
                <i className="fab fa-instagram text-slate-400 group-hover:text-blue-400"></i>
              </a>
              <a href="https://t.me/blockbyblocksolutions" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-700/50 border border-slate-600/50 rounded-xl flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300 group">
                <i className="fab fa-telegram text-slate-400 group-hover:text-blue-400"></i>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-400/5 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-2 text-white">Get Your Free Consultation</h3>
                <p className="text-slate-300 mb-8">Transform your vision into reality. Let's build something amazing together.</p>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-300 font-medium">First Name</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                placeholder="John"
                                className="bg-slate-700/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-blue-500 focus:bg-slate-600/50 transition-all"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-300 font-medium">Last Name</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                placeholder="Doe"
                                className="bg-slate-700/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-blue-500 focus:bg-slate-600/50 transition-all"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 font-medium">Email</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email"
                              placeholder="john@example.com"
                              className="bg-slate-700/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-blue-500 focus:bg-slate-600/50 transition-all"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 font-medium">Project Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-slate-700/50 border-slate-600/50 text-white focus:border-blue-500">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {projectTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 font-medium">Tell us about your project</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              rows={4}
                              placeholder="Describe your project and marketing goals..."
                              className="bg-slate-700/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-blue-500 focus:bg-slate-600/50 resize-none transition-all"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      disabled={contactMutation.isPending}
                      className="group relative w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-500 text-white py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-[1.02] border border-blue-400/20"
                    >
                      <span className="relative z-10">
                        {contactMutation.isPending ? "Submitting..." : "Start Your Growth Journey"}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
