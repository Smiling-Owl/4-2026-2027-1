# Data Warehouse Architecture and Layers

**Tags:** #data_warehouse #architecture #layers

## Note
Data Warehouse Architectures can be single-tier, two-tier, or three-tier. The **Three-Tier Architecture** is suited for systems with long life cycles and consists of a top, middle, and bottom tier (source layer, reconciled layer, data warehouse layer), providing an extra layer of review.

A typical data warehouse architecture contains 4 primary layers:
1. **Source Layer:** Feeds data into the warehouse from various operational systems (e.g., CRM, ERP, Point of Sale, Flat files).
2. **Staging Layer:** A landing area that ingests data without applying business logic or transformations. This data is not yet cleansed or modeled and is not used in production analysis.
3. **Warehouse Layer:** Where all data is stored. It contains subject-oriented, integrated, time-variant, and non-volatile data, including physical schemas, tables, and views.
4. **Consumption Layer:** The analytics layer where data is modeled for consumption using analytics tools (used by data analysts, scientists, and business users).

## Links
- [[zk_data_warehouse_overview]]
