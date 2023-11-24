Reliable, scalable and Maintainable Applications

![Alt text](image.png)

- store data so that they we can find it later or can be found by any other application (database)
- Remember the result of an expensive operation to speed up the process (cache)
- Allow user to search data by keyword to spead up the reads(search indexes)
- Send a message to another process, to be handlled asynchrounously(stream processing)
- Periodicallu crunch a large amount of accumulasted data(batch processing)

Thinking about of the Data systems:--

Althoug a database and a message Queue have some superficial similarity that they both store data for some time--- they have different access patterns which means different performance characteristics so different implementations

A. Message Queue : - Redis  B. Database like durability (Apache Kafka). Different layer of tools to do different work or mission and they are stiched by the Application code.
Cache : - memcache , Search sercer : Elastic Search 

Reliable : The system should continue to work correctly (performing the correct function at
the desired level of performance) even in the face of adversity (hardware or soft‐
ware faults, and even human error)

Scalibility : As the system grows (in data volume, traffic volume, or complexity), there should
be reasonable ways of dealing with that growth.

Maintainability: Over time, many different people will work on the system (engineering and oper‐
ations, both maintaining current behavior and adapting the system to new use
cases), and they should all be able to work on it productively

Reliability :-- 
1. The application perform the function that are expected
2. It can tolerate the user making mistakes or using the software in unexpected way
3. Its performance is good enough for the required use case, under the expected load and data volume
4. System prevents any unauthorized access and abuse

Hardware Faults: hard disk crash, RAM becomes faulty, 
What is RAID configuration in server?
RAID (redundant array of independent disks) is a way of storing the same data in different places on multiple hard disks or solid-state drives (SSDs) to protect data in the case of a drive failure. Redundancy of hardware components was sufficient for most applica‐tions, since it makes total failure of a single machine fairly rare. As long as you can restore a backup onto a new machine fairly quickly, the downtime in case of failure is not catastrophic in most applications.

Softwares Errors:- • A software bug that causes every instance of an application server to crash when
given a particular bad input. For example, consider the leap second on June 30, 2012, that caused many applications to hang simultaneously due to a bug in the Linux kernel
Human Errors : 

How Important Is Reliability?
Scalibility : Scalibility is the term we use to describe a system's ability to cope with increased load.
Describing Load :->Load can be described with a few numbers which we will call load parameters.
Example of Load : To make this idea more concrete, let’s consider Twitter as an example, using data
published in November 2012 [16]. Two of Twitter’s main operations are: Post tweet A user can publish a new message to their followers (4 6k requests/sec on average, over 12k requests/sec at peak). Home timeline A user can view tweets posted by the people they follow (300k requests/sec).

Describing Performance
Once you have described the load on your system, you can investigate what happens when the load increases. You can look at it in two ways:
• When you increase a load parameter and keep the system resources (CPU, memory, network bandwidth, etc.) unchanged, how is the performance of your system affected?
• When you increase a load parameter, how much do you need to increase the resources if you want to keep performance unchanged?
Throughput :- the number of records we can process per second.


