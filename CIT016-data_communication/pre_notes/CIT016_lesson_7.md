# Computer Networks: Course Notes

## I. Network Categories

Networks can be grouped by geographic area, connection type, or architecture. This lesson focuses on geographic coverage:

- **Personal Area Network (PAN):** Short-range links among one person's devices; Bluetooth is a common example. The slides use under about 10 m as a guide, not a universal limit.
- **Local Area Network (LAN):** Connects devices in a limited site such as a home, office, or school. Ethernet is common; a wireless LAN (WLAN) connects devices over radio, often through an access point.
- **Metropolitan Area Network (MAN):** Connects networks across a city or nearby urban area, between LAN and WAN scale.
- **Wide Area Network (WAN):** Spans a broad geographic area and connects separate LANs using carrier or other long-distance links. The Internet is a familiar public example.

Wired LANs can offer stable, high-capacity local connections but require cabling and limit mobility. WLANs are easier to extend without cables and enable mobility, but radio interference and access control affect performance and security. Actual speed and range depend on equipment and conditions; example rates in the slides are not fixed technical ceilings.

## II. Bluetooth Networks

Bluetooth uses short-range radio for cable-free device connections. In the classical Bluetooth model taught in the materials, a **piconet** has one primary and up to seven active secondary devices, with traffic coordinated through the primary. A **scatternet** links piconets through a device that participates in more than one; this bridge can serve as a secondary in one piconet and primary in another.

These are classical Bluetooth teaching models. The slide's speed figures and node limits should not be treated as universal figures for every Bluetooth version or Bluetooth Low Energy arrangement.

## III. Cellular Networks

Cellular coverage divides a service area into cells. Each cell has a base station or cell site that connects mobile devices into the wider network infrastructure. As a device moves, network procedures support service across cells. Cellular links enable voice, messaging, internet access, and some connected-device services; coverage and performance depend on deployment and conditions.

## IV. Satellite Networks

Satellite communications use orbiting equipment to relay signals between ground locations. The **space segment** includes satellites and their communications payloads. The **ground segment** includes ground stations, teleports, and network operation centers (NOCs), which monitor and manage network resources. Ground stations use antennas to send to and receive from satellites and connect the satellite system with other networks.

- **GEO:** Geostationary Earth orbit is roughly 36,000 km above the equator. A satellite appears fixed relative to Earth's surface and can cover a large region, but the long path creates higher latency.
- **MEO:** Medium Earth orbit lies between LEO and GEO.
- **LEO:** Low Earth orbit is much closer to Earth, at altitudes of several hundred kilometres in the lesson materials.

Satellite links can reach remote locations but tend to cost more than terrestrial cellular access. Availability, latency, weather effects, and reliability vary with orbit, terminal, service, and conditions; the comparison in the slides is illustrative rather than a guarantee.

## Sources

- `NETWORKS.pdf`, pp. 13-45.
