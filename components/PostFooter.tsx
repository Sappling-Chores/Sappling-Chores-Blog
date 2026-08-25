'use client';

import React from 'react';

interface PostFooterProps {
  copyrightText?: string;
  backToTopText?: string;
}

export function PostFooter({
  copyrightText = '© 2026 Sappling Blog',
  backToTopText = 'Back to top ↑',
}: PostFooterProps) {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <span>{copyrightText}</span>
      <a href="#" onClick={scrollToTop}>
        {backToTopText}
      </a>
    </footer>
  );
}
