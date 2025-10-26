import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import CategoryRow from './components/CategoryRow.jsx';
import Footer from './components/Footer.jsx';

const categories = [
  {
    id: 'critically-acclaimed',
    title: 'Critically Acclaimed',
    items: [
      {
        id: 'notion',
        name: 'Notion',
        description: 'All-in-one workspace for notes, docs, and wikis.',
        tags: ['Productivity', 'Docs'],
        thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
        video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        url: 'https://www.notion.so/',
        rating: 4.9,
      },
      {
        id: 'figma',
        name: 'Figma',
        description: 'Collaborative interface design tool.',
        tags: ['Design', 'Collaboration'],
        thumbnail: 'https://images.unsplash.com/photo-1581291519195-ef11498d1cf5?q=80&w=1200&auto=format&fit=crop',
        video: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        url: 'https://www.figma.com/',
        rating: 4.8,
      },
      {
        id: 'linear',
        name: 'Linear',
        description: 'Issue tracking tool for high-performance teams.',
        tags: ['Project Management'],
        thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
        video: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        url: 'https://linear.app/',
        rating: 4.7,
      },
      {
        id: 'superhuman',
        name: 'Superhuman',
        description: 'Lightning-fast email for professionals.',
        tags: ['Email', 'Productivity'],
        thumbnail: 'https://images.unsplash.com/photo-1520975618319-68c7b3e901cf?q=80&w=1200&auto=format&fit=crop',
        video: 'https://media.w3.org/2010/05/video/movie_300.mp4',
        url: 'https://superhuman.com/',
        rating: 4.6,
      },
    ],
  },
  {
    id: 'we-think-you-will-like',
    title: 'We Think You Will Also Like',
    items: [
      {
        id: 'midjourney',
        name: 'Midjourney',
        description: 'AI image generation with stunning results.',
        tags: ['AI', 'Art'],
        thumbnail: 'https://images.unsplash.com/photo-1495562569060-2eec283d3391?q=80&w=1200&auto=format&fit=crop',
        video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        url: 'https://www.midjourney.com/',
        rating: 4.8,
      },
      {
        id: 'runwayml',
        name: 'Runway',
        description: 'Generative AI for video editing and creation.',
        tags: ['AI', 'Video'],
        thumbnail: 'https://images.unsplash.com/photo-1522199794611-8e8f0d05056b?q=80&w=1200&auto=format&fit=crop',
        video: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        url: 'https://runwayml.com/',
        rating: 4.5,
      },
      {
        id: 'arc',
        name: 'Arc Browser',
        description: 'A new kind of browser for productivity and creativity.',
        tags: ['Browser', 'Productivity'],
        thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
        video: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        url: 'https://arc.net/',
        rating: 4.7,
      },
      {
        id: 'cursor',
        name: 'Cursor',
        description: 'AI-powered code editor.',
        tags: ['AI', 'Code'],
        thumbnail: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
        video: 'https://media.w3.org/2010/05/video/movie_300.mp4',
        url: 'https://www.cursor.com/',
        rating: 4.6,
      },
    ],
  },
  {
    id: 'award-winners',
    title: 'Award Winners',
    items: [
      {
        id: 'slack',
        name: 'Slack',
        description: 'Where work happens.',
        tags: ['Communication'],
        thumbnail: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&auto=format&fit=crop',
        video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        url: 'https://slack.com/',
        rating: 4.5,
      },
      {
        id: 'stripe',
        name: 'Stripe',
        description: 'Payments infrastructure for the internet.',
        tags: ['Fintech'],
        thumbnail: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1200&auto=format&fit=crop',
        video: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        url: 'https://stripe.com/',
        rating: 4.9,
      },
      {
        id: 'webflow',
        name: 'Webflow',
        description: 'Build production-ready websites without code.',
        tags: ['No-code', 'Web'],
        thumbnail: 'https://images.unsplash.com/photo-1545670723-196ed0954981?q=80&w=1200&auto=format&fit=crop',
        video: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        url: 'https://webflow.com/',
        rating: 4.6,
      },
      {
        id: 'openai',
        name: 'OpenAI',
        description: 'AI research and deployment company.',
        tags: ['AI', 'Research'],
        thumbnail: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop',
        video: 'https://media.w3.org/2010/05/video/movie_300.mp4',
        url: 'https://openai.com/',
        rating: 4.8,
      },
    ],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <NavBar />
      <Hero />
      <main className="relative z-10 space-y-10 md:space-y-14 pb-20">
        <section className="px-4 md:px-8">
          {categories.map((cat) => (
            <div key={cat.id} className="mb-8 md:mb-12">
              <CategoryRow title={cat.title} items={cat.items} />
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
