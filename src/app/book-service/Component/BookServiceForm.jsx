'use client';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { CalendarIcon, Send, Loader2, User, Mail, Wrench, BellRing } from 'lucide-react';
import { format, isBefore, startOfDay } from 'date-fns';
import Swal from 'sweetalert2';

const servicesList = [
  { id: 'panel-upgrades', name: 'Panel Upgrades' },
  { id: 'lighting-installation', name: 'Lighting Installation' },
  { id: 'renovation-wiring', name: 'Renovation Wiring' },
  { id: 'heating-cooling-wiring', name: 'Heating & Cooling Wiring' },
  { id: 'generator-connections', name: 'Generator Connections' },
  { id: 'troubleshooting', name: 'Troubleshooting' },
  { id: 'meter-socket-installation', name: 'Meter Socket Installation' },
  { id: 'other', name: 'Other' },
];

const MAX_MESSAGE = 500;

// Shared field styling
const fieldBase =
  '!rounded-xl !bg-white !border !border-gray-200 !h-12 !text-[15px] !shadow-sm !transition-all !duration-200 hover:!border-gray-300 focus-visible:!border-[#4169E1] focus-visible:!ring-4 focus-visible:!ring-[#4169E1]/15';
const fieldError = '!border-red-400 focus-visible:!border-red-500 focus-visible:!ring-red-500/15';

const Field = ({ label, required, error, children }) => (
  <div className="!space-y-1.5">
    <label className="!block !text-sm !font-medium !text-gray-700">
      {label}
      {required && <span className="!text-red-500 !ml-0.5">*</span>}
    </label>
    {children}
    {error && <p className="!text-red-500 !text-xs !mt-1">{error}</p>}
  </div>
);

const IconWrap = ({ icon: Icon, children }) => (
  <div className="!relative">
    <Icon className="!absolute !left-3.5 !top-1/2 !-translate-y-1/2 !size-4 !text-gray-400 !pointer-events-none !z-10" />
    {children}
  </div>
);

const BookServiceForm = ({ defaultServiceId, defaultServiceName }) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      service: defaultServiceId || '',
      message: '',
      hasInterest: false,
    },
  });

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const messageLength = (watch('message') || '').length;

  useEffect(() => {
    reset({
      name: '',
      email: '',
      service: defaultServiceId || '',
      message: '',
      hasInterest: false,
    });
  }, [defaultServiceId, reset]);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const payload = {
        service: data.service || defaultServiceId,
        name: data.name,
        email: data.email,
        date: format(date, 'yyyy-MM-dd'),
        comments: data.message,
        hasInterest: Boolean(data.hasInterest), // true = wants PEC Electrical updates
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/service-bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }

      Swal.fire({
        title: 'Booking Submitted!',
        text: 'You will receive a confirmation email shortly.',
        icon: 'success',
        confirmButtonColor: '#4169E1',
      });

      reset({
        name: '',
        email: '',
        service: defaultServiceId || '',
        message: '',
        hasInterest: false,
      });
      setDate(new Date());
    } catch (err) {
      Swal.fire({
        title: 'Error!',
        text: err.message || 'Something went wrong',
        icon: 'error',
        confirmButtonColor: '#4169E1',
      });
    } finally {
      setLoading(false);
    }
  };

  const disabledDate = (d) => isBefore(d, startOfDay(new Date()));
  const hasCustomService =
    defaultServiceId && !servicesList.some((service) => service.id === defaultServiceId);

  return (
    <div className="!w-full">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="!space-y-6">
        {/* Name & Email */}
        <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-5">
          <Field label="Full Name" required error={errors.name?.message}>
            <IconWrap icon={User}>
              <Input
                placeholder="John Doe"
                autoComplete="name"
                aria-invalid={!!errors.name}
                className={`${fieldBase} !pl-10 ${errors.name ? fieldError : ''}`}
                {...register('name', { required: 'Please enter your name' })}
              />
            </IconWrap>
          </Field>

          <Field label="Email Address" required error={errors.email?.message}>
            <IconWrap icon={Mail}>
              <Input
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={!!errors.email}
                className={`${fieldBase} !pl-10 ${errors.email ? fieldError : ''}`}
                {...register('email', {
                  required: 'Please enter your email',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address',
                  },
                })}
              />
            </IconWrap>
          </Field>
        </div>

        {/* Service & Date */}
        <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-5">
          <Field label="Service" required error={errors.service?.message}>
            <Controller
              name="service"
              control={control}
              rules={{ required: 'Please select a service' }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    className={`${fieldBase} !w-full !pl-10 !relative ${
                      errors.service ? fieldError : ''
                    }`}
                  >
                    <Wrench className="!absolute !left-3.5 !top-1/2 !-translate-y-1/2 !size-4 !text-gray-400" />
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Our Services</SelectLabel>
                      {servicesList.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name}
                        </SelectItem>
                      ))}
                      {hasCustomService && (
                        <SelectItem value={defaultServiceId}>
                          {defaultServiceName || defaultServiceId}
                        </SelectItem>
                      )}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </Field>

          <Field label="Preferred Date" required>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={`${fieldBase} !flex !w-full !items-center !gap-3 !px-3.5 !text-left !cursor-pointer`}
                >
                  <CalendarIcon className="!size-4 !text-[#4169E1]" />
                  <span className="!text-gray-900">{format(date, 'EEE, MMM d, yyyy')}</span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="!w-auto !p-0 !rounded-xl !shadow-xl" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  month={month}
                  onMonthChange={setMonth}
                  onSelect={(newDate) => {
                    if (newDate && !disabledDate(newDate)) {
                      setDate(newDate);
                      setOpen(false);
                    }
                  }}
                  disabled={disabledDate}
                />
              </PopoverContent>
            </Popover>
          </Field>
        </div>

        {/* Message */}
        <Field label="Project Details (optional)">
          <Textarea
            rows={5}
            maxLength={MAX_MESSAGE}
            placeholder="Tell us a bit about your project, location, or any special requirements..."
            className="!rounded-xl !bg-white !border !border-gray-200 !px-4 !py-3 !min-h-[140px] !text-[15px] !shadow-sm !resize-none !transition-all !duration-200 hover:!border-gray-300 focus-visible:!border-[#4169E1] focus-visible:!ring-4 focus-visible:!ring-[#4169E1]/15"
            {...register('message')}
          />
          <p className="!text-xs !text-gray-400 !text-right">
            {messageLength}/{MAX_MESSAGE}
          </p>
        </Field>

        {/* hasInterest checkbox (optional) */}
        <label className="!flex !items-start !gap-3.5 !rounded-xl !border !border-gray-200 !bg-white !p-4 !cursor-pointer !transition-all !duration-200 hover:!border-[#4169E1]/50 hover:!bg-[#4169E1]/5 has-[:checked]:!border-[#4169E1] has-[:checked]:!bg-[#4169E1]/5">
          <input
            type="checkbox"
            className="!mt-0.5 !size-5 !shrink-0 !cursor-pointer !rounded !accent-[#4169E1]"
            {...register('hasInterest')}
          />
          <span className="!flex-1">
            <span className="!flex !items-center !gap-2 !text-sm !font-semibold !text-gray-800">
              <BellRing className="!size-4 !text-[#4169E1]" />
              Keep me updated
              <span className="!text-xs !font-normal !text-gray-400">(optional)</span>
            </span>
            <span className="!block !mt-1 !text-sm !text-gray-500 !leading-relaxed">
              Yes, I'd like to receive news, offers, and updates from PEC Electrical.
            </span>
          </span>
        </label>

        {/* Submit */}
        <Button
          type="submit"
          disabled={loading}
          className="!w-full !h-14 !bg-[#4169E1] hover:!bg-[#2E4B9B] !text-white !font-semibold !rounded-xl !text-base !flex !items-center !justify-center !gap-2 !shadow-lg !shadow-[#4169E1]/25 hover:!shadow-xl hover:!-translate-y-0.5 active:!translate-y-0 disabled:!opacity-70 disabled:!translate-y-0 !transition-all !duration-200"
        >
          {loading ? <Loader2 className="!size-5 !animate-spin" /> : <Send size={18} />}
          {loading ? 'Submitting...' : 'Book Your Service Today'}
        </Button>

        <p className="!text-center !text-xs !text-gray-400">
          We'll confirm your booking by email. No spam, ever.
        </p>
      </form>
    </div>
  );
};

export default BookServiceForm;
