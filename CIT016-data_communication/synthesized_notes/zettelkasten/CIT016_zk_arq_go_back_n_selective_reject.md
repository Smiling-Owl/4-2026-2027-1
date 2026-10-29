# ARQ Strategies Trade Retransmission Work for Buffering

**Tags:** #data_communications #error_control #arq

## Note
Automatic Repeat reQuest (ARQ) uses acknowledgments, sequence numbers, and timeouts to recover from lost or damaged frames. Stop-and-wait retries the outstanding frame. Go-back-N retries the failed frame and later outstanding frames. Selective Reject retries only the missing or damaged frame, but requires buffering and tracking later frames.

## Links
- [[CIT016_zk_data_link_control]]
- [[CIT016_zk_flow_control_stop_wait_sliding_window]]
- [[CIT016_zk_transmission_errors]]
- [[CIT016_zk_hdlc]]
