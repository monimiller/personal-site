---
title: Using wave for nf-core/modules
subtitle: 'Migratation from Biocontainers to Seqera Containers'
headerImage: TODO
headerImageAlt: TODO
authors:
    - 'ewels'
    - 'edmundmiller'
label:
    - 'modules'
    - 'wave'
embedHeaderImage: false
---

<!-- Thinking this might need to be a series... -->
<!-- Containers background -->
<!-- nf-core Containers automation -->
<!-- Fun with nf-core containers? -->
<!-- nf-core/tools containers command -->

# Background

## Biocontainers

nf-core/modules has been making use of biocontainers, a service which accomplishes a Herculean effort of packaging up every release on Bioconda and creates both a Docker and Singularity image, and then hosts them publicly.

It's a part of the Galaxy project, and we've been extremely grateful for their generosity in hosting all of our mulled containers.

### Mulled Containers

What's a mulled container you say? It's a system that biocontainers has setup that packages up multiple pieces of software. Like a mulled wine for my fellow Americans.

If you can imagine most bioinformatics processes will probably need more than one tool. Even if it's just piping an output to `samtools` or using `pigz`.

#### Workflow

The way to get a mulled container built is a bit of an insider secret. Luke Pembleton, Nextflow Ambassador, has [a great blog post summarizing the the dark art, of Finding the right mulled biocontainer](https://lpembleton.rbind.io/posts/mulled-biocontainers/).

<!-- Galaxy docs https://docs.galaxyproject.org/en/master/admin/container_resolvers.html -->

To request an image you pull up [this csv in a GitHub repo](https://github.com/BioContainers/multi-package-containers/blob/master/combinations/hash.tsv), scroll all the way to the bottom, and add a line with your requested conda packages.

Back in the day, you had to hunt through the GitHub action log to find the name of your container which is something like `quay.io/biocontainers/mulled-v2-1fa26d1ce03c295fe2fdcf85831a92fbcbd7e8c2:ded3841da0194af2701c780e9b3d653a85d27489-0`. However, [Moriz E. Beber](https://github.com/Midnighter) has created [a webpage to generate the name of the mulled container](https://midnighter.github.io/mulled) and it gently guides you through the process of finding the name of your container and how to update a container if you want to bump the software versions.

Then after the image get's built, the developer has to go to nf-core/modules and create a PR with the updated containers and bump the versions in the environment.yml.

#### Issues with Mulled containers

-   Manual process to update software versions
-   Manual process to update container declarations
-   Some pieces of software can't or haven't been added to Bioconda and require a Dockerfile
<!-- TODO Maybe mention we've gotten push back about the cost when updating samtools versions? -->

## Enter Wave

### Seqera Containers

[Read the Seqera Containers annoucement blog post](https://seqera.io/news/seqera-containers-to-enable-bioinformatics-reproducibility-and-innovation/)

Highlights:

-   Docker or Singularity
-   Multi-architecture
-   Web UI to request containers(and avoid duplicating containers)
-   Conda or Dockerfile
<!-- - 5 year guarentee? -->

# What's Happening

<!-- TODO Add Indiana Jones pytest-workflow to nf-test meme-->
<!-- TODO Add Indiana Jones pytest-workflow to nf-test meme with Seqera containers overlayed?-->

# What do we get?

Democratization of the power to contribute(infrastructure), which enables to community to be the PR they want to see in the repo.

<!-- TODO Need to rewrite some of this to get the right structure -->
<!-- Perspectives to get across -->
<!-- End Users -->
<!-- One off contributors -->
<!-- Pipeline and Modules Maintainers -->

## Automation

### Renovate

[Renovate](https://docs.renovatebot.com/) is a tool for automated dependency updates. Multi-platform and multi-language. It's become pretty popular in the devops space. It's like dependabot, but supports more languages and frameworks, and more importantly for nf-core, supports custom dependacies.

#### List of Things to Automate

Things we've got hooked up to Renovate:

-   Python packages in tools
-   npm packages for the Website
-   npm packages for the `setup-nextflow` action
-   Conda package versions in modules
-   Dockerfile image versions
-   GitHub Actions

Things coming down the pipeline:

-   Nextflow plugins in the template
-   nf-test plugins in the template
-   nf-test plugins in modules

## Which eases contributor workflow

### Simplified Modules

<!-- FIXME Idk if there's a syntax to combine Nextflow highlighting and diff-->

```diff nextflow title="bowtie2/align/main.nf"
process BOWTIE2_ALIGN {
    tag "$meta.id"
    label 'process_high'

    conda "${moduleDir}/environment.yml"
-    container "${ workflow.containerEngine == 'singularity' && !task.ext.singularity_pull_docker_container ?
-        'https://depot.galaxyproject.org/singularity/mulled-v2-ac74a7f02cebcfcc07d8e8d1d750af9c83b4d45a:f70b31a2db15c023d641c32f433fb02cd04df5a6-0' :
-        'biocontainers/mulled-v2-ac74a7f02cebcfcc07d8e8d1d750af9c83b4d45a:f70b31a2db15c023d641c32f433fb02cd04df5a6-0' }"

    input:
    tuple val(meta) , path(reads)
    // ...
}
```

By using Wave properly as Paolo intended, we no longer have to specify both the conda and container directive(And more importantly get rid of the scary Elvis operator of singularity or docker). We generate the container repo url on the fly ™️ in line with the original vision. That means you can easily swap to your container registry of choice and the wave service will push the containers up for you.

<!-- NOTE hopeful thinking -->

`nf-core download` has also gotten a refactor through the process and great simplifying the code necessary to download the containers.

We were also able to remove the dependency on the biocontainers API, which had some uptime issues that created problems around testing nf-core/tools, and around new module creation and finding the desired containers for a bioconda package.

Summary for the contributor:

1. Remove container directive use on modules that are just 3 conda packages in a Docker image 🧥
2. Ease of hosting your own container registry
3. Simplify `nf-core download` into `nf-core containers`
4. Remove need to wrangle biocontainers API and API nf-core can't contribute to.

### nf-core/modules Contribution Flow with Renovate

Say a contributor wants to add a piece of software to a module

<!-- TODO make this into an actual graph -->

```mermaid
1. Add line to `environment.yml`
3. GitHub actions detects a change to the environment.yml of a module (automated)
4. GitHub actions runs wave-cli on the updated environment.yml (automated)
5. Seqera Containers builds a new container for Docker, Singularity(and multiple-architectures) (automated)
6. GitHub actions runs to nf-test and tries to bump the software versions(automated)
7. Contributor makes any fixes and gets a review
```

## Which eases maintainer burden

<!-- Guess these two can be combined as well -->

#### nf-core/modules automated version bumping

<!-- TODO make this into an actual graph -->

```mermaid
1. Renovate detects an updated conda version(automated)
2. Renovate make a PR to bumps the Conda depedancies(automated)
3. GitHub actions detects a change to the environment.yml of a module (automated)
4. GitHub actions runs wave-cli on the updated environment.yml (automated)
5. Seqera Containers builds a new container for Docker, Singularity(and multiple-architectures) (automated)
6. GitHub actions runs to nf-test and tries to bump the software versions(automated)
7. If the tests pass, the PR gets merged automatically, requiring no manual human intevention, and zero noise(automated)
7b. For major version releases of tools, and renovate will request an approving review from the module maintainer.

8. If the tests fail, Renovate will request a review from the maintainer of that module using Codeowners(automated)
9. The module maintainer will fix the failing tests(Human)
10. The module maintainer will request a review(Human)
11. PR gets merged
```

Allowing maintainers to focus on more important tasks such a fixing bugs and creating new features instead of keeping depedancies up to date.

# Fun Features

<!-- Free wins? -->

## Update container environments on the fly

```nextflow
process {
    withName: 'STAR_ALIGN' {
        conda "bioconda::star=2.6.1d bioconda::samtools=1.16.1 conda-forge::gawk=5.1.0"
    }
}
```

```bash
nextflow run nf-core/rnaseq -with-wave
```

Boom a aws-igenomes compatible container for the process. You may need to patch the modules if you're changing the version too much.

## Pipeline module patches

In the above example pipeline maintainers will be able to more easily update crucial versions inside the module, or lock them down and not be dependent on the upstream nf-core/modules if versions need to stay out of sync. It's just a patch to the `environment.yml`.

<!-- TODO Come up with a practical example of why this might happen-->