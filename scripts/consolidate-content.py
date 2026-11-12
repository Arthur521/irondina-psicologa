# -*- coding: utf-8 -*-
"""Gera site.json (textos + índice de artigos) a partir dos JSONs em artigos/.

Fonte de verdade após a consolidação:
  - src/data/site.json      → marca, navegação, home, blog, footer, ui, categories, sobre, articles (meta)
  - src/data/artigos/*.json → um arquivo por artigo (meta + html)
"""
import json
from pathlib import Path

root = Path(__file__).resolve().parents[1] / "src" / "data"
artigos_dir = root / "artigos"
site_path = root / "site.json"

site = json.loads(site_path.read_text(encoding="utf-8"))

articles_meta = []
for path in sorted(artigos_dir.glob("*.json")):
    article = json.loads(path.read_text(encoding="utf-8"))
    articles_meta.append(
        {
            "slug": article["slug"],
            "title": article["title"],
            "description": article["description"],
            "category": article["category"],
            "image": article.get("image", ""),
            "sourceUrl": article.get("sourceUrl", ""),
        }
    )

site["articles"] = articles_meta

by_cat = {}
for article in articles_meta:
    by_cat.setdefault(article["category"], []).append(article)

for category in site.get("categories", []):
    items = sorted(by_cat.get(category["slug"], []), key=lambda item: item["title"])
    if items and items[0].get("image"):
        category["image"] = items[0]["image"]
        category["imageAlt"] = "Capa da categoria " + category["title"]

site_path.write_text(json.dumps(site, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"indexed {len(articles_meta)} articles into site.json")
