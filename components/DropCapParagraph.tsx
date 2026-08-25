'use client';

import React, { useEffect, useRef } from 'react';

interface DropCapParagraphProps {
  dropCap: string;
  children: React.ReactNode;
  className?: string;
}

export function DropCapParagraph({ dropCap, children, className = '' }: DropCapParagraphProps) {
  const pRef = useRef<HTMLParagraphElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const adjustDropCap = () => {
      const p = pRef.current;
      const span = spanRef.current;
      if (!p || !span) return;

      p.classList.remove('single-line-dropcap');

      const measure = document.createElement('span');
      measure.style.display = 'inline';

      const computedStyle = window.getComputedStyle(p);
      measure.style.font = computedStyle.font;
      measure.style.fontSize = computedStyle.fontSize;
      measure.style.fontFamily = computedStyle.fontFamily;
      measure.style.fontWeight = computedStyle.fontWeight;
      measure.style.letterSpacing = computedStyle.letterSpacing;
      measure.style.lineHeight = computedStyle.lineHeight;

      const dropCapText = span.textContent || '';
      let fullText = p.textContent || '';
      if (fullText.startsWith(dropCapText)) {
        fullText = fullText.substring(dropCapText.length);
      }
      measure.textContent = fullText;

      measure.style.position = 'absolute';
      measure.style.visibility = 'hidden';

      const pWidth = p.clientWidth;
      const dropCapWidth = span.offsetWidth;
      const availableWidth = pWidth - dropCapWidth - 20;
      measure.style.width = Math.max(availableWidth, 0) + 'px';
      measure.style.display = 'block';

      document.body.appendChild(measure);
      const textHeight = measure.clientHeight;
      document.body.removeChild(measure);

      const lineHeight = parseFloat(computedStyle.lineHeight) || 24;

      if (textHeight <= lineHeight * 1.3) {
        p.classList.add('single-line-dropcap');
      }
    };

    adjustDropCap();
    window.addEventListener('resize', adjustDropCap);
    return () => window.removeEventListener('resize', adjustDropCap);
  }, []);

  return (
    <p ref={pRef} className={className}>
      <span ref={spanRef} className="first-syllabal">
        {dropCap}
      </span>
      {children}
    </p>
  );
}
