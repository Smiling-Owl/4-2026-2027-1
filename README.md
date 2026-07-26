# glhf
last year of notes

## 1. Directory Architecture
please read

### 1.1 `materials/`
* **Function:** Serves as the primary repository for all unprocessed, source-level academic inputs.
* **Usage:** This directory is designated for the storage of lecture slides, textbook excerpts in PDF format, syllabi, and supplemental handouts. Files within this directory act as the immutable source of truth and should remain unedited.

### 1.2 `pre_notes/`
* **Function:** Facilitates the initial capture of unstructured data during real-time academic engagements.
* **Usage:** Preliminary, unrefined notes transcribed during live lectures, seminars, or initial readings are housed here. The objective of this phase is rapid information capture rather than structural formatting.

### 1.3 `synthesized_notes/`
* **Function:** Functions as the core knowledge repository, wherein preliminary data is refined into structured pedagogical assets to enhance comprehension and review.
* **Sub-directories:**
  * **`cornell/`:** Contains high-level, macro-summaries structured according to the Cornell Note-Taking System (organized by Cues/Keywords, Notes, and Summaries). This format is optimal for comprehensive, top-down reviews prior to examinations.
    * **`pdf/`:** Houses automatically generated, print-ready Portable Document Format (PDF) versions of the Cornell notes to facilitate offline reading and physical annotation.
  * **`zettelkasten/`:** Contains highly modular, interconnected markdown files. Each file is strictly atomic, focusing on a singular concept or theorem, thereby enabling bottom-up conceptual linking across disparate subjects.

### 1.4 `anki_cloze/`
* **Function:** Operates as the active recall and spaced repetition testing apparatus.
* **Usage:** This directory contains plaintext (`.txt`) files meticulously formatted for Anki Cloze Deletion. These files are designed for direct importation into the Anki software environment to facilitate rigorous, daily cognitive reinforcement.

