---
title: Results
tag: results
group: home
sort: 40
---

## Race Results

Results will be available shortly after the race. Previous years' results are linked below.

{% assign results_pages = site.pages | where: "layout", "results" %}
<ul class="results-pages">
{% for page in results_pages %}
  <li><a href="{{ page.url }}">{{ page.title }}</a></li>
{% endfor %}
</ul>
