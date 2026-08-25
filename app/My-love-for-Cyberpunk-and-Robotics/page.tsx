import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ThemeToggle';
import { PostFooter } from '@/components/PostFooter';
import { DropCapParagraph } from '@/components/DropCapParagraph';

export const metadata = {
  title: 'Science - Sappling Blog',
  description: 'My love for Cyberpunk and Robotics by Mohammad Sarfaraz',
};

export default function CyberpunkRoboticsPage() {
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
          <h1 className="post-title">My love for Cyberpunk and Robotics</h1>

          <Image
            className="featured-image"
            src="/Assets/Cyberpunk.png"
            alt="Science image"
            width={1200}
            height={675}
            priority
          />

          <div className="post-meta">
            <span className="post-date">June 29, 2026</span>
            <span className="post-tag">Sci-fi</span>
            <span className="post-tag">Personal</span>
            <span className="post-tag">Fantasy</span>
            <span className="post-tag">Robotics</span>
          </div>
        </header>

        <div className="post-content">
          <DropCapParagraph dropCap="A">
            s my finger tips ran across the neon-lit keycaps of my laptop, I could hear the sound of each key press echoing through my room.
          </DropCapParagraph>

          <p>
            My eyes drifted to the section of the screen, and there it was, I finally got its background color fixed. It was a website.
          </p>

          <blockquote>
            <p>
              &quot;Within moments I am gazing at this seductive city as if at any moment a portal would appear and a metal arm would pull me into the city through a hologram. The city is drenched in soft rain and neon lighting. As the rain hits the ground and each droplet unites with purple radiance, creating a unique glow every second.
            </p>

            <p>
              At a distance, I see a hologram glitch of a huge topless woman with a sublime body outside a brothel. As I am walking deeper into the city where this big passage seems to be branched into many narrow ones. I hear “Yeah, that&apos;s my Babyyy!” from what it looks like a group of teenagers.
            </p>

            <p>
              I am starting to walk towards them and I can already hear the sound of servos moving in harmony, and see the reflection of the metallic blades of a mini robot. I can see the rough pattern carved on the bright green colored pcb exposed through the metallic frame. I can see the angles, the inverse trigonometry, the coordinates of its arm on the cartesian plane. I can see the carbon fibre moulded into the shape of a microbot. I can hear the sound of a circular blade hitting the ground at four thousand and twelve rpm.
              And I can feel each line of code turning into a beam of photons.&quot;
            </p>

            <Image
              className="markdown-image"
              src="/Assets/MicroBot.png"
              alt="New template image"
              width={1000}
              height={600}
            />
          </blockquote>

          <p>It was fascinating.</p>

          <blockquote>
            <p>
              &quot;Just as I am about to cheer for a bot cosplaying &lsquo;the minecraft spider&lsquo;, I hear a loud noise. It was the sound of defeat and utter destruction of &lsquo;Spider the cosplayer&lsquo;. Two of its legs flew just two inches away from my ear splitting in two.
            </p>
            <p>
              As I bend down to pick this very cool looking LED which was a part of spider&lsquo;s eye, it feels weird as if it has no texture and it&lsquo;s missing a third dimension.&quot;
            </p>
          </blockquote>

          <p>
            It was that moment when my pov shifted from being a wanderer who has fallen in love with the beauty of this stunning litted world to someone sitting at a desk in a room painted in a bland green color where the only source of light is an old white bulb and looking at the browser tab which says — “Cyberpunk 4 gameplay - Youtube.com”.
          </p>

          <p>
            Now, I know that I love untangling wires and adding fillets to the edge of a cube and switching through layers of pcb and inverting a matrix more than changing the &lsquo;background color&lsquo; of a website.
          </p>

          <p>&mdash; Mohammad Sarfaraz.</p>
        </div>

        <PostFooter copyrightText="© 2026 Sappling Blog" backToTopText="Back to top ↑" />
      </article>
    </div>
  );
}
