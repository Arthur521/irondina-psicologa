# -*- coding: utf-8 -*-
import json
from pathlib import Path

root = Path(__file__).resolve().parents[1] / "src" / "data"
site_path = root / "site.json"
site = json.loads(site_path.read_text(encoding="utf-8"))

site["brand"].update({
    "logo": "/images/logo.png",
    "logoWhite": "/images/logo-white.png",
    "heroPerson": "/images/larissa-hero.png",
    "heroPersonAlt": "Larissa Caramaschi, psicóloga clínica, de braços cruzados",
    "ogImage": "/images/og.jpg",
    "ogImageAlt": "Poltrona roxa, xícara branca e flores secas sobre uma mesa de madeira, com a luz da tarde na parede.",
    "favicon": "/favicon.ico",
    "faviconPng": "/favicon-32.png",
    "appleTouchIcon": "/apple-touch-icon.png",
})

site["home"]["hero"].update({
    "cityImage": "/images/hero-cidade.jpg",
    "cityImageAlt": "Vista urbana ao fim da tarde",
    "personImage": "/images/larissa-hero.png",
    "personImageAlt": site["brand"]["heroPersonAlt"],
})

site["home"]["about"].update({
    "image": "/images/sobre.jpg",
})

site["home"]["contact"].update({
    "image": "/images/contato-marista.jpg",
})

site["blog"].update({
    "personImage": "/images/larissa-hero.png",
    "personImageAlt": site["brand"]["heroPersonAlt"],
})

site["sobre"].update({
    "portraitImage": "/images/larissa-hero.png",
    "portraitImageAlt": site["brand"]["heroPersonAlt"],
})

site["footer"].update({
    "logo": "/images/logo-white.png",
})

by_cat = {}
for article in site.get("articles", []):
    by_cat.setdefault(article["category"], []).append(article)

for category in site["categories"]:
    items = sorted(by_cat.get(category["slug"], []), key=lambda item: item["title"])
    if items and items[0].get("image"):
        category["image"] = items[0]["image"]
        category["imageAlt"] = "Capa da categoria " + category["title"]
    else:
        category["image"] = "/images/og.jpg"
        category["imageAlt"] = site["brand"]["ogImageAlt"]

site_path.write_text(json.dumps(site, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print("updated site.json images")
print("categories with images:", sum(1 for category in site["categories"] if category.get("image")))
