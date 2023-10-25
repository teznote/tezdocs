---
---

'use strict'

fetch(`{{ '/assets/nav.html' | relative_url }}`).then(res => {
  return res.text()
}).then(body => {
  document.querySelector('#nav').innerHTML = body;
})
