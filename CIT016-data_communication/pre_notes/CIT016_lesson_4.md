# Error Detection and Correction: Course Notes

## I. Transmission Errors

An error occurs when the data received does not match the data sent. Noise can alter binary bits while they travel between sender and receiver.

- **Single-bit error:** Exactly one bit in a transmitted data unit changes.
- **Multiple-bit error:** More than one bit is damaged during transmission.
- **Burst error:** Several consecutive bits are incorrectly flipped.

## II. Error Detection Methods

### A. Simple Parity Check

A parity bit is appended to the data. Under even parity:

- Add `1` when the data contains an odd number of `1` bits.
- Add `0` when the data already contains an even number of `1` bits.

The receiver recalculates parity. A mismatch indicates that the data was damaged.

### B. Two-Dimensional Parity Check

Data is arranged into rows and columns. Parity is calculated for every row and every column, and all parity bits are transmitted with the data. Checking both dimensions provides more information about where an error occurred than a single parity bit.

### C. Checksum

The sender divides the data into equal-sized segments, adds the segments using one's-complement arithmetic, and sends the resulting checksum with the data. The receiver repeats the calculation and compares the result to determine whether the data is acceptable.

### D. Cyclic Redundancy Check (CRC)

CRC uses binary division rather than segment addition:

1. The sender appends CRC bits to the data unit so the result is divisible by a predetermined binary divisor.
2. The receiver divides the received unit by the same divisor.
3. A zero remainder means the unit is accepted.
4. A nonzero remainder indicates transmission damage, so the unit is rejected.

## III. Error Correction Methods

- **Backward error correction:** After detecting an error, the receiver asks the sender to retransmit the damaged data unit.
- **Forward error correction:** The receiver uses redundant error-correcting code to recover certain errors without retransmission.
- **Hamming code:** A forward error-correction method that adds parity bits to blocks of stored or transmitted data so errors can be detected and corrected.

## IV. Hamming Code

### A. Required Parity Bits

For `d` data bits and `p` parity bits, choose the smallest `p` that satisfies:

`2^p >= d + p + 1`

For 7 data bits:

- `2^p >= 7 + p + 1`
- `p = 4`, because `2^4 = 16` and `7 + 4 + 1 = 12`

The parity bits occupy positions that are powers of two: `1`, `2`, `4`, and `8`. The seven data bits occupy positions `3`, `5`, `6`, `7`, `9`, `10`, and `11`.

### B. Even-Parity Coverage

- `R1`: positions `1, 3, 5, 7, 9, 11`
- `R2`: positions `2, 3, 6, 7, 10, 11`
- `R4`: positions `4, 5, 6, 7`
- `R8`: positions `8, 9, 10, 11`

For even parity, use parity value `0` when the covered data contains an even number of `1`s and `1` when it contains an odd number.

### C. Worked Example: `1011001`

Placing the seven data bits into the non-parity positions gives:

| Position | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Bit | 1 | 0 | 1 | R8 | 1 | 0 | 0 | R4 | 1 | R2 | R1 |

The parity calculations produce `R1 = 0`, `R2 = 1`, `R4 = 1`, and `R8 = 0`. The final transferred codeword, read from position 11 down to position 1, is `10101001110`.

Hamming notation uses `(total bits, data bits)`. For example, four data bits plus three parity bits form Hamming `(7,4)`; this worked example uses seven data bits plus four parity bits.
