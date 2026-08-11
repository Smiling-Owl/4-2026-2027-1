# Data Warehousing

**Date:** 2026-08-11

| Cue / Keywords | Notes |
| :--- | :--- |
| **Data Warehouse** | - Storage of information over time by a business or organization.<br>- Archival library of historical data retrieved and analyzed for decision-making.<br>- Supplied by various key departments periodically. |
| **Use in Data Mining** | - Find patterns of information to improve business processes.<br>- Enables cross-departmental data access (e.g., marketing assessing sales data). |
| **Data Warehouse vs. Database** | - **Data Warehouse:** Aggregates structured historical data over time.<br>- **Database:** Transactional system updating real-time data to have the most recent data available. |
| **Data Warehouse vs. Data Lake** | - **Data Warehouse:** Holds refined, filtered data for a specific purpose (business professionals, more structured).<br>- **Data Lake:** Holds raw data with undetermined goals (data scientists, easily accessible). |
| **Data Warehouse vs. Data Mart** | - **Data Warehouse:** Centralized repository for the entire organization.<br>- **Data Mart:** A smaller, faster subset of a data warehouse focused on one subject area or specific department. |
| **Operations (ETL)** | 1. **Data Cleaning:** Removing inconsistencies and rectifying noisy data.<br>2. **Data Refresh:** Updating data timely by broadcasting from multiple sources.<br>3. **Extraction:** Organizing unstructured data for retrieval and mining.<br>4. **Transformation:** Organizing heterogeneous data into the warehouse's structure.<br>5. **Data Loading:** Loading data into the target repository. |
| **Architecture** | - Single-tier, Two-tier, and Three-tier architectures.<br>- **Three-Tier Architecture:** Source layer, reconciled layer, and data warehouse layer. Suited for systems with long life cycles. |
| **Layers of Architecture** | 1. **Source Layer:** Feeds data into warehouse (CRM, ERP, POS).<br>2. **Staging Layer:** Landing area for ingesting raw data; not used in production analysis.<br>3. **Warehouse Layer:** Where all data is stored (subject-oriented, integrated, time-variant, non-volatile).<br>4. **Consumption Layer:** Analytics layer where data is modeled for consumption tools. |

---

### Summary
A Data Warehouse is a centralized repository that stores historical, structured data gathered from various departments to support decision-making and data mining. Unlike databases, data lakes, or data marts, it holds refined, integrated data over time. The data goes through operations (Cleaning, Refresh, Extraction, Transformation, Loading) and moves through defined architecture tiers (Source, Staging, Warehouse, Consumption) to be analyzed by business professionals.
