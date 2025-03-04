document.addEventListener('DOMContentLoaded', function () {
  const list = document.getElementById("endpointsList");
  const noEndpointsMessage = document.getElementById("noEndpointsMessage");
  const domainDisplay = document.getElementById("domainDisplay");

  // Show "Loading..." message initially.
  list.innerHTML = "<li><strong>Loading...</strong></li>";
  
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const activeTab = tabs[0];
    if (!activeTab) {
      list.innerHTML = "<li>Unable to determine active tab.</li>";
      return;
    }
    
    // Display the domain below the title.
    try {
      const domain = new URL(activeTab.url).origin;
      domainDisplay.textContent = domain;
    } catch (e) {
      domainDisplay.textContent = "Unknown domain";
    }
    
    const tabId = activeTab.id;
    // Request the discovered endpoints for this tab from the background.
    chrome.runtime.sendMessage({ action: "getEndpoints", tabId: tabId }, function(response) {
      const endpoints = response.endpoints;
      // Clear the list.
      list.innerHTML = "";
      if (endpoints.length === 0) {
        noEndpointsMessage.style.display = "block";
      } else {
        noEndpointsMessage.style.display = "none";
        endpoints.forEach(item => {
          const li = document.createElement("li");
          li.className = "endpoint-card";
          
          const link = document.createElement("a");
          link.href = item.url;
          link.target = "_blank";
          link.textContent = item.endpoint;
          link.className = "endpoint-link";
          // Include found locations in the tooltip if available.
          if (item.foundAt) {
            link.title = item.description + "\nFound at: " + item.foundAt.join(", ");
          } else {
            link.title = item.description;
          }
          
          const statusSpan = document.createElement("span");
          statusSpan.className = "status";
          statusSpan.textContent = item.status;
          
          li.appendChild(link);
          li.appendChild(statusSpan);
          list.appendChild(li);
        });
      }
    });
  });
});

