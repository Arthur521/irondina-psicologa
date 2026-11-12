# -*- coding: utf-8 -*-
from pathlib import Path

path = Path(__file__).resolve().parents[1] / "src" / "styles.css"
css = path.read_text(encoding="utf-8")

# Drop Google Fonts import — loaded from theme.json
if css.startswith("@import url("):
    css = css.split("\n", 1)[1]

replacements = [
    ("Fraunces,serif", "var(--font-display)"),
    ("Fraunces, serif", "var(--font-display)"),
    ("Manrope,sans-serif", "var(--font-body)"),
    ("Manrope, sans-serif", "var(--font-body)"),
    ("font-family:Manrope,sans-serif", "font-family:var(--font-body)"),
    ("background:#F1EBF4", "background:var(--hover-soft)"),
    ("background:#F8F5F9", "background:var(--sand)"),
    ("background:#21142A", "background:var(--footer-bg)"),
    ("background:#FFFFFF", "background:var(--paper)"),
    ("background:#fff", "background:var(--paper)"),
    ("color:#F8F5F9", "color:var(--statement-text)"),
    ("color:#C3ABD4", "color:var(--footer-muted)"),
    ("color:#fff", "color:var(--button-text)"),
    ("color:#FFFFFF", "color:var(--button-text)"),
    ("color:white", "color:var(--button-text)"),
    ("border-color:#C3ABD4", "border-color:var(--footer-muted)"),
    ("#E0D4E8", "var(--line)"),
    ("#5A3672", "var(--accent)"),
    ("#472B5C", "var(--accent-hover)"),
    ("#BD9C6B", "var(--gold)"),
    ("#A57DBF", "var(--footer-line)"),
    ("border-radius:99px", "border-radius:var(--radius-button)"),
    ("border-radius:999px", "border-radius:var(--radius-pill)"),
    ("border-radius:50px", "border-radius:var(--radius-pill)"),
    ("border-radius:24px", "border-radius:var(--radius-photo)"),
    ("border-radius:20px", "border-radius:var(--radius-category)"),
    ("border-radius:16px", "border-radius:var(--radius-card)"),
]

for old, new in replacements:
    css = css.replace(old, new)

# Replace the old :root block at the start of the compact line
old_root = ":root{--ink:#21142A;--muted:#6D418B;--paper:#FFFFFF;--sand:#F8F5F9;--accent:#5A3672;--line:#E0D4E8;--gold:#BD9C6B}"
# After replacements ink etc may already be vars in weird places — restore proper root
# Find and replace any :root{...} first occurrence
import re
css = re.sub(
    r":root\{[^}]*\}",
    """:root{
--ink:#21142A;--muted:#6D418B;--paper:#FFFFFF;--sand:#F8F5F9;--accent:#5A3672;--accent-hover:#472B5C;--line:#E0D4E8;--gold:#BD9C6B;
--button-text:#FFFFFF;--services-bg:#F1EBF4;--services-card-bg:#FFFFFF;--contact-bg:#F8F5F9;--statement-bg:#21142A;--statement-text:#F8F5F9;
--footer-bg:#21142A;--footer-text:#F8F5F9;--footer-muted:#C3ABD4;--footer-line:#A57DBF;--hover-soft:#F1EBF4;
--nav-panel-border:rgba(33,20,42,.08);--nav-panel-shadow:rgba(33,20,42,.12);--card-shadow:rgba(33,20,42,.06);--ink-soft:rgba(33,20,42,.18);
--hero-vinho:#372145;--hero-vinho-2:#21142A;--hero-ouro:#BD9C6B;--hero-creme:#FFFFFF;--hero-tinta:#4A2C5E;--hero-fundo:#FFFFFF;
--hero-kicker:#5A3672;--hero-rule:rgba(55,33,69,.28);--hero-btn-primary:#5A3672;--hero-btn-primary-hover:#472B5C;--hero-btn-primary-text:#FFFFFF;
--hero-btn-primary-shadow:rgba(90,54,114,.22);--hero-btn-secondary-bg:rgba(255,255,255,.72);--hero-btn-secondary-bg-hover:rgba(255,255,255,.92);
--hero-btn-secondary-border:rgba(55,33,69,.22);--hero-glow-gold:rgba(189,156,107,.42);--hero-glow-vinho:rgba(55,33,69,.18);
--hero-person-shadow:rgba(0,0,0,.18);--hero-fade:#FFFFFF;
--font-display:"Fraunces",serif;--font-body:"Manrope",sans-serif;
--radius-pill:999px;--radius-button:999px;--radius-card:16px;--radius-category:20px;--radius-photo:24px;--radius-panel:16px;--radius-chip:999px;--radius-quote:16px;
--layout-max:1180px;--layout-header-max:1240px;--layout-hero-max:1216px;--header-height:86px;--header-height-mobile:72px;--page-padding:30px;--page-padding-mobile:20px;
--ease:cubic-bezier(.32,.72,0,1);--duration-fast:420ms;--duration:700ms;--duration-slow:900ms
}""",
    css,
    count=1,
)

# Hero local vars → theme vars
css = css.replace(
    ".hero{--vinho:#372145;--vinho-2:#21142A;--ouro:#BD9C6B;--creme:#FFFFFF;--tinta:#4A2C5E;--fundo:#FFFFFF;position:relative;isolation:isolate;overflow:hidden;min-height:36rem;background:var(--fundo);color:var(--tinta)}",
    ".hero{--vinho:var(--hero-vinho);--vinho-2:var(--hero-vinho-2);--ouro:var(--hero-ouro);--creme:var(--hero-creme);--tinta:var(--hero-tinta);--fundo:var(--hero-fundo);position:relative;isolation:isolate;overflow:hidden;min-height:36rem;background:var(--fundo);color:var(--tinta)}",
)

# Some replacements may have broken if colors were already partially changed
# Fix common hero bits
hero_fixes = [
    ("color:var(--accent)", "color:var(--hero-kicker)", 1),  # only first hero-kicker occurrence is tricky
]
# Direct string fixes for hero/buttons/footer that should use specific tokens
direct = [
    (".hero-kicker{margin:0;font:500 12px/16px var(--font-display);letter-spacing:.16em;text-transform:uppercase;color:var(--accent)}",
     ".hero-kicker{margin:0;font:500 12px/16px var(--font-display);letter-spacing:.16em;text-transform:uppercase;color:var(--hero-kicker)}"),
    (".hero-rule{display:block;width:32px;height:1px;margin-top:-8px;background:rgba(55,33,69,.28)}",
     ".hero-rule{display:block;width:32px;height:1px;margin-top:-8px;background:var(--hero-rule)}"),
    (".hero-btn-primary{background:var(--accent);color:var(--button-text);border:0;box-shadow:0 8px 16px rgba(90,54,114,.22)}",
     ".hero-btn-primary{background:var(--hero-btn-primary);color:var(--hero-btn-primary-text);border:0;box-shadow:0 8px 16px var(--hero-btn-primary-shadow)}"),
    (".hero-btn-primary:hover{background:var(--accent-hover);color:var(--button-text)}",
     ".hero-btn-primary:hover{background:var(--hero-btn-primary-hover);color:var(--hero-btn-primary-text)}"),
    (".hero-btn-primary:visited{color:var(--button-text)}",
     ".hero-btn-primary:visited{color:var(--hero-btn-primary-text)}"),
    (".hero-btn-secondary{background:rgba(255,255,255,.72);color:var(--vinho);box-shadow:inset 0 0 0 1px rgba(55,33,69,.22);backdrop-filter:blur(12px)}",
     ".hero-btn-secondary{background:var(--hero-btn-secondary-bg);color:var(--vinho);box-shadow:inset 0 0 0 1px var(--hero-btn-secondary-border);backdrop-filter:blur(12px)}"),
    (".hero-btn-secondary:hover{background:rgba(255,255,255,.92)}",
     ".hero-btn-secondary:hover{background:var(--hero-btn-secondary-bg-hover)}"),
    ("background:radial-gradient(circle,rgba(189,156,107,.42) 0%,rgba(55,33,69,.18) 42%,transparent 70%)",
     "background:radial-gradient(circle,var(--hero-glow-gold) 0%,var(--hero-glow-vinho) 42%,transparent 70%)"),
    ("filter:drop-shadow(0 22px 28px rgba(0,0,0,.18))",
     "filter:drop-shadow(0 22px 28px var(--hero-person-shadow))"),
    ("background:linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.55) 42%,#fff 100%)",
     "background:linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.55) 42%,var(--hero-fade) 100%)"),
    ("background:linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.55) 42%,var(--paper) 100%)",
     "background:linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.55) 42%,var(--hero-fade) 100%)"),
    (".services{background:var(--hover-soft);",
     ".services{background:var(--services-bg);"),
    (".statement{background:var(--ink);",
     ".statement{background:var(--statement-bg);"),
    (".contact{background:var(--sand);",
     ".contact{background:var(--contact-bg);"),
    ("footer{background:var(--footer-bg);color:var(--statement-text);",
     "footer{background:var(--footer-bg);color:var(--footer-text);"),
    (".legal{grid-column:1/-1;border-top:1px solid var(--footer-line);margin-top:20px;padding-top:18px;color:var(--footer-muted);font-size:11px}",
     ".legal{grid-column:1/-1;border-top:1px solid var(--footer-line);margin-top:20px;padding-top:18px;color:var(--footer-muted);font-size:11px}"),
    (".nav-cta,.button{background:var(--accent)!important;color:var(--button-text)!important;border-radius:var(--radius-button);",
     ".nav-cta,.button{background:var(--accent)!important;color:var(--button-text)!important;border-radius:var(--radius-button);"),
    (".nav-cta:hover,.button:hover{transform:translateY(-2px);background:var(--accent-hover)!important}",
     ".nav-cta:hover,.button:hover{transform:translateY(-2px);background:var(--accent-hover)!important}"),
    (".cards article{background:var(--paper);border-radius:var(--radius-photo);overflow:hidden;box-shadow:0 1px 0 rgba(255,255,255,.8) inset,0 10px 28px rgba(33,20,42,.06)}",
     ".cards article{background:var(--services-card-bg);border-radius:var(--radius-photo);overflow:hidden;box-shadow:0 1px 0 rgba(255,255,255,.8) inset,0 10px 28px var(--card-shadow)}"),
    (".article-card:hover{background:var(--hover-soft)}",
     ".article-card:hover{background:var(--hover-soft)}"),
    ("footer a:hover{color:var(--statement-text)}",
     "footer a:hover{color:var(--footer-text)}"),
    ("footer a.brand:hover{color:var(--button-text)}",
     "footer a.brand:hover{color:var(--footer-text)}"),
    (".statement-word.is-on{color:var(--statement-text)}",
     ".statement-word.is-on{color:var(--statement-text)}"),
    (".statement-word{color:var(--statement-text)}",
     ".statement-word{color:var(--statement-text)}"),
    (".statement p{font:500 clamp(2rem,3.8vw,4rem)/1.1 var(--font-display);letter-spacing:-.045em;color:var(--statement-text);",
     ".statement p{font:500 clamp(2rem,3.8vw,4rem)/1.1 var(--font-display);letter-spacing:-.045em;color:var(--statement-text);"),
    ("border:1px solid rgba(33,20,42,.08);border-radius:var(--radius-card);background:rgba(255,255,255,.98);box-shadow:0 18px 40px rgba(33,20,42,.12)}",
     "border:1px solid var(--nav-panel-border);border-radius:var(--radius-panel);background:rgba(255,255,255,.98);box-shadow:0 18px 40px var(--nav-panel-shadow)}"),
    (".nav-drop-menu a:hover{background:var(--hover-soft);color:var(--accent)}",
     ".nav-drop-menu a:hover{background:var(--hover-soft);color:var(--accent)}"),
    (".filters .active{background:var(--accent);color:var(--button-text);border-color:var(--accent)}",
     ".filters .active{background:var(--accent);color:var(--button-text);border-color:var(--accent)}"),
    (".personal-creds li{padding:8px 14px;border:1px solid var(--line);border-radius:var(--radius-pill);font:500 12px/16px var(--font-body);color:var(--accent);background:var(--sand)}",
     ".personal-creds li{padding:8px 14px;border:1px solid var(--line);border-radius:var(--radius-chip);font:500 12px/16px var(--font-body);color:var(--accent);background:var(--sand)}"),
    (".category-card{display:flex;flex-direction:column;align-items:flex-start;gap:10px;padding:0 0 26px;border-radius:var(--radius-category);background:var(--sand);",
     ".category-card{display:flex;flex-direction:column;align-items:flex-start;gap:10px;padding:0 0 26px;border-radius:var(--radius-category);background:var(--sand);"),
    ("cubic-bezier(.32,.72,0,1)", "var(--ease)"),
]

for old, new in direct:
    if old in css:
        css = css.replace(old, new)

# Layout tokens for a few high-value spots
css = css.replace(".header{height:86px;max-width:1240px;margin:auto;padding:0 30px;", ".header{height:var(--header-height);max-width:var(--layout-header-max);margin:auto;padding:0 var(--page-padding);")
css = css.replace(".split{max-width:1180px;margin:auto;padding:120px 30px;", ".split{max-width:var(--layout-max);margin:auto;padding:120px var(--page-padding);")
css = css.replace(".blog{max-width:1180px;margin:auto;padding:80px 30px 115px}", ".blog{max-width:var(--layout-max);margin:auto;padding:80px var(--page-padding) 115px}")
css = css.replace("width:min(1216px,100%)", "width:min(var(--layout-hero-max),100%)")
css = css.replace(".header{height:72px;padding:0 20px}", ".header{height:var(--header-height-mobile);padding:0 var(--page-padding-mobile)}")
css = css.replace("top:72px;", "top:var(--header-height-mobile);")

# reading-body blockquote radius
css = css.replace("background:var(--sand);border-radius:var(--radius-card);color:var(--ink);font-size:18px;line-height:28px}",
                  "background:var(--sand);border-radius:var(--radius-quote);color:var(--ink);font-size:18px;line-height:28px}")

path.write_text(css, encoding="utf-8")
print("wired styles.css to theme tokens")
print("Fraunces left:", css.count("Fraunces"))
print("Manrope left:", css.count("Manrope"))
print("#5A3672 left:", css.count("#5A3672"))
print("#472B5C left:", css.count("#472B5C"))
print("#F1EBF4 left:", css.count("#F1EBF4"))
