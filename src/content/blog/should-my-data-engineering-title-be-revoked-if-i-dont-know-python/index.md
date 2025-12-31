---
title: Can I still be a data engineer if I don’t know Python?
pubDate: 2024-05-29T16:39:54.846Z
draft: false
description: A self-discovery into life, liberty, and the pursuit of data.
categories: ["sql", "data-engineering"]
authors: ["monica-miller"]
# TODO: Add hero image
heroImage: "./concerned_woman.png"
---

## <center> A self-discovery into life, liberty, and the pursuit of data.

---

_A short disclaimer for all the "real engineers" that will potentially
never give my thoughts or opinions the time of day after I bear my soul
and personal experiences. I've been self-taught my entire career, and
I'm not afraid to learn. Please don't cancel me forever as I admit to
the interweb that at this very moment, Python isn't one of my top ten
special skills._

---

**I was a data engineer for three years and SQL was my everyday
programming language.** Let me answer some of your next questions. My
official title was indeed _Data Engineer_, which I might add was a
significant improvement towards accurately representing my role over my
first title of _Software Developer & Integrator_. I have lived through
many of the [same growing
pains](https://www.starburst.io/blog/why-granularity-impacts-role-based-access-control/)
that are synonymous with any data engineering right of passage, and I
spent most of my time building and maintaining near-real time,
micro-batch, and batch data pipelines transforming data from multiple
different sources and ensuring the data quality of these said pipelines
to the business. _And I did most of this work only using SQL._ I never
learned Scala at all. I can google my way through any basic Python needs
I have (I can crush a
[FizzBuzz](https://www.geeksforgeeks.org/fizz-buzz-implementation/)
like nobody's business), but I have to admit my deep dark confession
that my Python use is mostly centered around creating virtual
environments for my dbt projects, installing one time use packages I may
need for some specific instance and then never again, or getting stuck
on Jinja for the sake of an obscure dbt macro.

Am I a fraud? Does my lack of knowledge of object-oriented programming
or the fact that I have no Python code deployed in production mean that
I don't qualify as a data engineer? Am I excommunicated from my
profession because I don't have an utter repugnant reaction if I have to
navigate around using the UI instead of the CLI? My _elite_ impostor
syndrome and deepest insecurities would argue that my time in the
trenches - where I did substantial work - would mean nothing. Because I
am self-taught and completely learned on the job, without having the
substantial background of a traditional software engineer, my experience
is invalid. The last couple of weeks have been spent profoundly
reflecting on all these questions after some recent parallel
conversations with co-workers, friends, and real people out there
doing the things, that lead me to the very scary conclusion that it's
actually a case-by-case basis for each individual role as to whether or
not a data engineering job can be accomplished entirely on the basis of
SQL. However, regardless of your opinion on the matter, you cannot
objectively deny the [data culture](https://rivery.io/blog/best-data-influencers)
capitalizing on the mentality that **SQL is King**. [Everyone's
teaching SQL tips and tricks](https://dataexpert.io/),
because regardless of the opinion if hardcore engineers don't use SQL,
all other data professionals do. And having that somewhat universal
language to communicate between roles is priceless. As my friend and
coworker pointed out, one of the most heavily used [DataFrame functions
he sees in the field is .sql()](https://lestermartin.blog/2023/09/12/pystarburst-the-dataframe-api/#or-just-run-some-sql),
which lets the Python folks type out - you guessed it - SQL.

The truth is that I very much so classify my experience as [data
engineering](https://medium.com/@byanalytixlabs/data-engineer-skills-101-everything-you-need-to-know-for-a-career-in-data-engineering-2381094ad405#:~:text=Maintain%20Data%20Storage%20Solutions,maintain%20robust%20data%20storage%20solutions).
I spent hours upon hours cleaning and cleansing data, building and
maintaining new data pipelines, fixing legacy code, running CI/CD
pipelines, ensuring data quality, securing our data, and so much more.
And after my start to this identity crisis I found
[article](https://www.datacamp.com/blog/how-to-become-a-data-engineer)
after
[article](https://www.altexsoft.com/blog/what-is-data-engineer-role-skills/)
validating my experience. But here's the problem with data in general.
It's all a spectrum. I also think you could have called me a [Data
Product
Owner](https://tamr.com/blog/data-product-owner-role-responsibilities),
or my more affectionately known nickname "girl we ping on Slack when the
IA jobs fail". But the truth is, there were situations where my direct
teammates were doing very different things. Everyone has outstanding and
differing roles and responsibilities because each job is uniquely
different from the other. Even large organizations can find themselves
tangled with multiple completely contrasting tech stacks, resulting in
data engineers developing varying areas of expertise. Data engineers
become fingerprints, each and every one of them holds special skills
developed from facing the obscure challenges and needs unique to each
organization _at that specific moment in time_.

There are two contributing problems:

1.  Everyone defines data engineering differently

2.  There are literally [too many
    things](https://lakefs.io/blog/the-state-of-data-engineering-2024/)

As roles and responsibilities blend and blur, where is the line between
infrastructure engineer and data engineer? Between data engineer and
analytics engineer? And between an analytics engineer and BI analyst?
I've actually never truly understood the role of a data architect, but
you have to throw that one in too. Don't forget the treasured [data
scientists who are critical to our entire
operation](https://www.youtube.com/watch?v=I9oNqDWagtM),
especially with the rise of Generative AI, and before you know it,
you've created [a chaotic radar
plot](https://coderpad.io/blog/data-science/the-differences-between-data-science-and-data-engineering-job-roles/)
where roles and responsibilities intersect and overlap no matter the
title. It becomes clearer why we have all gravitated toward a sole
lingua franca for our data initiatives where possible.

Let's add the second layer of complication and address the [complex
ecosystem](https://lakefs.io/blog/the-state-of-data-engineering-2024/)
of tooling that we all agree is impossible to learn in full. If we shoot
for the stars and pretend each of these roles above can master 5 of
these associated technologies/tools, and we take a conservative guess
that includes around 250 tools, then according to the good old
[combinations
calculator](https://www.calculatorsoup.com/calculators/discretemathematics/combinations.php?n=250&r=5&action=solve),
we have too many, an estimate of around 7817031300 different options.

![State of Data Engineering
2024](https://cdn-kfpfp.nitrocdn.com/LPJTcQItTfFXIvmLmluGDpHNkMGCVcPt/assets/images/optimized/rev-2532649/lakefs.io/wp-content/uploads/2024/05/SoDE24-state-of-data-engineering-2048x1075.png)

As a curious thought exercise, let's guess how many of these tools are
UI based or can be categorized as a SQL derivative. I'd bet a high
percentage. And I think this contributes to the notion that you can get
decently far in your data engineering journey without having to dig
toward something deeper.

I'm willing to call a spade a spade. The rise of the cloud has greatly
aided and abetted data engineering to shift left and allow for data
engineers like myself to even exist. Since the inception of Redshift,
the rise of dbt, and the plethora of new data technologies born out of
the chaos that is the [modern data
stack](https://www.getdbt.com/blog/future-of-the-modern-data-stack),
custom written Java UDFs are no longer a top five choice for data
transformations, and some of the highly technical software engineering
principles assumed in the past are no longer necessary. I've often
wondered what the life looks like of a data engineer at a 2021 start-up
that purely manages their data infrastructure in the cloud. I'm assuming
their job is grueling and I would be a fool not to bet they spend more
than their fair share of time doing all the fun tasks of data
engineering - including explaining the origination of specific data
values to their peers for the 8th time that month - but I'm also
inclined to believe that they may be data person #1, #2, or #3, and they
need help managing their data infrastructure because they can't take a
vacation, sit in meetings, or get anything done otherwise. My hypothesis
is that the rise of the modern data stack contributes to a data climate
that quite frankly, allows for data experts to develop - where the
insights and revelations become priority number one. It's why we see so
many self-taught data people transition from data analyst to analytics
engineer/data engineer, because they have learned the hard skill of
critically thinking about the data. You can lean on SQL as your backbone
and still address the needs of your organization outsourcing the
grueling hours on infrastructure. If this new paradigm means I can
enable myself to do all the work today without having to take a detour
to master Terraform, or try (and probably fail) to configure a
Kubernetes cluster myself, then I'm pro this. And if that means that my
official title should pivot toward glorified data analyst because I
don't have to or want to deal with some obscure, crappy infrastructure
error that comes with the complicated data life, then sign me up.

This next generation of data people will even look staunchly different
than the ones today. With the rise of
[Copilot](https://www.microsoft.com/en-us/microsoft-copilot/?ef_id=_k_Cj0KCQjwpNuyBhCuARIsANJqL9NQpugy8zp8ifcYsPQcPb9IXo26P_s-F5hJU3Nz9punlpsiE83pzvMaAhFnEALw_wcB_k_&OCID=AIDcmm1o1fzy5i_SEM__k_Cj0KCQjwpNuyBhCuARIsANJqL9NQpugy8zp8ifcYsPQcPb9IXo26P_s-F5hJU3Nz9punlpsiE83pzvMaAhFnEALw_wcB_k_&gad_source=1&gclid=Cj0KCQjwpNuyBhCuARIsANJqL9NQpugy8zp8ifcYsPQcPb9IXo26P_s-F5hJU3Nz9punlpsiE83pzvMaAhFnEALw_wcB),
anything is possible. I can see a world where I start using Python every
day. But I also see a world where I'm able to lean even more into my SQL
comfort zone. With the rise of [table
formats](https://www.youtube.com/watch?v=SQ3smAu4KWQ),
[data
lakehouses](https://www.starburst.io/blog/icehouse-trino-iceberg-lakehouse/),
and [query engines](https://trino.io/) (_quick plug_), I
dream of an outcome where I can develop SQL based systems that I can
enable my data consumers and end-users to service themselves. And while
I do understand some are against the pride of utilizing low-code or no
code tooling (and in some instances - the cost of it), I also think that
it's a tradeoff that enables data people to be problem solvers, no
matter their skill level. I like data engineering because I love diving
into the mess and finding an answer, and I like that sometimes the data
helps me make better decisions. And I like that there are avenues today
that make it easier for me than ever to do so. But I also can't deny the
history of technologies developed like Hive, Datastage, Informatica,
Nifi, Trino & more which have for years been trying to bring SQL to the
people, which makes me think that I can't be the only one [solving data
problems](https://medium.com/@byanalytixlabs/data-engineer-skills-101-everything-you-need-to-know-for-a-career-in-data-engineering-2381094ad405#:~:text=Maintain%20Data%20Storage%20Solutions,maintain%20robust%20data%20storage%20solutions)
via SQL.
