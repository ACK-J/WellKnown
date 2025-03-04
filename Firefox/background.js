// Combined configuration object for endpoints.
const ENDPOINTS_CONFIG = {
  // Existing endpoints
  "acme-challenge": {
    description: "ACME challenge for certificate validation (RFC8555).",
    locations: [".well-known"]
  },
  "amphtml": {
    description: "AMP cache update URL used by the AMP Project.",
    locations: [".well-known"]
  },
  "api-catalog": {
    description: "Standardized API catalog endpoint (IETF).",
    locations: [".well-known"]
  },
  "appspecific": {
    description: "Application-specific well-known URI.",
    locations: [".well-known"]
  },
  "ashrae": {
    description: "ASHRAE building automation protocol info.",
    locations: [".well-known"]
  },
  "assetlinks.json": {
    description: "Digital Asset Links for linking Android apps with websites.",
    locations: [".well-known"]
  },
  "broadband-labels": {
    description: "Broadband labels as defined by BITAG.",
    locations: [".well-known"]
  },
  "brski": {
    description: "Bootstrapping Remote Secure Key Infrastructures (BRSKI).",
    locations: [".well-known"]
  },
  "caldav": {
    description: "Calendar access protocol endpoint (RFC6764).",
    locations: [".well-known"]
  },
  "carddav": {
    description: "Contacts access protocol endpoint (RFC6764).",
    locations: [".well-known"]
  },
  "change-password": {
    description: "Endpoint for web application password changes.",
    locations: [".well-known"]
  },
  "cmp": {
    description: "Certificate Management Protocol endpoint.",
    locations: [".well-known"]
  },
  "coap": {
    description: "Constrained Application Protocol endpoint (RFC8323).",
    locations: [".well-known"]
  },
  "coap-eap": {
    description: "CoAP with EAP for secure authentication.",
    locations: [".well-known"]
  },
  "core": {
    description: "CoRE Resource Directory (RFC6690).",
    locations: [".well-known"]
  },
  "csaf": {
    description: "Common Security Advisory Framework endpoint.",
    locations: [".well-known"]
  },
  "csaf-aggregator": {
    description: "Aggregated CSAF endpoint.",
    locations: [".well-known"]
  },
  "csvm": {
    description: "Tabular Data Model configuration endpoint.",
    locations: [".well-known"]
  },
  "did.json": {
    description: "Decentralized Identifier configuration file.",
    locations: [".well-known"]
  },
  "did-configuration.json": {
    description: "DID configuration for claims and credentials.",
    locations: [".well-known"]
  },
  "dnt": {
    description: "Do Not Track configuration endpoint.",
    locations: [".well-known"]
  },
  "dnt-policy.txt": {
    description: "Do Not Track policy text.",
    locations: [".well-known"]
  },
  "dots": {
    description: "DNS over TLS service endpoint.",
    locations: [".well-known"]
  },
  "ecips": {
    description: "ECIP URI endpoint.",
    locations: [".well-known"]
  },
  "edhoc": {
    description: "Ephemeral Diffie-Hellman Over COSE (RFC9528).",
    locations: [".well-known"]
  },
  "enterprise-network-security": {
    description: "Enterprise network security endpoint.",
    locations: [".well-known"]
  },
  "enterprise-transport-security": {
    description: "Enterprise transport security configuration.",
    locations: [".well-known"]
  },
  "est": {
    description: "Enrollment over Secure Transport (RFC7030) endpoint.",
    locations: [".well-known"]
  },
  "genid": {
    description: "RDF generator identifier endpoint.",
    locations: [".well-known"]
  },
  "gnap-as-rs": {
    description: "GNAP authorization/resource server endpoint.",
    locations: [".well-known"]
  },
  "gpc.json": {
    description: "Global Privacy Control configuration file.",
    locations: [".well-known"]
  },
  "gs1resolver": {
    description: "GS1 Digital Link resolver.",
    locations: [".well-known"]
  },
  "hoba": {
    description: "HTTP Origin-Bound Authentication (RFC7486).",
    locations: [".well-known"]
  },
  "host-meta": {
    description: "Host metadata document (RFC6415).",
    locations: [".well-known"]
  },
  "host-meta.json": {
    description: "JSON version of host metadata.",
    locations: [".well-known"]
  },
  "hosting-provider": {
    description: "Information about the hosting provider.",
    locations: [".well-known"]
  },
  "http-opportunistic": {
    description: "HTTP opportunistic encryption endpoint.",
    locations: [".well-known"]
  },
  "idp-proxy": {
    description: "Identity provider proxy endpoint.",
    locations: [".well-known"]
  },
  "jmap": {
    description: "JSON Meta Application Protocol (RFC8620).",
    locations: [".well-known"]
  },
  "keybase.txt": {
    description: "Keybase verification file.",
    locations: [".well-known"]
  },
  "knx": {
    description: "KNX cloud service endpoint.",
    locations: [".well-known"]
  },
  "looking-glass": {
    description: "Network diagnostics 'Looking Glass' service.",
    locations: [".well-known"]
  },
  "masque": {
    description: "MASQUE proxy endpoint (RFC9298).",
    locations: [".well-known"]
  },
  "matrix": {
    description: "Matrix protocol endpoint for real-time communication.",
    locations: [".well-known"]
  },
  "mercure": {
    description: "Mercure protocol for real-time updates.",
    locations: [".well-known"]
  },
  "mta-sts.txt": {
    description: "Mail Transfer Agent Strict Transport Security policy.",
    locations: [".well-known"]
  },
  "mud": {
    description: "Manufacturer Usage Description file (now obsoleted).",
    locations: [".well-known"]
  },
  "nfv-oauth-server-configuration": {
    description: "NFV OAuth server configuration endpoint.",
    locations: [".well-known"]
  },
  "ni": {
    description: "NodeInfo endpoint (RFC6920).",
    locations: [".well-known"]
  },
  "nodeinfo": {
    description: "NodeInfo profile for diaspora software.",
    locations: [".well-known"]
  },
  "nostr.json": {
    description: "Nostr protocol configuration file.",
    locations: [".well-known"]
  },
  "oauth-authorization-server": {
    description: "OAuth 2.0 authorization server configuration.",
    locations: [".well-known"]
  },
  "oauth-protected-resource": {
    description: "OAuth 2.0 protected resource configuration.",
    locations: [".well-known"]
  },
  "ohttp-gateway": {
    description: "Oblivious HTTP gateway endpoint.",
    locations: [".well-known"]
  },
  "openid-federation": {
    description: "OpenID Federation configuration endpoint.",
    locations: [".well-known"]
  },
  "open-resource-discovery": {
    description: "Open resource discovery endpoint.",
    locations: [".well-known"]
  },
  "openid-configuration": {
    description: "OpenID Connect discovery endpoint.",
    locations: [".well-known"]
  },
  "openorg": {
    description: "Open organization data endpoint.",
    locations: [".well-known"]
  },
  "oslc": {
    description: "OSLC (Open Services for Lifecycle Collaboration) endpoint.",
    locations: [".well-known"]
  },
  "pki-validation": {
    description: "PKI validation file for certificate authorities.",
    locations: [".well-known"]
  },
  "privacy-sandbox-attestations.json": {
    description: "Privacy Sandbox attestations configuration.",
    locations: [".well-known"]
  },
  "private-token-issuer-directory": {
    description: "Private token issuer directory.",
    locations: [".well-known"]
  },
  "probing.txt": {
    description: "Probing text file for connectivity tests.",
    locations: [".well-known"]
  },
  "pvd": {
    description: "Personal verification data endpoint.",
    locations: [".well-known"]
  },
  "rd": {
    description: "Resource Directory endpoint (RFC9176).",
    locations: [".well-known"]
  },
  "related-website-set.json": {
    description: "Related website set configuration.",
    locations: [".well-known"]
  },
  "reload-config": {
    description: "Configuration reload endpoint.",
    locations: [".well-known"]
  },
  "repute-template": {
    description: "Reputation template configuration endpoint.",
    locations: [".well-known"]
  },
  "resourcesync": {
    description: "Resource synchronization endpoint (OASIS).",
    locations: [".well-known"]
  },
  "sbom": {
    description: "Software Bill of Materials endpoint (RFC9472).",
    locations: [".well-known"]
  },
  "security.txt": {
    description: "Security contact and policy information file.",
    locations: [".well-known"]
  },
  "ssf-configuration": {
    description: "Shared Signals Framework configuration.",
    locations: [".well-known"]
  },
  "sshfp": {
    description: "SSH fingerprint information endpoint.",
    locations: [".well-known"]
  },
  "stun-key": {
    description: "STUN key retrieval endpoint (RFC7635).",
    locations: [".well-known"]
  },
  "terraform.json": {
    description: "Terraform remote service discovery configuration.",
    locations: [".well-known"]
  },
  "thread": {
    description: "Thread Group endpoint for IoT connectivity.",
    locations: [".well-known"]
  },
  "time": {
    description: "Time synchronization endpoint.",
    locations: [".well-known"]
  },
  "timezone": {
    description: "Time zone configuration endpoint (RFC7808).",
    locations: [".well-known"]
  },
  "tdmrep.json": {
    description: "TDM representative configuration endpoint.",
    locations: [".well-known"]
  },
  "tor-relay": {
    description: "Tor relay status endpoint.",
    locations: [".well-known"]
  },
  "tpcd": {
    description: "Third-party consent data endpoint.",
    locations: [".well-known"]
  },
  "traffic-advice": {
    description: "Traffic advice endpoint for prefetch proxies.",
    locations: [".well-known"]
  },
  "trust.txt": {
    description: "Trust text document.",
    locations: [".well-known"]
  },
  "uma2-configuration": {
    description: "UMA 2.0 configuration endpoint.",
    locations: [".well-known"]
  },
  "void": {
    description: "VOID (Vocabulary of Interlinked Datasets) endpoint (RFC7033).",
    locations: [".well-known"]
  },
  "webfinger": {
    description: "WebFinger resource discovery endpoint (RFC7033).",
    locations: [".well-known"]
  },
  "webweaver.json": {
    description: "WebWeaver configuration endpoint.",
    locations: [".well-known"]
  },
  "wot": {
    description: "Web of Things discovery endpoint.",
    locations: [".well-known"]
  },
  "passkey-endpoints": {
    description: "Passkey endpoint configuration for FIDO2 passkey management.",
    locations: [".well-known"]
  },
  "webauthn": {
    description: "Web Authentication configuration endpoint for FIDO2/WebAuthn.",
    locations: [".well-known"]
  },
  "openpgpkey": {
    description: "Provides a Web Key Directory for retrieving public OpenPGP keys (RFC7929).",
    locations: [".well-known"]
  },
  "apple-developer-merchantid-domain-association": {
    description: "Used by Apple Pay for domain verification; typically served at the root.",
    locations: ["root", ".well-known"]
  },
  "lnurlp": {
    description: "Lightning Network endpoint for LNURL Pay resolution.",
    locations: [".well-known"]
  },
  // Additional common endpoints (checked at both locations)
  "robots.txt": {
    description: "Standard file for web crawler instructions.",
    locations: ["root", ".well-known"]
  },
  "ads.txt": {
    description: "Advertising system file for publisher transparency.",
    locations: ["root", ".well-known"]
  },
  "sitemap.xml": {
    description: "XML sitemap listing website pages.",
    locations: ["root", ".well-known"]
  },
  "humans.txt": {
    description: "Humans.txt file with site credits and info.",
    locations: ["root", ".well-known"]
  },
  "apple-app-site-association": {
    description: "Apple app site association for Universal Links.",
    locations: ["root", ".well-known"]
  },
  "manifest.json": {
    description: "Web App Manifest for Progressive Web Apps.",
    locations: ["root", ".well-known"]
  },
  "browserconfig.xml": {
    description: "Browser configuration file for Windows tiles.",
    locations: ["root", ".well-known"]
  },
  // New endpoints from further research (well-known endpoints)
  "ai-plugin.json": {
    description: "AI plugin configuration file.",
    locations: [".well-known"]
  },
  "atproto-did": {
    description: "Atproto DID configuration endpoint.",
    locations: [".well-known"]
  },
  "autoconfig/mail": {
    description: "Mail autoconfiguration endpoint.",
    locations: [".well-known"]
  },
  "brave-rewards-verification.txt": {
    description: "Brave rewards verification file.",
    locations: [".well-known"]
  },
  "browserid": {
    description: "BrowserID endpoint for identity verification.",
    locations: [".well-known"]
  },
  "discord": {
    description: "Discord integration endpoint.",
    locations: [".well-known"]
  },
  "fetch-ads": {
    description: "Fetch ads endpoint for advertising.",
    locations: [".well-known"]
  },
  "jwks.json": {
    description: "JSON Web Key Set endpoint.",
    locations: [".well-known"]
  },
  "microsoft-identity-association.json": {
    description: "Microsoft identity association file.",
    locations: [".well-known"]
  },
  "nostr/nip96.json": {
    description: "Nostr protocol NIP-96 configuration file.",
    locations: [".well-known"]
  },
  "posh": {
    description: "POSH endpoint for service name configuration.",
    locations: [".well-known"]
  },
  "privacy-policy.json": {
    description: "Privacy policy in JSON format.",
    locations: [".well-known"]
  },
  "pubvendors.json": {
    description: "Public vendors configuration file.",
    locations: [".well-known"]
  },
  "shopify/monorail/unstable/produce_batch": {
    description: "Shopify monorail batch production endpoint.",
    locations: [".well-known"]
  },
  "vercel/flags": {
    description: "Vercel flags configuration endpoint.",
    locations: [".well-known"]
  },
  "xrp-ledger.toml": {
    description: "XRP ledger configuration file in TOML format.",
    locations: [".well-known"]
  },
  "sftp-config.json": {
    description: "SFTP configuration file.",
    locations: [".well-known"]
  },
  // Additional dotfiles and hidden files (typically found at the root)
  ".bash_history": {
    description: "Shell history file (potentially sensitive).",
    locations: ["root"]
  },
  ".bashrc": {
    description: "Shell configuration file.",
    locations: ["root"]
  },
  ".cache": {
    description: "Cache directory.",
    locations: ["root"]
  },
  ".config": {
    description: "Configuration directory.",
    locations: ["root"]
  },
  ".cvs": {
    description: "CVS version control directory.",
    locations: ["root"]
  },
  ".cvsignore": {
    description: "CVS ignore file.",
    locations: ["root"]
  },
  ".forward": {
    description: "Email forwarding configuration.",
    locations: ["root"]
  },
  ".git": {
    description: "Git repository directory.",
    locations: ["root"]
  },
  ".git-rewrite": {
    description: "Git rewrite directory.",
    locations: ["root"]
  },
  ".git/config": {
    description: "Git repository config file.",
    locations: ["root"]
  },
  ".git/HEAD": {
    description: "Git HEAD pointer file.",
    locations: ["root"]
  },
  ".git/index": {
    description: "Git index file.",
    locations: ["root"]
  },
  ".git/logs/": {
    description: "Git logs directory.",
    locations: ["root"]
  },
  ".git_release": {
    description: "Git release file.",
    locations: ["root"]
  },
  ".gitattributes": {
    description: "Git attributes file.",
    locations: ["root"]
  },
  ".gitconfig": {
    description: "Git configuration file.",
    locations: ["root"]
  },
  ".gitignore": {
    description: "Git ignore file.",
    locations: ["root"]
  },
  ".gitk": {
    description: "Gitk repository viewer file.",
    locations: ["root"]
  },
  ".gitkeep": {
    description: "Git keep file.",
    locations: ["root"]
  },
  ".gitmodules": {
    description: "Git submodules configuration file.",
    locations: ["root"]
  },
  ".gitreview": {
    description: "Git review configuration file.",
    locations: ["root"]
  },
  ".history": {
    description: "Shell history file.",
    locations: ["root"]
  },
  ".hta": {
    description: "HTA file (HTML Application).",
    locations: ["root"]
  },
  ".htaccess": {
    description: "Apache configuration file.",
    locations: ["root"]
  },
  ".htpasswd": {
    description: "Apache password file.",
    locations: ["root"]
  },
  ".listing": {
    description: "Directory listing file.",
    locations: ["root"]
  },
  ".listings": {
    description: "Directory listings.",
    locations: ["root"]
  },
  ".mysql_history": {
    description: "MySQL history file.",
    locations: ["root"]
  },
  ".passwd": {
    description: "Password file (deprecated).",
    locations: ["root"]
  },
  ".perf": {
    description: "Performance profiling file.",
    locations: ["root"]
  },
  ".profile": {
    description: "User profile file.",
    locations: ["root"]
  },
  ".rhosts": {
    description: "Rhosts file (remote host configuration).",
    locations: ["root"]
  },
  ".sh_history": {
    description: "Shell history file.",
    locations: ["root"]
  },
  ".ssh": {
    description: "SSH configuration directory.",
    locations: ["root"]
  },
  ".subversion": {
    description: "Subversion metadata directory.",
    locations: ["root"]
  },
  ".svn": {
    description: "SVN repository directory.",
    locations: ["root"]
  },
  ".svn/entries": {
    description: "SVN entries file.",
    locations: ["root"]
  },
  ".svnignore": {
    description: "SVN ignore file.",
    locations: ["root"]
  },
  ".swf": {
    description: "Shockwave Flash file.",
    locations: ["root"]
  },
  ".vscode": {
    description: "VS Code configuration directory.",
    locations: ["root"]
  },
  ".web": {
    description: "Web configuration file or directory.",
    locations: ["root"]
  }
};

// Objects to store scan results and last scanned origin per tab.
let discoveredByTab = {};
let lastOriginByTab = {};

// Helper sleep function.
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Process an array in batches to throttle concurrency.
async function processInBatches(items, batchSize, delay, processFn) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(processFn));
    results.push(...batchResults);
    if (i + batchSize < items.length) {
      await sleep(delay);
    }
  }
  return results;
}

// Check endpoints with throttling.
async function checkEndpoints(tabId, origin) {
  const endpoints = Object.keys(ENDPOINTS_CONFIG);
  const results = await processInBatches(endpoints, 5, 200, async (endpoint) => {
    const config = ENDPOINTS_CONFIG[endpoint];
    let foundAt = [];
    for (const loc of config.locations) {
      let url;
      if (loc === "root") {
        url = origin + "/" + endpoint;
      } else if (loc === ".well-known") {
        url = origin + "/.well-known/" + endpoint;
      }
      try {
        const response = await fetch(url, { method: "HEAD" });
        if (response && response.ok) {
          foundAt.push(url);
        }
      } catch (error) {
        // Ignore errors.
      }
    }
    if (foundAt.length > 0) {
      return {
        endpoint,
        url: foundAt[0], // default clickable link.
        status: "200",   // simplified status indication.
        description: config.description || "No description available.",
        foundAt
      };
    } else {
      return null;
    }
  });
  
  const discovered = results.filter(item => item !== null);
  discoveredByTab[tabId] = discovered;
  
  const badgeText = discovered.length > 0 ? discovered.length.toString() : "";
  chrome.action.setBadgeText({ text: badgeText, tabId });
  chrome.action.setBadgeBackgroundColor({ color: "#4688F1", tabId });
}

// Only run scan if the origin (scheme+host+port) changes.
function maybeCheckTab(tabId, tabUrl) {
  if (tabUrl && (tabUrl.startsWith("http://") || tabUrl.startsWith("https://"))) {
    const origin = new URL(tabUrl).origin;
    if (lastOriginByTab[tabId] !== origin) {
      lastOriginByTab[tabId] = origin;
      checkEndpoints(tabId, origin);
    }
  }
}

// Listen for tab updates and activation.
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    maybeCheckTab(tabId, tab.url);
  }
});

chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    maybeCheckTab(tab.id, tab.url);
  });
});

// When a tab is closed, clear cached data.
chrome.tabs.onRemoved.addListener((tabId) => {
  delete discoveredByTab[tabId];
  delete lastOriginByTab[tabId];
});

// Respond to popup requests for endpoints.
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getEndpoints") {
    const tabId = message.tabId || (sender.tab && sender.tab.id);
    sendResponse({ endpoints: discoveredByTab[tabId] || [] });
  }
});

