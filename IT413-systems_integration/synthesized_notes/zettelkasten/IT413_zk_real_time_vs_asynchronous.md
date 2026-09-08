# Real-Time vs. Asynchronous Integration

**Tags:** #systems_integration #patterns #messaging #async

## Note
- **Real-time integration** processes or transfers information with very little delay after a request or event. It commonly uses synchronous request-response (System A sends a request and waits for the response), but can also use event streams processed continuously. It is appropriate when a process requires current information or an immediate result.
- **Asynchronous integration** separates sending a message from its later processing. System A sends a command or event to a queue, topic, or message broker and continues without waiting; the broker stores the message until System B is available to retrieve and process it.

Real-time and asynchronous describe different properties: real-time refers to the speed at which information becomes available or receives a response, whereas asynchronous refers to whether the sender waits for processing to finish. An asynchronous event system may still deliver and process events in near real time.

## Links
- [[zk_integration_categories]]
- [[zk_integration_architectures]]
