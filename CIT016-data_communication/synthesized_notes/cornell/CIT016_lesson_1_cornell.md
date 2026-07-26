# TCP/IP Stack Core Concepts

**Date:** 2026-07-26

| Cue / Keywords | Notes |
| :--- | :--- |
| **TCP vs IP** | - **TCP (Transmission Control Protocol):** Manages data transmission; ensures reliable, ordered, error-checked delivery between applications.<br>- **IP (Internet Protocol):** Core internet protocol; handles logical transmission, addressing, and routing via IP addresses. |
| **TCP/IP Layers** | 1. **Application:** Network services directly to end-user apps (web, email). Generates data.<br>2. **Transport (TCP):** End-to-end communication, data integrity, error recovery, flow control.<br>3. **Internet/Network (IP):** Logical transmission, routing packets via IP addresses.<br>4. **Network Access / Data Link:** Error prevention and physical framing. |
| **OSI Mapping** | - Application (TCP/IP) -> Application, Presentation, Session (OSI)<br>- Transport (TCP/IP) -> Transport (OSI)<br>- Internet (TCP/IP) -> Network (OSI)<br>- Network Access (TCP/IP) -> Data Link, Physical (OSI) |
| **Differences: TCP/IP vs OSI** | - **Layers:** TCP/IP (4 layers) combines Session & Presentation into Application; OSI (7 layers) separates them.<br>- **Approach:** TCP/IP is horizontal/connectionless; OSI is vertical.<br>- **Delivery:** TCP/IP does not guarantee packet delivery by default; OSI features guaranteed delivery.<br>- **Network Layer:** TCP/IP is connectionless (IP) and relies on Transport (TCP) for connections; OSI Network provides both.<br>- **Replaceability:** OSI protocols are easier to replace than TCP/IP protocols. |

---

### Summary
The TCP/IP stack is a foundational 4-layer model (Application, Transport, Internet, Network Access) that governs internet communication. It takes a more horizontal, connectionless approach compared to the traditional 7-layer OSI model, heavily relying on IP for routing and TCP for reliable end-to-end delivery.
