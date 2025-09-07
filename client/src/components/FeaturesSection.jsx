import React from 'react';

const features = [
  {
    tag: "Engaging Readers",
    title: "Connect With Your Audience",
    description: "Foster meaningful connections with readers through interactive comments, social sharing, and personalized feedback. Build a loyal community around your blog and spark conversations.",
    items: ["Reader Analytics", "Comment Moderation", "Social Sharing"],
    image: "https://assets-v2.codedesign.ai/storage/v1/object/public/playground_31926ca7/photo-1665686304129-a6e2d16923e8.jpeg",
    imageAlt: "Person typing on a laptop with a blog post on the screen",
    reverse: false,
  },
  {
    tag: "Easy Creation",
    title: "Simple Writing Interface",
    description: "Our streamlined editor lets you focus on crafting compelling content without distractions. Write, edit, and format with ease.",
    items: ["Drag and Drop", "Customizable Layouts", "Real-Time Preview"],
    image: "https://assets-v2.codedesign.ai/storage/v1/object/public/playground_31926ca7/photo-1499750310107-5fef28a66643.jpeg",
    imageAlt: "Laptop, coffee cup, and notepad on a wooden table",
    reverse: true,
  },
  {
    tag: "Seamless Sharing",
    title: "Effortless Content Distribution",
    description: "Share your posts across multiple platforms with just a few clicks. Reach a wider audience.",
    items: ["Cross-Platform Posting", "Customizable Posts", "Scheduled Sharing"],
    image: "https://assets-v2.codedesign.ai/storage/v1/object/public/playground_31926ca7/photo-1519337265831-281ec6cc8514.jpeg",
    imageAlt: "Hands typing on a laptop",
    reverse: false,
  },
];

const AnalyticsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-2 text-chart-1">
    <line x1="18" x2="18" y1="20" y2="10" />
    <line x1="12" x2="12" y1="20" y2="4" />
    <line x1="6" x2="6" y1="20" y2="14" />
  </svg>
);

const IntegrationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code text-chart-2">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const TemplateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-tool text-chart-3">
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l-1-1 7-7" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l-1-1 7-7" />
  </svg>
);

const cardFeatures = [
  {
    icon: <AnalyticsIcon />,
    title: "Advanced Analytics",
    description: "Gain insights into your audience with our powerful analytics tools.",
  },
  {
    icon: <IntegrationIcon />,
    title: "Easy Integration",
    description: "Connect effortlessly with tools you already use.",
  },
  {
    icon: <TemplateIcon />,
    title: "Customizable Templates",
    description: "Choose from a variety of designs to match your brand.",
  },
];

const FeatureSection = () => {
  return (
    <section id='features' className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Your Stories, Amplified Effortlessly
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            QuillLot empowers writers with intuitive tools, seamless design, and a vibrant community. Share your voice, connect, and inspire readers worldwide.
          </p>
        </div>

        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${feature.reverse ? 'md:flex-row-reverse' : ''} mb-20`}
          >
            <div className="md:w-1/2">
              <span className="text-muted-foreground font-semibold uppercase tracking-wide">
                {feature.tag}
              </span>
              <h3 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {feature.title}
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                {feature.description}
              </p>
              <ul className="mt-6 space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-muted-foreground">
                    <svg className="h-6 w-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={feature.image}
                alt={feature.imageAlt}
                className="w-full h-auto rounded-xl shadow-2xl shadow-black"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Explore Our Powerful Blogging Features
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          QuillLot offers seamless integration with your favorite platforms, making setup a breeze. Customize your blog with a variety of templates that reflect your unique style.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 hover:bg-secondary"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center space-x-4">
          <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors duration-200">
            Learn More
          </button>
          <button className="px-6 py-3 border border-border text-base font-medium rounded-md text-foreground bg-transparent hover:bg-secondary transition-colors duration-200">
            Sign Up
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;