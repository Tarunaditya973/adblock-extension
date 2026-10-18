// Backup for the network rule: if an ad script still loads, stop it opening tabs.
(() => {
  const SITE = location.hostname;

  // Ad scripts open pop-unders through window.open. Swallow those calls.
  window.open = function (url) {
    console.debug('[adblock] blocked window.open ->', url);
    return null;
  };

  // Hijackers also click hidden <a target=_blank> links to other sites.
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    let host;
    try { host = new URL(a.href, location.href).hostname; } catch { return; }
    if (host && host !== SITE && a.target === '_blank') {
      console.debug('[adblock] blocked external link ->', a.href);
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, true);
})();
