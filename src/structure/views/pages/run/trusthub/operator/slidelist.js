export default [
  {
    url: '/operator/analytics/',
    name: 'Dashboard',
    slug: 'dashboard',
    icon: 'HomeIcon',
    i18n: 'Dashboard'
  },
  {
    url: null,
    name: 'Operators',
    icon: 'MapIcon',
    i18n: 'Sequences',
    submenu: [
      {
        url: '/operator/sequences/identify',
        name: 'sidentify',
        slug: 'sequences-identify-operators',
        i18n: 'Identify'
      },
      {
        url: '/operator/sequences/enroll',
        name: 'senroll',
        slug: 'sequences-enroll-operators',
        i18n: 'Enroll'
      },
      {
        url: '/operator/sequences/signature',
        name: 'ssignature',
        slug: 'sequences-enroll-operators',
        i18n: 'Signature'
      },
      {
        url: '/operator/sequences/notary',
        name: 'snotary',
        slug: 'sequences-notary-operators',
        i18n: 'Notary'
      },
      {
        url: '/operator/sequences/verify',
        name: 'sverify',
        slug: 'sequences-verify-operators',
        i18n: 'Verify'
      }
    ]
  },
  {
    url: '/operator/documents/',
    name: 'Documents',
    slug: 'docs',
    icon: 'FolderIcon',
    i18n: 'Documents'
  },
  {
    url: null,
    name: 'Devices',
    slug: 'devices',
    icon: 'GridIcon',
    i18n: 'Apps',
    submenu: [
      {
        url: '/operator/apps/email/inbox/',
        name: 'ainbox',
        slug: 'mail-app-inbox',
        i18n: 'Mail'
      },
      {
        url: '/operator/apps/chat/',
        name: 'achat',
        slug: 'chat-app',
        i18n: 'Chat'
      },
      {
        url: '/operator/apps/calendar/',
        name: 'acalender',
        slug: 'calendar-app',
        i18n: 'Calendar'
      }
    ]
  },
  {
    url: '/operator/operation/',
    name: 'Operations',
    slug: 'opra',
    icon: 'SlidersIcon',
    i18n: 'Operations'
  },
  {
    url: '/operator/settings/',
    name: 'Settings',
    slug: 'sttng',
    icon: 'SettingsIcon',
    i18n: 'Settings'
  }
]
  