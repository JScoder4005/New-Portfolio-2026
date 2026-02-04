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

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export const ContactSection = () => {
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
    <section id="contact" className="relative min-h-screen flex items-center py-32 overflow-hidden">
      {/* Background Effects */}
      <BackgroundBeams />
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Have a project in mind? Let&apos;s build something amazing together.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            
            {/* Form container */}
            <div className="relative glass p-8 md:p-12 rounded-3xl border border-white/10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">
                    Your Name
                  </Label>
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

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">
                    Email Address
                  </Label>
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

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    {...register('message')}
                    className={errors.message ? 'border-red-500' : ''}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    w-full py-4 px-8 rounded-xl font-medium text-lg
                    bg-gradient-to-r from-primary via-secondary to-accent
                    hover:shadow-2xl hover:shadow-primary/50
                    transition-all duration-300
                    disabled:opacity-50 disabled:cursor-not-allowed
                    relative overflow-hidden group
                  `}
                >
                  {/* Background Noise */}
                  <BackgroundNoise />
                  
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : submitSuccess ? 'Sent! ✓' : 'Send Message'}
                  </span>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </motion.button>
              </form>

              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 text-center"
                >
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Additional Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-6 text-center"
          >
            <div className="glass p-6 rounded-2xl">
              <div className="text-3xl mb-2">📧</div>
              <div className="text-sm text-muted-foreground">Email</div>
              <div className="font-medium">muk4005@gmail.com</div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="text-3xl mb-2">📍</div>
              <div className="text-sm text-muted-foreground">Location</div>
              <div className="font-medium">Bengaluru, India</div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="text-3xl mb-2">💼</div>
              <div className="text-sm text-muted-foreground">Availability</div>
              <div className="font-medium">Open to opportunities</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
