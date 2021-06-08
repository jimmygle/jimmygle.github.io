---
layout: post
title: "Data Archiving Specification"
subtitle: "An effort to build an intuitive, sustainable schema for data archival."
date: 2021-06-05 12:00:00 -0700
permalink: /homelab/data-archiving-spec.html
categories: [ homelab ]
tags: 'data storage'
---

This page serves as a home for my evolving approach to digital data archival.
It contains my intentions, thought process, resources, and the current schema.

## Why

* Data created over a lifetime begs to be archived, or risks extinction
* Housing data in the cloud has risks (service shutting down, privacy, etc.)
* Streaming services can't guarantee content availability in the future
* There's some emotional satisfaction to building a system that lasts


## Goals

1. Simple     - The simpler it is, the longer I'll use and trust it
2. Intuitive  - Should be useable without external knowledge a decade from now
3. Digestible - External organizing tools should be able to map it


## Backups

The 3-2-1 backup rule should be implemented as much as possible:
 
  > 3 - "Data doesn't exist if there's not at least three copies of it."  
  > 2 - "Two copies are local, but on different devices."  
  > 1 - "At least one copy off-site."
 
RAID is not a backup!


## Common Strategies

From my research, there seems to be a few schools of thought on how to
organize data.

> TODO: Add sources here.
 
### By data type

<dl class="row">
  <dt class="col-sm-2">Intent:</dt>
  <dd class="col-sm-10">
    <ul>
      <li><q>I want to browse all the books in my collection.</q></li>
      <li><q>I want to point media player to movies directory.</q></li>
    </ul>
  </dd>
  <dt class="col-sm-2">Pros:</dt>
  <dd class="col-sm-10">
    <ul>
      <li>Can be easily digested by external apps</li>
      <li>Less effort manually organizing by arbitrary subjects</li>
      <li>Less total directories/nesting</li>
    </ul>
  </dd>
  <dt class="col-sm-2">Cons:</dt>
  <dd class="col-sm-10">
    <ul>
      <li>Directory structure isn't intuitive when looking for specific subject</li>
      <li>Required external dependencies for organizing by topic</li>
    </ul>
  </dd>  
</dl>


### By subject
 
Intent: 

* "I want to browse all content about Linux."
* "I want to save a random article about Woodworking."

Pros:

* More intuitively navigate the file system when seeking data
* File types can easily be searched for versus searching by subject

Cons:

* Digestion into external apps more difficult
* Much more effort to initially organize

### By date

Intent:

* "I want to see all photos I took from 2015."
* "I want to see all movies released in 1945."

Pros:

* Good for timelines of personal data (photos, school, medical, etc)

Cons:

* Difficult to navigate


## Other Considerations

The level of effort to implement/maintain a system is important. There are 
at least these three aspects that need to be considered:

1. Initial - Effort to setup the system and do the initial sorting
2. Modification - Effort/complexity to add/edit data and update references
3. Navigation - Effort to navigate and find data


## Example Schema

> TODO: Move this to a gist and embed it so the history can be easily accessible.

    tank/                                                            (root zpool)
      archive/                              (low avail, high compression dataset)
        literature/
          cheatsheets/
          manuals/
          papers/
          quotes/        
        software/
          fonts/
          operatingsystems/
          games/
            windows/
      media/           (high avail, low compression dataset - unoriginal content)
        .dump/                                        (staging area for new data)
          audiobooks/        
          ebooks/
          movies/
          movies3d/
          music/
          tmp/
          tv/
        README.txt                 (info about why things are organized this way)
        audio/
          audiobooks/
          comedy/
          music/
        literature/
          ebooks/
        video/
          courses/
          comedy/
          movies/
            Movie Name, The (YYYY)/
              metadata/
          movies3d/
            Movie Name, The (YYYY)/
              metadata/
          tv/
            Show Name, The (YYYY)/
              Season 01/
                metadata/
          youtube/
            Channel Name/
              video.name-videoid.mkv
              video.name-videoid-thumb.mkv
            Steve Jobs/
              something_something_interview-e4dF2s.mkv
            Elon Musk/
        subject/                       (content by subject... needs more thought)
          README.txt            (info file outlining how subjects are structured)
          Psychology/
            README.txt     (notes/paths to related media in ebooks, movies, etc.)
            Depression/
              Depression Education Course/
                01 - introduction.mp4
              Depression Sucks Paper.pdf
          Steve Jobs/
            README.txt        (paths to related content (books, movies, yt, etc.)
      vault/             (high avail, low compression dataset - original content)
        .dump/
          photos/
          documents/
        README.txt
        dwelling/
          Travel Trailer/
        finance/
          taxes/
          retirement/
          budget.xls
        travel/
          201804 - California Road Trip/
            photos/
            itinerary.pdf
        health/
          fitness/
          therapy/
        hobby/
          hiking/
          homelab/
          woodworking/
          diving/
          gaming/
          coding/
          trading/
        work/
          resumes/
          hiring/
          201910 - Company/                               (job start date YYYYMM)
        volunteer/
          pcta/
        misc/
    

### Schema Notes

* Adding the ZFS datasets may be overkill. It makes the schema a bit less file 
  system agnostic. I may move it to a separate post at some point.
* Need to think about data security (do I want my taxes available to anyone with
  access to the vault?).


## Resources

* [/r/datacurator](reddit.com/r/datacurator)
* [gitmind.com/app/doc/7802011078](gitmind.com/app/doc/7802011078)

> TODO: Find an add more of the resources I've used.
