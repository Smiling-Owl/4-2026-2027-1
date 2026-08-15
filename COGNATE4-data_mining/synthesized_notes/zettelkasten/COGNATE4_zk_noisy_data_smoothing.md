# Noisy Data Can Be Smoothed or Isolated

**Tags:** #DataMining #DataCleaning #Noise #Binning

## Note
Three techniques address noisy values and outliers:

- **Binning:** Sort values into equal-frequency or equal-width groups, then replace them with bin means or nearest boundaries.
- **Regression:** Fit a line or model that smooths deviations.
- **Clustering:** Group similar records and identify values that do not fit a cluster.

For the bin `(4, 8, 15)`, mean smoothing produces `(9, 9, 9)`, while boundary smoothing produces `(4, 4, 15)`.

## Links
- [[zk_data_preprocessing]]
- [[zk_data_cleaning_missing_values]]
