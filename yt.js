// Auto-skip YouTube video ads: mute, jump to the end, click Skip.
(() => {
  const SKIP_SELECTORS = [
    '.ytp-skip-ad-button',
    '.ytp-ad-skip-button',
    '.ytp-ad-skip-button-modern',
    '.ytp-ad-overlay-close-button',
  ];

  let muted = false; // true only while we are the ones who muted the player

  function tick() {
    const player = document.querySelector('.html5-video-player');
    const video = document.querySelector('video.html5-main-video');
    if (!player || !video) return;

    if (player.classList.contains('ad-showing')) {
      if (!muted) { video.muted = true; muted = true; }
      if (isFinite(video.duration) && video.duration > 0) {
        video.currentTime = video.duration;
      }
      for (const sel of SKIP_SELECTORS) {
        const btn = document.querySelector(sel);
        if (btn) btn.click();
      }
    } else if (muted) {
      video.muted = false; // give the sound back once the ad is gone
      muted = false;
    }
  }

  // Ads start at unpredictable moments, so poll lightly instead of guessing.
  setInterval(tick, 300);
})();
