// src/components/PythonTip.js

import React from 'react';

/**
 * PythonTip Component
 *
 * This is a reusable component to highlight tips, tricks, or notes
 * in your Python book. It can be used inside `.mdx` or `.md` files.
 *
 * Props:
 * - children: The content inside the tip box
 * - title: Optional title (default: "Pro Tip")
 *
 * Example Usage in MDX:
 * <PythonTip title="Did You Know?">
 *   Python type hints can power automatic API documentation in FastAPI!
 * </PythonTip>
 */

export default function PythonTip({ children, title = "Pro Tip" }) {
  return (
    <div
      style={{
        backgroundColor: '#f0f4f8',       // Light background for tip box
        borderLeft: '8px solid #3776ab',  // Python-blue accent
        padding: '20px',                   // Inner padding
        margin: '20px 0',                  // Space around the box
        borderRadius: '8px',               // Rounded corners
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Subtle shadow for depth
      }}
    >
      <h4 style={{ marginTop: 0, color: '#3776ab' }}>
        🐍 {title}
      </h4>
      <div style={{ fontSize: '16px', lineHeight: '1.6' }}>
        {children}
      </div>
    </div>
  );
}
