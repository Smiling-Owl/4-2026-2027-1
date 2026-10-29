# Point-to-Point Protocol: Course Notes

## I. PPP Purpose and Framing

The Point-to-Point Protocol (PPP) transports network-layer datagrams across a direct point-to-point link. It is byte-oriented in the framing shown in this lesson and can carry multiple network protocols. Its main parts are encapsulation, the Link Control Protocol (LCP), authentication options, and Network Control Protocols (NCPs).

A conventional PPP frame contains a flag, address, control, protocol, payload, frame check sequence (FCS), and ending flag. The protocol field identifies the payload protocol, and the FCS detects frame errors. The maximum receive unit (MRU) limits the payload size negotiated by the endpoints.

## II. Transparency and Byte Stuffing

Framing transparency preserves frame boundaries when reserved bytes occur in the transmitted data; PPP supports octet-stuffed asynchronous and bit-stuffed synchronous framing.

## III. PPP Operation and Protocols

The physical link becomes available, peers establish and configure the link through LCP, optional authentication may occur, NCP configures the network-layer protocol, and network data then travels. LCP negotiates link options and can test or terminate the link. Authentication is optional, according to the link configuration.

- **PAP:** Password Authentication Protocol; a simple two-way exchange that sends the password in clear text and is vulnerable to exposure.
- **CHAP:** Challenge Handshake Authentication Protocol; a peer issues a challenge and verifies a response computed with a shared secret. The secret itself is not sent in the response. It uses challenge, response, and success/failure exchanges, and can repeat challenges during the connection.
- **NCP:** A family of protocols configures the network layer carried by PPP. IPCP configures IPv4; IPv6CP configures IPv6. Other examples in the slides include OSINLCP, IPXCP, DNCP, and NBFCP.

PPP supplies framing, link configuration, and protocol multiplexing. It does not itself encrypt the payload or guarantee reliable retransmission of every frame; those properties require other mechanisms.

## Clarifications

The slide text and frame diagram give conflicting bit strings for the PPP control byte; RFC 1662 specifies `00000011` (`0x03`).

## Sources

- `PPP.pdf`, pp. 1-45.
- [RFC 1661: The Point-to-Point Protocol](https://www.rfc-editor.org/rfc/rfc1661.html).
- [RFC 1662: PPP in HDLC-like Framing](https://www.rfc-editor.org/rfc/rfc1662.html).
- [RFC 1994: PPP CHAP](https://www.rfc-editor.org/rfc/rfc1994.html).
