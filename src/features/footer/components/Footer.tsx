'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { BackgroundNoise } from '@/components/ui/background-noise';
import { motion } from 'framer-motion';
import type { SocialLink } from '../types';
import { SOCIAL_LINKS, CONTACT } from '@/constants';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export const Footer = (): JSX.Element => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log('Form data:', data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <footer id="contact" className="relative py-32 border-t border-border overflow-hidden">
      {/* Background Effects */}
      <BackgroundBeams />
      
      <div className="container mx-auto px-6 z-10 relative">
        {/* Contact Form Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? Let&apos;s build something amazing together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur opacity-20"></div>
              
              <div className="relative glass p-8 rounded-2xl border border-white/10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      {...register('name')}
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register('email')}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={4}
                      {...register('message')}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-6 rounded-xl font-medium bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    <BackgroundNoise />
                    <span className="relative z-10">
                      {isSubmitting ? 'Sending...' : submitSuccess ? 'Sent! ✓' : 'Send Message'}
                    </span>
                    <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </motion.button>
                </form>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 text-center text-sm"
                  >
                    Thanks for reaching out! I&apos;ll get back to you soon.
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Brand */}
              <div className="space-y-4">
                <div className="text-4xl font-bold text-gradient">Uday</div>
                <p className="text-muted-foreground">
                  Full Stack Developer building scalable solutions with modern technologies.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Get In Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">📧</div>
                    <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">
                      hello@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">📍</div>
                    <span className="text-muted-foreground">Bengaluru, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">💼</div>
                    <span className="text-muted-foreground">Open to opportunities</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Follow Me</h3>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                      aria-label={link.platform}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-muted-foreground pt-8 border-t border-border">
          <p>© {new Date().getFullYear()} Uday. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
