export namespace Dictionary {
  export type NotFound = {
    not_found: {
      title: string;
      description: string;
      button: string;
    };
  };
  export type Error = {
    error: {
      title: string;
      description: string;
      try_again_button: string;
      go_back_button: string;
    };
  };
  export type Home = {
    home: {
      title: string;
      modules: {
        create_contract: { title: string; description: string };
        settings: { title: string; description: string };
        unavailable: { title: string };
      };
    };
  };
  export type Settings = {
    settings: {
      title: string;
      modules: {
        language: { title: string; description: string; placeholder: string };
        theme: { title: string; description: string; placeholder: string; values: { light: string; dark: string; system: string } };
      };
    };
  };
}
