# Parity Checks Add Redundant Bits for Detection

**Tags:** #data_communications #error_detection #parity

## Note
A simple parity check appends one bit so the complete data unit has the required parity. Under even parity, an odd number of `1`s requires parity bit `1`, while an even number requires parity bit `0`.

A two-dimensional parity check arranges data into rows and columns and calculates parity for both dimensions. The additional row and column checks provide stronger detection and more information about error location than a single parity bit.

## Links
- [[zk_transmission_errors]]
- [[zk_hamming_code]]
