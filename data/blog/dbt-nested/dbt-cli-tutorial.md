---
title: 'Choose Your Fighter: dbt Tutorial Edition'
date: '2022-03-08'
tags: ['dbt', 'data', 'dbt Cloud', 'dbt CLI', 'dbt tutorials', 'dbt setup']
draft: true
summary: Pits I fell into when completing the dbt Jaffle Shop tutorial and how to avoid them.
images: ['/public/static/images/Phoebe.jpg']
---

There is nothing I **despise** more than medium level decision making. Big decisions - no problem! _Pro and Con lists to the Rescue!_ Small decisions? Easy - I go with my gut and accept the difference between option A and option B is essentially negligible (ex: pizza is still an excellent dinner choice, no matter where you order it from).

But, Medium decisions. Decisions that you may not have all the knowledge available at the time and run the risk of rework if you pivot. Those freak me out. What template should I use for my blog post when all my options integrate with VS Code and have great support communities? That took my four weeks of trial and error, just to end up with what I started on, six attempts later. **Medium decision making failure**.

So, the purpose of this post is to try consolidate all the information available so that those new to dbt can make an informed medium decision about your dbt environment of choice between dbt _Cloud User Interface_ and the dbt _Command Line Interface_. Here's my hot takes on setting up both environments below, as well as some other instructions that would be beneficial during initial setup.

## Integrating with BigQuery

Regardless of whatever medium decision you make for your environment, the [tutorial](https://docs.getdbt.com/tutorial/setting-up) requires setting up a BigQuery project so that dbt can work it's magic from a pre-existing public dataset. The tutorial for setting up credentials gets you to the point where the proper service account is created; however, the JSON key is not created without additional steps. Here's the next steps to get all credentials created.

After going through the three step process to create the service account, and hitting **DONE** in the bottom left corner, the following _Credentials_ page will pop up. From here, click the _Edit service account_ button in the bottom left corner will get us to the details page of the created service account.

<div class="not-prose">
<details class="bg-slate-500 dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg ">
  <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
    Create Service Account Credentials
  </summary>
  <img src="/static/images/credentials_2.jpg" class="center"/> 
</details>

<details class="bg-slate-500 dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg ">
  <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
    Edit Service Account
  </summary>
  <img src="/static/images/pointer.jpg" class="center"/> 
</details>

<details class="bg-slate-500 dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg ">
  <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
    Create New JSON Key
  </summary>
  <img src="/static/images/createnewkey.jpg" class="center"/> 
</details>
</div>

Once completed, your key will now have a status of 'active' and a green checkmark!

## dbt Cloud VS. dbt CLI

### dbt Cloud

While I must confess I had set up many work environments using dbt cloud already, the [Cloud Setup](https://docs.getdbt.com/tutorial/create-a-project-dbt-cloud) tutorial covers almost all of the information needed for a full end to end setup. The integration with bigquery was almost flawless with the easy JSON file upload then auto-populating all of the connection information.

As far as web UI's go, the dbt Cloud UI is easy to navigate and fast enough to use. The biggest downfall with this method, is the free trial only lasts 14 days.

Additional Instructions:
-need schema to be dbt_monica or whatever your schema is in big query. easy to upload the downloaded file, except that part ; test the connection before moving on

### CLI Help for the Python Challenged

Here are some of the commands I ran and the bugs I noticed when I created my virtual environment wrong. I also struggled with the documentation, as it felt like a scavenger hunt to figure out what command setup to run next. So here's the abridged version to avoid the headache I faced.

```sh
mmiller@olaf:~$ sudo apt install python3.9-venv
mmiller@olaf:~$ python3 -m venv dbt-env
mmiller@olaf:~$ source dbt-env/bin/activate
mmiller@olaf:~$ pip install dbt-bigquery

(dbt-env) mmiller@olaf:~$ dbt --version
installed version: 1.0.3
   latest version: 1.0.3

Up to date!
mmiller@olaf:~$ dbt init dbt-tutorial


  - bigquery: 1.0.0 - Up to date!
(dbt-env) mmiller@olaf:~$ dbt init dbt-tutorial
02:56:41  Running with dbt=1.0.3
02:56:41  Creating dbt configuration folder at /home/mmiller/.dbt
dbt-tutorial is not a valid project name.
Enter a name for your project (letters, digits, underscore):
Enter a name for your project (letters, digits, underscore): dbt_tutorial
Which database would you like to use?
[1] bigquery

(Don't see the one you want? https://docs.getdbt.com/docs/available-adapters)

Enter a number: 1
[1] oauth
[2] service_account
Desired authentication method option (enter a number): 2
keyfile (/path/to/bigquery/keyfile.json): ^C03:05:44  Encountered an error:

(dbt-env) mmiller@olaf:~$
(dbt-env) mmiller@olaf:~$ cd dbt_tutorial
(dbt-env) mmiller@olaf:~/dbt_tutorial$ ls

(dbt-env) mmiller@olaf:~/dbt_tutorial$ dbt run
```

### Final Thoughts

i would select the choice based on the longevity of the commitment. if you are demoing something small, and just want to give it a try (low investment, low return) do dbt cloud. Easier setup. Only downfall is the 14 day limit.

## Spotlight of the Week!

This week, check out my blog post about [YC 's Women in Startups Series](SWOT/../../SOTW/My_Experience_in%20_YCs_Women_in_Startups_Series.md).

## Tech Humor

My husband read over my shoulder as I was drafting this up and sent me this meme because he saw "Cloud" in the article. So, please enjoy this unrelated cloud joke that made me giggle.
<img src="https://i.pinimg.com/originals/c0/dc/85/c0dc853d9a2045a38e54f35fc917dc64.png" width="200" height="200"/>

![Cloud Joke](https://i.pinimg.com/originals/c0/dc/85/c0dc853d9a2045a38e54f35fc917dc64.png =200x20) [^1]
[^1]: Image pulled from [here](https://www.pinterest.com/pin/462463455459709875/visual-search/?x=10&y=10&w=544&h=544&cropSource=6&imageSignature=c0dc853d9a2045a38e54f35fc917dc64).

Thanks for reading! Please shoot me an email with questions, comments, or information I didn't know about yet!
\
-Monica
