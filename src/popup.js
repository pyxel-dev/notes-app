'use strict';
import EasyMDE from 'easymde';

(function () {
  const appEl = document.getElementById('app');

  new EasyMDE({
    element: appEl,
    autofocus: true,
    autosave: {
      enabled: true,
      uniqueId: 'notes'
    },
    forceSync: true,
    status: false,
    hideIcons: ['side-by-side', 'fullscreen', 'guide'],
    showIcons: ['table', 'code', 'horizontal-rule'],
    maxHeight: '500px',
    styleSelectedText: true,
    sideBySideFullscreen: true,
    syncSideBySidePreviewScroll: true,
  });
})();
