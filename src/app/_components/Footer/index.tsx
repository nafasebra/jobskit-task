import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Links = [
  {
    id: uuidv4(),
    title: 'جابزکیت',
    links: [
      {
        id: uuidv4(),
        title: 'لیست مشاغل',
        href: '/',
      },
      {
        id: uuidv4(),
        title: 'اعلان ها',
        href: '/',
      },
      {
        id: uuidv4(),
        title: 'وبلاگ',
        href: '/',
      },
      {
        id: uuidv4(),
        title: 'سوالات متداول',
        href: '/',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'حقوقی',
    links: [
      {
        id: uuidv4(),
        title: 'درباره ما',
        href: '/',
      },
      {
        id: uuidv4(),
        title: 'تماس با ما',
        href: '/',
      },
      {
        id: uuidv4(),
        title: 'قوانین و مقررات',
        href: '/',
      },
    ],
  },
];

function Footer() {
  return (
    <footer>
      {/* logo */}
      <p>
        جابزکیت تلاشی برای کمک به ایرانیان برای یافتن شغل‌های دورکاری، ریلوکیشن
        و یا ویزااسپانسرشیپ است.
      </p>
    </footer>
  );
}

export default Footer;
