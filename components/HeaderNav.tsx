import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function HeaderNav() {
  return (
    <header className="header-nav">
      <a href="https://ayysappling.com" className="nav-brand">
        Sappling <span>/ Chores</span>
      </a>
      <div className="nav-menu">
        <nav className="nav-links">
          <a href="https://ayysappling.com" className="nav-link">
            home
          </a>
          <span className="nav-separator">|</span>
          <Link href="/" className="nav-link active">
            blog
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
