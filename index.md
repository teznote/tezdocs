---
layout: post
title: About...
description: Github Page 를 위한 새로운 Jekyll 테마를 적용한 블로그
updated: 2023-10-25
tags: [home,front_page]
---

## Tez'Docs 4.0

개인 블로그에 적용하기 위해 제작한 [Github Pages](#) 용도의 [Jekyll](#) 테마이다.

심플한 형태를 좋아하기 때문에 최대한 단순하게 제작을 했다. (어차피 복잡하게 할 줄 모른다.)

## Config

사용할 땐 `_config.yml` 파일을 아래와 같이 설정하면 된다.

```yaml
remote_theme: teznote/tezdocs@v4.x.x
title: [블로그 타이틀]
description: [블로그에 대한 간단한 설명]
footer: [블로그 각 페이지 제일 하단에 포함되는 메세지]
permalink: /post/:title
baseurl: [*참고]

kramdown:
  syntax_highlighter_opts:
    disable: true
```
{:.yaml}

`*참고` 부분에는 도메인 (예를들면 `https://username.github.io`) 을 제외한 라우팅 부분 (예를들면 `/myblog`) 을 입력한다. 특히 Github Page 를 `username.github.io` Repo 가 아닌 곳에 사용하고자 할 때 필요하다.

## Syntax Highlighter

그동안 사용해왔던 [Highlight.js](#) 대신 [Prism](#) 을 사용하였다.