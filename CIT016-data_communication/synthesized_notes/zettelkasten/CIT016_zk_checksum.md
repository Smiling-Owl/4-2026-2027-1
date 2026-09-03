# A Checksum Detects Changes Through One's-Complement Addition

**Tags:** #data_communications #error_detection #checksum

## Note
A checksum divides a data unit into equal-sized segments and adds them using one's-complement arithmetic. The sender transmits the calculated checksum with the data, and the receiver repeats the calculation to determine whether the data changed in transit.

Unlike CRC, a checksum is based on addition rather than binary polynomial division.

## Links
- [[zk_transmission_errors]]
- [[zk_cyclic_redundancy_check]]
