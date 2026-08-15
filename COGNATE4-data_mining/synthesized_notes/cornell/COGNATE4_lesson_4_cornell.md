# Cornell Notes: Data Preprocessing Techniques

| Cue / Keywords | Notes |
| :--- | :--- |
| **Data Preprocessing** | A data-mining process that transforms raw data into a useful and efficient format from which computers can derive information. |
| **Why Preprocess?** | - **Incomplete data:** Missing values, such as a blank occupation.<br>- **Noisy data:** Invalid or extreme values, such as a negative salary.<br>- **Inconsistent data:** Conflicting attributes or coding schemes, such as an age that disagrees with a birth date. |
| **Major Techniques** | - **Data cleaning:** Fill missing values, smooth noise, handle outliers, and resolve inconsistencies.<br>- **Data integration:** Combine multiple databases, data cubes, or files.<br>- **Data transformation:** Normalize, aggregate, or discretize data.<br>- **Data reduction:** Reduce data volume while retaining the same or similar analytical results. |
| **Missing Values** | - Ignore the record when it has several missing attributes; otherwise, useful data may be lost.<br>- Fill manually, though this does not scale to large datasets.<br>- Use a global constant such as `unknown`.<br>- Use the attribute mean, such as average income. |
| **Noisy Data** | - **Binning:** Sort values and distribute them into equal-frequency or equal-width bins.<br>- **Regression:** Fit a line or model to smooth values and reduce the effect of outliers.<br>- **Clustering:** Group similar records so outliers can be identified and removed. |
| **Bin-Mean Smoothing** | Replace every value in a bin with that bin's mean.<br>Example: `(4, 8, 15)` becomes `(9, 9, 9)`. |
| **Bin-Boundary Smoothing** | Replace every value with its nearest bin boundary.<br>Example: `(4, 8, 15)` becomes `(4, 4, 15)`. |
| **Min-Max Normalization** | Rescales a value into a chosen range:<br>`v' = ((v - min) / (max - min)) * (new_max - new_min) + new_min`<br>For `v = 73,600`, original range `[12,000, 98,000]`, and new range `[0, 1]`, `v' ≈ 0.7163`. |
| **Z-Score Normalization** | Expresses a value by its distance from the mean in standard deviations:<br>`v' = (v - mean) / standard_deviation`<br>For `v = 73,600`, mean `54,000`, and standard deviation `16,000`, `v' = 1.225`. |
| **Decimal Scaling** | Moves the decimal point by dividing by `10^c`, choosing the smallest `c` such that the largest absolute normalized value is below 1:<br>`v' = v / 10^c`<br>For range `[-986, 917]`, `c = 3`; therefore, `547` becomes `0.547`. |

## Summary
Data preprocessing improves raw data before mining by addressing missing, noisy, and inconsistent values. Its four major techniques are cleaning, integration, transformation, and reduction. Cleaning may fill missing values or smooth noise through binning, regression, and clustering, while transformation can normalize values using min-max scaling, z-scores, or decimal scaling.
