---
title: Built In dbt Tests for the Problematic Data Engineer
description: Sharing some of the helpful built-in dbt generic tests I have implemented in my workflows.
pubDate: 2022-02-15
categories: ['dbt', 'data', 'testing']
draft: false
images: []
---

Hi, y'all!

I wanted to highlight the four built-in generic tests provided by dbt that actively make my development life easier. Written into each .yml file, these column specific tests allow for data validation to occur before the data analysis yields the wrong information.
\
\
**Four Types of Generic Testing:**

- unique
- not_null
- accepted_values
- relationships (referential integrity)

In my day-to-day use case, the most implemented of the generic dbt tests has been not_null, which as you guessed, validates that the specific column in question does not contain any null values. I have experienced lots of use cases with million+ rows that require additional validation such as running a null query after the table is loaded. This generic test eliminates the post-validation work that many of us currently fight.

Below, the example shows all four of the generic types of testing implemented within the .yml file. The dbt documentation for this code snip is [here](https://docs.getdbt.com/docs/building-a-dbt-project/tests).

```yml
version: 2
models:
  - name: orders
    columns:
      - name: order_id
        tests:
          - unique
          - not_null
      - name: status
        tests:
          - accepted_values:
              values: ['placed', 'shipped', 'completed', 'returned']
      - name: customer_id
        tests:
          - relationships:
              to: ref('customers')
              field: id
```

After selecting the columns in question and building the necessary tests, running the command `dbt test` will execute all of tests that are attached to models in the directory.

Personally, dbt has been my first **_official_** use case of proper test-driven development (instead of post-validation), and I have very much enjoyed the usability and scalability of these features. I am thrilled to have a data analysis tool that starts to catch up the data space to many other technical areas that already implement these practices with readily available tools. As I gain more experience with specifically test-driven development, I am starting to see firsthand the benefits of these programming principles. For information about writing your own custom tests, visit this [link](https://docs.getdbt.com/docs/guides/writing-custom-generic-tests) to view the dbt docs, and also visit my [next article](./writing-custom-dbt-tests) discussing my experience developing my own.

Thanks for reading! Please shoot me an email with questions, comments, or information I didn't know about yet!
\
-Monica
