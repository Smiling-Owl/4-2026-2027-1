# Normalization Places Numeric Attributes on Comparable Scales

**Tags:** #DataMining #DataTransformation #Normalization

## Note
Normalization changes numeric scale without changing the meaning of a value.

- **Min-max:** Maps the original range to a chosen new range using `v' = ((v - min) / (max - min)) * (new_max - new_min) + new_min`.
- **Z-score:** Measures distance from the mean using `v' = (v - mean) / standard_deviation`.
- **Decimal scaling:** Moves the decimal point using `v' = v / 10^c`, where `c` makes every normalized absolute value less than 1.

Min-max is useful when bounds matter, z-scores when relative position matters, and decimal scaling when a simple magnitude adjustment is sufficient.

## Links
- [[zk_data_preprocessing]]
- [[zk_noisy_data_smoothing]]
