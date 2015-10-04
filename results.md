---
title: Results
tag: results
group: home
sort: 40
---

## Race Results

 [Results 2015](http://www.swifttiming.co.uk/)

{% assign results_pages = site.pages | where: "layout", "results" %}
<ul class="results-pages">
{% for page in results_pages %}
  <li><a href="{{ page.url }}">{{ page.title }}</a></li>
{% endfor %}
</ul>
