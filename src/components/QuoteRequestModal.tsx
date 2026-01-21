import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon, CheckCircle2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
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
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name is required.').max(100),
  email: z.string().email('Invalid email address.').max(255),
  phone: z.string().min(10, 'Phone number must be at least 10 digits.').max(20),
  departureCity: z.string().min(2, 'Departure city is required.').max(100),
  arrivalCity: z.string().min(2, 'Arrival city is required.').max(100),
  preferredDate: z.date({ required_error: 'Please select a date.' }),
  passengers: z.coerce.number().min(1, 'At least 1 passenger.').max(20, 'Maximum 20 passengers.'),
  notes: z.string().max(500).optional(),
});

type FormData = z.infer<typeof formSchema>;

interface QuoteRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteRequestModal = ({ open, onOpenChange }: QuoteRequestModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      departureCity: '',
      arrivalCity: '',
      passengers: 1,
      notes: '',
    },
  });

  const onSubmit = (data: FormData) => {
    // For now, just show success - no data sent anywhere
    console.log('Quote request submitted:', data);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    form.reset();
    setIsSubmitted(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      // Reset form when closing
      setTimeout(() => {
        form.reset();
        setIsSubmitted(false);
      }, 300);
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          <div className="py-12 text-center">
            <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
              Request Submitted!
            </h3>
            <p className="text-neutral-500 mb-8 max-w-sm mx-auto">
              Thank you for your interest. Our team will be in touch within 24 hours.
            </p>
            <Button
              onClick={handleReset}
              variant="outline"
              className="rounded-full px-6"
            >
              Submit Another Request
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-neutral-900">
                Request a Quote
              </DialogTitle>
              <DialogDescription className="text-neutral-500">
                Tell us about your trip and we'll get back to you with options.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-700">Full Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Smith"
                          className="rounded-lg border-neutral-200"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-700">Email *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            className="rounded-lg border-neutral-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-700">Phone *</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            className="rounded-lg border-neutral-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="departureCity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-700">Departure City *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="New York"
                            className="rounded-lg border-neutral-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="arrivalCity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-700">Arrival City *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Miami"
                            className="rounded-lg border-neutral-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="preferredDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-neutral-700">Preferred Date *</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  'w-full pl-3 text-left font-normal rounded-lg border-neutral-200',
                                  !field.value && 'text-muted-foreground'
                                )}
                              >
                                {field.value ? (
                                  format(field.value, 'PPP')
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date()}
                              initialFocus
                              className="p-3 pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="passengers"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-700">Passengers *</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={1}
                            max={20}
                            className="rounded-lg border-neutral-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-700">
                        Additional Notes <span className="text-neutral-400">(optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any special requests or requirements..."
                          className="rounded-lg border-neutral-200 resize-none"
                          rows={3}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full rounded-full bg-neutral-900 hover:bg-neutral-800 text-white py-6 mt-2"
                >
                  Submit Request
                </Button>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuoteRequestModal;
