import { Handle, Position } from 'reactflow';
import { memo } from 'react';

const CustomNode = ({ data, selected }) => {
  const { label, subtitle, color, size, type } = data;

  // Use the same font size as 'Estate & Ranch Management Professional' for all labels
  const commonFontSize = '7px'; 

  const getFontSize = () => {
    return commonFontSize;
  };

  const getSubtitleFontSize = () => {
    return commonFontSize;
  };

  // More aggressive text splitting logic to ensure text fits within the circle
  const splitText = (text, maxCharsPerLine) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      // Check if adding this word would exceed the limit
      if (currentLine.length + word.length + 1 <= maxCharsPerLine) {
        currentLine += (currentLine ? ' ' : '') + word;
      } else {
        // If current line has content, push it and start new line
        if (currentLine) lines.push(currentLine);
        // If the word itself is too long, truncate it
        if (word.length > maxCharsPerLine) {
          currentLine = word.substring(0, maxCharsPerLine - 3) + '...';
        } else {
          currentLine = word;
        }
      }
    }
    if (currentLine) lines.push(currentLine);

    // Limit to maximum 4 lines for category nodes, 5 for central
    const maxLines = type === 'central' ? 5 : 4;
    if (lines.length > maxLines) {
      lines.splice(maxLines - 1);
      if (lines[maxLines - 2]) {
        lines[maxLines - 2] = lines[maxLines - 2].substring(0, maxCharsPerLine - 3) + '...';
      }
    }

    return lines;
  };

  // Adjusted max chars for better fit with the new font size
  const labelMaxChars = type === 'central' ? 18 : 12; 
  const subtitleMaxChars = type === 'central' ? 22 : 15; 

  const labelLines = splitText(label, labelMaxChars);
  const subtitleLines = subtitle ? splitText(subtitle, subtitleMaxChars) : [];

  // Determine text color based on background color brightness
  const getTextColor = (backgroundColor) => {
    // Convert hex to RGB
    const hex = backgroundColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Calculate brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    
    // Return white for dark backgrounds, dark for light backgrounds
    return brightness < 128 ? '#FFFFFF' : '#000000';
  };

  const textColor = getTextColor(color);

  return (
    <div className="relative">
      {/* Handles for connections */}
      <Handle type="target" position={Position.Top} className="opacity-0" />
      <Handle type="source" position={Position.Bottom} className="opacity-0" />
      <Handle type="source" position={Position.Left} className="opacity-0" />
      <Handle type="source" position={Position.Right} className="opacity-0" />

      {/* Node circle */}
      <div
        className={`
          rounded-full flex flex-col items-center justify-center text-center p-1
          transition-all duration-300 cursor-pointer
          ${selected ? 'ring-4 ring-blue-400 ring-opacity-50' : ''}
          hover:scale-105 hover:shadow-lg
        `}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          border: '3px solid white',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* Main label */}
        <div
          className="font-bold leading-tight"
          style={{ 
            fontSize: getFontSize(),
            color: textColor
          }}
        >
          {labelLines.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>

        {/* Subtitle for central node */}
        {subtitle && type === 'central' && (
          <div
            className="opacity-90 leading-tight mt-1"
            style={{ 
              fontSize: getSubtitleFontSize(),
              color: textColor
            }}
          >
            {subtitleLines.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        )}
      </div>

      {/* Expansion indicator for expandable nodes */}
      {data.expandable && (
        <div
          className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full 
                     flex items-center justify-center text-xs font-bold
                     shadow-md border-2"
          style={{ borderColor: color }}
        >
          {data.expanded ? '−' : '+'}
        </div>
      )}
    </div>
  );
};

export default memo(CustomNode);

