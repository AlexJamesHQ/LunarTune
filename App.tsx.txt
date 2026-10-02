import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from './src/components/Navbar';
import { Hero } from './src/components/Hero';
import { ScreenshotsGallery } from './src/components/ScreenshotsGallery';
import { FeaturesSection } from './src/components/FeaturesSection';
import { DownloadSection } from './src/components/DownloadSection';
import { Footer } from './src/components/Footer';
import { Language } from './src/types';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';

const AppContent: React.FC = () => {
  const lang: Language = 'en';
  const [isMounted, setIsMounted] = React.useState(false);
  const { gridStyle } = useTheme();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Map grid style to CSS class
  const getGridClass = () => {
    switch (gridStyle) {
      case 'slow-drift':
        return 'backdrop-grid-slow-drift';
      case 'hyperspeed':
        return 'backdrop-grid-hyperspeed';
      case 'retro-dots':
        return 'backdrop-grid-retro-dots';
      case 'dots-drift':
        return 'backdrop-grid-dots-drift';
      case 'classic-static':
      default:
        return 'backdrop-grid-classic';
    }
  };

  // Animation variants for sections
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-black font-sans selection:bg-purple-600 selection:text-white relative overflow-hidden">
      {/* Dynamic Background Pattern based on selected Grid Style */}
      <div className={`fixed inset-0 pointer-events-none z-0 ${getGridClass()}`} />

      {/* Navigation Bar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={isMounted ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="relative z-20"
      >
        <Navbar lang={lang} />
      </motion.div>

      {/* Main Content Sections with stagger animation */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate={isMounted ? "show" : "hidden"}
        className="space-y-10 sm:space-y-12 pb-12 pt-[84px] relative z-10"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants}>
          <Hero lang={lang} />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
          {/* Pixel 8 Screenshots Gallery */}
          <motion.div variants={itemVariants}>
            <ScreenshotsGallery lang={lang} />
          </motion.div>

          {/* Features Bento Grid */}
          <motion.div variants={itemVariants}>
            <FeaturesSection lang={lang} />
          </motion.div>

          {/* APK Downloads & Architecture Selector */}
          <motion.div variants={itemVariants}>
            <DownloadSection lang={lang} />
          </motion.div>
        </div>
      </motion.main>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Footer lang={lang} />
      </motion.div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
