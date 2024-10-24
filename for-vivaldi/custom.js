window.onload = function () {
  // Wait for the UI to load
  setTimeout(() => {
    // Select the Workspaces button toolbar
    var workspacesToolbar = document.querySelector('.tabbar-workspace-button');

    if (workspacesToolbar) {
      // Create a new button toolbar container
      var buttonToolbar = document.createElement('div');
      buttonToolbar.className = 'button-toolbar toggle-expandable-button';

      // Set custom width to make it a short button
      buttonToolbar.style.width = ''; // Adjust width as needed

      // Create the button element
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'ToolbarButton-Button';
      button.title = 'Toggle Tab Bar Expansion';
      button.setAttribute('aria-label', 'Toggle Tab Bar Expansion');
      button.setAttribute('tabindex', '-1');

      // Create the icon for the button (customize the SVG as needed)
      var iconSpan = document.createElement('span');
      iconSpan.className = 'button-icon';
      iconSpan.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16">
          <!-- Example icon: a double arrow -->
          <path d="M4 8 L8 4 L8 7 L12 7 L12 9 L8 9 L8 12 Z" fill="currentColor"></path>
        </svg>
      `;

      // Append the icon to the button
      button.appendChild(iconSpan);

      // Append the button to the button toolbar container
      buttonToolbar.appendChild(button);

      // Insert the new button toolbar before the Workspaces toolbar
      workspacesToolbar.parentNode.insertBefore(buttonToolbar, workspacesToolbar);

      // Add event listener to the button to toggle the 'expandable' class
      var tabStrip = document.querySelector('.tabs-left #tabs-tabbar-container .tab-strip');
      if (tabStrip) {
        button.addEventListener('click', function () {
          var isEnabled = tabStrip.classList.toggle('expandable');
          // Optionally, update button appearance
          button.classList.toggle('active', isEnabled);
        });
      }
    }
  }, 1234);
};
