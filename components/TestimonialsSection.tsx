'use client';

import { useTranslations } from 'next-intl';
import { TestimonialSection } from '@/components/ui/testimonials';

export default function TestimonialsSection() {
  const t = useTranslations('testimonials');

  const testimonials = [
    {
      id: 1,
      quote: t('t1'),
      name: t('t1name'),
      role: t('t1date'),
      imageSrc: '/images/testi-01.jpg',
    },
    {
      id: 2,
      quote: t('t2'),
      name: t('t2name'),
      role: t('t2date'),
      imageSrc: '/images/testi-02.jpg',
    },
    {
      id: 3,
      quote: t('t3'),
      name: t('t3name'),
      role: t('t3date'),
      imageSrc: '/images/testi-03.jpg',
    },
    {
      id: 4,
      quote: t('t4'),
      name: t('t4name'),
      role: t('t4date'),
      imageSrc: '/images/testi-04.jpg',
    },
  ];

  return (
    <section id="testimonials">
      <TestimonialSection
        title={`${t('titleLine1')} ${t('titleItalic')}`}
        subtitle={t('label')}
        testimonials={testimonials}
      />
    </section>
  );
}
