'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

// ── Replace with the business WhatsApp number (international format, no + or spaces) ──
const WHATSAPP_NUMBER = '211911130491';

export default function BookingSection() {
  const t = useTranslations('booking');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    style: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const styleLabel = styleOptions.find((o) => o.value === form.style)?.label || form.style || 'Not specified';

    const text = [
      `🌸 *New Appointment Request — Bridal Dreams*`,
      ``,
      `👰 *Name:* ${form.firstName} ${form.lastName}`,
      `📧 *Email:* ${form.email || 'Not provided'}`,
      `📞 *Phone:* ${form.phone || 'Not provided'}`,
      `📅 *Date:* ${form.date || 'Not specified'}`,
      `🕐 *Time:* ${form.time || 'Not specified'}`,
      `👗 *Style:* ${styleLabel}`,
      `💬 *Notes:* ${form.message || 'None'}`,
    ].join('\n');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(url, '_blank');
    }, 800);
  };

  const features = [
    t('feature1'),
    t('feature2'),
    t('feature3'),
    t('feature4'),
  ];

  const timeSlots = ['9:00 AM', '10:30 AM', '12:00 PM', '1:30 PM', '3:00 PM', '4:30 PM'];

  const styleOptions = [
    { value: 'ball-gown', label: t('styleOptions.ballGown') },
    { value: 'mermaid', label: t('styleOptions.mermaid') },
    { value: 'a-line', label: t('styleOptions.aLine') },
    { value: 'sheath', label: t('styleOptions.sheath') },
    { value: 'lace', label: t('styleOptions.lace') },
    { value: 'not-sure', label: t('styleOptions.notSure') },
  ];

  return (
    <section id="booking">
      <div className="booking-wrap">
        <div className="booking-info reveal">
          <div className="section-label">{t('label')}</div>
          <h2 className="section-title">
            {t('titleLine1')}
            <em>{t('titleItalic')}</em>
          </h2>
          <div className="section-divider" />
          <p className="section-body">{t('infoBody')}</p>
          <div className="booking-details">
            {features.map((feature, i) => (
              <div key={i} className="booking-detail-item">{feature}</div>
            ))}
          </div>
        </div>

        <div className="booking-form reveal">
          {submitted ? (
            <div className="form-success">
              <div style={{ fontSize: 40, marginBottom: 20 }}>✦</div>
              <h3>{t('successTitle')}</h3>
              <p>{t('successMsg')}</p>
              <p style={{ marginTop: 12, opacity: 0.6, fontSize: 14 }}>
                A WhatsApp message has been opened with your booking details.
              </p>
            </div>
          ) : (
            <>
              <div className="form-title">{t('formTitle')}</div>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">{t('firstName')}</label>
                    <input id="firstName" type="text" required value={form.firstName} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">{t('lastName')}</label>
                    <input id="lastName" type="text" required value={form.lastName} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">{t('email')}</label>
                    <input id="email" type="email" required value={form.email} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">{t('phone')}</label>
                    <input id="phone" type="tel" value={form.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">{t('date')}</label>
                    <input id="date" type="date" value={form.date} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">{t('time')}</label>
                    <select id="time" value={form.time} onChange={handleChange}>
                      <option value="">{t('selectTime')}</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="style">{t('style')}</label>
                  <select id="style" value={form.style} onChange={handleChange}>
                    <option value="">{t('styleDefault')}</option>
                    {styleOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t('message')}</label>
                  <textarea id="message" rows={4} value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="form-submit" disabled={loading}>
                  {loading ? t('submitting') : t('submitBtn')}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
