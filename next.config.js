const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = {
  reactStrictMode: true,
};

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "diazlp",
        mongodb_password: "F2pbXb852dIS7byc",
        mongodb_clustername: "blokpostcluster0",
        mongodb_database: "contact-me-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "diazlp",
      mongodb_password: "F2pbXb852dIS7byc",
      mongodb_clustername: "blokpostcluster0",
      mongodb_database: "contact-me",
    },

    future: {
      webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
      // Looks like backward compatibility approach.
    },
    webpack(config) {
      config.resolve.fallback = {
        ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
        // by next.js will be dropped. Doesn't make much sense, but how it is
        fs: false, // the solution
      };

      return config;
    },
  };
};
