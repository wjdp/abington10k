---
title: Sponsors
group: home
sort: 100
---

## Race Sponsors

<ul class="sponsor-list">
{% for sponsor in site.data.sponsors %}

  <li class="sponsor-single">
    <div class="inner">
      {% if sponsor.link %}<a href="{{ sponsor.link }}">{% endif %}
      {% if sponsor.logo %}
        <img class="sponsor-logo" src="/images/sponsors/{{ sponsor.logo }}" alt="Sponsor Logo" />
      {% else %}
        <p>{{ sponsor.sponsor }}</p>
      {% endif %}
      {% if sponsor.link %}</a>{% endif %}
    </div>
  </li>

{% endfor %}
</ul>
