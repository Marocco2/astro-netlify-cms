import * as NetlifyIdentityWidget from 'netlify-identity-widget';

export function initIdentity(adminPath: string) {
  NetlifyIdentityWidget.on('init', (user) => {
    if (!user) {
      NetlifyIdentityWidget.on('login', () => {
        document.location.href = adminPath;
      });
    }
  });

  NetlifyIdentityWidget.init();
}
