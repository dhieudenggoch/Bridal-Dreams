'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function BookingSection() {
  const t = useTranslations('booking');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
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
            </div>
          ) : (
            <>
              <div className="form-title">{t('formTitle')}</div>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">{t('firstName')}</label>
                    <input id="firstName" type="text" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">{t('lastName')}</label>
                    <input id="lastName" type="text" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">{t('email')}</label>
                    <input id="email" type="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">{t('phone')}</label>
                    <input id="phone" type="tel" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">{t('date')}</label>
                    <input id="date" type="date" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">{t('time')}</label>
                    <select id="time">
                      <option value="">{t('selectTime')}</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="style">{t('style')}</label>
                  <select id="style">
                    <option value="">{t('styleDefault')}</option>
                    {styleOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t('message')}</label>
                  <textarea id="message" rows={4} />
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
