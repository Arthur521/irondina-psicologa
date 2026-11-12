import theme from './data/theme.json'

type Theme = typeof theme

const cssVars: Record<string, string> = {
  '--font-display': `"${theme.fonts.display}", ${theme.fonts.displayFallback}`,
  '--font-body': `"${theme.fonts.body}", ${theme.fonts.bodyFallback}`,

  '--ink': theme.colors.ink,
  '--muted': theme.colors.muted,
  '--paper': theme.colors.paper,
  '--sand': theme.colors.sand,
  '--accent': theme.colors.accent,
  '--accent-hover': theme.colors.accentHover,
  '--line': theme.colors.line,
  '--gold': theme.colors.gold,
  '--button-text': theme.colors.buttonText,
  '--services-bg': theme.colors.servicesBg,
  '--services-card-bg': theme.colors.servicesCardBg,
  '--contact-bg': theme.colors.contactBg,
  '--statement-bg': theme.colors.statementBg,
  '--statement-text': theme.colors.statementText,
  '--footer-bg': theme.colors.footerBg,
  '--footer-text': theme.colors.footerText,
  '--footer-muted': theme.colors.footerMuted,
  '--footer-line': theme.colors.footerLine,
  '--hover-soft': theme.colors.hoverSoft,
  '--nav-panel-border': theme.colors.navPanelBorder,
  '--nav-panel-shadow': theme.colors.navPanelShadow,
  '--card-shadow': theme.colors.cardShadow,
  '--ink-soft': theme.colors.inkSoft,
  '--whatsapp': theme.colors.whatsapp,
  '--whatsapp-hover': theme.colors.whatsappHover,
  '--whatsapp-text': theme.colors.whatsappText,
  '--whatsapp-shadow': theme.colors.whatsappShadow,

  '--hero-vinho': theme.hero.vinho,
  '--hero-vinho-2': theme.hero.vinho2,
  '--hero-ouro': theme.hero.ouro,
  '--hero-creme': theme.hero.creme,
  '--hero-tinta': theme.hero.tinta,
  '--hero-fundo': theme.hero.fundo,
  '--hero-kicker': theme.hero.kicker,
  '--hero-rule': theme.hero.rule,
  '--hero-btn-primary': theme.hero.buttonPrimary,
  '--hero-btn-primary-hover': theme.hero.buttonPrimaryHover,
  '--hero-btn-primary-text': theme.hero.buttonPrimaryText,
  '--hero-btn-primary-shadow': theme.hero.buttonPrimaryShadow,
  '--hero-btn-secondary-bg': theme.hero.buttonSecondaryBg,
  '--hero-btn-secondary-bg-hover': theme.hero.buttonSecondaryBgHover,
  '--hero-btn-secondary-border': theme.hero.buttonSecondaryBorder,
  '--hero-glow-gold': theme.hero.glowGold,
  '--hero-glow-vinho': theme.hero.glowVinho,
  '--hero-person-shadow': theme.hero.personShadow,
  '--hero-fade': theme.hero.fade,

  '--radius-pill': theme.radii.pill,
  '--radius-button': theme.radii.button,
  '--radius-card': theme.radii.card,
  '--radius-category': theme.radii.category,
  '--radius-photo': theme.radii.photo,
  '--radius-panel': theme.radii.panel,
  '--radius-chip': theme.radii.chip,
  '--radius-quote': theme.radii.quote,

  '--layout-max': theme.layout.maxWidth,
  '--layout-header-max': theme.layout.headerMaxWidth,
  '--layout-hero-max': theme.layout.heroMaxWidth,
  '--header-height': theme.layout.headerHeight,
  '--header-height-mobile': theme.layout.headerHeightMobile,
  '--page-padding': theme.layout.pagePadding,
  '--page-padding-mobile': theme.layout.pagePaddingMobile,

  '--ease': theme.motion.ease,
  '--duration-fast': theme.motion.durationFast,
  '--duration': theme.motion.duration,
  '--duration-slow': theme.motion.durationSlow,
}

export function applyTheme(custom: Theme = theme) {
  const root = document.documentElement
  const map = custom === theme ? cssVars : buildVars(custom)
  for (const [key, value] of Object.entries(map)) root.style.setProperty(key, value)

  let link = document.getElementById('theme-fonts') as HTMLLinkElement | null
  if (!link) {
    link = document.createElement('link')
    link.id = 'theme-fonts'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }
  if (custom.fonts.googleUrl) link.href = custom.fonts.googleUrl
}

function buildVars(t: Theme): Record<string, string> {
  return {
    '--font-display': `"${t.fonts.display}", ${t.fonts.displayFallback}`,
    '--font-body': `"${t.fonts.body}", ${t.fonts.bodyFallback}`,
    '--ink': t.colors.ink,
    '--muted': t.colors.muted,
    '--paper': t.colors.paper,
    '--sand': t.colors.sand,
    '--accent': t.colors.accent,
    '--accent-hover': t.colors.accentHover,
    '--line': t.colors.line,
    '--gold': t.colors.gold,
    '--button-text': t.colors.buttonText,
    '--services-bg': t.colors.servicesBg,
    '--services-card-bg': t.colors.servicesCardBg,
    '--contact-bg': t.colors.contactBg,
    '--statement-bg': t.colors.statementBg,
    '--statement-text': t.colors.statementText,
    '--footer-bg': t.colors.footerBg,
    '--footer-text': t.colors.footerText,
    '--footer-muted': t.colors.footerMuted,
    '--footer-line': t.colors.footerLine,
    '--hover-soft': t.colors.hoverSoft,
    '--nav-panel-border': t.colors.navPanelBorder,
    '--nav-panel-shadow': t.colors.navPanelShadow,
    '--card-shadow': t.colors.cardShadow,
    '--ink-soft': t.colors.inkSoft,
    '--whatsapp': t.colors.whatsapp,
    '--whatsapp-hover': t.colors.whatsappHover,
    '--whatsapp-text': t.colors.whatsappText,
    '--whatsapp-shadow': t.colors.whatsappShadow,
    '--hero-vinho': t.hero.vinho,
    '--hero-vinho-2': t.hero.vinho2,
    '--hero-ouro': t.hero.ouro,
    '--hero-creme': t.hero.creme,
    '--hero-tinta': t.hero.tinta,
    '--hero-fundo': t.hero.fundo,
    '--hero-kicker': t.hero.kicker,
    '--hero-rule': t.hero.rule,
    '--hero-btn-primary': t.hero.buttonPrimary,
    '--hero-btn-primary-hover': t.hero.buttonPrimaryHover,
    '--hero-btn-primary-text': t.hero.buttonPrimaryText,
    '--hero-btn-primary-shadow': t.hero.buttonPrimaryShadow,
    '--hero-btn-secondary-bg': t.hero.buttonSecondaryBg,
    '--hero-btn-secondary-bg-hover': t.hero.buttonSecondaryBgHover,
    '--hero-btn-secondary-border': t.hero.buttonSecondaryBorder,
    '--hero-glow-gold': t.hero.glowGold,
    '--hero-glow-vinho': t.hero.glowVinho,
    '--hero-person-shadow': t.hero.personShadow,
    '--hero-fade': t.hero.fade,
    '--radius-pill': t.radii.pill,
    '--radius-button': t.radii.button,
    '--radius-card': t.radii.card,
    '--radius-category': t.radii.category,
    '--radius-photo': t.radii.photo,
    '--radius-panel': t.radii.panel,
    '--radius-chip': t.radii.chip,
    '--radius-quote': t.radii.quote,
    '--layout-max': t.layout.maxWidth,
    '--layout-header-max': t.layout.headerMaxWidth,
    '--layout-hero-max': t.layout.heroMaxWidth,
    '--header-height': t.layout.headerHeight,
    '--header-height-mobile': t.layout.headerHeightMobile,
    '--page-padding': t.layout.pagePadding,
    '--page-padding-mobile': t.layout.pagePaddingMobile,
    '--ease': t.motion.ease,
    '--duration-fast': t.motion.durationFast,
    '--duration': t.motion.duration,
    '--duration-slow': t.motion.durationSlow,
  }
}

export { theme }
export default theme
