# Integration Architectures

**Tags:** #systems_integration #architecture_patterns #batch #point_to_point #broker #process

## Note
There are four integration architectures:
- **Batch:** Collects records over time or until a volume threshold, then transfers and processes them as a group (scheduled background jobs, bulk files, staging, ETL/ELT). Handles large volumes efficiently but data is not immediately current.
- **Point-to-point:** A direct connection between two systems containing the protocol, data mapping, security controls, and processing rules for those endpoints. Practical for a few stable connections but creates tight coupling, with complexity growing as systems increase.
- **Broker-based:** An intermediary (message broker, integration broker, or enterprise service bus) queues, routes, transforms, validates, enriches, and monitors messages. Reduces direct dependencies but the broker must be operated/scaled/secured and can become a bottleneck or single point of failure.
- **Business-process:** Organizes system interactions around a complete business outcome; a workflow/process engine coordinates services and human activities, applies rules, and manages decisions and exceptions. Fits multi-step workflows but requires sound process modeling and governance.

## Links
- [[zk_integration_levels]]
- [[zk_real_time_vs_asynchronous]]
