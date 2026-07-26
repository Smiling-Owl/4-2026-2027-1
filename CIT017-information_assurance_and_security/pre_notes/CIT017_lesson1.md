Information Assurance and Security: Foundations

1. The McCumber Cube

The McCumber Cube is a 3D framework used to evaluate the security of an information system by looking at the interaction between three dimensions:

Information States (What is the data doing?):

Transmission (Data in Motion): Data traveling over a network (e.g., an email being sent).

Storage (Data at Rest): Data sitting on a hard drive or database.

Processing (Data in Use): Data currently being updated or calculated in RAM.

Security Goals (The CIA Triad):

Confidentiality: Protecting against unauthorized disclosure.

Integrity: Protecting against unauthorized modification.

Availability: Ensuring timely and reliable access.

Countermeasures (How do we protect it?):

Technology: Hardware/Software (Firewalls, Encryption).

People: Awareness, training, and ethics.

Policies & Practices: Standard Operating Procedures (SOPs), laws, and rules.

2. Foundations of Information Security (Functional Controls)

How do we practically apply security?

Prevention: Stopping the attack before it happens (e.g., your "bag" example—keeping the asset physically locked away).

Detection: Identifying that an attack is happening or has happened (e.g., "double-checking" logs or motion sensors).

Mitigation (Response): Limiting the damage once an incident is detected (e.g., "reporting" the loss or isolating a virus).

3. The AAA Framework

The sequence of events when a user interacts with a system:

Authentication: "Who are you?" (Proving identity).

Factors: Knowledge (Password), Possession (OTP/Token), Inherence (Biometrics).

Authorization: "What are you allowed to do?" (Permissions).

Example: A student can view their profile but cannot edit the grade database.

Accounting (Auditing): "What did you do?" (Tracking).

Ensures Non-repudiation: A user cannot deny they performed an action because the logs prove it.

4. Key Security Principles

Least Privilege: Give users only the minimum permissions necessary to do their job.

Need-to-Know: Even if you have the clearance, you shouldn't see data unless it is required for your current task.

Separation of Duties: Splitting a sensitive task between two people to prevent fraud (e.g., one person requests a check, another signs it).

Defense in Depth: Layered security. If the firewall fails, the host-based antivirus should catch it.

Fail Safe (Security by Default): If a system crashes, it should fail into a "locked" state, not an "open" state.

Security by Design: Security is integrated into the software from the very first line of code, not added as an afterthought.

Principle of Complete Mediation: Every access to every object must be checked for authority. No "shortcuts" after the first login.

Economy of Mechanism: Keep the security design as simple and small as possible to reduce the "attack surface" (fewer things to break).

Open Design: Security should not rely on the secrecy of the design (Security through Obscurity is bad). The system should be secure even if the attacker knows how it works (e.g., AES encryption).