# Point-to-Point Protocol (PPP)

**Date:** 2026-10-29

| Cue / Keywords | Notes |
| :--- | :--- |
| **PPP Purpose** | Data-link protocol for transporting multiple network-layer protocols over a direct point-to-point link. It encapsulates datagrams in frames and configures the link. |
| **PPP Frame** | Flag, address, control, protocol, payload, FCS, closing flag. Protocol identifies the payload type; FCS detects errors. |
| **Frame Constants** | In the standard octet representation, flag `0x7E`, address `0xFF`, control `0x03`. These fixed address/control fields are not regular host addressing or flow control on the point-to-point link. RFC 1662 specifies the canonical control field value. |
| **MRU** | Default maximum receive unit is 1500 octets; link endpoints may negotiate another size. |
| **Byte Stuffing** | For asynchronous octet-stuffed framing, escape reserved octets between the frame flags with `0x7D` followed by the octet XOR `0x20`. The flag `0x7E` becomes `0x7D 0x5E`; the escape `0x7D` becomes `0x7D 0x5D`. PPP also has bit-stuffed synchronous framing. |
| **Link Control Protocol** | LCP establishes, configures, tests, maintains, and terminates the link; peers negotiate supported options. |
| **Authentication** | Optional PPP phase when configured. Authentication occurs after LCP establishes the link and before network-layer protocols proceed. |
| **PAP** | Two-way password exchange; transmits the password in clear text, so it offers weak protection against interception. |
| **CHAP** | Challenge/response authentication with a shared secret. The secret itself is not sent as the response; the exchange ends in success or failure and can be repeated during the session. Authentication is not encryption of PPP payload. |
| **Network Control Protocols** | NCPs configure network-layer protocols carried by PPP. IPCP configures IPv4; IPv6CP configures IPv6. There is an NCP for each supported network-layer protocol. |
| **PPP Limit** | PPP itself does not provide payload encryption or guarantee reliable retransmission of every frame; other protocols/mechanisms are needed for those services. |
| **Clarification** | PPP slide text and frame diagram conflict on the control bit string; RFC 1662 gives the canonical value as `00000011` (`0x03`). |

---

### Summary
PPP frames multiprotocol data across direct links. LCP negotiates link operation, optional authentication can check peers, and NCPs configure the network layer. Framing preserves frame boundaries while allowing arbitrary data between them.

## References

- `PPP.pdf`, pp. 1-45.
- [RFC 1661](https://www.rfc-editor.org/rfc/rfc1661.html); [RFC 1662](https://www.rfc-editor.org/rfc/rfc1662.html); [RFC 1994](https://www.rfc-editor.org/rfc/rfc1994.html).
