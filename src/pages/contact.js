import React from 'react';

export default function ContactPage() {
  return (
    <>
      <div className="PageWrapper">
        <dl>
          <dt>Email</dt>
          <dd>
            <a href="mailto:gmattgreenfield@gmail.com" target="_blank">
              gmattgreenfield@gmail.com
            </a>
          </dd>
          <dt>Phone</dt>
          <dd>
            <a href="tel:+447891799914">07891799914</a>
          </dd>
        </dl>
      </div>
    </>
  );
}
