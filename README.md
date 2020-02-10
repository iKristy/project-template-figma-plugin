# Netlify Project Template: Figma Plugin

This is a Figma plugin that automatically creates appropriate pages and a project cover to quickly get you started. 

## How to use

Please keep in mind that this was written by someone who has no idea what he's doing, and remember that you can always undo after running the plugin... just in case.

1. In the menu bar, go to [`Plugins → Development → Netlify Project Template`](/screenshots/screenshot-4.png?raw=true).
2. [Type in the name of the project, project URL, and select the state of development](/screenshots/screenshot-5.png?raw=true). Hit `Create`.
3. `Create` will create all the necessary pages and titles, remember that if you run that command on an existing file it will keep all the existing pages as well. 
4. Alternatively, and if you'd like to just update the cover page, hit the `Update` button instead, and this will take the state of development dropdown and update the cover with any new information.

## How to install

At the moment, this plugin is definitely not ready for prime time and to be published in the public Figma Plugin directory, so we have to install it manually. Here's how:

1. Open the Terminal, navigate to whatever directory you want, and clone this repo: `git clone git@github.com:netlify/netlify-project-template-figma-plugin.git`
2. Open Figma's Desktop app, click [*Plugins* → *Create your own plugin*.](/screenshots/screenshot-1.png?raw=true)
3. [Click to choose a manifest.json file](/screenshots/screenshot-2.png?raw=true).
4. [Navigate to where you cloned this repo in step 1, and select `manifest.json`.](/screenshots/screenshot-3.png?raw=true)

## Help

I'm sure this is buggy as The Bug's Life, if you find one, please open an issue here on this repo and Rafa will look at it 🙏