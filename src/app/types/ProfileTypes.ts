export type ProfileData = {
    config: {
name: string;
  logo_name: string;
  role: string;
  about: {
    sections: {
      [key: string]: {
        title: string;
        icon: string;
        info: {
          [key: string]: {
            title: string;
            description: string;
            files?: {
              [key: string]: string;
            };
          };
        };
      };
    };
  };
  contacts: {
    direct: {
      title: string;
      sources: {
        email: string;
        phone: string;
      };
    };
    social: {
      [platform: string]: {
        title: string;
        url: string;
        user: string;
      };
    };
    find_me_also_in: {
      title: string;
      sources: {
        [platform: string]: {
          title: string;
          url: string;
          user: string;
        };
      };
    };
  };
  gists: {
    [key: string]: string;
  };
  projects: {
    [key: string]: {
      title: string;
      description: string;
      img: string;
      tech: string[];
      url: string;
    };
  };
    }
  
};
