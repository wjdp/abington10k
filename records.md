---
title: Records
group: home
sort: 50
---

## Course Records

Records for 2013-14 10K and Fun Runs to be added shortly.

<div class="record-container">

{% for record in site.data.records %}

  <div class="record-single">
    <p class="record-title">{{ record.title }}</p>
    <p class="record-name">{{ record.name }}</p>
    <div class="record-info">
      <p class="record-time">{{ record.time }}</p>
        <div class="record-info-aside">
          <p class="record-club">{{ record.club }}</p>
          <p class="record-year">{{ record.year }}</p>
        </div>
    </div>
  </div>

{% endfor %}

</div>
