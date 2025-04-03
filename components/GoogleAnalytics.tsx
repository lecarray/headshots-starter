'use client';

import { useEffect } from 'react';

export default function GoogleAnalytics({ gaId }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 添加Google Analytics脚本
      const script1 = document.createElement('script');
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      script1.async = true;
      document.head.appendChild(script1);

      // 添加GA初始化代码
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', gaId);
    }
  }, [gaId]);

  return null;
}
