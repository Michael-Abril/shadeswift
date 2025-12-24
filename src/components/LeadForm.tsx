'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Mail,
  MapPin,
  Wrench,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { isValidServiceArea, SERVICE_TYPES, SERVICE_AREAS } from '@/lib/constants';
import Button from './ui/Button';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  zip: string;
  serviceType: string;
}

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [zipError, setZipError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    zip: '',
    serviceType: '',
  });

  const totalSteps = 3;

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field === 'zip') {
      setZipError(null);
    }
  };

  const validateStep = (): boolean => {
    if (step === 1) {
      return formData.name.trim().length >= 2 && formData.email.includes('@');
    }
    if (step === 2) {
      const result = isValidServiceArea(formData.zip);
      if (!result.valid && formData.zip.length === 5) {
        setZipError(
          `We currently serve Orlando and South Florida only. Your ZIP code (${formData.zip}) is outside our service area.`
        );
        return false;
      }
      return result.valid;
    }
    if (step === 3) {
      return formData.serviceType !== '';
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    setZipError(null);
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In production, this would POST to /api/lead
    console.log('Form submitted:', formData);

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 shadow-xl text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-secondary mb-2">
          Thank You, {formData.name.split(' ')[0]}!
        </h3>
        <p className="text-muted mb-6">
          We&apos;ve received your request and will contact you within 24 hours to
          schedule your free consultation.
        </p>
        <div className="bg-gray-50 rounded-xl p-4 text-left">
          <p className="text-sm text-muted">
            <strong className="text-secondary">Service Area:</strong>{' '}
            {isValidServiceArea(formData.zip).area}
          </p>
          <p className="text-sm text-muted">
            <strong className="text-secondary">Service Type:</strong>{' '}
            {formData.serviceType}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={cn(
                'flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors',
                s === step
                  ? 'bg-primary text-white'
                  : s < step
                  ? 'bg-primary/20 text-primary'
                  : 'bg-gray-100 text-muted'
              )}
            >
              {s < step ? <CheckCircle className="w-4 h-4" /> : s}
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(step / totalSteps) * 100}%` }}
            className="h-full bg-primary rounded-full"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Contact Info */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-secondary mb-4">
              Let&apos;s Get Started
            </h3>

            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="relative">
              <input
                type="tel"
                placeholder="Phone Number (optional)"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </motion.div>
        )}

        {/* Step 2: Location */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-secondary mb-4">
              Where Are You Located?
            </h3>

            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              <input
                type="text"
                placeholder="ZIP Code"
                maxLength={5}
                value={formData.zip}
                onChange={(e) =>
                  updateField('zip', e.target.value.replace(/\D/g, ''))
                }
                className={cn(
                  'w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent',
                  zipError
                    ? 'border-red-300 focus:ring-red-500'
                    : 'border-gray-200 focus:ring-primary'
                )}
              />
            </div>

            {zipError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-2 p-3 bg-red-50 rounded-xl text-red-600 text-sm"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{zipError}</span>
              </motion.div>
            )}

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-muted mb-2">We currently serve:</p>
              <div className="flex gap-4 text-sm">
                <span className="text-secondary font-medium">
                  Orlando (32xxx)
                </span>
                <span className="text-secondary font-medium">
                  South Florida (33xxx)
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Service Type */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-secondary mb-4">
              What Do You Need?
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {SERVICE_TYPES.map((type) => (
                <button
                  key={type}
                  onClick={() => updateField('serviceType', type)}
                  className={cn(
                    'flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all',
                    formData.serviceType === type
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-primary/50'
                  )}
                >
                  <div
                    className={cn(
                      'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                      formData.serviceType === type
                        ? 'border-primary'
                        : 'border-gray-300'
                    )}
                  >
                    {formData.serviceType === type && (
                      <div className="w-3 h-3 bg-primary rounded-full" />
                    )}
                  </div>
                  <span
                    className={cn(
                      'font-medium',
                      formData.serviceType === type
                        ? 'text-primary'
                        : 'text-secondary'
                    )}
                  >
                    {type}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex gap-3 mt-8">
        {step > 1 && (
          <Button variant="outline" onClick={prevStep} className="flex-1">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        )}

        {step < totalSteps ? (
          <Button
            variant="primary"
            onClick={nextStep}
            disabled={!validateStep()}
            className="flex-1"
          >
            Continue
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={!validateStep() || isSubmitting}
            className="flex-1"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                Submitting...
              </div>
            ) : (
              <>
                Get Free Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
