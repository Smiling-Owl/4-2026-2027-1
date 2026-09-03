# Error Detection and Correction

**Date:** 2026-09-04

| Cue / Keywords | Notes |
| :--- | :--- |
| **Transmission Errors** | An error occurs when received data differs from sent data, commonly because noise changes bits during transmission.<br>- **Single-bit:** One bit changes.<br>- **Multiple-bit:** More than one bit is damaged.<br>- **Burst:** Several consecutive bits are flipped. |
| **Simple Parity** | Adds one parity bit to the data. With even parity, append `1` if the data has an odd number of `1`s and append `0` if it already has an even number. The receiver recalculates parity to detect a mismatch. |
| **Two-Dimensional Parity** | Arranges data into rows and columns and calculates parity for each row and column. Both sets of parity bits are transmitted, providing stronger detection and better error location than a single parity bit. |
| **Checksum** | Divides data into equal-sized segments, adds them using one's-complement arithmetic, and sends the resulting checksum. The receiver repeats the calculation to test data integrity. |
| **CRC** | **Cyclic Redundancy Check** uses binary division. The sender appends CRC bits so the transmitted unit is divisible by a predetermined divisor. The receiver divides by the same value: **zero remainder = accept; nonzero remainder = reject**. |
| **Correction Strategies** | - **Backward error correction:** The receiver detects damage and requests retransmission.<br>- **Forward error correction:** Redundant code lets the receiver recover certain errors without retransmission.<br>- **Hamming code:** Adds parity bits to blocks so errors can be detected and corrected. |
| **Hamming Formula** | Choose the smallest number of parity bits `p` for `d` data bits such that `2^p >= d + p + 1`.<br>For `d = 7`, `p = 4`. Parity bits occupy power-of-two positions `1, 2, 4, 8`; data occupies the remaining positions. |
| **Hamming Parity Sets** | With even parity:<br>- `R1`: `1, 3, 5, 7, 9, 11`<br>- `R2`: `2, 3, 6, 7, 10, 11`<br>- `R4`: `4, 5, 6, 7`<br>- `R8`: `8, 9, 10, 11`<br>Even covered `1`s -> parity `0`; odd covered `1`s -> parity `1`. |
| **Worked Example** | For data `1011001`, the calculations give `R1 = 0`, `R2 = 1`, `R4 = 1`, and `R8 = 0`. Reading positions 11 through 1 gives the final transferred codeword `10101001110`. |

---

### Summary
Noise can create single-bit, multiple-bit, or burst errors. Parity, two-dimensional parity, checksums, and CRC detect damaged data, while retransmission and forward error-correcting codes address it. Hamming code places parity bits at power-of-two positions and uses overlapping parity groups to provide enough redundancy for error detection and correction.
