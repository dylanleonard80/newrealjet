import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name is required').max(100),
  email: z.string().email('Please enter a valid email').max(255),
  phone: z.string().min(10, 'Please enter a valid phone number').max(20),
  notes: z.string().max(500).optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LeadFormProps {
  variant?: 'hero' | 'page';
  className?: string;
}

const LeadForm = ({ variant = 'hero', className = '' }: LeadFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      notes: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log('Lead submitted:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    form.reset();
    setIsSubmitted(false);
  };

  const isHero = variant === 'hero';

  const inputStyles = isHero
    ? 'bg-white/[0.05] border-white/[0.12] text-[hsl(var(--cream))] placeholder:text-white/30 focus:border-[hsl(var(--champagne))] focus:ring-1 focus:ring-[hsl(var(--champagne))/0.3] rounded-lg h-12 transition-all duration-300'
    : 'bg-[hsl(var(--charcoal-light))] border-white/[0.08] text-[hsl(var(--cream))] placeholder:text-white/30 focus:border-[hsl(var(--champagne))] rounded-lg h-12';

  const labelStyles = isHero
    ? 'text-[hsl(var(--cream-muted))] text-sm font-normal tracking-wide'
    : 'text-[hsl(var(--cream-muted))] text-sm';

  if (isSubmitted) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="mx-auto w-16 h-16 rounded-full bg-[hsl(var(--champagne))/0.15] flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-[hsl(var(--champagne))]" />
        </div>
        <h3 className="text-2xl font-serif font-light text-[hsl(var(--cream))] mb-3">
          Thank You
        </h3>
        <p className="text-[hsl(var(--cream-muted))] mb-8 max-w-sm mx-auto">
          Our team will be in touch within 24 hours to discuss your travel needs.
        </p>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 text-[hsl(var(--champagne))] hover:text-[hsl(var(--champagne-light))] transition-colors text-sm tracking-wide"
        >
          Submit another request
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className={className}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelStyles}>Your Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Smith"
                    className={inputStyles}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400/90 text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelStyles}>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className={inputStyles}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400/90 text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelStyles}>Phone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className={inputStyles}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400/90 text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelStyles}>
                  Tell us about your trip{' '}
                  <span className="text-white/30">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Where are you flying? Any special requests..."
                    className={`${inputStyles} h-auto min-h-[100px] resize-none`}
                    rows={3}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400/90 text-xs" />
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-luxury bg-[hsl(var(--champagne))] text-[hsl(var(--charcoal-dark))] rounded-lg font-medium hover:bg-[hsl(var(--champagne-light))] disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Request Consultation
                <ArrowRight className="w-4 h-4" />
              </span>
            )}
          </button>
        </form>
      </Form>
    </div>
  );
};

export default LeadForm;
