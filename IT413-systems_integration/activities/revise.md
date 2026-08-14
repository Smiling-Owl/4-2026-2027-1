# Systems integration: academic responses

## 1. Web integration, enterprise application integration, and business-to-business integration

Web integration refers to the connection of a website or web application with other applications, services, or data sources through web standards. These connections commonly use HTTP-based application programming interfaces (APIs) or web services. The purpose is to allow a web channel to access or expose functions that belong to back-end systems. An online store, for instance, may connect its website to separate inventory, payment, and delivery services. This type of interaction is consistent with the W3C Web Services Architecture, which describes web services as a means of supporting interoperable communication between machines over a network.

Enterprise application integration (EAI), by comparison, connects applications that operate within the same organization. An EAI project may link enterprise resource planning systems, customer relationship management systems, databases, legacy applications, supply-chain software, and cloud services. These systems exchange data through APIs, adapters, messaging technologies, middleware, or an integration platform. EAI therefore addresses the problem of information silos by allowing applications developed for different purposes to participate in shared internal operations. IBM describes this approach as the coordination of otherwise separate enterprise systems.

Business-to-business (B2B) integration extends integration beyond the boundaries of one organization. It connects the systems and processes of independent organizations, including suppliers, customers, banks, and logistics providers. A B2B solution may automate the exchange of purchase orders, invoices, payment instructions, and shipping notices through electronic data interchange (EDI), APIs, or standards such as ebXML. IBM and the OASIS ebXML Business Process Specification describe the use of technology to coordinate transactions and processes among trading partners.

The three categories differ mainly in scope. Web integration focuses on a website or web application and the services that support it. Its project drivers include the delivery of online services, customer self-service, the reuse of existing back-end functions, and access through browsers or mobile clients. Its technical problems often involve API compatibility, versioning, authentication, Internet security, network latency, service availability, and consistency in the user experience.

EAI has a broader internal scope because it connects applications and data across departments in one enterprise. Organizations adopt it to reduce duplicate data entry, automate internal work, maintain consistent information, and continue using valuable functions in legacy systems. Its implementation is difficult when applications use incompatible formats or protocols. Legacy restrictions, complicated data mappings, system dependencies, unclear ownership, monitoring requirements, migration costs, and middleware bottlenecks may also affect the project.

B2B integration covers an interorganizational network rather than a single enterprise. Its usual drivers are faster order and payment cycles, lower transaction costs, fewer manual errors, improved supply-chain visibility, and compliance with the requirements of major partners. The participating organizations must agree on document meanings, communication protocols, workflows, and service levels. They must also manage partner onboarding, different EDI formats, identity, digital certificates, privacy, legal obligations, reliable delivery, and changes made by independently governed organizations.

These categories are distinct but not mutually exclusive. A B2B transaction may enter through a web API and then pass through an EAI platform before reaching an internal system. Web integration is primarily concerned with the web channel, EAI with applications inside one enterprise, and B2B integration with transactions between separate organizations.

## 2. Real-time integration and asynchronous integration

Real-time integration processes or transfers information with very little delay after a request or event occurs. A common implementation uses synchronous request and response. System A sends an API request to System B, System B validates and processes it, and System A waits for the response before continuing. Real-time integration can also use event streams that applications process continuously. This approach is appropriate when a process requires current information or an immediate result, such as checking inventory before accepting an order, authorizing a payment, or displaying a live shipment location. Because the systems interact at runtime, the process can be affected by network latency, service outages, and sudden increases in traffic.

Asynchronous integration separates the act of sending a message from the later processing of that message. System A sends a command or event to a queue, topic, or message broker and then continues without waiting for System B to complete the work. The broker stores the message until System B is available to retrieve and process it. If System A needs the result, System B may publish another event, use a callback, or make the status available for later checking.

This arrangement allows the sending and receiving systems to operate at different times and scale independently. A queue can also absorb a temporary increase in traffic rather than requiring the receiving system to process every request immediately. Asynchronous integration is therefore useful for order fulfillment, email delivery, file processing, audit events, and other long-running tasks. However, the design must account for retries, duplicated messages, message ordering, correlation, monitoring, dead-letter handling, and the fact that completion may be delayed. AWS and Microsoft discuss these communication models in their respective architecture guidance.

The terms real-time and asynchronous describe different properties. Real-time refers to the speed at which information becomes available or receives a response, whereas asynchronous refers to whether the sender waits for processing to finish. For this reason, an asynchronous event system may still deliver and process events in near real time.

## 3. The five levels of integration

The five levels of integration identify the part of a system at which integration takes place. They range from combining information in a shared interface to coordinating an entire business process. A solution may use more than one level, and the levels do not have to be adopted in a fixed sequence.

### Presentation integration

Presentation integration combines information or interface elements from separate applications in a single view. A portal may display customer records from a customer relationship management system, unpaid invoices from an accounting application, and shipment information from a logistics system. Although the user sees a unified interface, the underlying applications may remain independent. Presentation integration may also rely on screen scraping when a legacy application does not provide an appropriate API.

### Data integration

Data integration connects systems through their data. It includes the extraction, transformation, consolidation, replication, and synchronization of information among databases, files, data warehouses, and other repositories. For example, one system may copy an updated customer address to another database, while a reporting system may combine records from several sources. The objective is to make equivalent information consistent and usable across systems. Common problems include delayed synchronization, incompatible formats, duplicated records, and poor data quality.

### Application integration

Application integration connects systems through their functions. One application exposes an operation through an API or another defined interface, and a second application invokes that operation or exchanges operational data with it. An online store may, for example, call an inventory application's reservation function when a customer places an order. Unlike data integration, which focuses on stored information, application integration allows applications to cooperate directly during an operation. IBM discusses the use of APIs, messaging, events, and workflows for this purpose.

### Service integration

Service integration presents application capabilities as reusable services with defined contracts. Multiple systems can call these services through a common interface without needing to understand their internal implementation. A customer-status service, for example, may combine several application calls behind one stable contract. Service integration therefore places greater emphasis than application integration on reuse, standard access, and loose coupling.

### Process integration

Process integration coordinates a complete business workflow across applications, services, departments, and, in some cases, partner organizations. A process model defines the sequence of activities, applies rules, handles decisions and exceptions, and assigns human tasks while calling the required services. Opening a bank account may involve identity verification, risk checking, account creation, approval, and customer notification. Process integration has the broadest scope among the five levels because the business objective, rather than an individual application, determines how the participating systems interact.

## 4. Batch, point-to-point, broker-based, and business-process architectures

### Batch architecture

Batch integration collects records over a period of time or until a specified amount of data has accumulated. It then transfers and processes those records as one group. Implementations commonly use scheduled background jobs, bulk files, staging storage, and extract, transform, load (ETL) or extract, load, transform (ELT) pipelines. Batch processing can handle large data volumes efficiently and may run during periods of low system use. It is also relatively predictable because jobs begin at planned times or after a defined volume threshold.

The main limitation is that the destination does not receive each change immediately. Its data remains unchanged until the next batch runs. Administrators must also manage failed jobs, duplicate runs, partial processing, and reconciliation between source and destination. Microsoft explains that batch integrations commonly use scheduled background jobs and staging locations for large datasets. IBM likewise defines batch data integration as the collection and movement of data as a group after a time or quantity condition has been satisfied.

### Point-to-point architecture

Point-to-point integration establishes a direct connection between two systems. Each connection contains the protocol, data mapping, security controls, and processing rules needed by those endpoints. When one system requires information or a function from another, it communicates with that system directly instead of using a shared integration layer.

This architecture is practical when a project involves only a few stable and uncomplicated connections. It can be developed quickly, and each interface can be designed for the needs of a particular pair of systems. The same directness creates tight coupling, however, because a change in one endpoint may require a corresponding change in the other. Maintenance becomes more difficult as additional systems are connected and the number of possible pairwise interfaces increases. Separate interfaces may also repeat similar transformation, security, logging, and error-handling logic.

### Broker-based architecture

Broker-based integration places an intermediary between the participating systems. The intermediary may be a message broker, an integration broker, or an enterprise service bus. Applications send messages to the broker rather than maintaining a direct connection with every possible recipient. Depending on its design, the broker can queue, route, transform, validate, enrich, and monitor messages. It may also support point-to-point queues and publish-subscribe topics.

The broker reduces direct dependencies among applications and centralizes functions that would otherwise be repeated in separate interfaces. Asynchronous messaging allows producers and consumers to operate at different times, while publish-subscribe communication makes it easier to add or remove consumers. The organization must nevertheless operate, scale, secure, and monitor the broker. Poor design may turn it into a bottleneck or a single point of failure. IBM describes the broker as a message backbone that stores messages temporarily and separates producers from consumers.

### Business-process architecture

Business-process integration organizes system interactions around a complete business outcome rather than an individual data transfer. A workflow or process engine coordinates system services and, when necessary, human activities. It applies business rules, records the state of the process, manages decisions and exceptions, and determines which activity should occur next.

This architecture is appropriate for multi-step workflows such as order processing, claims handling, and employee onboarding. It can coordinate several systems, decisions, approvals, deadlines, exceptions, compensation activities, and audit records within one process. Its main advantage is that technical integration follows the structure of the business procedure. Its implementation requires clear process ownership, accurate modeling, governance, and change management. The process engine may also become a critical operational dependency. IBM defines a business process as a set of linked software and human activities that accomplish a business goal, with the engine selecting and starting the required services.

In comparison, batch architecture is most appropriate for scheduled and non-urgent transfers of large datasets, although its information is not immediately current. Point-to-point architecture is suitable for a small number of stable connections, but its complexity increases as more systems are added. Broker-based architecture supports loosely coupled communication among many applications, though it introduces shared infrastructure that requires careful operation. Business-process architecture is designed for workflows that span systems and people, but it depends on sound process modeling and governance.
