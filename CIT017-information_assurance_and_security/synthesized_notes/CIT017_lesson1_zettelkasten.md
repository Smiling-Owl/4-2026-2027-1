# Zettelkasten: Information Assurance and Security

## ZK-001: The McCumber Cube
**Tags**: `#security-framework` `#mccumber-cube` `#cia-triad` `#information-states`
**Related**: [[ZK-002: Information States]], [[ZK-003: CIA Triad]], [[ZK-004: Countermeasures]]

**Note**: 
The McCumber Cube is a 3D model used to evaluate information system security. It assesses the interplay between three dimensions: the state of the data, the security goals (CIA), and the countermeasures applied to protect it.

---

## ZK-002: Information States
**Tags**: `#data-states` `#transmission` `#storage` `#processing`
**Related**: [[ZK-001: The McCumber Cube]]

**Note**: 
Data exists in three primary states:
1. **Transmission (Data in Motion)**: Moving across a network (e.g., sending an email).
2. **Storage (Data at Rest)**: Saved on a hard drive or database.
3. **Processing (Data in Use)**: Actively being updated or calculated in RAM.

---

## ZK-003: The CIA Triad
**Tags**: `#cia-triad` `#confidentiality` `#integrity` `#availability`
**Related**: [[ZK-001: The McCumber Cube]]

**Note**: 
The core goals of information security:
- **Confidentiality**: Preventing unauthorized access or disclosure.
- **Integrity**: Ensuring data is not altered in an unauthorized manner.
- **Availability**: Guaranteeing that authorized users have reliable and timely access when needed.

---

## ZK-004: Security Countermeasures
**Tags**: `#countermeasures` `#technology` `#people` `#policy`
**Related**: [[ZK-001: The McCumber Cube]], [[ZK-005: Functional Controls]]

**Note**: 
Protective measures fall into three distinct categories:
- **Technology**: Hardware and software (e.g., firewalls, encryption).
- **People**: Training, awareness, and ethical guidelines for users and staff.
- **Policies & Practices**: Rules, laws, and Standard Operating Procedures (SOPs).

---

## ZK-005: Functional Controls
**Tags**: `#functional-controls` `#prevention` `#detection` `#mitigation`
**Related**: [[ZK-004: Security Countermeasures]]

**Note**: 
Practical security is applied in three functional phases:
- **Prevention**: Stopping an attack before it occurs (e.g., physical locks, firewalls).
- **Detection**: Identifying an attack in progress or after the fact (e.g., logs, intrusion detection systems).
- **Mitigation/Response**: Limiting damage once an incident is detected (e.g., quarantining a virus, reporting a breach).

---

## ZK-006: The AAA Framework
**Tags**: `#aaa-framework` `#authentication` `#authorization` `#accounting`
**Related**: [[ZK-007: Non-repudiation]]

**Note**: 
The sequential framework governing user interaction with a system:
1. **Authentication ("Who are you?")**: Proving identity (using Knowledge, Possession, or Inherence factors).
2. **Authorization ("What are you allowed to do?")**: Determining what permissions you have.
3. **Accounting / Auditing ("What did you do?")**: Tracking and recording actions performed by the user.

---

## ZK-007: Non-repudiation
**Tags**: `#non-repudiation` `#accounting` `#auditing`
**Related**: [[ZK-006: The AAA Framework]]

**Note**: 
Achieved through the Accounting phase of the AAA framework. Non-repudiation ensures that a user cannot successfully deny having performed an action because the system logs provide irrefutable proof.

---

## ZK-008: Least Privilege vs. Need-to-Know
**Tags**: `#least-privilege` `#need-to-know` `#access-control`
**Related**: [[ZK-006: The AAA Framework]]

**Note**: 
While similar, these represent two distinct access control principles:
- **Least Privilege**: Users are given the absolute minimum permissions/rights required to perform their job functions.
- **Need-to-Know**: Even if a user has the appropriate overarching clearance level, they are not granted access to specific data unless it is directly required for their *current task*.

---

## ZK-009: Separation of Duties
**Tags**: `#separation-of-duties` `#fraud-prevention`
**Related**: [[ZK-008: Least Privilege vs. Need-to-Know]]

**Note**: 
A fundamental security principle where highly sensitive tasks are split between two or more individuals to prevent fraud and errors. (e.g., one person requests a check, a different person signs it).

---

## ZK-010: Defense in Depth
**Tags**: `#defense-in-depth` `#layered-security`
**Related**: [[ZK-004: Security Countermeasures]]

**Note**: 
The practice of using multiple layered security mechanisms. If an attacker bypasses one layer (like a perimeter firewall), subsequent internal layers (like host-based antivirus) are in place to thwart the attack.

---

## ZK-011: Foundational Security Principles
**Tags**: `#security-principles` `#fail-safe` `#security-by-design` `#complete-mediation` `#economy-of-mechanism` `#open-design`
**Related**: [[ZK-010: Defense in Depth]]

**Note**: 
Core tenets of building secure system architectures:
- **Fail Safe (Security by Default)**: Systems should default to a locked/secure state upon failure or crash.
- **Security by Design**: Security is built-in from inception (line 1 of code), not bolted on later.
- **Complete Mediation**: Every single access request to an object must be checked for authority.
- **Economy of Mechanism**: Keep systems and security designs simple and small to reduce the attack surface.
- **Open Design**: Security should not rely on obscurity. A system should remain secure even if its inner workings are publicly known (e.g., AES encryption).
