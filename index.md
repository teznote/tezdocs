---
layout: post
title: "About \"TEZDOCS\" theme 3.0"
updated: 2023-10-03
tags: home
---

## TEZDOCS 3.0

기술블로그에서 많이 사용하는 [Sphinx 테마](https://sphinx-themes.org/) 와 비슷한 형태의 테마를 사용해보고 싶었다. 구글링 해보면 Github Page 테마로 구현한 것들도 많았지만 허접하게나마 직접 만들어보고 싶었다.

버전 1 과 2 를 거쳐 3 까지 오게 되었다.

## 테마 사용 방법

Github Page 를 구축하기 위한 Repo 를 하나 생성한다.

그리고 `_config.yml` 파일 안에 아래와 같은 구문이 필수적으로 삽입되어야 한다. `[ Site Title ]` 안에는 원하는 사이트 타이틀을 삽입한다.

```yaml
remote_theme: teznote/tezdocs@v3.0.0
title: "[ Site Title ]"
permalink: /post/:title
markdown: kramdown
kramdown:
  syntax_highlighter_opts:
    disable: true
future: true
```
{:.yaml}

`_config.yml` 파일에 아래 구문을 이어서 작성한다. 이는 생성된 Github Page 왼쪽 사이드바에 표시되는 카테고리 항목이다.

```yaml
cats:
  - id: [ lv1 id ]
    title: [ lv1 title ]
    subs:
      - id: [ lv2 id ]
        title: [ lv2 title ]
        order: [ asc or title, default desc ]
```
{:.yaml}

포스팅 문서의 Front Matter 는 아래와 같다.

```yaml
---
layout: post
title: [ Post Title ]
updated: [ Last updated YYYY-MM-DD ]
tags: [ id ]
---
```
{:.front.matter}

위 Front Matter 에서 `tags` 부연설명을 하자면, `_config.yml` 파일의 `subs` 아래에 있는 `id` 중의 하나여야 한다.

보다 자세한 설명을 원한다면 [TEZDOCS Repo](https://github.com/teznote/tezdocs/) 를 직접 살펴보기 바란다.

## 디자인 예시

아래부터는 어떤 식으로 디자인이 되는지를 알 수 있는 예시이다.

이것은 **강조구문**이다. [링크](#)이다.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque [sodales](#) enim id augue ultricies, vel rhoncus tellus ullamcorper. Sed tincidunt augue ac rhoncus accumsan.
{:.note}

- Suspendisse sit amet ex ut massa **aliquet** efficitur.
- Integer fermentum neque laoreet, venenatis enim in, fermentum nisl.
- Sed pellentesque lectus pulvinar elementum volutpat.
{:.아무거나.넣어보자}

이미지 테스트

![그림00](https://via.placeholder.com/700x150)*이미지 캡션 Image Caption 이미지 캡션 Image Caption 이미지 캡션 Image Caption 이미지 캡션 Image Caption 이미지 캡션 Image Caption*

코드 하이라이트 테스트

```python
def fibonacci(n):
  return n if n < 2 else fibonacci(n-2) + fibonacci(n-1)    # Dynamic Programming...
```
{:.python}

위 `fibonacci` 함수는 재귀호출을 사용하고 있다.