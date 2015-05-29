---
title: Results
tag: results
group: home
sort: 40
---

## Race Results

Results will be available shortly after the race. Records for 2013-14 10K and Fun Runs to be added shortly.

{% assign results_pages = site.pages | where: "layout", "results" %}
<ul class="results-pages">
{% for page in results_pages %}
  <li><a href="{{ page.url }}">{{ page.title }}</a></li>
{% endfor %}
</ul>
