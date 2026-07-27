# Reflection on Information Assurance and Security: Foundations

## The McCumber Cube
The McCumber Cube models security as a 3D matrix. Evaluating the intersections between data states (transmission, storage, processing) and the CIA Triad (confidentiality, integrity, availability) shows why single countermeasures usually fail. Securing data on a hard drive takes different tools than securing data in RAM or data crossing a network.

Technology often gets the most attention, but the cube gives equal weight to people and policies. A firewall cannot protect a system if an employee gives away their password because nobody trained them. If an organization ignores one intersection in the cube, attackers will find the resulting blind spot.

## Foundations of Information Security
The functional controls (prevention, detection, and mitigation) offer a practical approach to security. Most organizations spend heavily on prevention to keep attackers out. However, prevention eventually fails. When an exploit or an insider gets past the first defenses, detection is the only thing stopping a small incident from becoming a major disaster. Without logs or sensors, attackers can stay in a system unnoticed for months.

After an attack is detected, mitigation limits the damage. Isolating a server or cutting a network connection contains the blast radius. This cycle assumes that perfectly secure systems do not exist. Survival depends on finding and containing breaches quickly.

## The AAA Framework
The AAA framework structures access and creates accountability. Authentication proves identity through knowledge (a password), possession (a token), or inherence (a biometric scan). Most systems now require multi-factor combinations because single factors are too easy to steal.

Once a system knows who the user is, authorization defines what they can touch. Poor authorization allows an attacker with a low-level account to reach sensitive databases. Finally, accounting tracks everything the user does. System logs create an audit trail that guarantees non-repudiation. An employee cannot deny deleting a file if the logs prove their account did it. Without accounting, investigating a breach relies on guesswork.

## Key Security Principles
The core security principles minimize trust and reduce complexity. Least privilege and need-to-know assume that any account might be compromised. They grant users only the permissions necessary for their current task. Separation of duties splits sensitive actions between multiple people to prevent fraud. Defense in depth assumes every control will eventually fail. If a firewall breaks, a host-based intrusion system catches the traffic.

When a system crashes or faces an attack, it must fail into a safe, locked state rather than staying open. Complete mediation requires the system to check permissions at every single interaction instead of trusting an initial login indefinitely. The economy of mechanism principle warns that complex code creates hidden vulnerabilities, so security designs should stay simple. Finally, open design rejects security through obscurity. A system should stay secure even if everyone knows how it works, relying on public cryptography where only the key is secret.
