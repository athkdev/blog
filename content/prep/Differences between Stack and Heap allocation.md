---
title: Differences between Stack and Heap allocation
date: 2024-06-19
tags:
---

# Stack and heap allocation

When executing a program, the compiler needs to allocate dedicated memory in the CPU memory for stuff like variables, arrays, lists, tuples, hashmaps, trees, and so on. But it does not allocate everything in the same memory - there are two types of memory, namely the **_stack_** and the **_heap_**.

### How does the compiler decide where to allocate memory from for a variable?

Well, there are several factors to it. If some memory is needed and it's **_fixed_** size, then it goes to the stack. If it's **_dynamic_** memory, like a linked list, tree or a hashmap - it is allocated in the heap.

This is due to the fact that stack memory is generally very small, so only objects that have fixed size are stored there. For eg. non-mutable strings, ints, floats, booleans, fixed sized arrays, tuples.

On the other hand, heap memory is huge and generally scalable, so all objects that may change their size dynamically during the execution of a program are stored to the heap. For eg. linked lists, trees, hashmaps, dynamic arrays.

#### Stack overflow and heap overlflow?

You would have noticed when you write a recursive function without base cases, you get a stack overflow error. This is because function calls are stored on the stack memory (LIFO) and all local variables for that functions are also stored there.

Similarly, you would get a heap overflow error if you write a `while (true)` loop and keep allocating memories of some size greater than 0 bytes using `malloc` or in newer languages the `new` keyword.

Though, you would have come across stack overflows way more than heap overflows - remember when I told you heap memories are way larger and scalable than stack memories ; )

### Allocation demo in Java

```java

class AllocateDemo {
    public static void main(String[] args) {
        int[] array = new int[10];        // would be allocated on the stack since fixed size

        int a = 10;                    // on the stack
        boolean flag = true;           // on the stack

        Map<String, Integer> map = new HashMap<>();       // would be on the heap since it's size can change during execution

        List<Integer> linkedlist = new LinkedList<>();      // on the heap
        List<Integer> arraylist = new ArrayList<>();         // on the heap
    }
}



```

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
