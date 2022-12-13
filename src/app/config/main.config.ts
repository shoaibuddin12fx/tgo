class cons {
  static secure = 's';
  // static domain = "testv23.demowebsitelinks.com/hunter_social.com/public/api";
  static domain = 'hunterssocial.com';
  static default_part = 'api';
}

export const Config = {
  SERVICEURL: `http${cons.secure}://${cons.domain}/${cons.default_part}`,
  URL: `http${cons.secure}://${cons.domain}/`,
};
