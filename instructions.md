# Instructions

## Omnichain Wars Interface: Road To Web3 version

Inspiration: [LayerZero website](https://layerzero.network/)

The main purpose of the Omni Wars Interface is to provide a robust platform for minting and managing armies in the game.

The general design of the dapp should be dark-mode first, completed in monochrome tones with appropriate colors being used for highlighting different blockchains and factions.

General:
* User should stay logged-in as long as the browser session is active.

Screens:
* Starting screen: Omniverse DAO logo and Login with Metamask Button.
* Dashboard: if the user has no Omni army yet, they should be prompted with minting the initial army on the network of their choice (default Polygon). If a user already has an army, it should be displayed with each unit and hero being a separate "card" on the screen. Users also should be able to mint an additional starting army (excluding a hero) to their account from this screen for a 0.1 ETH/MATIC/AVAX/BNB fee.
* Combat: currently supports attack mode only, user's army is being displayed in a simplified fashion with all attack points pre-calculated. On this screen users should be able to select an id and network of the hostile army that they want to attack. After initiating the combat, the pop up screen would appear with the results of the combat: how much experience has the hero received and how many troops have been lost.

Miscellaneous:
* favicon.ico should be changed to omniversedao.ico, an .ico version of the omniverse DAO logo