---
title: Creating Your Own dbt Tests for the Problematic Data Engineer
date: '2022-02-25'
tags: ['dbt', 'data', 'testing']
draft: false
summary: Sharing my experience with singular and generic testing I created for the dbt Jaffle Shop tutorial.
images: []
---

Hi, y'all!

As pledged last week to the world wide web, I have created some custom tests for the dbt Jaffle Shop tutorial available [here](https://docs.getdbt.com/tutorial/setting-up). For my next internet promise, I will talk about the pitfalls and sticking points I fell into while following the tutorial documentation in another article, so stay tuned for that upcoming post. For now, let's expand upon the available testing capabilities provided by dbt, specifically the benefits of creating custom tests for a set of dbt models.

**Two Types of Custom Testing:**

- Singular Test - _tests created for a specific purpose for a specific model. One example would be a written SQL query meant to return any data that does not meet the validation criteria, such as a negative number of orders._
- Generic Test - _parameterized code that can be utilized for multiple models and multiple columns. The best example of generic tests are the dbt predefined tests: `unique`, `not_null`, `accepted_values`, `relationships` discussed in my previous [post](./dbt-Testing.md)._

The link [here](https://docs.getdbt.com/docs/building-a-dbt-project/tests) goes into even more detail of the differences between the two. I used my singular tests specifically written for the customer model in the tutorial, while the generic test I wrote was utilized for testing all three of the models. If you haven't done the tutorial but want to keep reading, a link to my gitlab code is [here](https://github.com/Monica39/dbt_tutorial) and the database metadata is [here](https://www.getdbt.com/getting-started-tutorial/#!/model/model.jaffle_shop.stg_orders#details). The two folders to highlight in the github repo are models (where the sql code lives) and tests (where the tests live).

As I started coding, writing the singular tests seemed to come more naturally to me. In the past, my data validation has been specifically created for each table's use case, instead of leaning into the reusability that is provided by generic tests. However, after writing a very basic generic test I was able to utilize in three different models, I am starting to understand the power provided by the reusability of these tests. I hope to shift my brain so that I can utilize these testing capabilities more as I strive to be a better _test-driven-developer_ I also want to comment that setting up the generic test was easier than I first expected with the most effort required was to create a new directory in the testing folder `tests/generic/test_is_positive.sql`. More information on setting up your dbt project to handle generic testing can be found [here](https://docs.getdbt.com/docs/guides/writing-custom-generic-tests).

### Singular Testing Examples for the Jaffle Shop Tutorial

1. Since the customer table can have both potential and active customers, this test validates that no order date is recorded for a customer in the customer table when the number_of_orders is equal to zero. This is a prime example of a singular test since is serves a specific purpose of validating the data in the customer table is accurately reflecting a customer's activity.

```sql
select
customer_id,
number_of_orders,
first_order_date,
most_recent_order_date
from {{ ref('customers' )}}
where number_of_orders = 0
and customer_id in
    (select customer_id from {{ ref('customers' )}}
    where first_order_date is not NULL or most_recent_order_date is not NULL)
```

2. The second singular test created was another date validation query to ensure that customer activity was properly logged in the source data by checking the most recent order date occurs either on or after the first order date. Again, this singular test could not by new models I create, but it does serve a specific purpose for this one.

```sql
select
customer_id,
first_order_date
from {{ ref('customers' )}}
where first_order_date > most_recent_order_date
```

### Generic Testing Examples for the Jaffle Shop Tutorial

1. Using the is_even [example](https://docs.getdbt.com/docs/guides/writing-custom-generic-tests), I created a **very** basic generic test to validate that all the customer_id and order_id in each model output a positive value.

`dbt_tutorial/tests/generic/test_is_positive.sql`

```sql
{% test is_positive(model, column_name) %}

with validation as (

    select
        {{ column_name }} as positive_field

    from {{ model }}

),

validation_errors as (

    select positive_field
    from validation
    -- if this is true, then even_field is actually negative!
    where (positive_field < 0)

)

select *
from validation_errors

{% endtest %}
```

Utilizing this generic test required adding the intended model and column name test to my `dbt_tutorial/models/schema.yml`. While I used this for all three models, I have just shown the snip of the is_positive test being applied to the customers model and the customer_id field.

```yaml
version: 2

models:
  - name: customers
    columns:
      - name: customer_id
        tests:
          - is_positive
```

## Introducing....Spotlight of the Week!

As I continue this writing journey, I hope to amplify one of my favorite things: supporting other women in the tech space. As we know, _Empowered Women Empower Women_. So I am trying to do my part by highlighting women I look up to, organizations I support, and general knowledge that I find interesting on this topic. So, starting with week one, I wanted to share two articles written by [Jess Iandorio](https://jessiandiorio.medium.com/) that have already given me personally some action items to take into the office, and some advice I discussed with other women coworkers this week.

1. [The Real Reason Women Aren't Getting Ahead in Tech: "She's Not Strategic"](https://jessiandiorio.medium.com/the-real-reason-women-arent-getting-ahead-in-tech-she-s-not-strategic-5ba98ad91f77?)
2. [She's Not Strategic, the sequel: Women are over-mentored and under-sponsored](https://jessiandiorio.medium.com/shes-not-strategic-the-sequel-women-are-over-mentored-and-under-sponsored-8323ea6fb16e)

The second one is a sequel to the first article and was co-written by Jenn VandeZande, and both are fabulous. Obviously read them both, and some things to keep in mind while you do are:

- Am I too much of an executor that this is what is defining my career?
- Do I communicate my deep understanding of the strategy when I get the chance?
- Who are my mentors and who are my sponsors?
- How do I spend time cultivating the relationship with my current sponsors, and creating new relationships with potential sponsors?

Thanks for reading! Please shoot me an email with questions, comments, or information I didn't know about yet!
\
-Monica
