import { Search, User, Download, RotateCcw, X } from 'lucide-react';
import { useState } from 'react';

const SearchPanel = ({ onSearch, onNodeSelect, onResetView, searchResults, isMobile, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };
  
  const handleResultClick = (nodeId) => {
    onNodeSelect(nodeId);
    setSearchQuery('');
    onSearch('');
  };
  
  return (
    <div className="h-full w-full bg-white overflow-y-auto">
      {/* Mobile Header with Close Button */}
      {isMobile && (
        <div className="flex items-center justify-between p-4 border-b border-gray-200 md:hidden">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>
      )}

      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Bruce Weaver</h1>
        <p className="text-gray-600 text-sm">Estate & Ranch Management Professional</p>
      </div>
      
      {/* Search */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search skills, experience..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-all duration-200"
          />
        </div>
        
        {/* Search Results */}
        {searchQuery && searchResults && searchResults.length > 0 && (
          <div className="mt-3">
            <p className="text-sm text-gray-600 mb-2">
              Search Results ({searchResults.length})
            </p>
            <div className="space-y-1 max-h-40 overflow-y-auto">
              {searchResults.map((node) => (
                <button
                  key={node.id}
                  onClick={() => handleResultClick(node.id)}
                  className="w-full text-left p-2 hover:bg-gray-100 rounded
                           transition-colors duration-200"
                >
                  <div className="font-medium text-sm text-gray-800">
                    {node.data.label}
                  </div>
                  {node.data.description && (
                    <div className="text-xs text-gray-600 mt-1 truncate">
                      {node.data.description}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {searchQuery && searchResults && searchResults.length === 0 && (
          <div className="mt-3 text-sm text-gray-500">
            No results found for "{searchQuery}"
          </div>
        )}
      </div>
      
      {/* Quick Actions */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Actions</h3>
        <div className="space-y-2">
          <button
            onClick={() => onNodeSelect('bruce-weaver')}
            className="w-full flex items-center p-3 bg-blue-50 hover:bg-blue-100 
                     rounded-lg transition-colors duration-200"
          >
            <User size={18} className="text-blue-600 mr-3" />
            <span className="text-blue-700 font-medium">View Profile Overview</span>
          </button>
          
          <button
            onClick={() => window.open('#resume', '_blank')}
            className="w-full flex items-center p-3 bg-purple-50 hover:bg-purple-100 
                     rounded-lg transition-colors duration-200"
          >
            <Download size={18} className="text-purple-600 mr-3" />
            <span className="text-purple-700 font-medium">Download Resume</span>
          </button>
          
          <button
            onClick={onResetView}
            className="w-full flex items-center p-3 bg-gray-50 hover:bg-gray-100 
                     rounded-lg transition-colors duration-200"
          >
            <RotateCcw size={18} className="text-gray-600 mr-3" />
            <span className="text-gray-700 font-medium">Reset View</span>
          </button>
        </div>
      </div>
      
      {/* Skill Categories */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Skill Categories</h3>
        <div className="space-y-2">
          {[
            { id: 'core-identity', label: 'Core Identity & Approach', color: '#4A90A4' },
            { id: 'maintenance', label: 'Hands-On Maintenance', color: '#C4A484' },
            { id: 'vehicles', label: 'Vehicle & Equipment Management', color: '#8B5A3C' },
            { id: 'vendor-oversight', label: 'Vendor & Project Oversight', color: '#6B8E23' },
            { id: 'guest-services', label: 'Property Readiness & Guest Services', color: '#D2B48C' },
            { id: 'security', label: 'Seasonal & Security Management', color: '#556B2F' },
            { id: 'regenerative', label: 'Regenerative Land Stewardship', color: '#4A90A4' }
          ].map((category) => (
            <button
              key={category.id}
              onClick={() => onNodeSelect(category.id)}
              className="w-full text-left p-3 border border-gray-200 hover:border-gray-300 
                       rounded-lg transition-all duration-200 hover:shadow-sm"
              style={{ borderLeftColor: category.color, borderLeftWidth: '4px' }}
            >
              <div className="font-medium text-sm text-gray-800">
                {category.label}
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Instructions */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">How to Navigate</h3>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>• Click and drag to pan the view</li>
          <li>• Scroll to zoom in/out</li>
          <li>• Click on nodes to learn more</li>
          <li>• Use search to find specific skills</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchPanel;

