import { useState, useEffect } from 'react';
import './App.css';

import MindMap from './components/MindMap';
import InfoPanel from './components/InfoPanel';
import SearchPanel from './components/SearchPanel';
import { mindMapData, searchNodes } from './data/mindMapData';

function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const handleNodeClick = (node) => {
    setSelectedNode(node);
  };
  
  const handleNodeSelect = (nodeId) => {
    const node = mindMapData.nodes.find(n => n.id === nodeId);
    if (node) {
      setSelectedNode(node);
    }
    // Close mobile menu after selection
    setIsMobileMenuOpen(false);
  };
  
  const handleSearch = (query) => {
    if (query.trim()) {
      const results = searchNodes(query, mindMapData.nodes);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };
  
  const handleClosePanel = () => {
    setSelectedNode(null);
  };
  
  const handleResetView = () => {
    if (window.mindMapResetView) {
      window.mindMapResetView();
    }
    setSelectedNode(null);
    setIsMobileMenuOpen(false);
  };
  
  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-50 relative">
      {/* Mobile Menu Button - Only visible on mobile */}
      {isMobile && (
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 left-4 z-50 bg-white p-3 rounded-lg shadow-lg border border-gray-200
                     hover:bg-gray-50 transition-colors duration-200"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      )}

      {/* Search Panel - Desktop: Fixed left, Mobile: Full screen overlay */}
      <div className={`
        ${isMobile ? 'fixed' : 'absolute'} top-0 left-0 h-full z-40 transition-transform duration-300 ease-in-out
        ${isMobile && !isMobileMenuOpen ? '-translate-x-full' : 'translate-x-0'}
        ${isMobile ? 'w-full' : 'w-80'}
        bg-white shadow-lg
        ${!isMobile ? 'block' : ''}
      `}>
        <SearchPanel
          onSearch={handleSearch}
          onNodeSelect={handleNodeSelect}
          onResetView={handleResetView}
          searchResults={searchResults}
          isMobile={isMobile}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>

      {/* Mobile Overlay Background */}
      {isMobileMenuOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* Main Mind Map - Full width on mobile, with left margin on desktop */}
      <div className={`h-full relative ${isMobile ? 'w-full' : 'w-full ml-80'}`}>
        <MindMap
          onNodeClick={handleNodeClick}
          selectedNodeId={selectedNode?.id}
        />
        
        {/* Info Panel Overlay */}
        {selectedNode && (
            <InfoPanel
              selectedNode={selectedNode}
              onClose={handleClosePanel}
            />
        )}
      </div>
      
      {/* Header - Responsive positioning */}
      <div className={`fixed top-4 z-30 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200
                      ${isMobile ? 'left-1/2 transform -translate-x-1/2 ml-8' : 'left-1/2 transform -translate-x-1/2'}
                      max-w-xs md:max-w-none`}>
        <h1 className="text-sm md:text-lg font-bold text-gray-800 text-center">
          Interactive Mind Map
        </h1>
        <p className="text-xs md:text-sm text-gray-600 text-center hidden md:block">
          Explore Bruce Weaver's expertise
        </p>
      </div>
      
      {/* Footer - Responsive positioning */}
      <div className="fixed bottom-4 right-4 z-30">
        <div className="bg-white px-3 py-2 rounded-lg shadow-md border border-gray-200
                        md:px-4">
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              onClick={() => handleNodeSelect('bruce-weaver')}
              className="text-blue-600 hover:text-blue-800 font-medium text-xs md:text-sm
                       transition-colors duration-200"
            >
              Contact
            </button>
            <button
              onClick={() => window.open('#resume', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 
                       rounded-md text-xs md:text-sm font-medium transition-colors duration-200
                       md:px-4 md:py-2"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

