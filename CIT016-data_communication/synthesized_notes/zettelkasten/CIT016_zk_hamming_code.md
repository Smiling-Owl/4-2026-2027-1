# Hamming Code Uses Overlapping Parity Groups

**Tags:** #data_communications #error_correction #hamming_code #parity

## Note
Hamming code adds parity bits to a block of data so errors can be detected and corrected. For `d` data bits, choose the smallest number of parity bits `p` satisfying `2^p >= d + p + 1`.

Parity bits occupy power-of-two positions (`1`, `2`, `4`, `8`, ...), while data fills the remaining positions. Each parity bit checks an overlapping set of positions. In the seven-data-bit example `1011001`, four parity bits are required and even-parity calculation gives `R1 = 0`, `R2 = 1`, `R4 = 1`, and `R8 = 0`, producing `10101001110` from position 11 down to 1.

## Links
- [[zk_parity_checks]]
- [[zk_error_correction_strategies]]
