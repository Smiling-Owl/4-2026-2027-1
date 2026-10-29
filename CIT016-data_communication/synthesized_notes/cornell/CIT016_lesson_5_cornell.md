# Data Link Control and Protocols

**Date:** 2026-10-29

| Cue / Keywords | Notes |
| :--- | :--- |
| **Data Link Control** | Data-link service coordinates reliable frame transfer over a physical link. It handles line discipline, flow control, and error control. On a half-duplex link, endpoints must coordinate to avoid transmitting at once. |
| **Line Discipline** | Determines which station may send and when. |
| **ENQ/ACK** | Sender requests to begin with an enquiry (ENQ); receiver responds with ACK. Transfer uses data/acknowledgment exchanges; timeout permits retries. EOT marks the end. Repeated failure can cause the sender to give up. |
| **Poll/Select** | In primary/secondary arrangements, the primary **polls** to invite a secondary to send and **selects** a secondary when the primary has data to send. Secondary responses acknowledge or indicate readiness. |
| **Flow Control** | Limits outstanding data so a sender does not overrun a receiver's processing capacity or buffer. |
| **Stop-and-Wait** | Send one frame and wait for its ACK. Simple but idle during each round trip. |
| **Sliding Window** | Several sequenced frames may be outstanding. As ACKs arrive, the window advances, improving link utilization while bounding in-flight data. |
| **Error Control / ARQ** | Detects damaged or missing frames and uses sequence numbers, ACKs, timers, and retransmission to recover. |
| **Stop-and-Wait ARQ** | Timeout retransmits the outstanding frame. Sequence numbers help distinguish a retry from new data. |
| **Go-Back-N ARQ** | A failure causes retransmission of the missing frame and subsequent outstanding frames. |
| **Selective Reject ARQ** | Retransmits only missing or damaged frames; receiver buffers later frames until a gap is repaired. It reduces needless retransmissions at the cost of buffering and tracking. |
| **HDLC** | Bit-oriented protocol family for point-to-point and multipoint links. `01111110` flags frame boundaries; the FCS uses CRC for error detection. |
| **HDLC Fields** | Flag, address, control, payload, FCS, closing flag. Address identifies a station; control is 1 or 2 bytes and supports link operation; payload carries network-layer data; FCS is 2 or 4 bytes and checks errors. |
| **HDLC Frame Types** | Leading control bits: **I** starts `0`, carries user data, possibly with piggybacked control; **S** starts `10`, carries supervisory flow/error control; **U** starts `11`, handles link management. |
| **Transfer Modes** | **NRM:** primary initiates/control exchanges; secondary responds. **ABM:** either peer may initiate on a balanced point-to-point link. |
| **Flow vs. Error Control** | Flow control prevents receiver overload; error control detects loss/corruption and coordinates recovery. |

## Diagrams

### Line discipline

![ENQ/ACK exchange between a sender and receiver, including establishment, acknowledgment, data transfer, and termination.](../assets/cit016/dlc-enq-ack-p18.webp)

*Source: `Data Link Control and Protocols.pdf`, p. 18.*

![Polling asks a secondary station to send data; a response indicates whether it has data to transmit.](../assets/cit016/dlc-poll-p21.webp)

*Source: `Data Link Control and Protocols.pdf`, p. 21.*

![A primary station selects a secondary station before sending frames to it.](../assets/cit016/dlc-select-p22.webp)

*Source: `Data Link Control and Protocols.pdf`, p. 22.*

### Flow and error control

![Stop-and-wait alternates one data frame with its acknowledgment.](../assets/cit016/dlc-stop-and-wait-p24.webp)

*Source: `Data Link Control and Protocols.pdf`, p. 24.*

![Sliding-window diagrams show the sender and receiver windows advancing as frames and acknowledgments move.](../assets/cit016/dlc-sliding-window-p25.webp)

*Source: `Data Link Control and Protocols.pdf`, p. 25.*

![Stop-and-wait ARQ retransmits an unacknowledged frame after a timeout.](../assets/cit016/dlc-stop-and-wait-arq-p28.webp)

*Source: `Data Link Control and Protocols.pdf`, p. 28.*

![Go-back-N retransmits the missing frame and later outstanding frames after a loss.](../assets/cit016/dlc-go-back-n-arq-p29.webp)

*Source: `Data Link Control and Protocols.pdf`, p. 29.*

![Selective Reject retransmits the missing frame while preserving later frames already received.](../assets/cit016/dlc-selective-reject-arq-p30.webp)

*Source: `Data Link Control and Protocols.pdf`, p. 30.*

### HDLC

![HDLC frame format with opening and closing flags, address, control, payload, and frame check sequence.](../assets/cit016/hdlc-frame-p35.webp)

*Source: `Data Link Control and Protocols.pdf`, p. 35.*

![The HDLC information, supervisory, and unnumbered frames organize data, control, and link-management fields.](../assets/cit016/hdlc-frame-types-p37.webp)

*Source: `Data Link Control and Protocols.pdf`, p. 37.*

---

### Summary
Data-link protocols coordinate access, regulate frame flow, and recover from transmission errors. Sliding windows improve utilization, while ARQ variants trade retransmission work for receiver buffering. HDLC frames carry data and control information between link stations.

## References

- `Data Link Control and Protocols.pdf`, pp. 15-37.
- [RFC 1662: HDLC-like Framing](https://www.rfc-editor.org/rfc/rfc1662.html).
