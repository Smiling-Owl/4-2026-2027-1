# CRC Detects Errors Through Binary Division

**Tags:** #data_communications #error_detection #crc

## Note
In a Cyclic Redundancy Check (CRC), the sender appends CRC bits so the complete data unit is divisible by a predetermined binary divisor. The receiver divides the received unit by the same divisor.

- **Zero remainder:** Accept the data unit.
- **Nonzero remainder:** Transmission damage is detected, so reject the unit.

CRC differs from a checksum because it uses binary division rather than segment addition.

## Links
- [[zk_transmission_errors]]
- [[zk_checksum]]
- [[zk_error_correction_strategies]]
