import {Header} from './Header';
import {AboutPage} from '../views/AboutPage';
import {HomePage} from '../views/HomePage';

const ABOUT_PATHS = new Set(['/about', '/about/', '/about/index.html']);

const getCurrentPath = () => window.location.pathname;

export const AppShell = () => {
  const path = getCurrentPath();
  const isAboutPage = ABOUT_PATHS.has(path);

  return (
    <>
      <Header />
      <div id="main">
        {isAboutPage ? <AboutPage /> : <HomePage />}
      </div>
    </>
  );
};
