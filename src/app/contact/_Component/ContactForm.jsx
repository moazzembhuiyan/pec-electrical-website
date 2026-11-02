'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Loader2, User, Mail, Tag, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

const MAX_MESSAGE = 600;
const QUICK_SUBJECTS = ['Get a Quote', 'Emergency Repair', 'Panel Upgrade', 'General Question'];

const fieldBase =
  '!h-12 !rounded-xl !bg-white/5 !border !border-white/10 !pl-10 !text-[15px] !text-white placeholder:!text-white/35 !transition-all !duration-200 hover:!border-white/25 focus-visible:!border-[#4169E1] focus-visible:!ring-4 focus-visible:!ring-[#4169E1]/20';
const fieldError =
  '!border-red-400/70 focus-visible:!border-red-400 focus-visible:!ring-red-400/20';

const Field = ({ label, error, children }) => (
  <div className="!space-y-1.5">
    <label className="!block !text-sm !font-medium !text-white/80">{label}</label>
    {children}
    {error && <p className="!text-xs !text-red-400">{error}</p>}
  </div>
);

const IconWrap = ({ icon: Icon, children }) => (
  <div className="!relative">
    <Icon className="!absolute !left-3.5 !top-1/2 !-translate-y-1/2 !size-4 !text-white/40 !pointer-events-none !z-10" />
    {children}
  </div>
);

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: { name: '', email: '', subject: '', message: '' } });

  const subject = watch('subject');
  const messageLength = (watch('message') || '').length;

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/inquires/sent-mail`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      reset();
      toast.success('Message sent successfully!');
    } catch (error) {
      toast.error(error.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="!space-y-5 !rounded-3xl !border !border-white/10 !bg-white/[0.04] !p-6 md:!p-9 !shadow-2xl !shadow-black/50 !backdrop-blur"
    >
      <div>
        <h2 className="!text-2xl !font-semibold !text-white">Send us a message</h2>
        <p className="!mt-1 !text-sm !text-white/50">
          Fill in the form and we'll get back to you shortly.
        </p>
      </div>

      <div className="!grid !grid-cols-1 !gap-5 md:!grid-cols-2">
        <Field label="Your Name" error={errors.name?.message}>
          <IconWrap icon={User}>
            <Input
              placeholder="John Doe"
              autoComplete="name"
              aria-invalid={!!errors.name}
              className={`${fieldBase} ${errors.name ? fieldError : ''}`}
              {...register('name', { required: 'Please enter your name' })}
            />
          </IconWrap>
        </Field>

        <Field label="Email Address" error={errors.email?.message}>
          <IconWrap icon={Mail}>
            <Input
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              aria-invalid={!!errors.email}
              className={`${fieldBase} ${errors.email ? fieldError : ''}`}
              {...register('email', {
                required: 'Please enter your email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address',
                },
              })}
            />
          </IconWrap>
        </Field>
      </div>

      <Field label="Subject" error={errors.subject?.message}>
        <IconWrap icon={Tag}>
          <Input
            placeholder="How can we help?"
            aria-invalid={!!errors.subject}
            className={`${fieldBase} ${errors.subject ? fieldError : ''}`}
            {...register('subject', { required: 'Please add a subject' })}
          />
        </IconWrap>
        {/* quick-pick chips */}
        <div className="!flex !flex-wrap !gap-2 !pt-2">
          {QUICK_SUBJECTS.map((s) => {
            const active = subject === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => setValue('subject', s, { shouldValidate: true })}
                className={`!rounded-full !border !px-3.5 !py-1.5 !text-xs !font-medium !cursor-pointer !transition-all !duration-200 ${
                  active
                    ? '!border-[#4169E1] !bg-[#4169E1] !text-white'
                    : '!border-white/15 !bg-white/5 !text-white/70 hover:!border-[#4169E1]/60 hover:!text-white'
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </Field>

      <Field label="Your Message" error={errors.message?.message}>
        <Textarea
          rows={5}
          maxLength={MAX_MESSAGE}
          placeholder="Tell us about your project or the issue you're facing..."
          aria-invalid={!!errors.message}
          className={`!min-h-[140px] !resize-none !rounded-xl !bg-white/5 !border !border-white/10 !px-4 !py-3 !text-[15px] !text-white placeholder:!text-white/35 !transition-all !duration-200 hover:!border-white/25 focus-visible:!border-[#4169E1] focus-visible:!ring-4 focus-visible:!ring-[#4169E1]/20 ${
            errors.message ? fieldError : ''
          }`}
          {...register('message', { required: 'Please write a message' })}
        />
        <p className="!text-right !text-xs !text-white/30">
          {messageLength}/{MAX_MESSAGE}
        </p>
      </Field>

      <Button
        type="submit"
        disabled={loading}
        className="!h-14 !w-full !rounded-xl !bg-[#4169E1] !text-base !font-semibold !text-white !shadow-lg !shadow-[#4169E1]/30 !transition-all !duration-200 hover:!bg-[#2E4B9B] hover:!-translate-y-0.5 active:!translate-y-0 disabled:!opacity-70 disabled:!translate-y-0"
      >
        {loading ? (
          <Loader2 className="!mr-2 !size-5 !animate-spin" />
        ) : (
          <Send className="!mr-2 !size-4" />
        )}
        {loading ? 'Sending...' : 'Inquire Now'}
      </Button>

      <p className="!flex !items-center !justify-center !gap-1.5 !text-xs !text-white/35">
        <ShieldCheck className="!size-3.5" /> Your information is kept private and never shared.
      </p>
    </form>
  );
}
