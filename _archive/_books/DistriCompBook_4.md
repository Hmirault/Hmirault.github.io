---
layout: book-review
title: "Distributed Computing: A Locality-Sensitive Approach"
author: "David Peleg"
cover: assets/img/book_covers/DistributedComputingALocalitySensitiveApproach.jpg
categories: distributed-computing theory locality
tags: graph-algorithms communication-complexity network-theory
released: 2000
stars: 4
status: Reading
---

This book focuses on a crucial aspect of distributed algorithms: **locality**. It explores algorithms that operate with only limited knowledge of the network topology, typically within a small radius around a given node.

It provides a deep dive into the communication complexity of distributed problems on graphs, and it is a key text for understanding the trade-offs between the amount of information available to a process and its ability to contribute to a global solution.

** _Abstract :_ **
Abstract
1.1 What is distributed computing?
In order to define a distributed system, one safe approach is to consider first what a centralized system is. We usually think of such a system as composed of a single controlling unit. Thus in a centralized system, at most one autonomous activity is carried on at any single moment. In contrast, the main characteristic of a distributed system is that there may be many autonomous processors active in the system at any moment. These processors may need to communicate with each other in order to coordinate their actions and achieve a reasonable level of cooperation, but they are nonetheless capable of operating by themselves.
Another significant characteristic of a distributed system is that it is rather nonuniform. For instance, the processors participating in it may be (and often are) physically distributed in different geographic locations. They are often rather different in size and power, architecture, organizational membership and so on.
Consequently, there exists a wide spectrum of types of distributed systems, ranging from parallel computing systems to wide-area communication networks. One of the main parameters of this spectrum is the coupling level of different processors in a distributed system, which may vary significantly from one application to another. In a tightly coupled system (e.g., a parallel machine), the processors typically work in tight synchrony, share memory to a large extent and have very fast and reliable communication mechanisms between them. In contrast, in a loosely coupled distributed system (e.g., a wide-area communication network), the processors are more independent, communication is less frequent and less synchronous and cooperation is more limited.
The type and purpose of cooperation in a distributed system may also vary greatly. Certain systems (again best exemplified by parallel machines) are designed with the idea of exploiting the possibility of processor cooperation in order to enable us to handle large, complex problems. Thus in such a system, a typical goal would be to harness the processors together for the purpose of solving a problem in collaboration.
However, more often than not, a distributed system is based on much more “individual” goals. Such a system has to serve individual users, who are mostly interested in their own private activities. These activities may sometimes involve communication with some other specific users or servers in the system. For instance, a user may wish to access a data bank located at a different site.
