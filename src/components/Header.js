// Import React
import React from 'react';

// Import CSS specific to the header styling
import '../styles/Header.css';

// Functional component for the header section
function Header() {
  return (
    // An h2 heading styled with a CSS class "header-bubble"
    <h2 className="header-bubble">Expense Tracker</h2>
  );
}

// Export the component for use in other parts of the app
export default Header;
