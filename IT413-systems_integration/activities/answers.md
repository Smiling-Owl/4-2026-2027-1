# Systems Integration Questions and Answers

## 1. Web Integration, Enterprise Application Integration, and Business-to-Business Integration

### A. Definitions

**Web Integration** connects a website or web application to other applications, services, or data sources through web standards, usually HTTP-based APIs or web services. It allows a web channel to use or expose functions from back-end systems. For example, an online store may connect its website to inventory, payment, and delivery services. The [W3C Web Services Architecture](https://www.w3.org/TR/ws-arch/) describes web services as a way to support interoperable machine-to-machine interaction over a network.

**Enterprise Application Integration (EAI)** connects separate applications within one organization so they can exchange information and support coordinated internal operations. It may link ERP, CRM, databases, legacy systems, supply-chain applications, and cloud services by using APIs, messaging, adapters, middleware, or an integration platform. Its purpose is to remove information silos and make independently developed systems work together. See [IBM's overview of enterprise application integration](https://www.ibm.com/think/topics/enterprise-application-integration).

**Business-to-Business (B2B) Integration** connects the systems and business processes of two or more independent organizations, such as a company and its suppliers, customers, banks, or logistics providers. It automates the exchange of documents such as purchase orders, invoices, payment instructions, and shipping notices through EDI, APIs, or standards such as ebXML. See [IBM's overview of B2B integration](https://www.ibm.com/think/topics/b2b-integration) and the [OASIS ebXML Business Process Specification](https://docs.oasis-open.org/ebxml-bp/2.0.4/HTML/ebxmlbp-v2.0.4-Spec-cs-en.htm).

### B. Comparison

| Basis | Web Integration | Enterprise Application Integration | B2B Integration |
|---|---|---|---|
| **Scope** | A website or web application and the services or systems behind it. It normally focuses on an Internet or intranet channel. | Applications, databases, and processes across departments within one organization. | Systems and processes belonging to separate organizations in a trading-partner network. |
| **Project drivers** | Online services, customer self-service, reuse of back-end functions, faster delivery of web features, and access through browsers or mobile clients. | Removal of data silos, less duplicate data entry, automated internal workflows, consistent information, and continued use of legacy systems. | Faster order-to-cash and procure-to-pay cycles, fewer manual errors, lower transaction costs, supply-chain visibility, and compliance with partner requirements. |
| **Key challenges** | API compatibility and versioning, Internet security, authentication, latency, service availability, and a consistent user experience. | Different formats and protocols, legacy constraints, data mapping, interdependencies, governance, monitoring, migration cost, and possible middleware bottlenecks. | Agreement on document meaning, protocols, workflows, and service levels; partner onboarding; different EDI formats; identity, certificates, privacy, legal compliance, reliable delivery, and change coordination. |

The categories can overlap. A B2B transaction may use a web API and then pass through an organization's EAI platform. Their main difference is emphasis: Web Integration is centered on the web channel, EAI on systems inside one enterprise, and B2B Integration on transactions between autonomous organizations.

## 2. Real-Time Integration and Asynchronous Integration

### Real-Time Integration

Real-time integration moves or processes information as soon as a request or event occurs, with very little delay. In a common synchronous request-response flow:

1. System A sends a request directly to System B through an API.
2. System B validates and processes the request.
3. System A waits for System B's response before continuing.

Real-time integration may also use continuously processed event streams. It is suitable when current information or an immediate result is required, such as checking inventory before accepting an order, authorizing a payment, or showing a live shipment location. Its main challenges are runtime dependency, network latency, service outages, and sudden traffic peaks.

### Asynchronous Integration

Asynchronous integration separates the sending of a message from its processing:

1. System A sends a command or event to a queue, topic, or message broker.
2. System A continues its work without waiting for the final result.
3. The broker keeps the message until System B is ready.
4. System B retrieves and processes it later.
5. If a result is needed, System B can publish another event, call a callback, or allow System A to check the job's status.

This design lets the sender and receiver operate and scale independently, and a queue can absorb temporary traffic spikes. It is useful for order fulfillment, email delivery, file processing, audit events, and long-running tasks. Its challenges include eventual completion, retries, duplicate messages, ordering, correlation, monitoring, and dead-letter handling. These concepts are explained in the [AWS communication patterns guidance](https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-integrating-microservices/communication-patterns.html) and [Microsoft's asynchronous messaging guidance](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/messaging).

Real-time and asynchronous are not exact opposites. **Real-time** refers to how quickly information is handled, while **asynchronous** refers to whether the sender waits. An asynchronous event system can therefore still operate in near real time.

## 3. The Five Levels of Integration

### 1. Presentation Integration

Presentation integration combines information or user-interface elements from separate applications into one user-facing view. A portal, for example, might display customer details from a CRM system, unpaid invoices from an accounting system, and shipment information from a logistics system. The underlying applications can remain separate. This level may also include UI-based access, such as screen scraping, when a legacy system has no suitable API.

### 2. Data Integration

Data integration connects systems at the data layer. It includes extracting, transforming, consolidating, replicating, or synchronizing information among databases, files, data warehouses, and other repositories. Its goal is to make equivalent records consistent and usable across systems. Examples include copying customer-address changes to another database and combining data from several systems for reporting. Delayed synchronization, conflicting formats, duplication, and data quality are common concerns.

### 3. Application Integration

Application integration connects applications at the functional level. One application exposes selected operations through an API or another defined interface, and a second application invokes those operations or exchanges operational data with it. For example, an online store may call an inventory application's function to reserve an item. This level is concerned with direct cooperation among applications rather than only copying their stored data. [IBM's application-integration overview](https://www.ibm.com/think/topics/application-integration) discusses APIs, messaging, events, and workflows used for this purpose.

### 4. Service Integration

Service integration organizes application capabilities as reusable, well-defined services that multiple systems can call through common contracts. A customer-status service, for example, might hide several underlying application calls behind one stable interface. Compared with application integration, this level places greater emphasis on reuse, standard access, loose coupling, and hiding implementation details from consumers.

### 5. Process Integration

Process integration coordinates an entire end-to-end business workflow across applications, services, departments, and sometimes partner organizations. A process model controls the order, rules, decisions, exceptions, and human tasks, while invoking the required services at each step. Opening a bank account, for example, may include identity verification, risk checking, account creation, approval, and customer notification. This is the broadest level because a business goal governs the interaction rather than any single application.

These levels describe where and how integration occurs; they are not mandatory stages. One solution may combine several levels.

## 4. Batch, Point-to-Point, Broker-Based, and Business-Process Architectures

### 1. Batch Architecture

Batch integration collects data for a period of time or until a certain amount has accumulated, then transfers and processes the records together. It is commonly implemented through scheduled background jobs, bulk files, staging storage, and ETL or ELT pipelines.

**Unique characteristics:**

- Runs at planned intervals or after a volume threshold is reached.
- Handles large volumes efficiently and can run during off-peak hours.
- Is comparatively simple and predictable to operate.
- Does not provide immediately current data because updates wait for the next batch.
- Requires controls for failed jobs, duplicate runs, reconciliation, and partial processing.

Microsoft notes that batch integrations are commonly managed by scheduled background jobs and staging locations for large datasets in its [integration architecture guidance](https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/integration). IBM similarly defines [batch data integration](https://www.ibm.com/think/topics/real-time-data-integration) as collecting data and moving it as a group after a time or quantity condition is met.

### 2. Point-to-Point Architecture

Point-to-point integration creates a direct connection between two systems. Each connection contains the protocol, data mapping, security, and processing rules required for those particular endpoints. When System A needs information from System B, it communicates with B directly rather than through a shared integration layer.

**Unique characteristics:**

- Is quick and inexpensive for a small number of simple connections.
- Gives each pair of systems a purpose-built interface.
- Creates tight coupling because changes to one endpoint may require changes to the other.
- Becomes difficult to maintain as systems increase: with many applications, the number of possible pairwise connections grows rapidly.
- Often duplicates transformation, security, logging, and error-handling logic across interfaces.

### 3. Broker-Based Architecture

Broker-based integration places an intermediary, such as a message broker, integration broker, or enterprise service bus, between participating systems. Applications send messages to the broker instead of connecting separately to every receiver. The broker can route, queue, transform, validate, enrich, and monitor messages, and it may support point-to-point queues or publish-subscribe topics.

**Unique characteristics:**

- Reduces direct dependencies among applications.
- Centralizes common routing, transformation, security, and monitoring functions.
- Supports asynchronous communication and allows producers and consumers to operate at different times.
- Makes it easier to add or remove consumers in publish-subscribe designs.
- Introduces infrastructure that must be governed, scaled, secured, monitored, and protected from becoming a bottleneck or single point of failure.

IBM describes a broker as a message backbone that temporarily stores messages and decouples producers from consumers in its [webMethods Broker documentation](https://www.ibm.com/docs/en/webmethods-integration/webmethods-broker/11.1.0?topic=broker-webmethods).

### 4. Business-Process Architecture

Business-process integration organizes integration around a complete business outcome rather than a single data transfer. A workflow or process engine coordinates a sequence of system services and, when needed, human activities. It applies business rules, manages decisions and exceptions, records process state, and determines which step should run next.

**Unique characteristics:**

- Models an end-to-end workflow such as order-to-cash, claims processing, or employee onboarding.
- Orchestrates several systems, services, decisions, and human approvals.
- Can manage long-running work, exceptions, compensation, deadlines, and audit history.
- Aligns technical integration with business rules and measurable outcomes.
- Requires careful process ownership, modeling, governance, and change management; a central process engine may also become a critical dependency.

The [IBM Business Process Engine documentation](https://www.ibm.com/docs/en/b2b-integrator/6.2.0?topic=integrator-business-process-engine) describes business processes as linked software and human activities that accomplish a business goal, with the engine selecting and starting the appropriate services.

### Summary Comparison

| Architecture | Main organizing idea | Best suited to | Main limitation |
|---|---|---|---|
| **Batch** | Accumulate and process records together | High-volume, scheduled, non-urgent transfers | Data is not immediately current |
| **Point-to-point** | Connect each system pair directly | A few stable, simple integrations | Connection complexity grows quickly |
| **Broker-based** | Exchange messages through a shared intermediary | Many loosely coupled applications and event-driven work | Broker infrastructure adds operational complexity |
| **Business process** | Coordinate systems and people around a workflow | Multi-step, rule-driven, end-to-end processes | Process modeling and governance can be demanding |
