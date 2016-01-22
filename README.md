Vert.x EventBus and TCP Bridge for Node.js Benchmark
====================================================

This is a simple benchmark what overhead gives use of Vert.x EventBus as a medium for answering the request.


Start Vert.x Event Bus with TCP Bridge
--------------------------------------

    export JAVA_OPTS="-Xms2m -Xmx16m"
    ./node_modules/.bin/vertx run vertx-tcp-eventbus.js
    
Changing the memory constraints is optional step.

Start Express REST Server
-------------------------

    node server.js

Start Event Process
-------------------

    node processor.js

Verify that endpoints respond correctly
---------------------------------------

    curl http://localhost:3000/direct
    curl http://localhost:3000/viabus

Simple benchmark
----------------

Install Apache Benchmark and then run:

    ab -n 10000 -c 10 http://localhost:3000/direct

    ab -n 10000 -c 10 http://localhost:3000/viabus


Results: Direct Invocation
--------------------------

Time taken for tests:   10.346 seconds
Complete requests:      10000
Failed requests:        0
Total transferred:      2180000 bytes
HTML transferred:       160000 bytes
Requests per second:    966.59 [#/sec] (mean)
Time per request:       10.346 [ms] (mean)
Time per request:       1.035 [ms] (mean, across all concurrent requests)
Transfer rate:          205.78 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    5   8.1      4     465
Processing:     2    5  12.4      5     469
Waiting:        2    5  12.4      4     469
Total:          3   10  14.8      9     475

Percentage of the requests served within a certain time (ms)
  50%      9
  66%     10
  75%     10
  80%     11
  90%     12
  95%     13
  98%     17
  99%     20
 100%    475 (longest request)

Results: Via Event Bus
----------------------

Time taken for tests:   14.570 seconds
Complete requests:      10000
Failed requests:        0
Total transferred:      2180000 bytes
HTML transferred:       160000 bytes
Requests per second:    686.33 [#/sec] (mean)
Time per request:       14.570 [ms] (mean)
Time per request:       1.457 [ms] (mean, across all concurrent requests)
Transfer rate:          146.11 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    3   4.2      3     286
Processing:     2   11  11.8      9     294
Waiting:        2   10  11.7      8     294
Total:          4   14  12.5     12     296

Percentage of the requests served within a certain time (ms)
  50%     12
  66%     13
  75%     14
  80%     15
  90%     18
  95%     34
  98%     45
  99%     53
 100%    296 (longest request)
 
License
-------

Apache License, Version 2.0	