# **Interlinear Bible Simple Editor**
This is an *Interlinear Bible Simple Editor* (**IBSE**) that's created for easier
translation of the Interlinear Bible format described
[here](https://github.com/benihyangbaik/aist/blob/main/README.en.md#cheap-to-compute).

## **Technology**
Because of the urgent need of this application, it is made to be simple. It
also needs to be portable. So the web technologies (React library for the
functionality and interface and TypeScript for easier debugging) and Electron
as the wrapper for desktop GUIs are used. The fonts used are [SBL
Biblit](https://www.sbl-site.org/educational/BiblicalFonts_SBLBibLit.aspx).


## **Functionality**
Because of the urgent need of this application, so the functionality will be
added gradually.

_Phase I_ (**OK**)
1. Input the equivalent of every word of the original language.
2. Save and load the JSON file from certain directory.
3. Automatically save every verse, chapter, and Bible book move.

_Phase II_
1. Display one chapter to translate.
2. Change the font size.
3. Detail for the root and family of a Strongs data.


## **Usage**
Simply go to [our site](https://ibse.benihyangbaik.com), load [Open Scripture's
Hebrew
Bible](https://github.com/benihyangbaik/interlinear-bible-simple-editor/blob/main/data/morphhb.json)
or [the Byzantine Majority Text by
Robinson-Pierpoint](https://github.com/benihyangbaik/interlinear-bible-simple-editor/blob/main/data/byzmt.json)
and start editing! Every edit is saved on verse change and persists as a React
context.

You can also download the repo and run,
```bash
yarn install
yarn start
```
OR
```bash
npm install
npm start
```
to run it on your desktop temporarily.

Also run `yarn make` or `npm make` to compile the installer and go to the
`./out/make/{your-os}` directory and install using the provided installer
there.

We will release the installer in a couple of weeks, so desktop usage wouldn't
need you to compile from source!


## **Development**
Run the same commands as for running the application on your desktop
temporarily. Start modifying the source, save them, and you'll see the
application updated automatically.


## **Improvements**
List of things to be improved.
1. Add documentation as a comment for every function and components.
