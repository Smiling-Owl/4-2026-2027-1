# Zettelkasten: Social Engineering

## ZK-012: Social Engineering Definition
**Tags**: `#social-engineering` `#human-element` `#psychological-manipulation`
**Related**: [[ZK-017: Psychological Tactics in SE]], [[ZK-018: The Weakest Link Concept]]

**Note**: 
Social Engineering is the psychological manipulation of individuals to perform actions or divulge confidential information. It bypasses technical controls (firewalls, encryption) by targeting the "human element"—exploiting trust, human error, and cognitive biases.

---

## ZK-013: Email-Based Attacks (Phishing Variants)
**Tags**: `#phishing` `#spear-phishing` `#whaling` `#bec` `#clone-phishing`
**Related**: [[ZK-012: Social Engineering Definition]]

**Note**: 
- **Phishing**: Fraudulent mass emails posing as legitimate entities.
- **Spear Phishing**: Targeted phishing using personalized intelligence.
- **Whaling**: Spear phishing targeting high-level executives (C-suite).
- **Business Email Compromise (BEC)**: Spoofing executives to authorize fraudulent wire transfers (e.g., $37M Toyota breach).
- **Clone Phishing**: Intercepting and modifying a legitimate email.

---

## ZK-014: Voice and Text-Based Attacks
**Tags**: `#vishing` `#smishing` `#deepfake`
**Related**: [[ZK-013: Email-Based Attacks (Phishing Variants)]]

**Note**: 
- **Vishing (Voice Phishing)**: Impersonation over phone calls (e.g., fake IT support).
- **Deepfake/AI Voice Cloning**: Using AI to mimic a trusted individual's voice for authorization.
- **Smishing (SMS Phishing)**: Malicious lures sent via text messages, often exploiting urgency.

---

## ZK-015: Physical & Network SE Attacks
**Tags**: `#tailgating` `#dumpster-diving` `#shoulder-surfing` `#baiting` `#evil-twin`
**Related**: [[ZK-012: Social Engineering Definition]], [[ZK-020: Physical Security & SE]]

**Note**: 
- **Tailgating (Piggybacking)**: Following an authorized user into a restricted physical area.
- **Dumpster Diving**: Searching trash for sensitive physical documents.
- **Shoulder Surfing**: Physically observing someone entering credentials.
- **Baiting**: Leaving an enticing physical item (like a malware-infected USB drive) to be found.
- **Evil Twin**: Setting up a rogue, fraudulent Wi-Fi access point.

---

## ZK-016: Web, Interactive & Social Media Attacks
**Tags**: `#watering-hole` `#quid-pro-quo` `#honeytrap` `#reverse-se` `#angler-phishing` `#pharming`
**Related**: [[ZK-015: Physical & Network SE Attacks]]

**Note**: 
- **Watering Hole**: Compromising a specific website frequently visited by a target group.
- **Quid Pro Quo**: Offering a service (fake tech support) in exchange for access.
- **Reverse SE**: Creating a problem so the victim voluntarily contacts the attacker for help.
- **Honeytrap**: Building a romantic relationship online to exploit trust (e.g., pig butchering).
- **Angler Phishing**: Posing as official customer support on social media.
- **Pharming/Typosquatting**: Redirecting victims to malicious, lookalike domains.

---

## ZK-017: Psychological Tactics in SE
**Tags**: `#psychology` `#cialdini` `#cognitive-biases`
**Related**: [[ZK-012: Social Engineering Definition]]

**Note**: 
Attackers trigger "System 1" (fast, emotional) thinking to bypass critical analysis, heavily utilizing Robert Cialdini's principles of influence:
- **Authority**: Complying with perceived power.
- **Scarcity / Urgency**: Forcing rushed decisions.
- **Fear & Greed**: Emotional extremes (anxiety vs. reward).
- **Curiosity**: Enticement (e.g., "Salary.xlsx").
- **Liking & Sympathy**: Building rapport or inventing emergencies.
- **Reciprocity & Commitment**: Creating a sense of debt or escalating compliance.

---

## ZK-018: The "Weakest Link" Concept
**Tags**: `#weakest-link` `#human-error` `#information-assurance`
**Related**: [[ZK-019: SETA Programs]], [[ZK-012: Social Engineering Definition]]

**Note**: 
A foundational concept in InfoSec (Whitman, Rhodes-Ousley) stating that the human element is the most vulnerable point in an organization's security architecture. The strongest encryption is useless if an employee voluntarily hands over the decryption key.

---

## ZK-019: SETA Programs
**Tags**: `#seta` `#security-awareness` `#training`
**Related**: [[ZK-018: The Weakest Link Concept]]

**Note**: 
**SETA (Security Education, Training, and Awareness)** is the primary organizational countermeasure against social engineering. It aims to program human behavior to recognize manipulation and adhere to security policies.

---

## ZK-020: Physical Security & SE
**Tags**: `#physical-security` `#ppt-triad`
**Related**: [[ZK-015: Physical & Network SE Attacks]]

**Note**: 
Social engineering is a prime example of why security is a triad of **People, Process, and Technology**. A convincing pretext can bypass physical access controls (like a human receptionist) just as effectively as a digital vulnerability, demonstrating that logical and physical security are deeply intertwined.
