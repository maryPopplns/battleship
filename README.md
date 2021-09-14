<p align="center">
# BATTLESHIP
</p>

## LEARNED

- TDD approach to programming
- the importance of using pure functions within tests and how that can improve the modularity,easy of refactoring, and reduce bugs within code.
- how to use mock functions and spyons.
- got a better understanding of testing objects
  - incoming query messages - test the result
  - incoming command messages - test the public side effects
  - ignore internal messages and commands **_UNLESS ITS SAVES YOU TIME AND MONEY_**
  - ignore outgoing query messages
  - outgoing command messages - test if the other object recieved the command **_THIS REQUIRES MOCKS_**
