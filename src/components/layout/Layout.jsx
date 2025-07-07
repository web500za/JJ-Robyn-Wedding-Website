import { WeddingProvider } from '../../context/WeddingContext';
import Navigation from './Navigation';
import Footer from './Footer';
import ErrorBoundary from '../ui/ErrorBoundary';
import NetworkStatus from '../ui/NetworkStatus';

function Layout({ children }) {
  return (
    <ErrorBoundary>
      <WeddingProvider>
        <div className="min-h-screen bg-cream">
          <Navigation />
          <main id="main-content" className="focus:outline-none" tabIndex="-1">
            {children}
          </main>
          <Footer />
          <NetworkStatus />
        </div>
      </WeddingProvider>
    </ErrorBoundary>
  );
}

export default Layout;