export interface Messages {
  navbar: {
    home: string;
    about: string;
    services: string;
    events: string;
    blog: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    vision: string;
    visionText: string;
    mission: string;
    missionText: string;
  };
  services: {
    title: string;
    subtitle: string;
    description: string;
    inscription: string;
    membres: {
      actifs: {
        title: string;
        subtitle: string;
        price: string;
        benefits: string[];
      };
      elites: {
        title: string;
        subtitle: string;
        price: string;
        benefits: string[];
      };
    };
  };
  events: {
    title: string;
    subtitle: string;
    description: string;
    upcoming: string;
    past: string;
    conference: {
      title: string;
      theme: string;
      date: string;
      time: string;
      location: string;
      limited: string;
      benefits: {
        title: string;
        items: string[];
      };
      packs: {
        title: string;
        starter: {
          name: string;
          price: string;
          benefits: string[];
        };
        gold: {
          name: string;
          price: string;
          benefits: string[];
        };
        vip: {
          name: string;
          price: string;
          benefits: string[];
        };
      };
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    description: string;
  };
  team: {
    title: string;
    subtitle: string;
    description: string;
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
    };
    info: {
      email: string;
      phone: string;
      location: string;
    };
  };
  footer: {
    description: string;
    links: string;
    social: string;
    copyright: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
}
