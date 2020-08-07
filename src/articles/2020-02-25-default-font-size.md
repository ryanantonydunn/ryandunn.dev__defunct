---
author: "Ryan Dunn"
date: "2020-02-25T00:00:00.000Z"
hero_class: "bg-red-500"
hero_image: "../static/images/project-ants.png"
hero_alt: "Image description"
title: "Should we set a default font-size? Ideals and practicalities"
description: "Most web browsers have a setting to customise what the default font size is. This can be used by visually impaired users to increase readability."
slug: "should-we-set-a-default-font-size-ideals-and-practicalities"
---

Recently I had quite a productive conversation about default font sizes in browsers in a PR comment section. I thought I would preserve the outcome here for later reference.

## The Problem

Most web browsers have a setting to customise what the default font size is. This can be used by visually impaired users to increase readability and comfort.

![Chrome default font settings](https://dev-to-uploads.s3.amazonaws.com/i/pztwd6yrny8elgbe1dqi.jpg)
_Chrome default font settings_

This can present challenges to developers with having the layout support a wide variety of text sizes while still being usable and presentable. This gets more challenging the more complex the website or web-app is. A lot of developers opt to set the font size explicitly, effectively disabling this feature. Including Google and Facebook.

![Google body tag font settings](https://dev-to-uploads.s3.amazonaws.com/i/wmuo0542mjtq9l7m1ouh.jpg)
_Google body tag font settings_

Opinions on best practices here vary. Some say it’s better to have the browser zoom feature handle all font increases, preserving the layout. Some that the feature allows people to choose the method that most suits them. Even the accessibility specifications are quite vague on this.

## The Conversation

We had a back-and-forth over this over several days. The following is roughly how the conversation went.

**Dev 1:**
Font size missing from body. Not all browsers have a 16px default size.

**Dev 2:**
Allowing the default is better for accessibility because some users use a higher default font size.

**Dev 1:**
Users use a custom stylesheet now to set the default because sites like Google and Facebook all use a base pixel font. Not setting it will break the layout in some browsers.

**Dev 2:**
Some big sites do but others do not. Just because others don’t support default sizes doesn’t mean we shouldn’t either. Mobile browsers aren't displaying them incorrectly, we’re just not building our layout flexibly enough to accommodate varying text size.
Reference: https://www.w3.org/WAI/older-users/developing/#p

**Dev 1:**
Agreed, but checking the spec here it looks like the zoom feature would be enough to meet their criteria.
G142: Using a technology that has commonly-available user agents that support zoom
Is there something more specific to do with default font sizes we can see?

**Dev 2:**
It might be enough to simply meet the minimum standards but I think we should aim to support this feature. By explicitly setting a pixel font size we are choosing to disable it.

From a survey conducted in 2018 with 248 respondents with impaired vision on how they use assistive technology:
https://webaim.org/projects/lowvisionsurvey2/

| Response                                                               | # of Respondents | % of Respondents |
| ---------------------------------------------------------------------- | ---------------- | ---------------- |
| Screen reader                                                          | 112              | 45.2%            |
| Screen magnification software or system settings                       | 120              | 48.4%            |
| Browser zoom controls (zooms all page content)                         | 109              | 44.0%            |
| Browser text sizing settings                                           | 91               | 36.7%            |
| High contrast mode or settings                                         | 76               | 30.6%            |
| Browser settings to change colors                                      | 34               | 13.7%            |
| Custom styles (for example with Stylish, Stylus, or user style sheets) | 31               | 12.5%            |
| Tools that highlight text as it is read                                | 25               | 10.1%            |
| Other                                                                  | 21               | 8.5%             |

I agree that on the surface it looks like zoom would be enough to meet the requirements, but the fact is that people use this feature. For whatever reason makes them comfortable with their particular disability they use it. I think we should support it for the small effort it takes to adjust our layout.

**Dev 1:**
Cool. So we need to mitigate the problems that arise due to this.

_[list of observed issues, eg: buttons overflowing, scrollbars appearing on some elements, images unpredictably moving around]_

Also since not all the text has been done with rems and it's currently a mix of px and rems, some text is tiny while other text is huge. Based on this, do you think we should temporarily add the font-size in until we can attend to these?

**Dev 2:**
Good point. Let’s put in a temporary base font size for now and we’ll make a ticket to revisit this across the app further down the roadmap.

## Lessons

This was a very useful conversation. By approaching the problem with an open mind and looking into the evidence we came to some conclusions on both an ideal best practice and a pragmatic approach to getting there.

### Things to remember

- Users may feel more comfortable using our products in ways we don’t expect.
- Just because someone else is doing it doesn’t mean it’s the correct approach, no matter how big they are.
- Sometimes the best approach has to be compromised for practical reasons like budget and timescale.
- Sometimes we need a temporary solution that can be improved further down the roadmap.
- Friendly pushback makes you justify what you think you know and really check why you think the way you do.
- Always be open to having your mind changed by new information.
