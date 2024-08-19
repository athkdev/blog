---
title: Multithreading vs Multiprocessing
date: 2024-06-19
tags:
---

#### What is multithreading?

Multithreading is a technique where a program can execute multiple threads or flows of execution concurrently or parallely. This is so done to increase CPU utilization and maximize efficiency.

**Think of an example:**
You are cooking in a kitchen and it's taking you a long time since you have to stir the sauce, boil some spaghetti, make meatballs, clean the dishes, put the pizza in the oven - all by yourself.

Now you call 5 of your friends and each friend decides to help you out by allocating themselves with a task. One friend is now stirring the sauce, one friend cleans the dishes, one friend puts the pizza in the oven - and now your efficiency has been maxed out to boil some pasta and make meatballs. This way the dish was made faster as well.

#### What is multiprocessing?

Well, one can say multiprocessing is a super set of multithreading - because very similar to multithreading you are employing multiple processors (instead of multiple threads) to work simultaneously to achieve a task. Now each of these processors can also have their own threading mechanisms.

**Let's continue the previous kitchen example:** say now your pasta was tasted by a nearly school and now they want you to cook for their 20000 students on an occassion. Even with your friends, it would take a long time to prepare so much pasta. So you and your friends get an idea, and go to your dorm buildings. There you gather every single person in the building at the cafeteria and ask them to help you prepare all the dishes. Now, since everyone cannot work in a single kitchen, everyone cooks in their own dorm room kitchens.

Here the pasta is the task that is at hand, the students are the threads who are working in unison to get perfect pasta everytime, and the kitchens are the processors.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
