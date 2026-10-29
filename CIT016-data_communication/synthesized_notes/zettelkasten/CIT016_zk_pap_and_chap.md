# PAP and CHAP Use Different PPP Authentication Exchanges

**Tags:** #data_communications #ppp #authentication

## Note
PAP is a two-way exchange that sends a password in clear text. CHAP uses a challenge and response computed with a shared secret, without sending the secret directly as the response; the peer reports success or failure, and challenges can repeat during the session. PPP authentication is optional when configured, and CHAP authentication does not encrypt subsequent PPP payload data.

## Links
- [[CIT016_zk_ppp]]

## Reference
- RFC 1994, https://www.rfc-editor.org/rfc/rfc1994.html.
