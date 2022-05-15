# DiscordQuotes
Bring back the quotes we all miss so much.

## What is it?
DiscordQuotes is a patch for the Discord updater that adds back the silly quotes that it used to have. (Why did they remove it? D:)
It is compatible with Windows, macOS and Linux. It is also compatible with BetterDiscord. (I'm not sure about PowerCord, though.)

## Is it secure to use?
Like any other Discord mod such as BetterDiscord or PowerCord, this breaks TOS and could get your account terminated when reported to Discord Support. Neither I or any contributor assume any kind of responsibility for any damage caused to your Discord account upon usage.
If you want to be absolutely safe, you shouldn't mod the client at all.

## Okay, but how do I actually install this?
DiscordQuotes has no installer. You'll need to manually put the files in place. Here's what you need to do:

- **Locate your Discord install and enter the resources folder.**
On Windows, you can find your Discord install resources in `%LocalAppdata%/Discord/app-*.*.****/resources`.
On macOS, you can usually find your Discord install resources in `~/Applications/Discord.app/Contents/resources`.
(TODO: Linux install path?)

- **Extract the zip file in the `app` folder.**
**If you have BetterDiscord installed,** the `app` folder should already exist. Open the `index.js` file and copy the path in the `require` statement. Now unzip DiscordQuotes in that folder, it's okay to override the existing files. Now open the config file, and change `asarPath` to the path you just copied. All done, DiscordQuotes is now installed!

	**If you DON'T have BetterDiscord installed,** you will need to create this folder yourself. Once you've done that, you're done! DiscordQuotes is now installed.
