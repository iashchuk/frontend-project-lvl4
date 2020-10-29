import Rollbar from 'rollbar';

const initRollbar = () => {
  // eslint-disable-next-line no-new
  new Rollbar({
    accessToken: '102d73a7dbe74eb8bd55c6188e2709b0',
    captureUncaught: true,
    captureUnhandledRejections: true,
  });
};

export default initRollbar;
