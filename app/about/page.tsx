'use client';

import ProfileCard from '@/components/ProfileCard';
import { HeroHeader } from '@/components/header';
import { EnhancedFooter } from '@/components/enhanced-footer';

export default function AboutPage() {

  const handleContact = (name: string, website?: string) => {
    if (website) {
      window.open(website, '_blank');
    } else {
      window.location.href = 'mailto:Affan@reelforge.com';
    }
  };

  return (
    <main className="relative min-h-screen">
      <HeroHeader />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-instrument-serif font-bold mb-6">
            Our Team
          </h1>
          <p className="text-lg md:text-xl font-instrument-serif text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the cracked team behind ReelForge. We&apos;re passionate about helping creators succeed with context-based AI video editing. We are experts in our niches, and we know you are too.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-start justify-items-center">
            {/* Team Member 1 */}
            <ProfileCard
              name="Affan"
              title="CEO & Lead PMM"
              oneLiner="Marketing & Strategy. P.S. I'm the delusional one."
              handle="affansyed321"
              status="Available"
              contactText="Visit Website"
              avatarUrl="/team/affan.jpeg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => handleContact('Affan', 'https://affansyed.com')}
            />

            {/* Team Member 2 - Shahid */}
            <ProfileCard
              name="Shahid"
              title="Lead AI"
              oneLiner="Proprietary Models & Workflow Efficiency. P.S. I'm not the delusional one."
              handle="Shahid_mo22"
              status="Available"
              contactText="Visit LinkedIn"
              avatarUrl="/team/Shahid.jpeg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => handleContact('Shahid', 'https://www.linkedin.com/in/shahid-mo/')}
              behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(340,100%,90%,var(--card-opacity)) 4%,hsla(340,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(340,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(340,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#f195acc4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#f195acff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#f195acff 0%,#f195acff 40%,#f195acff 60%,#f195acff 100%)"
            />

            {/* Team Member 3 - Mohammed */}
            <ProfileCard
              name="Mohammed"
              title="CTO"
              oneLiner="Integrations & Backend Development. P.S. I don't know what those two are on."
              handle="mohammed"
              status="Available"
              contactText="Visit LinkedIn"
              avatarUrl="/team/Rehan.jpeg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => handleContact('Mohammed', 'https://www.linkedin.com/in/mohammed/')}
              behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(150,100%,90%,var(--card-opacity)) 4%,hsla(150,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(150,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(150,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#7FD68Cc4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#7FD68Cff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#7FD68Cff 0%,#7FD68Cff 40%,#7FD68Cff 60%,#7FD68Cff 100%)"
            />
          </div>
        </div>
      </section>

      <EnhancedFooter />
    </main>
  );
}
