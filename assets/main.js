---
---

'use strict'

fetch(`{{ '/assets/nav.html' | relative_url }}`).then(res => {
  return res.text()
}).then(body => {
  document.querySelector('#nav').innerHTML = body;
})

const root = document.querySelector('html')
const sw1_input = document.querySelector('#sw1 input')
const sw2_input = document.querySelector('#sw2 input')
const slide = document.querySelector('#slide')

sw2_input.addEventListener('click', e => {
  e.target.checked ? slide.classList.add('sw2-checked') : slide.classList.remove('sw2-checked')
})

document.addEventListener('DOMContentLoaded', () => {
  root.classList.remove('preload')
})
