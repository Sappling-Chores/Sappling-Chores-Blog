import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ThemeToggle';
import { PostFooter } from '@/components/PostFooter';

export const metadata = {
  title: 'Science - Sappling Blog',
  description: 'Demo section blog post template',
};

export default function DemoUrlPage() {
  return (
    <div className="container">
      <article className="post-card">
        <nav className="nav-top">
          <div className="nav-links">
            <Link href="/">← Back to Blog Home</Link>
          </div>
          <ThemeToggle />
        </nav>

        <header className="post-header">
          <span className="blog-name">Sappling Blog</span>
          <h1 className="post-title">Welcome to the demo section</h1>

          <div className="post-meta">
            <span className="post-date">June 26, 2026</span>
            <span className="post-tag">Fun</span>
          </div>
        </header>

        {/* Unoptimized external image from Unsplash */}
        <img
          className="featured-image"
          src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80"
          alt="Science image"
        />

        <div className="post-content">
          <p>
            This is your new blog post template! Because this file is located in the `blog/demo-url/` directory, you can reach it simply by navigating to `/blog/demo-url/`.
          </p>
          <p>You can edit this template directly to publish your post.</p>

          <Image
            className="markdown-image"
            src="/Assets/Edit14.png"
            alt="New template image"
            width={1000}
            height={600}
          />

          <p>As you can see this is a test url, take care. byeeeeeee</p>
        </div>

        <PostFooter copyrightText="© 2026 Sappling Blog" backToTopText="Back to top ↑" />
      </article>
    </div>
  );
}
