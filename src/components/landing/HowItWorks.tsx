import React from 'react';

const steps = [
  {
    number: "01",
    title: "Connect your sources",
    description: "Sync GitHub, LinkedIn, and local projects. We parse the technical depth automatically."
  },
  {
    number: "02",
    title: "Build your story",
    description: "Use our AI to polish descriptions and generate a clean, responsive portfolio site."
  },
  {
    number: "03",
    title: "Track the progress",
    description: "Automate job applications tracking and follow-up reminders in one central hub."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-xl px-md">
      <div className="max-w-max-width-content mx-auto">
        <div className="text-center mb-xl">
          <h2 className="text-headline-lg">From zero to offer</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="text-[64px] font-bold text-primary/10 mb-md leading-none">{step.number}</div>
              <h4 className="text-headline-md mb-sm">{step.title}</h4>
              <p className="text-body-md text-on-surface-variant">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
