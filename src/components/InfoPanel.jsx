import { X, ExternalLink, Mail, Phone, MapPin, Download } from 'lucide-react';
import { categoryDetails } from '../data/mindMapData';

const InfoPanel = ({ selectedNode, onClose }) => {
  if (!selectedNode) return null;
  
  const details = categoryDetails[selectedNode.id];
  if (!details) return null;
  
  const { title, subtitle, overview, skills, achievements, contact, links } = details;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

      {/* Info Panel Content */}
      <div className="relative bg-white rounded-lg shadow-2xl w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div 
          className="p-6 text-white relative flex-shrink-0"
          style={{ backgroundColor: selectedNode.data.color }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 
                       transition-colors duration-200"
          >
            <X size={24} />
          </button>
          
          {selectedNode.id === 'bruce-weaver' && (
            <img 
              src="/BruceWeaver.Headshot.png" 
              alt="Bruce Weaver Headshot"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
            />
          )}

          <h2 className="text-xl font-bold mb-2 pr-8 text-center">{title}</h2>
          {subtitle && (
            <p className="text-sm opacity-90 text-center">{subtitle}</p>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto flex-grow">
          {/* Overview */}
          {overview && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Overview</h3>
              <p className="text-gray-600 leading-relaxed">{overview}</p>
            </div>
          )}
          
          {/* Skills */}
          {skills && skills.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm
                             hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Achievements */}
          {achievements && achievements.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Key Achievements</h3>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Contact Information */}
          {contact && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Contact Information</h3>
              <div className="space-y-3">
                {contact.email && (
                  <div className="flex items-center">
                    <Mail size={18} className="text-gray-500 mr-3" />
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      {contact.email}
                    </a>
                  </div>
                )}
                {contact.phone && (
                  <div className="flex items-center">
                    <Phone size={18} className="text-gray-500 mr-3" />
                    <a 
                      href={`tel:${contact.phone}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      {contact.phone}
                    </a>
                  </div>
                )}
                {contact.location && (
                  <div className="flex items-center">
                    <MapPin size={18} className="text-gray-500 mr-3" />
                    <span className="text-gray-600">{contact.location}</span>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* External Links */}
          {links && links.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Learn More</h3>
              <div className="space-y-2">
                {links.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => window.open(link.url, 
                    '_blank')}
                    className="w-full flex items-center justify-between p-3 
                             bg-gray-50 hover:bg-gray-100 rounded-lg
                             transition-colors duration-200 text-left"
                  >
                    <span className="text-gray-700">{link.label}</span>
                    {link.label.includes(
                    'Download') ? (
                      <Download size={18} className="text-gray-500" />
                    ) : (
                      <ExternalLink size={18} className="text-gray-500" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;

