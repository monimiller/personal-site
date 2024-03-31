---
title: "Choose Your Fighter: dbt Tutorial Edition"
description: Pits I fell into when completing the dbt Jaffle Shop tutorial and how to avoid them.
pubDate: 2022-03-08
categories:
  ["dbt", "data", "dbt Cloud", "dbt CLI", "dbt tutorials", "dbt setup"]
draft: false
authors: ["monica-miller"]
# TODO: Add hero image
heroImage: "../example-1/orange-blobs-1.jpg"
# images: ['/public/static/images/Phoebe.jpg']
---

There is nothing I **despise** more than medium level decision making. Big decisions - no problem! _Pro and Con lists to the Rescue!_ Small decisions? Easy - I go with my gut and accept the difference between option A and option B is essentially negligible (ex: pizza is still an excellent dinner choice, no matter where you order it from).

But, Medium decisions. Decisions that you may not have all the knowledge available at the time and run the risk of rework if you pivot. Those freak me out. What template should I use for my blog post when all my options integrate with VS Code and have great support communities? That took my four weeks of trial and error, just to end up where I started. **Medium decision making failure**.

So, the purpose of this post is to try consolidate all the information available so that those new to dbt can make an informed medium decision about your dbt environment of choice between dbt _Cloud User Interface_ and the dbt _Command Line Interface_. Here's my hot takes on setting up both environments below, as well as some other instructions that would be beneficial during initial setup.

## Integrating with BigQuery

Regardless of whatever medium decision you make for your environment, the [tutorial](https://docs.getdbt.com/tutorial/setting-up) requires setting up a BigQuery project so that dbt can work it's magic from a pre-existing public dataset. The tutorial for setting up credentials gets you to the point where the proper service account is created; however, the JSON key is not created without additional steps. Here's the next steps to get all credentials created.

After going through the three step process to create the service account, and hitting **DONE** in the bottom left corner, the following _Credentials_ page will pop up. From here, click the _Edit service account_ button in the bottom left corner will get us to the details page of the created service account.

<div class="not-prose">
<details class="bg-slate-500 dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg ">
  <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
    Create Service Account Credentials
  </summary>
  <div class="center">
    {% imagePlaceholder "./src/assets/images/post-pics/credentials_2.jpg", "Create Service Account Credentials" %}
  </div>
</details>

<details class="bg-slate-500 dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg ">
  <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
    Edit Service Account
  </summary>
  <div class="center">
    {% imagePlaceholder "./src/assets/images/post-pics/pointer.jpg", "Edit Service Account", "" %}
  </div>
</details>

<details class="bg-slate-500 dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg ">
  <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
    Create New JSON Key
  </summary>
  <div class="center">
    {% imagePlaceholder "./src/assets/images/post-pics/createnewkey.jpg", "Edit Service Account", "" %}
  </div>
</details>
</div>

Once completed, your key will now have a status of 'active' and a green checkmark!

## dbt Cloud VS. dbt CLI

### dbt Cloud

While I must confess I had set up many work environments using dbt cloud already, the [Cloud Setup](https://docs.getdbt.com/tutorial/create-a-project-dbt-cloud) tutorial covers almost all of the information needed for a full end to end setup. The integration with bigquery was almost flawless since the simple JSON file upload auto-populates all of the connection information.

**Additional Instructions _Not_ Mentioned in the Tutorial:**

- While the connection information is autopopulated, the personal developer credentials are not. Luckily, this can be done in the original setup and tested using the **Test** button in the top right.
  <div class="not-prose">
  <details class="bg-slate-500 dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg ">
    <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
      Add your BigQuery schema name in the Developer Credentials *Dataset* section.
    </summary>
  <div class="center">
    {% imagePlaceholder "./src/assets/images/post-pics/developer_credentials.png", "Edit Service Account", "" %}
  </div>
  </details>
  </div>

- Once you have successfully tested this connection, both the database connection and your personal credentials are set up correctly. If you need to change this information for any reason, you will need to edit both the **Personal Development Credentials** and the **Connection Information**.

As far as web UI's go, the dbt Cloud UI is easy enough to learn quickly. There are some idiosyncrasies in the setup and credential structure which allows for multiple ways to get to the end result. The biggest downfall with this method, is the free trial only lasts 14 days and personally, I think the UI is slow. I struggled to wait for refreshing, basically whenever dbt felt there was a need to refresh, which occurred more than I would have liked. However, the integration and setup was super easy. For anyone who wants just a taste of the power that is dbt, this is the move.

### CLI Help for the Python Challenged

If you are looking for something a little longer term, the CLI environment is probably a better bet. Here are some of the commands I ran and the bugs I noticed when I created my virtual environment wrong. I also struggled with the documentation, as it felt like a scavenger hunt to figure out what command setup to run next. So I'm sharing the abridged version to avoid the headache I faced. I was setting this up on a linux environment.

PS: Olaf is the name of my Omen computer, because I am obsessed with alliteration and Frozen.

```sh
mmiller@olaf:~$ sudo apt install python3.9-venv
mmiller@olaf:~$ python3 -m venv dbt-env
mmiller@olaf:~$ source dbt-env/bin/activate
mmiller@olaf:~$ pip install dbt-bigquery
mmiller@olaf:~$ dbt --version
installed version: 1.0.3
   latest version: 1.0.3

Up to date!
(dbt-env) mmiller@olaf:~$ dbt init dbt_tutorial
```

**Helpful Resources**

- [Install dbt using pip](https://docs.getdbt.com/dbt-cli/install/pip) NOTE: For helpful hints, use the code snippit above and checkout the tab - _Does my operating system have prerequisites?_
- [dbt CLI: create project](https://docs.getdbt.com/tutorial/create-a-project-dbt-cli)
- [dbt Command reference](https://docs.getdbt.com/reference/dbt-commands)

### Final Thoughts

If you have 30 minutes to invest in setup and are comfortable using a text editor, I would pick the dbt CLI any day. Even if you have never used anything like this but know basic unix, I would still recommend giving this a try. Bottom line, I would select my final choice based on the longevity of the commitment. Not looking for something long term? Use dbt Cloud's 14 day trial and easy-peasy setup. Plan on using dbt for anything past a basic demo or familiarization? Try the CLI. It will be worth it.

## Spotlight of the Week!

<!-- FIXME Broken link -->

This week, check out my blog post about [YC 's Women in Startups Series](../SOTW/My_Experience_in%20_YCs_Women_in_Startups_Series.md).
