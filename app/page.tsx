import React from 'react';
import Link from 'next/link';
import { HeaderNav } from '@/components/HeaderNav';

export const metadata = {
  title: 'Sappling Blog',
  description: 'Blogs & writing by Sappling',
};

export default function HomePage() {
  return (
    <div className="container">
      <HeaderNav />

      <div className="main-container">
        <h1>Blogs &amp; writing</h1>
        <hr />

        <p>Here are some of the blogs I have written. Hope you enjoy readin it!</p>

        <h2>2026</h2>

        <p>Stuff are on its way.</p>

        <h3>July</h3>
        <ul>
          <li className="post-item">
            <span className="post-info">
              <Link href="/Free-will">[Free Will]</Link> - Jul 6, 2026
            </span>
            <span className="tags-container">
              <span className="tags-label">Tags:</span>
              <span className="post-tag">Philosophy</span>
              <span className="post-tag">Free-Will</span>
              <span className="post-tag">Determinism</span>
            </span>
          </li>
        </ul>

        <h3>June</h3>
        <ul>
          <li className="post-item">
            <span className="post-info">
              <Link href="/My-love-for-Cyberpunk-and-Robotics">
                [My Love for Cyberpunk and Robotics]
              </Link>{' '}
              - Jun 29, 2026
            </span>
            <span className="tags-container">
              <span className="tags-label">Tags:</span>
              <span className="post-tag">Fantasy</span>
              <span className="post-tag">Sci-Fi</span>
              <span className="post-tag">Robotics</span>
            </span>
          </li>
          <li className="post-item">
            <span className="post-info">
              <Link href="/demo-url">[Demo-url]</Link> - Jun 26, 2026
            </span>
            <span className="tags-container">
              <span className="tags-label">Tags:</span>
              <span className="post-tag">science</span>
              <span className="post-tag">fun</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
