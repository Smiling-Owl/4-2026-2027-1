# Transmission Media and Multiplexing

**Date:** 2026-08-15

| Cue / Keywords | Notes |
| :--- | :--- |
| **Transmission Medium** | The physical path or channel that carries data from a transmitter to a receiver.<br>- **Guided media:** Signals are confined to a physical link.<br>- **Unguided media:** Electromagnetic signals travel without a physical conductor. |
| **Guided Media** | - **Twisted pair:** Twisted insulated copper-wire pairs; common in telephone networks and LANs.<br>- **Coaxial cable:** Central conductor surrounded by insulation, metallic shielding, and an outer jacket; used for cable TV and broadband.<br>- **Fiber-optic cable:** Sends light through glass or plastic fibers; supports high-speed, long-distance communication.<br>- **Stripline:** A conductor placed between two ground planes; used for high-frequency signals and EMI immunity.<br>- **Microstripline:** A conductor separated from a ground plane by a dielectric layer. |
| **Unguided Media** | - **Radio waves (3 kHz-1 GHz):** Broad-area wireless communication such as radio, Wi-Fi, and Bluetooth.<br>- **Microwaves (1-300 GHz):** Line-of-sight, point-to-point links such as satellite communication.<br>- **Infrared (300 GHz-400 THz):** Short-range communication such as remote controls; lies just below visible light. |
| **Multiplexing** | Combines signals from multiple sources so they can share one communication medium or bandwidth. A multiplexer combines the inputs for transmission, and the receiving system separates them again. |
| **FDM** | **Frequency-Division Multiplexing:** Sends signals simultaneously through different frequency bands within one channel. |
| **TDM** | **Time-Division Multiplexing:** Lets signals share one channel by taking turns in assigned time slots. |
| **WDM** | **Wavelength-Division Multiplexing:** Sends signals through the same optical fiber using different wavelengths (colors) of light. |
| **SDM** | **Space-Division Multiplexing:** Sends signals through separate physical paths or channels, such as different fibers or wires. |
| **CDM** | **Code-Division Multiplexing:** Sends signals over the same frequency channel while unique codes distinguish the signals. |
| **Benefits and Costs** | **Advantages:** Efficient bandwidth use, increased data transmission, scalability, and flexibility.<br>**Disadvantages:** Synchronization problems, latency, signal degradation, and more difficult resource management. |
| **Choosing a Method** | Identify which resource separates simultaneous signals: **frequency** (FDM), **time** (TDM), **light wavelength** (WDM), **physical space/path** (SDM), or **code** (CDM). |

---

### Summary
Transmission media provide the path that carries data: guided media confine signals to cables or conductors, while unguided media send electromagnetic waves through space. Multiplexing improves use of that path by allowing multiple signals to share it. The five methods separate signals by frequency, time, wavelength, space, or code, trading greater capacity and flexibility for synchronization, delay, degradation, and management challenges.
