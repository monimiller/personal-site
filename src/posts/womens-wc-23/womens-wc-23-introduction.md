---
title: Monica vs the Machine - Women's World Cup 2023 Analysis
description: Pitting myself versus a CatBoost algorithm to see who wins.
date: 2022-07-20
tags: ['data-analysis', 'python']
draft: true
images: []
---

## Once upon a time

Once upon a time there was a girl who played soccer. She played so much soccer
that after years and years of playing, she now has a couple of D3 records to her
name. While I am now a 
fully retired, washed up fan who strictly spectates - I still love the game, and I still love
watching anytime that I can. It doesn't hurt that I live in the United States,
where we have arguably the best women's soccer program in the world, so of
course it's fun to watch - especially international competitions. Because of my
sports background, I also have my own opinions about men's and women's equality
in sports, but I think one thing we can all agree upon is raising awareness for the
incredible women's athletes who are out there playing today. As a data girl
living in a data world, I thought what better way to do that than to pit myself
against a machine learning algorithm to see who wins. I'm not going to lie, I
am nervous for the outcome. I made my predictions like how I make all my
decisions, on blind gut instinct, so I am definitely feeling vulnerable about
sharing my
decision making with the entire world. But, I am also excited to see what the
outcome is. I have predicted the entire bracket, so I will be checking back in
often to view my results. If both brackets are too terrible by the time we get
to the Round of 16, I may redo the predictions, so stay tuned for that.

A quick note as you continue on - all the sports takes are my own, and do not reflect the
opinions of my family, friends, dog, or employer.

## The project premise and scope

My initial inspiration was born out of me trying to find new data for one of
my example projects with Starburst. I started researching, and I found a men's
world cup 
analysis performed by [Gustavo Santos](). Gustavo created a tremendous project
that I highly recommend checking out. I was able to essentially streamline my
own analysis from his prior work, so I want to say a major thank you to him. I
also want to give credit where credit is due - I really learned so much from his
analysis, and could not have replicated it on the women's side without his prior
work. That was my entire goal of this project - to push myself out of my comfort
zone and give the women's side some love
by completing a simplified analysis from what Gustavo provided to share with the
community. My husband always reminds me of the importance of reproducibility
within our field, so I hope that this project will be a good example of that
concept as well.

I 

## The Data Wrangling

Every project starts with the data wrangling. I found [this]() Kaggle dataset,
which was a great starting point. It records the outcome history of women's
international football matches since before the historic 1991 World Cup, which
to most is when women's soccer actually began. I did some initial data exploration, and then
did some data cleaning to only take into account data from the last 20 years.
I picked 20 years exactly because starting in 2003 there have been 6 women's
world cups, and if Kristine Lilly can play on the national team for 23 years, I
think this choice was a good balance between recency and history. I
also filtered the data to only consider countries that were in the world cup.
While it would be interesting to do a version two that takes into account all of
the countries, the reality is that most of the best countries in the world are
in the tournament. I thought that leaving the other countries in would skew the
data too much, and I wanted to keep the analysis as clean as possible. I also
needed to update the dataset, since it did not reflect all the results of
international matches within the last year.  I was talking to a friend  
  I will dive
into an analysis of the data in my second post, but for now I wanted to the
basic premise 

## The Analysis
I used the CatBoost algorithm for my predictive analysis. The train model notebook is where I ran the analysis to create my model. Much of this was me simplifying Gustavo's previous work and tailoring it to my needs. I also weighted every match equally, so instead of the home team being weighted differently than the away team, those outcomes were statistically equally probable.

My run predictions notebook is where I then used the trained model to produce probabilities for all the results. These results can be found in the model generated predictions folder.

Based on the group play predictions, I then ran through all the playoff games and built out the full bracket.

## The Result
Just like I make most decisions, all my predictions were based on my gut. I didn't really do as much research as I would have liked, and really just solely put all my biases out there. You can find my predictions in the Monica's predictions folder. I have all my group winners, and then also have published my personal bracket. I will check back throughout the tournament to see who's winning - Me or the Algorithm.