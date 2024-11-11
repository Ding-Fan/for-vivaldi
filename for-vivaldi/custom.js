window.onload = function () {
  // Wait for the UI to load
  const observer = new MutationObserver(() => {
    // Select the Workspaces button toolbar
    let workspacesToolbar = document.querySelector(".tabbar-workspace-button");

    if (workspacesToolbar) {
      // Create a new button toolbar container
      let buttonToolbar = document.createElement("div");
      buttonToolbar.className = "button-toolbar toggle-expandable-button";

      // Create the button element
      let button = document.createElement("button");
      button.type = "button";
      button.className = "ToolbarButton-Button";
      button.title = "Toggle Tab Bar Expansion";
      button.setAttribute("aria-label", "Toggle Tab Bar Expansion");
      button.setAttribute("tabindex", "-1");

      // Create the icon for the button (customize the SVG as needed)
      var iconSpan = document.createElement("span");
      iconSpan.className = "button-icon";
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
      workspacesToolbar.parentNode.insertBefore(
        buttonToolbar,
        workspacesToolbar
      );

      const tabsContainer = document.querySelector("#tabs-container");

      if (tabsContainer) {
        button.addEventListener("click", function () {
          var isEnabled = tabsContainer.classList.toggle("expandable");
          // Optionally, update button appearance
          button.classList.toggle("active", isEnabled);
        });
      }
      observer.disconnect(); // Stop observing once we find the element and apply the border
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
};
