---
---

'use strict'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('html').classList.remove('preload')
})

fetch(`{{ '/assets/nav.html' | relative_url }}`).then(res => {
  return res.text()
}).then(body => {
  document.querySelector('#nav').innerHTML = body;
}).then(() => {
  const multiplier = {{ site.navtags.size }};

  const root = document.querySelector('html')
  const sw1_input = document.querySelector('#sw1 input')
  const sw2_input = document.querySelector('#sw2 input')
  const slide = document.querySelector('#slide')
  const nav_tags_ul_lis = document.querySelectorAll('#nav #tags ul li')
  const nav_posts = document.querySelector('#nav #posts')

  

  sw2_input.addEventListener('click', e => {
    e.target.checked ? slide.classList.add('sw2-checked') : slide.classList.remove('sw2-checked')
  })

  for (let li of nav_tags_ul_lis) {
    li.addEventListener('click', e => {
      for (let _li of nav_tags_ul_lis) {
        _li.classList.remove('selected')
      }
      li.classList.add('selected')
      nav_posts.className = ''
      nav_posts.classList.add(`selected-${li.getAttribute('tag')}`)
    })
  }
})

