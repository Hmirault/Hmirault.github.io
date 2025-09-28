---
layout: page
title: Distributed Simulator
description: A small simulator to play with distributed algorithms and adversarial behaviors.
img: assets/img/consensus.png
importance: 1
category: work
related_publications: false
---

<div class="row">
    <div class="col-sm-12">
        <div class="header-bar">
            <h1>Distributed Algorithm Simulator</h1>
            <p><i>A sandbox for studying Consensus and distributed systems.</I></p>
        </div>
    </div>
</div>

<br>

<p><span class="badge bg-warning text-dark">Work in Progress</span></p>

## 1- Project Goal

This project is a simulator developed in Python, designed to provide a controlled environment for experimenting and measuring my distributed algorithms. The main goal is to _facilitate reasoning_ about their behaviors, especially when facing an _adversary_ capable of interfering with the system (e.g., by delaying messages or crashing some processus).

Although the framework is designed to be generic, its primary focus is on the study of the _Consensus_ problem.

---

## 2- Key Features

The simulator is built on a modular architecture that allows for easy combination of different components:

- **Computational Models** : The simulation engine (`engines`) can try to simulate either a _synchronous_ (round-based communication, each processor may wait for the end of the round before continue the procedure) or an _asynchronous_ (no assumptions on communication delays) model.

- **Network Topologies** : It is possible to define different and arbitrary networks structure. Currently implemented topologies (`topologies`) include **clique netowrk** (a fully connected network) and **ring netowrk**.

- **Implemented Algorithms** : The `algorithms` directory contains the implementations of the algorithms. For now, it includes classics like **leader election** and **token ring**, which serve as a foundation for more complex algorithms.

- **Visualization** : The simulator offers several ways to visualize an execution (`visualizers`), from a simple **terminal** display to a graphical visualization of the network state using the **NetworkX** library.

---

## 3- Project Architecture

The project's directory structure was designed to clearly separate concerns:

- `core/`: Contains the fundamental building blocks of the simulation: the definition of a process/node (`joueur.py`) and the structure of exchanged messages (`message.py`).

- `engines/`: The core of the simulation. It handles the logic for time progression and message delivery according to the chosen computational model.

- `topologies/`: Defines the communication graphs between the nodes in the system.

- `algorithms/`: Where the logic of the distributed algorithms is implemented. New algorithms can be easily added by following a simple interface.

- `visualizers/`: Handles the display of the system's state at any given time.

---

## 4- Code

_Repository to come one day_
