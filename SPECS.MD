# Specifications

* The app will load in preset concepts to be chosen from when building metaphors
  * [concept1, concept2, concept3]
  * return values
* The app will be able to generate a metaphor
  * Method triggered by app load or user feedback
  * "Politics is like a game"
    * App will query Datamuse for like words (hyper/hyponyms) to seeded concept
      * Entry method for building metaphor will trigger this
      * Return hyper/hyponyms
    * Returned value for Datamuse will be used in conjunction with RiTa API to construct a new metaphor
      * Successful promise resolution from Datamuse query
      * New metaphor will be returned "War is like conflict"
* The user will be presented with two related metaphors
  * Page load
  * Two metaphors displayed to screen
* User will be able to choose between the two metaphors presented as to which one is preferable to the user
  * Selection clicked
  * The two current strings, as well as the one selected stored to database in session generated from page load
* Once a threshold has been reached for a metaphor being selected repeatedly, the string will be stored to a "hall of fame" and replaced with a new metaphor based on a new concept
  * Metaphor has been selected as the preferred choice X times
  * Stored to hall of fame "table" to be displayed on separate view


# Models

Concept:
{
  concept: string
}

Metaphor:
{
  originatingConcept: Concept,
  conceptLinkage: string,
  relatedConcept: Concept
}

SessionInstance:
  {
    a: Metaphor,
    b: Metaphor,
    selectedMetaphor: a || b
  }

Session:
  {
    sessions: SessionInstance[]
  }

HallOfFameItem:
{
  winningMetaphor: Metaphor,
  session: Session
}
